import React, {
  useLayoutEffect,
  useRef,
  useCallback,
} from 'react';
import Lenis from 'lenis';
import './ScrollStack.css';

export interface ScrollStackItemProps {
  children: React.ReactNode;
  itemClassName?: string;
}

export const ScrollStackItem: React.FC<ScrollStackItemProps> = ({
  children,
  itemClassName = '',
}) => {
  return (
    <div className={`scroll-stack-card ${itemClassName}`.trim()}>
      {children}
    </div>
  );
};

export interface ScrollStackProps {
  children: React.ReactNode;
  className?: string;

  /**
   * Distance between cards before stacking begins.
   */
  itemDistance?: number;

  /**
   * Scale difference between stacked cards.
   */
  itemScale?: number;

  /**
   * Vertical distance between stacked cards.
   */
  itemStackDistance?: number;

  /**
   * Position where the card starts stacking.
   * Example: '15%' or 120
   */
  stackPosition?: string | number;

  /**
   * Position where card scaling finishes.
   * Example: '8%' or 80
   */
  scaleEndPosition?: string | number;

  /**
   * Base scale of the card after stacking.
   */
  baseScale?: number;

  /**
   * Rotation applied while cards stack.
   */
  rotationAmount?: number;

  /**
   * Blur amount applied to cards behind the active card.
   */
  blurAmount?: number;

  /**
   * Use browser window scroll instead of internal scrolling.
   */
  useWindowScroll?: boolean;

  /**
   * Called when the stack reaches its completed state.
   */
  onStackComplete?: () => void;
}

interface CardTransform {
  translateY: number;
  scale: number;
  rotation: number;
  blur: number;
}

