import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

import watermarkImg from '../assets/watermark.png';
import profileImg from '../assets/fayaz-profile.jpg';

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.16,
      delayChildren: 0.2,
    },
  },
};

const fadeUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
    filter: 'blur(6px)',
  },

  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 1.1,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const navItems = [
  { name: 'ABOUT', href: '#about' },
  { name: 'PROJECTS', href: '#work' },
  { name: 'SKILLS', href: '#skills' },
  { name: 'EXPERIENCE', href: '#experience' },
  { name: 'CONTACT', href: '#contact' },
];

export const HeroSection: React.FC = () => {
  const [cursorPos, setCursorPos] = useState({
    x: -100,
    y: -100,
  });

  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section
      className="
        relative
        w-screen
        min-h-screen
        overflow-hidden
        bg-black
        text-[#E8DFD8]
        font-sans
        selection:bg-[#cbb59d]
        selection:text-black
        cursor-none
      "
    >
      {/* =========================================================
          1. CUSTOM CURSOR
      ========================================================= */}

      {cursorPos.x >= 0 && (
        <motion.div
          className="
            fixed
            top-0
            left-0
            pointer-events-none
            z-[100]
            rounded-full
            border
            border-[#D4AF37]/40
            flex
            items-center
            justify-center
            backdrop-blur-[1px]
          "
          animate={{
            x: cursorPos.x - (isHovered ? 24 : 5),
            y: cursorPos.y - (isHovered ? 24 : 5),
            width: isHovered ? 48 : 10,
            height: isHovered ? 48 : 10,
            backgroundColor: isHovered
              ? 'rgba(212, 175, 55, 0.1)'
              : 'rgba(235, 215, 195, 0.95)',
          }}
          transition={{
            type: 'spring',
            damping: 30,
            stiffness: 350,
            mass: 0.5,
          }}
        />
      )}

      {/* =========================================================
          2. COMPLETE PROFILE IMAGE
          
          IMPORTANT:
          object-contain = COMPLETE IMAGE VISIBLE
          object-cover  = IMAGE GETS CROPPED
      ========================================================= */}

      <div
        className="
          fixed
          inset-0
          z-0
          overflow-hidden
          pointer-events-none
          bg-black
          flex
          items-center
          justify-center
        "
      >
        {/* Background blur version */}

        <img
          src={profileImg}
          alt=""
          aria-hidden="true"
          className="
            absolute
            inset-0
            w-full
            h-full
            object-cover
            scale-110
            blur-[35px]
            opacity-30
          "
        />

        {/* Dark background */}

        <div
          className="
            absolute
            inset-0
            bg-black/45
          "
        />

        {/* =====================================================
            MAIN IMAGE

            THIS IS THE IMPORTANT PART

            w-auto
            h-auto
            max-w-full
            max-h-full
            object-contain

            This keeps the entire photo visible.
        ===================================================== */}

        <img
          src={profileImg}
          alt="Fayaz - Full Stack Developer"
          className="
            relative
            z-[1]
            w-auto
            h-auto
            max-w-full
            max-h-full
            object-contain
            object-center
            brightness-[0.82]
            contrast-[1.05]
            saturate-[0.92]
            drop-shadow-[0_0_40px_rgba(0,0,0,0.5)]
          "
        />

        {/* =====================================================
            LEFT DARK GRADIENT
        ===================================================== */}

        <div
          className="
            absolute
            inset-y-0
            left-0
            z-[2]
            w-full
            md:w-[72%]
            bg-gradient-to-r
            from-black
            via-black/80
            to-transparent
          "
        />

        {/* =====================================================
            OVERALL LIGHT DARKEN
        ===================================================== */}

        <div
          className="
            absolute
            inset-0
            z-[2]
            bg-black/10
          "
        />

        {/* =====================================================
            BOTTOM CINEMATIC GRADIENT
        ===================================================== */}

        <div
          className="
            absolute
            inset-x-0
            bottom-0
            z-[2]
            h-[45%]
            bg-gradient-to-t
            from-black
            via-black/50
            to-transparent
          "
        />

        {/* =====================================================
            RIGHT SUBTLE GRADIENT
        ===================================================== */}

        <div
          className="
            absolute
            inset-y-0
            right-0
            z-[2]
            w-[30%]
            bg-gradient-to-l
            from-black/30
            to-transparent
          "
        />

        {/* =====================================================
            GOLD AMBIENT GLOW
        ===================================================== */}

        <motion.div
          animate={{
            opacity: [0.04, 0.09, 0.04],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="
            absolute
            right-[5%]
            top-[15%]
            z-[3]
            w-[30rem]
            h-[30rem]
            rounded-full
            bg-[#D4AF37]
            blur-[180px]
          "
        />

        {/* =====================================================
            WATERMARK
        ===================================================== */}

        <div
          className="
            absolute
            bottom-6
            right-6
            lg:bottom-10
            lg:right-12
            pointer-events-none
            flex
            items-center
            justify-center
            z-10
          "
        >
          <div className="relative flex items-center justify-center">
            <div
              className="
                absolute
                w-36
                h-36
                bg-black/85
                rounded-full
                blur-xl
              "
            />

            <motion.div
              animate={{
                y: [-3, 3, -3],
                scale: [1, 1.03, 1],
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="
                relative
                flex
                items-center
                justify-center
              "
            >
              <img
                src={watermarkImg}
                alt="Fayaz insignia"
                className="
                  w-28
                  h-28
                  lg:w-32
                  lg:h-32
                  object-contain
                  drop-shadow-[0_0_15px_rgba(212,175,55,0.25)]
                "
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* =========================================================
          3. CONTENT LAYER
      ========================================================= */}

      <div
        className="
          relative
          z-10
          flex
          flex-col
          justify-between
          min-h-screen
          w-full
          px-6
          sm:px-12
          lg:px-16
          pt-6
          pb-8
          pointer-events-none
        "
      >
        {/* =====================================================
            NAVIGATION
        ===================================================== */}

        <header
          className="
            relative
            flex
            items-center
            justify-between
            w-full
            pointer-events-auto
          "
        >
          {/* Logo */}

          <a
            href="#"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="
              text-xs
              sm:text-sm
              font-semibold
              tracking-[0.35em]
              uppercase
              text-[#EAD8C7]
              hover:text-[#D4AF37]
              transition-colors
              duration-300
            "
            style={{
              fontFamily: "'Montserrat', sans-serif",
            }}
          >
            FAYAZ.
          </a>

          {/* Navigation */}

          <nav
            className="
              hidden
              md:flex
              items-center
              space-x-8
              lg:space-x-10
              text-[11px]
              tracking-[0.28em]
              font-light
              uppercase
              text-[#C4B5A5]
              absolute
              left-1/2
              -translate-x-1/2
            "
            style={{
              fontFamily: "'Montserrat', sans-serif",
            }}
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="
                  relative
                  group
                  py-1
                  transition-colors
                  duration-300
                  hover:text-[#FFF5EB]
                "
              >
                {item.name}

                <span
                  className="
                    absolute
                    bottom-0
                    left-0
                    w-0
                    h-[1px]
                    bg-[#D4AF37]/70
                    transition-all
                    duration-300
                    group-hover:w-full
                  "
                />
              </a>
            ))}
          </nav>

          {/* ===================================================
              GITHUB
          =================================================== */}

          <a
            href="https://github.com/shaik007fayaz"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="
              group
              flex
              items-center
              space-x-2
              text-[11px]
              tracking-[0.24em]
              font-light
              uppercase
              py-2
              px-4
              border
              border-[#8C6D4F]/50
              hover:border-[#D4AF37]
              text-[#EAD8C7]
              hover:text-[#FFF5EB]
              transition-all
              duration-300
              backdrop-blur-sm
              ml-auto
              md:ml-0
            "
            style={{
              fontFamily: "'Montserrat', sans-serif",
            }}
          >
            <span>GITHUB</span>

            <span
              className="
                text-xs
                transform
                transition-transform
                duration-300
                group-hover:translate-x-0.5
                group-hover:-translate-y-0.5
              "
            >
              ↗
            </span>
          </a>
        </header>

        {/* =========================================================
            MAIN HERO
        ========================================================= */}

        <div
          className="
            relative
            flex
            flex-col
            md:flex-row
            items-center
            justify-between
            w-full
            pt-4
            pb-2
            my-auto
          "
        >
          {/* ===================================================
              LEFT CONTENT
          =================================================== */}

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="
              max-w-sm
              sm:max-w-md
              md:max-w-lg
              lg:max-w-[37rem]
              xl:max-w-[40rem]
              pointer-events-auto
              z-20
            "
          >
            {/* =================================================
                HEADLINE
            ================================================= */}

            <motion.div
              variants={fadeUpVariants}
              className="
                relative
                mb-3.5
                select-none
              "
            >
              <h1
                className="
                  text-6xl
                  sm:text-7xl
                  md:text-8xl
                  lg:text-[7.2rem]
                  xl:text-[7.8rem]
                  tracking-tight
                  uppercase
                  leading-[0.83]
                "
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                }}
              >
                <span
                  className="
                    block
                    text-transparent
                    bg-clip-text
                    bg-gradient-to-b
                    from-[#FFFFFF]
                    via-[#D5CBC0]
                    to-[#605448]
                    drop-shadow-[0_4px_12px_rgba(0,0,0,0.85)]
                  "
                >
                  I BUILD
                </span>

                <span
                  className="
                    block
                    text-transparent
                    bg-clip-text
                    bg-gradient-to-b
                    from-[#F7E7C4]
                    via-[#C99E5D]
                    to-[#543B1A]
                    drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]
                  "
                >
                  DIGITAL
                </span>

                <span
                  className="
                    block
                    text-transparent
                    bg-clip-text
                    bg-gradient-to-b
                    from-[#DFBE8A]
                    via-[#9B7640]
                    to-[#342410]
                    drop-shadow-[0_10px_30px_rgba(155,118,64,0.4)]
                  "
                >
                  EXPERIENCES
                </span>
              </h1>
            </motion.div>

            {/* =================================================
                PROFESSIONAL TITLE
            ================================================= */}

            <motion.div
              variants={fadeUpVariants}
              className="mb-4"
            >
              <p
                className="
                  text-[10px]
                  sm:text-[11px]
                  md:text-xs
                  font-normal
                  tracking-[0.28em]
                  uppercase
                  text-[#C4B29E]
                "
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                }}
              >
                .NET FULL STACK DEVELOPER

                <span className="text-[#8C6D4F] mx-2">
                  •
                </span>

                REACT.JS

                <span className="text-[#8C6D4F] mx-2">
                  •
                </span>

                CLOUD & DEVOPS
              </p>
            </motion.div>

            {/* =================================================
                DESCRIPTION
            ================================================= */}

            <motion.div
              variants={fadeUpVariants}
              className="
                text-xs
                sm:text-sm
                md:text-[13.5px]
                font-light
                text-[#A8988B]
                leading-[1.8]
                tracking-wide
                max-w-lg
                mb-6
              "
              style={{
                fontFamily: "'Montserrat', sans-serif",
              }}
            >
              <p>
                I build scalable web applications and powerful
                backend services.
              </p>

              <p>
                Where React meets .NET, APIs connect ideas, and
                code transforms vision into impact.
              </p>
            </motion.div>

            {/* =================================================
                CTA BUTTONS
            ================================================= */}

            <motion.div
              variants={fadeUpVariants}
              className="
                flex
                flex-row
                items-center
                gap-4
                sm:gap-6
              "
              style={{
                fontFamily: "'Montserrat', sans-serif",
              }}
            >
              {/* Explore My Work */}

              <motion.a
                href="#work"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                whileHover={{
                  scale: 1.02,
                }}
                className="
                  group
                  relative
                  inline-flex
                  items-center
                  space-x-3
                  px-6
                  sm:px-7
                  py-3.5
                  border
                  border-[#8C6D4F]
                  bg-[#120F0C]/80
                  hover:border-[#D4AF37]
                  text-[#EAD8C7]
                  hover:text-[#FFF5EB]
                  text-[11px]
                  font-medium
                  tracking-[0.24em]
                  uppercase
                  transition-all
                  duration-300
                  shadow-[0_0_25px_rgba(212,175,55,0.18)]
                "
              >
                <span>
                  EXPLORE MY WORK
                </span>

                <span
                  className="
                    text-xs
                    transition-transform
                    duration-300
                    group-hover:translate-x-0.5
                    group-hover:-translate-y-0.5
                  "
                >
                  ↗
                </span>
              </motion.a>

              {/* =================================================
                  DOWNLOAD RESUME
              ================================================= */}

              <motion.a
                href={`${import.meta.env.BASE_URL}resume.pdf`}
                download="Shaik-Mohammad-Fayaz-Resume.pdf"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                whileHover={{
                  scale: 1.02,
                }}
                className="
                  group
                  relative
                  inline-flex
                  items-center
                  space-x-2
                  px-6
                  sm:px-7
                  py-3.5
                  border
                  border-[#8C6D4F]/50
                  hover:border-[#D4AF37]
                  bg-[#120F0C]/50
                  hover:bg-[#D4AF37]/10
                  text-[#BFA895]
                  hover:text-[#EAD8C7]
                  text-[11px]
                  font-medium
                  tracking-[0.24em]
                  uppercase
                  transition-all
                  duration-300
                "
              >
                <span>
                  DOWNLOAD RESUME
                </span>

                <span
                  className="
                    text-xs
                    transition-transform
                    duration-300
                    group-hover:translate-y-0.5
                  "
                >
                  ↓
                </span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* ===================================================
              RIGHT QUOTE / SIGNATURE
          =================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 20,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: 0.8,
              duration: 1.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              hidden
              lg:flex
              flex-col
              items-start
              pointer-events-auto
              pr-24
              xl:pr-36
              mr-4
              z-20
              select-none
            "
          >
            <span
              className="
                text-xl
                text-[#C99E5D]
                leading-none
                font-serif
                mb-2
              "
            >
              “
            </span>

            <div
              className="
                text-[9.5px]
                font-medium
                tracking-[0.24em]
                uppercase
                text-[#E0D3C5]
                space-y-1
                mb-3
              "
              style={{
                fontFamily: "'Montserrat', sans-serif",
              }}
            >
              <p>
                CODE IS MY CRAFT.
              </p>

              <p>
                IMPACT IS MY GOAL.
              </p>
            </div>

            <div
              className="
                w-28
                h-[1px]
                bg-gradient-to-r
                from-[#D4AF37]
                via-[#E8D7C5]/70
                to-transparent
                shadow-[0_0_8px_rgba(212,175,55,0.4)]
                mb-2
              "
            />

            <div
              className="
                text-[2.2rem]
                text-[#D8AB64]
                font-normal
                leading-none
                -ml-0.5
              "
              style={{
                fontFamily:
                  "'Herr Von Muellerhoff', 'Allura', cursive",
                letterSpacing: '0.04em',
              }}
            >
              Fayaz
            </div>
          </motion.div>
        </div>

        {/* Bottom Spacer */}

        <div className="h-2" />
      </div>
    </section>
  );
};

export default HeroSection;