
// src/components/ContactSection.tsx

import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <footer
      id="contact"
      className="
        relative
        w-full
        bg-black
        text-[#E8DFD8]
        font-sans
        selection:bg-[#cbb59d]
        selection:text-black
        pt-20
        pb-16
        px-6
        sm:px-12
        lg:px-20
        overflow-hidden
      "
    >

      {/* ==========================================================
          BACKGROUND GLOW
      ========================================================== */}

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="
          absolute
          top-1/4
          right-1/4
          w-[30rem]
          h-[30rem]
          bg-[#D4AF37]
          rounded-full
          blur-[180px]
          pointer-events-none
        "
      />

      <motion.div
        animate={{
          scale: [1.15, 1, 1.15],
          opacity: [0.03, 0.08, 0.03],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="
          absolute
          bottom-0
          left-1/4
          w-[25rem]
          h-[25rem]
          bg-[#8C6D4F]
          rounded-full
          blur-[160px]
          pointer-events-none
        "
      />

      <div className="max-w-7xl mx-auto w-full relative z-10">

        {/* ========================================================
            MAIN GRID
        ======================================================== */}

        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-12
            gap-12
            lg:gap-16
            items-start
          "
        >

          {/* ======================================================
              LEFT COLUMN
          ====================================================== */}

          <div
            className="
              lg:col-span-5
              flex
              flex-col
              justify-between
            "
          >

            {/* ====================================================
                HEADER
            ==================================================== */}

            <div>

              <motion.div
                initial={{
                  opacity: 0,
                  x: -20,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.8,
                }}
                className="
                  flex
                  items-center
                  space-x-4
                  mb-5
                "
              >

                <span
                  className="
                    text-[11px]
                    font-medium
                    tracking-[0.35em]
                    uppercase
                    text-[#D4AF37]
                  "
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                  }}
                >
                  05 / CONTACT
                </span>

                <div
                  className="
                    w-16
                    h-[1px]
                    bg-gradient-to-r
                    from-[#D4AF37]/80
                    via-[#8C6D4F]/40
                    to-transparent
                  "
                />

              </motion.div>

              {/* ==================================================
                  HEADLINE
              ================================================== */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.8,
                }}
                className="mb-8"
              >

                <h2
                  className="
                    text-5xl
                    sm:text-6xl
                    md:text-7xl
                    tracking-tight
                    uppercase
                    leading-[0.85]
                    select-none
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
                      drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]
                    "
                  >
                    LET'S BUILD
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
                    WHAT'S NEXT.
                  </span>

                </h2>

              </motion.div>

              {/* ==================================================
                  DESCRIPTION
              ================================================== */}

              <motion.p
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.1,
                }}
                className="
                  text-xs
                  sm:text-[13px]
                  font-light
                  text-[#A8988B]
                  leading-[1.8]
                  max-w-md
                  mb-8
                "
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                }}
              >
                Have a web application, product idea, or engineering
                challenge in mind? I'm always open to discussing
                interesting projects, full-stack development
                opportunities, and collaborations.
              </motion.p>

            </div>

            {/* ====================================================
                CONTACT INFORMATION
            ==================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.8,
                delay: 0.2,
              }}
              className="
                border-t
                border-[#8C6D4F]/25
                pt-6
                mt-4
              "
            >

              {/* EMAIL */}

              <a
                href="mailto:fayazsmd007@gmail.com"
                className="
                  group
                  flex
                  items-center
                  justify-between
                  py-3
                  border-b
                  border-[#8C6D4F]/15
                  hover:border-[#D4AF37]/40
                  transition-colors
                "
              >

                <div>
                  <span
                    className="
                      block
                      text-[9px]
                      tracking-[0.2em]
                      uppercase
                      text-[#8C6D4F]
                      mb-1
                    "
                  >
                    EMAIL
                  </span>

                  <span
                    className="
                      text-xs
                      sm:text-sm
                      text-[#D8CEC4]
                      group-hover:text-[#F3DBB3]
                      transition-colors
                    "
                  >
                    fayazsmd007@gmail.com
                  </span>
                </div>

                <span
                  className="
                    text-[#8C6D4F]
                    group-hover:text-[#D4AF37]
                    transition-colors
                  "
                >
                  ↗
                </span>

              </a>

              {/* PHONE */}

              <a
                href="tel:+919154534534"
                className="
                  group
                  flex
                  items-center
                  justify-between
                  py-3
                  border-b
                  border-[#8C6D4F]/15
                  hover:border-[#D4AF37]/40
                  transition-colors
                "
              >

                <div>
                  <span
                    className="
                      block
                      text-[9px]
                      tracking-[0.2em]
                      uppercase
                      text-[#8C6D4F]
                      mb-1
                    "
                  >
                    PHONE
                  </span>

                  <span
                    className="
                      text-xs
                      sm:text-sm
                      text-[#D8CEC4]
                      group-hover:text-[#F3DBB3]
                      transition-colors
                    "
                  >
                    +91 91545 34534
                  </span>
                </div>

                <span
                  className="
                    text-[#8C6D4F]
                    group-hover:text-[#D4AF37]
                    transition-colors
                  "
                >
                  ↗
                </span>

              </a>

              {/* LOCATION */}

              <div
                className="
                  flex
                  items-center
                  justify-between
                  py-3
                  border-b
                  border-[#8C6D4F]/15
                "
              >

                <div>
                  <span
                    className="
                      block
                      text-[9px]
                      tracking-[0.2em]
                      uppercase
                      text-[#8C6D4F]
                      mb-1
                    "
                  >
                    BASE
                  </span>

                  <span
                    className="
                      text-xs
                      sm:text-sm
                      text-[#D8CEC4]
                    "
                  >
                    Hyderabad, India
                  </span>
                </div>

                <span className="text-[#8C6D4F]">
                  ●
                </span>

              </div>

              {/* LINKEDIN */}

              <a
                href="https://www.linkedin.com/in/shaik-mohammad-fayaz-a82908204"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  flex
                  items-center
                  justify-between
                  py-3
                  hover:border-[#D4AF37]/40
                  transition-colors
                "
              >

                <div>
                  <span
                    className="
                      block
                      text-[9px]
                      tracking-[0.2em]
                      uppercase
                      text-[#8C6D4F]
                      mb-1
                    "
                  >
                    NETWORK
                  </span>

                  <span
                    className="
                      text-xs
                      sm:text-sm
                      text-[#D8CEC4]
                      group-hover:text-[#F3DBB3]
                      transition-colors
                    "
                  >
                    LinkedIn / Shaik Mohammad Fayaz
                  </span>
                </div>

                <span
                  className="
                    text-[#8C6D4F]
                    group-hover:text-[#D4AF37]
                    transition-colors
                  "
                >
                  ↗
                </span>

              </a>

            </motion.div>

          </div>

          {/* ======================================================
              RIGHT COLUMN — CONTACT FORM
          ====================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
            }}
            className="
              lg:col-span-7
              relative
              w-full
              rounded-sm
              border
              border-[#8C6D4F]/40
              bg-[#0A0806]
              p-8
              sm:p-10
              shadow-[0_20px_50px_rgba(0,0,0,0.9)]
              overflow-hidden
            "
          >

            {/* ==================================================
                TOP GOLD EDGE
            ================================================== */}

            <div
              className="
                absolute
                top-0
                left-0
                right-0
                h-[1px]
                bg-gradient-to-r
                from-transparent
                via-[#D4AF37]/70
                to-transparent
              "
            />

            {/* ==================================================
                CORNER CROSSHAIRS
            ================================================== */}

            <div
              className="
                absolute
                top-0
                left-0
                w-3
                h-3
                border-t
                border-l
                border-[#D4AF37]/60
              "
            />

            <div
              className="
                absolute
                top-0
                right-0
                w-3
                h-3
                border-t
                border-r
                border-[#D4AF37]/60
              "
            />

            <div
              className="
                absolute
                bottom-0
                left-0
                w-3
                h-3
                border-b
                border-l
                border-[#D4AF37]/60
              "
            />

            <div
              className="
                absolute
                bottom-0
                right-0
                w-3
                h-3
                border-b
                border-r
                border-[#D4AF37]/60
              "
            />

            {/* ==================================================
                FORM SUCCESS STATE
            ================================================== */}

            {sent ? (

              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.95,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                className="
                  py-16
                  text-center
                  space-y-4
                "
              >

                <div
                  className="
                    inline-flex
                    items-center
                    justify-center
                    w-12
                    h-12
                    rounded-full
                    border
                    border-[#D4AF37]
                    text-[#D4AF37]
                    text-lg
                    shadow-[0_0_25px_rgba(212,175,55,0.15)]
                  "
                >
                  ✓
                </div>

                <h3
                  className="
                    text-3xl
                    sm:text-4xl
                    text-white
                    font-normal
                    uppercase
                  "
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                  }}
                >
                  MESSAGE RECEIVED
                </h3>

                <p
                  className="
                    text-xs
                    text-[#A8988B]
                    font-light
                  "
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                  }}
                >
                  Thank you for reaching out. I'll get back to you soon.
                </p>

                <button
                  type="button"
                  onClick={() => {
                    setSent(false);
                    setFormData({
                      name: '',
                      email: '',
                      message: '',
                    });
                  }}
                  className="
                    mt-4
                    text-[10px]
                    uppercase
                    tracking-[0.2em]
                    text-[#D4AF37]
                    hover:text-white
                    transition-colors
                  "
                >
                  SEND ANOTHER MESSAGE
                </button>

              </motion.div>

            ) : (

              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >

                {/* ==================================================
                    FORM HEADER
                ================================================== */}

                <div className="mb-8">

                  <span
                    className="
                      block
                      text-[9px]
                      font-mono
                      tracking-[0.25em]
                      uppercase
                      text-[#8C6D4F]
                      mb-2
                    "
                  >
                    // ESTABLISH CONNECTION
                  </span>

                  <h3
                    className="
                      text-3xl
                      sm:text-4xl
                      uppercase
                      text-[#F4EBE2]
                    "
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                    }}
                  >
                    Start A Conversation
                  </h3>

                </div>

                {/* ==================================================
                    NAME + EMAIL
                ================================================== */}

                <div
                  className="
                    grid
                    grid-cols-1
                    sm:grid-cols-2
                    gap-5
                  "
                >

                  {/* NAME */}

                  <div>

                    <span
                      className="
                        block
                        text-[9.5px]
                        font-mono
                        tracking-[0.2em]
                        uppercase
                        text-[#8C6D4F]
                        mb-2
                      "
                    >
                      // NAME
                    </span>

                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          name: e.target.value,
                        })
                      }
                      placeholder="Enter your name"
                      className="
                        w-full
                        bg-[#120F0C]
                        border
                        border-[#8C6D4F]/30
                        focus:border-[#D4AF37]
                        text-xs
                        text-white
                        placeholder-[#8C6D4F]/50
                        px-4
                        py-3
                        outline-none
                        rounded-sm
                        transition-colors
                      "
                      style={{
                        fontFamily: "'Montserrat', sans-serif",
                      }}
                    />

                  </div>

                  {/* EMAIL */}

                  <div>

                    <span
                      className="
                        block
                        text-[9.5px]
                        font-mono
                        tracking-[0.2em]
                        uppercase
                        text-[#8C6D4F]
                        mb-2
                      "
                    >
                      // EMAIL
                    </span>

                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          email: e.target.value,
                        })
                      }
                      placeholder="Enter your email"
                      className="
                        w-full
                        bg-[#120F0C]
                        border
                        border-[#8C6D4F]/30
                        focus:border-[#D4AF37]
                        text-xs
                        text-white
                        placeholder-[#8C6D4F]/50
                        px-4
                        py-3
                        outline-none
                        rounded-sm
                        transition-colors
                      "
                      style={{
                        fontFamily: "'Montserrat', sans-serif",
                      }}
                    />

                  </div>

                </div>

                {/* ==================================================
                    MESSAGE
                ================================================== */}

                <div>

                  <span
                    className="
                      block
                      text-[9.5px]
                      font-mono
                      tracking-[0.2em]
                      uppercase
                      text-[#8C6D4F]
                      mb-2
                    "
                  >
                    // MESSAGE
                  </span>

                  <textarea
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        message: e.target.value,
                      })
                    }
                    placeholder="Tell me about your project, idea, or opportunity..."
                    className="
                      w-full
                      bg-[#120F0C]
                      border
                      border-[#8C6D4F]/30
                      focus:border-[#D4AF37]
                      text-xs
                      text-white
                      placeholder-[#8C6D4F]/50
                      p-4
                      outline-none
                      rounded-sm
                      transition-colors
                      resize-none
                    "
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                    }}
                  />

                </div>

                {/* ==================================================
                    SUBMIT BUTTON
                ================================================== */}

                <button
                  type="submit"
                  className="
                    group
                    relative
                    w-full
                    py-3.5
                    border
                    border-[#8C6D4F]/50
                    bg-[#14100D]
                    hover:border-[#D4AF37]
                    hover:bg-[#1A1510]
                    text-[#E8DFD8]
                    hover:text-[#F7E7C4]
                    text-xs
                    font-medium
                    tracking-[0.25em]
                    uppercase
                    transition-all
                    duration-300
                    shadow-[0_4px_20px_rgba(0,0,0,0.5)]
                    overflow-hidden
                  "
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                  }}
                >

                  {/* Button Shine */}

                  <span
                    className="
                      absolute
                      inset-y-0
                      -left-full
                      w-1/3
                      bg-gradient-to-r
                      from-transparent
                      via-[#D4AF37]/20
                      to-transparent
                      skew-x-12
                      group-hover:left-[130%]
                      transition-all
                      duration-700
                    "
                  />

                  <span className="relative z-10">
                    SEND MESSAGE ↗
                  </span>

                </button>

                {/* ==================================================
                    FORM NOTE
                ================================================== */}

                <p
                  className="
                    text-[9px]
                    text-[#6F6257]
                    text-center
                    tracking-wide
                  "
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                  }}
                >
                  Open to full-stack development, web application,
                  cloud, and software engineering opportunities.
                </p>

              </form>
            )}

          </motion.div>

        </div>

        {/* ========================================================
            FOOTER LINE
        ======================================================== */}

        <div
          className="
            pt-16
            mt-16
            border-t
            border-[#8C6D4F]/15
            flex
            flex-col
            sm:flex-row
            items-center
            justify-between
            text-center
            sm:text-left
            gap-4
          "
        >

          <span
            className="
              text-[10px]
              font-mono
              tracking-widest
              text-[#8C6D4F]
              uppercase
            "
          >
            FAYAZ // FULL STACK DEVELOPER
          </span>

          <span
            className="
              text-[10px]
              font-mono
              text-[#8C6D4F]
            "
          >
            © {new Date().getFullYear()} • BUILT WITH PRECISION
          </span>

        </div>

      </div>
    </footer>
  );
};

export default ContactSection;