const ScrollStack: React.FC<ScrollStackProps> = ({
  children,
  className = '',

  itemDistance = 80,
  itemScale = 0.03,
  itemStackDistance = 32,

  stackPosition = '15%',
  scaleEndPosition = '8%',

  baseScale = 0.88,

  rotationAmount = 0,
  blurAmount = 0,

  useWindowScroll = true,

  onStackComplete,
}) => {
  const scrollerRef =
    useRef<HTMLDivElement | null>(null);

  const cardsRef =
    useRef<HTMLElement[]>([]);

  const initialTopsRef =
    useRef<number[]>([]);

  const animationFrameRef =
    useRef<number | null>(null);

  const lenisRef =
    useRef<Lenis | null>(null);

  const stackCompletedRef =
    useRef(false);

  const lastTransformsRef =
    useRef<Map<number, CardTransform>>(
      new Map()
    );

  const isUpdatingRef =
    useRef(false);

  /**
   * -------------------------------------------------------
   * Convert progress to 0 -> 1
   * -------------------------------------------------------
   */
  const calculateProgress =
    useCallback(
      (
        value: number,
        start: number,
        end: number
      ) => {
        if (end <= start) {
          return value >= end ? 1 : 0;
        }

        if (value <= start) {
          return 0;
        }

        if (value >= end) {
          return 1;
        }

        return (
          (value - start) /
          (end - start)
        );
      },
      []
    );

  /**
   * -------------------------------------------------------
   * Convert percentage / number to pixels
   * -------------------------------------------------------
   */
  const parsePosition =
    useCallback(
      (
        value: string | number,
        containerHeight: number
      ) => {
        if (
          typeof value === 'number'
        ) {
          return value;
        }

        if (
          value.includes('%')
        ) {
          const percentage =
            parseFloat(value);

          if (
            Number.isNaN(
              percentage
            )
          ) {
            return 0;
          }

          return (
            (percentage / 100) *
            containerHeight
          );
        }

        const parsed =
          parseFloat(value);

        return Number.isNaN(parsed)
          ? 0
          : parsed;
      },
      []
    );

  /**
   * -------------------------------------------------------
   * Get current scroll position
   * -------------------------------------------------------
   */
  const getScrollData =
    useCallback(() => {
      if (useWindowScroll) {
        return {
          scrollTop:
            window.scrollY,
          containerHeight:
            window.innerHeight,
        };
      }

      const scroller =
        scrollerRef.current;

      if (!scroller) {
        return {
          scrollTop: 0,
          containerHeight: 0,
        };
      }

      return {
        scrollTop:
          scroller.scrollTop,
        containerHeight:
          scroller.clientHeight,
      };
    }, [useWindowScroll]);

  /**
   * -------------------------------------------------------
   * Get element position relative
   * to the active scroll area
   * -------------------------------------------------------
   */
  const getScrollRelativeTop =
    useCallback(
      (element: HTMLElement) => {
        const rect =
          element.getBoundingClientRect();

        if (useWindowScroll) {
          return (
            rect.top +
            window.scrollY
          );
        }

        const scroller =
          scrollerRef.current;

        if (!scroller) {
          return rect.top;
        }

        const scrollerRect =
          scroller.getBoundingClientRect();

        return (
          rect.top -
          scrollerRect.top +
          scroller.scrollTop
        );
      },
      [useWindowScroll]
    );

  /**
   * -------------------------------------------------------
   * Measure all cards
   * -------------------------------------------------------
   */
  const measureCards =
    useCallback(() => {
      const scroller =
        scrollerRef.current;

      if (!scroller) {
        return;
      }

      const cards =
        Array.from(
          scroller.querySelectorAll(
            '.scroll-stack-card'
          )
        ) as HTMLElement[];

      cardsRef.current =
        cards;

      /**
       * Apply spacing before measuring.
       */
      cards.forEach(
        (card, index) => {
          card.style.marginBottom =
            index <
            cards.length - 1
              ? `${itemDistance}px`
              : '0px';

          card.style.zIndex =
            `${index + 1}`;

          card.style.willChange =
            'transform, filter';

          card.style.transformOrigin =
            'top center';

          card.style.backfaceVisibility =
            'hidden';

          card.style.perspective =
            '1000px';
        }
      );

      /**
       * Force layout calculation.
       */
      void scroller.offsetHeight;

      /**
       * Measure natural positions.
       */
      initialTopsRef.current =
        cards.map((card) =>
          getScrollRelativeTop(
            card
          )
        );

      lastTransformsRef.current.clear();
    }, [
      itemDistance,
      getScrollRelativeTop,
    ]);

  /**
   * -------------------------------------------------------
   * Update card transforms
   * -------------------------------------------------------
   */
  const updateCardTransforms =
    useCallback(() => {
      if (
        isUpdatingRef.current ||
        !cardsRef.current.length
      ) {
        return;
      }

      const scroller =
        scrollerRef.current;

      if (!scroller) {
        return;
      }

      isUpdatingRef.current =
        true;

      const {
        scrollTop,
        containerHeight,
      } = getScrollData();

      const stackPositionPx =
        parsePosition(
          stackPosition,
          containerHeight
        );

      const scaleEndPositionPx =
        parsePosition(
          scaleEndPosition,
          containerHeight
        );

      /**
       * Find only this component's
       * end marker.
       */
      const endElement =
        scroller.querySelector(
          '.scroll-stack-end'
        ) as HTMLElement | null;

      const endElementTop =
        endElement
          ? getScrollRelativeTop(
              endElement
            )
          : Number.MAX_SAFE_INTEGER;

      /**
       * ---------------------------------------------------
       * Find active/top card
       * ---------------------------------------------------
       */
      let topCardIndex = 0;

      cardsRef.current.forEach(
        (_, index) => {
          const cardTop =
            initialTopsRef.current[
              index
            ] ?? 0;

          const triggerStart =
            cardTop -
            stackPositionPx -
            itemStackDistance *
              index;

          if (
            scrollTop >=
            triggerStart
          ) {
            topCardIndex =
              index;
          }
        }
      );

      /**
       * ---------------------------------------------------
       * Update every card
       * ---------------------------------------------------
       */
      cardsRef.current.forEach(
        (card, index) => {
          if (!card) {
            return;
          }

          const cardTop =
            initialTopsRef.current[
              index
            ] ?? 0;

          /**
           * Start stacking.
           */
          const triggerStart =
            cardTop -
            stackPositionPx -
            itemStackDistance *
              index;

          /**
           * Finish scaling.
           */
          const triggerEnd =
            cardTop -
            scaleEndPositionPx;

          /**
           * Scale progress.
           */
          const scaleProgress =
            calculateProgress(
              scrollTop,
              triggerStart,
              triggerEnd
            );

          /**
           * Target scale.
           */
          const targetScale =
            Math.min(
              1,
              baseScale +
                index *
                  itemScale
            );

          const scale =
            1 -
            scaleProgress *
              (1 - targetScale);

          /**
           * Rotation.
           */
          const rotation =
            rotationAmount !== 0
              ? index *
                rotationAmount *
                scaleProgress
              : 0;

          /**
           * Blur.
           */
          let blur = 0;

          if (
            blurAmount > 0 &&
            index < topCardIndex
          ) {
            const depth =
              topCardIndex -
              index;

            blur =
              depth *
              blurAmount;
          }

          /**
           * Pinning range.
           */
          const pinStart =
            triggerStart;

          const pinEnd =
            endElementTop -
            containerHeight / 2;

          let translateY = 0;

          if (
            scrollTop >= pinStart
          ) {
            if (
              scrollTop <= pinEnd
            ) {
              translateY =
                scrollTop -
                cardTop +
                stackPositionPx +
                itemStackDistance *
                  index;
            } else {
              translateY =
                pinEnd -
                cardTop +
                stackPositionPx +
                itemStackDistance *
                  index;
            }
          }

          /**
           * Round values.
           */
          const newTransform: CardTransform =
            {
              translateY:
                Math.round(
                  translateY * 100
                ) / 100,

              scale:
                Math.round(
                  scale * 1000
                ) / 1000,

              rotation:
                Math.round(
                  rotation * 100
                ) / 100,

              blur:
                Math.round(
                  blur * 100
                ) / 100,
            };

          const previous =
            lastTransformsRef.current.get(
              index
            );

          const changed =
            !previous ||
            Math.abs(
              previous.translateY -
                newTransform.translateY
            ) > 0.1 ||
            Math.abs(
              previous.scale -
                newTransform.scale
            ) > 0.001 ||
            Math.abs(
              previous.rotation -
                newTransform.rotation
            ) > 0.1 ||
            Math.abs(
              previous.blur -
                newTransform.blur
            ) > 0.1;

          if (!changed) {
            return;
          }

          /**
           * Apply transform.
           */
          card.style.transform =
            `translate3d(0, ${newTransform.translateY}px, 0) ` +
            `scale(${newTransform.scale}) ` +
            `rotate(${newTransform.rotation}deg)`;

          /**
           * Apply blur.
           */
          card.style.filter =
            newTransform.blur > 0
              ? `blur(${newTransform.blur}px)`
              : 'none';

          /**
           * No CSS transition here.
           *
           * Lenis handles smooth scrolling.
           */
          card.style.transition =
            'none';

          lastTransformsRef.current.set(
            index,
            newTransform
          );
        }
      );

      /**
       * ---------------------------------------------------
       * Stack completion
       * ---------------------------------------------------
       */
      const lastIndex =
        cardsRef.current.length - 1;

      if (lastIndex >= 0) {
        const lastCardTop =
          initialTopsRef.current[
            lastIndex
          ] ?? 0;

        const lastPinStart =
          lastCardTop -
          stackPositionPx -
          itemStackDistance *
            lastIndex;

        const lastPinEnd =
          endElementTop -
          containerHeight / 2;

        const completed =
          scrollTop >=
            lastPinStart &&
          scrollTop <=
            lastPinEnd;

        if (
          completed &&
          !stackCompletedRef.current
        ) {
          stackCompletedRef.current =
            true;

          onStackComplete?.();
        }

        if (
          !completed &&
          stackCompletedRef.current
        ) {
          stackCompletedRef.current =
            false;
        }
      }

      isUpdatingRef.current =
        false;
    }, [
      stackPosition,
      scaleEndPosition,
      baseScale,
      itemScale,
      itemStackDistance,
      rotationAmount,
      blurAmount,
      getScrollData,
      getScrollRelativeTop,
      parsePosition,
      calculateProgress,
      onStackComplete,
    ]);

  /**
   * -------------------------------------------------------
   * Scroll handler
   * -------------------------------------------------------
   */
  const handleScroll =
    useCallback(() => {
      updateCardTransforms();
    }, [
      updateCardTransforms,
    ]);

  /**
   * -------------------------------------------------------
   * Setup Lenis
   * -------------------------------------------------------
   */
  const setupLenis =
    useCallback(() => {
      const scroller =
        scrollerRef.current;

      if (!scroller) {
        return null;
      }

      const lenisOptions: any = {
        duration: 1.2,

        easing: (t: number) =>
          Math.min(
            1,
            1.001 -
              Math.pow(
                2,
                -10 * t
              )
          ),

        smoothWheel: true,

        wheelMultiplier: 1,

        touchMultiplier: 2,

        infinite: false,
      };

      /**
       * Internal scroll mode.
       */
      if (!useWindowScroll) {
        lenisOptions.wrapper =
          scroller;

        lenisOptions.content =
          scroller.querySelector(
            '.scroll-stack-inner'
          );
      }

      const lenis =
        new Lenis(
          lenisOptions
        );

      lenis.on(
        'scroll',
        handleScroll
      );

      lenisRef.current =
        lenis;

      const raf = (
        time: number
      ) => {
        lenis.raf(time);

        animationFrameRef.current =
          requestAnimationFrame(
            raf
          );
      };

      animationFrameRef.current =
        requestAnimationFrame(
          raf
        );

      return lenis;
    }, [
      useWindowScroll,
      handleScroll,
    ]);

  /**
   * -------------------------------------------------------
   * Initialize ScrollStack
   * -------------------------------------------------------
   */
  useLayoutEffect(() => {
    const scroller =
      scrollerRef.current;

    if (!scroller) {
      return;
    }

    stackCompletedRef.current =
      false;

    lastTransformsRef.current.clear();

    /**
     * Measure cards.
     */
    measureCards();

    /**
     * Start Lenis.
     */
    const lenis =
      setupLenis();

    /**
     * Initial update.
     */
    const initialFrame =
      requestAnimationFrame(
        () => {
          updateCardTransforms();
        }
      );

    /**
     * Resize handling.
     */
    const handleResize = () => {
      measureCards();

      requestAnimationFrame(
        () => {
          updateCardTransforms();
        }
      );
    };

    window.addEventListener(
      'resize',
      handleResize
    );

    /**
     * Cleanup.
     */
    return () => {
      window.removeEventListener(
        'resize',
        handleResize
      );

      cancelAnimationFrame(
        initialFrame
      );

      if (
        animationFrameRef.current !==
        null
      ) {
        cancelAnimationFrame(
          animationFrameRef.current
        );

        animationFrameRef.current =
          null;
      }

      if (lenis) {
        lenis.off(
          'scroll',
          handleScroll
        );

        lenis.destroy();
      }

      lenisRef.current =
        null;

      /**
       * Reset card styles.
       */
      cardsRef.current.forEach(
        (card) => {
          card.style.transform =
            '';

          card.style.filter =
            '';

          card.style.marginBottom =
            '';

          card.style.willChange =
            '';

          card.style.zIndex =
            '';

          card.style.transition =
            '';

          card.style.transformOrigin =
            '';

          card.style.backfaceVisibility =
            '';

          card.style.perspective =
            '';
        }
      );

      cardsRef.current = [];

      initialTopsRef.current = [];

      lastTransformsRef.current.clear();

      stackCompletedRef.current =
        false;

      isUpdatingRef.current =
        false;
    };
  }, [
    measureCards,
    setupLenis,
    updateCardTransforms,
    handleScroll,
  ]);

  return (
    <div
      ref={scrollerRef}
      className={`scroll-stack-scroller ${className}`.trim()}
      data-scroll-mode={
        useWindowScroll
          ? 'window'
          : 'internal'
      }
    >
      <div className="scroll-stack-inner">
        {children}

        <div className="scroll-stack-end" />
      </div>
    </div>
  );
};

export default ScrollStack;