// src/components/ExperienceSection.tsx

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface RouteStop {
  id: string;
  year: string;
  title: string;
  organization: string;
  description: string;
  technologies: string[];
  link?: string;
  linkLabel?: string;
}

interface Certification {
  id: string;
  code: string;
  name: string;
  issuer: string;
  category: string;
}

const journey: RouteStop[] = [
  {
    id: '01',
    year: '2022 — 2024',
    title: 'FREELANCE FULL STACK DEVELOPER',
    organization: 'FREELANCE · WEB & MOBILE DEVELOPMENT',
    description:
      'Worked independently on client-focused digital projects, building responsive web pages, websites, and mobile applications. Translated requirements into clean, responsive user experiences and functional applications while working across frontend and backend development workflows.',
    technologies: [
      'React.js',
      'JavaScript',
      'TypeScript',
      'Node.js',
      'Express.js',
      'HTML',
      'CSS',
      'GitHub',
    ],
    link: 'https://github.com/shaik007fayaz',
    linkLabel: 'VIEW GITHUB ↗',
  },

  {
    id: '02',
    year: '09/2024 — PRESENT',
    title: 'FULL STACK DEVELOPER',
    organization: 'WIPRO · CITI BANK PROJECT',
    description:
      'Building and maintaining enterprise-grade web applications across frontend, backend, DevOps, and cloud environments. Developed reusable React components, RESTful APIs using Node.js and Express.js, integrated frontend and backend services, and contributed to TeamCity-to-Lightspeed migration, CI/CD pipeline migration, deployment automation, workflow optimization, and production support.',
    technologies: [
      'React.js',
      'JavaScript',
      'TypeScript',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Bitbucket',
    ],
  },

  {
    id: '03',
    year: 'WIPRO · PROJECT',
    title: 'FULL STACK DEVELOPER',
    organization: 'ENTERTAINMENT APP',
    description:
      'Developed a full-stack application using ASP.NET Core and C#, building backend services, REST APIs, CRUD operations, API integrations, and database-driven functionality. Worked on database optimization, testing, debugging, deployment, and application reliability.',
    technologies: [
      'C#',
      '.NET',
      'ASP.NET Core',
      'REST APIs',
      'SQL Server',
      'MySQL',
    ],
  },

  {
    id: '04',
    year: 'CLOUD ENGINEERING',
    title: 'AZURE & MICROSERVICES',
    organization: 'CLOUD · BACKEND · DEVOPS',
    description:
      'Worked with Azure cloud services to build scalable backend solutions and automated workflows. Integrated Azure services with backend APIs and implemented serverless functions, storage, secure configuration, notifications, data-processing workflows, application deployment, monitoring, and troubleshooting.',
    technologies: [
      'Azure Functions',
      'Logic Apps',
      'Durable Functions',
      'Blob Storage',
      'App Services',
      'Key Vault',
      'Microservices',
      'Azure Monitor',
      'Application Insights',
    ],
  },
];

/* =========================================================
   CERTIFICATIONS FROM RESUME
========================================================= */

const certifications: Certification[] = [
  {
    id: '01',
    code: 'DOP-C02',
    name: 'AWS Certified DevOps Engineer Professional',
    issuer: 'AMAZON WEB SERVICES',
    category: 'DEVOPS · CLOUD',
  },

  {
    id: '02',
    code: 'NODE.JS',
    name: 'Node.js Application Developer Certified',
    issuer: 'NODE.JS',
    category: 'BACKEND · JAVASCRIPT',
  },

  {
    id: '03',
    code: 'AZ-900',
    name: 'Microsoft Certified: Azure Fundamentals',
    issuer: 'MICROSOFT',
    category: 'AZURE · CLOUD',
  },

  {
    id: '04',
    code: 'AZ-204',
    name: 'Microsoft Certified: Azure Developer Associate',
    issuer: 'MICROSOFT',
    category: 'AZURE · DEVELOPMENT',
  },

  {
    id: '05',
    code: 'GH-300',
    name: 'GitHub Copilot',
    issuer: 'GITHUB',
    category: 'AI · DEVELOPER TOOLS',
  },

  {
    id: '06',
    code: 'AZURE ADMIN',
    name: 'Microsoft Certified: Azure Administrator Associate',
    issuer: 'MICROSOFT',
    category: 'AZURE · ADMINISTRATION',
  },
];

export const ExperienceSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 70%', 'end 90%'],
  });

  const lineHeight = useTransform(
    scrollYProgress,
    [0, 1],
    ['0%', '100%']
  );

  return (
    <section
      id="experience"
      ref={containerRef}
      className="relative w-full bg-black text-[#E8DFD8] font-sans selection:bg-[#cbb59d] selection:text-black pt-4 pb-24 px-6 sm:px-12 lg:px-20 overflow-hidden"
    >
      {/* =========================================================
          BACKGROUND ATMOSPHERE
      ========================================================= */}

      <div className="absolute top-[30%] left-[15%] w-[30rem] h-[30rem] bg-[#D4AF37]/[0.025] rounded-full blur-[140px] pointer-events-none" />

      <div className="absolute bottom-[10%] right-[10%] w-[35rem] h-[35rem] bg-[#8C6D4F]/[0.025] rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto w-full relative z-10">

        {/* =========================================================
            HEADER
        ========================================================= */}

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center space-x-4 mb-7"
        >
          <span
            className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#D4AF37]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            04 / EXPERIENCE
          </span>

          <div className="w-20 h-[1px] bg-gradient-to-r from-[#D4AF37]/80 via-[#8C6D4F]/40 to-transparent" />
        </motion.div>

        {/* =========================================================
            SECTION TITLE
        ========================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.9,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mb-20"
        >
          <h2
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight uppercase leading-[0.85] select-none"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
              EXPERIENCE &
            </span>

            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
              JOURNEY.
            </span>
          </h2>

          <p
            className="mt-7 max-w-2xl text-sm sm:text-[15px] leading-[1.8] text-[#8F8278]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            From freelance development to enterprise full-stack engineering,
            building modern web applications, mobile experiences, backend
            services, cloud solutions, and production-ready systems.
          </p>
        </motion.div>

        {/* =========================================================
            EXPERIENCE TIMELINE
        ========================================================= */}

        <div className="relative w-full">

          {/* Background Track */}

          <div className="absolute left-[19px] md:left-[170px] top-4 bottom-8 w-[1px] bg-[#8C6D4F]/20" />

          {/* Animated Gold Track */}

          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-[19px] md:left-[170px] top-4 w-[2px] bg-gradient-to-b from-[#D4AF37] via-[#C99E5D] to-[#8C6D4F]/10 shadow-[0_0_10px_#D4AF37] origin-top"
          />

          <div className="space-y-20">

            {journey.map((stop, idx) => (
              <motion.div
                key={stop.id}
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
                  margin: '-80px',
                }}
                transition={{
                  duration: 0.75,
                  delay: idx * 0.08,
                }}
                className="relative flex flex-col md:flex-row items-start group"
              >

                {/* =====================================================
                    DESKTOP YEAR
                ===================================================== */}

                <div className="hidden md:block w-[170px] shrink-0 pr-10 pt-1 text-right">
                  <span className="text-[10px] font-mono tracking-[0.18em] text-[#8C6D4F] group-hover:text-[#D4AF37] transition-colors duration-300">
                    {stop.year}
                  </span>
                </div>

                {/* =====================================================
                    ROUTE NODE
                ===================================================== */}

                <div className="absolute left-[19px] md:left-[170px] top-1.5 -translate-x-1/2 flex items-center justify-center">

                  <div className="absolute w-7 h-7 rounded-full border border-[#D4AF37]/0 group-hover:border-[#D4AF37]/40 group-hover:scale-150 transition-all duration-700 ease-out" />

                  <div className="w-3 h-3 rounded-full bg-[#120F0C] border border-[#8C6D4F] group-hover:bg-[#D4AF37] group-hover:border-[#D4AF37] group-hover:shadow-[0_0_16px_#D4AF37] transition-all duration-300" />

                </div>

                {/* =====================================================
                    EXPERIENCE CONTENT
                ===================================================== */}

                <div className="ml-14 md:ml-12 pl-2 w-full max-w-3xl">

                  {/* Mobile Year */}

                  <div className="md:hidden mb-2">
                    <span className="text-[10px] font-mono tracking-[0.2em] text-[#D4AF37]">
                      {stop.year}
                    </span>
                  </div>

                  {/* ID + Label */}

                  <div className="flex items-center gap-3 mb-3">

                    <span className="text-[9px] font-mono tracking-[0.25em] text-[#D4AF37]/60">
                      {stop.id}
                    </span>

                    <div className="h-[1px] w-8 bg-[#8C6D4F]/40" />

                    <span
                      className="text-[9px] tracking-[0.25em] text-[#8C6D4F]"
                      style={{
                        fontFamily: "'Montserrat', sans-serif",
                      }}
                    >
                      EXPERIENCE
                    </span>

                  </div>

                  {/* Title */}

                  <h3
                    className="text-3xl sm:text-4xl md:text-5xl tracking-wide text-white group-hover:text-[#F7E7C4] transition-colors duration-300 mb-2 leading-none"
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                    }}
                  >
                    {stop.title}
                  </h3>

                  {/* Organization */}

                  <span
                    className="block text-[10px] sm:text-[11px] font-medium tracking-[0.22em] uppercase text-[#C99E5D] mb-4"
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                    }}
                  >
                    {stop.organization}
                  </span>

                  {/* Description */}

                  <p
                    className="text-xs sm:text-[13px] font-light text-[#A8988B] leading-[1.8] max-w-2xl group-hover:text-[#D5CBC0] transition-colors duration-300"
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                    }}
                  >
                    {stop.description}
                  </p>

                  {/* ===================================================
                      TECHNOLOGY TAGS
                  =================================================== */}

                  <div className="flex flex-wrap gap-2 mt-5 max-w-2xl">

                    {stop.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="px-2.5 py-1.5 border border-[#8C6D4F]/20 bg-[#0A0908] text-[9px] tracking-[0.12em] text-[#8C6D4F] group-hover:border-[#D4AF37]/25 group-hover:text-[#C99E5D] transition-all duration-300"
                        style={{
                          fontFamily: "'Montserrat', sans-serif",
                        }}
                      >
                        {technology}
                      </span>
                    ))}

                  </div>

                  {/* ===================================================
                      GITHUB BUTTON
                  =================================================== */}

                  {stop.link && (
                    <motion.a
                      href={stop.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{
                        y: -2,
                      }}
                      whileTap={{
                        scale: 0.97,
                      }}
                      className="inline-flex items-center gap-3 mt-6 px-5 py-3 border border-[#D4AF37]/30 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all duration-300 text-[9px] tracking-[0.2em] font-medium"
                      style={{
                        fontFamily: "'Montserrat', sans-serif",
                      }}
                    >
                      <span>{stop.linkLabel}</span>

                      <span className="text-sm">
                        ↗
                      </span>
                    </motion.a>
                  )}

                </div>
              </motion.div>
            ))}

          </div>
        </div>

        {/* =========================================================
            CERTIFICATIONS
        ========================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            margin: '-80px',
          }}
          transition={{
            duration: 0.9,
          }}
          className="mt-32"
        >

          {/* Certification Header */}

          <div className="flex items-center gap-4 mb-10">

            <span
              className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#D4AF37]"
              style={{
                fontFamily: "'Montserrat', sans-serif",
              }}
            >
              05 / CERTIFICATIONS
            </span>

            <div className="flex-1 h-[1px] bg-gradient-to-r from-[#D4AF37]/50 via-[#8C6D4F]/20 to-transparent" />

          </div>

          {/* Certification Title */}

          <div className="mb-12">

            <h2
              className="text-5xl sm:text-6xl md:text-7xl lg:text-[5rem] tracking-tight uppercase leading-[0.85]"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
              }}
            >
              <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white via-[#D5CBC0] to-[#605448]">
                CERTIFIED
              </span>

              <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A]">
                EXPERTISE.
              </span>
            </h2>

            <p
              className="mt-6 max-w-2xl text-sm sm:text-[14px] leading-[1.8] text-[#8F8278]"
              style={{
                fontFamily: "'Montserrat', sans-serif",
              }}
            >
              Professional certifications across cloud engineering, DevOps,
              backend development, Azure, and AI-assisted developer tools.
            </p>

          </div>

          {/* =========================================================
              CERTIFICATION GRID
          ========================================================= */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            {certifications.map((cert, idx) => (
              <motion.div
                key={cert.id}
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
                  margin: '-50px',
                }}
                transition={{
                  duration: 0.7,
                  delay: idx * 0.08,
                }}
                whileHover={{
                  y: -5,
                }}
                className="group relative border border-[#8C6D4F]/20 bg-[#080706] p-6 sm:p-7 overflow-hidden transition-all duration-500 hover:border-[#D4AF37]/40"
              >

                {/* Hover Glow */}

                <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#D4AF37]/[0.04] rounded-full blur-[50px] group-hover:bg-[#D4AF37]/[0.09] transition-all duration-700" />

                {/* Top Line */}

                <div className="absolute top-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#D4AF37] to-[#C99E5D] group-hover:w-full transition-all duration-700" />

                {/* Certification Number */}

                <div className="flex items-center justify-between mb-7">

                  <span
                    className="text-[10px] font-mono tracking-[0.25em] text-[#D4AF37]/60"
                  >
                    {cert.id}
                  </span>

                  <span
                    className="text-[9px] font-mono tracking-[0.18em] text-[#8C6D4F]"
                  >
                    {cert.code}
                  </span>

                </div>

                {/* Certification Icon */}

                <div className="mb-5">

                  <div className="w-11 h-11 border border-[#D4AF37]/30 flex items-center justify-center group-hover:border-[#D4AF37]/70 group-hover:bg-[#D4AF37]/5 transition-all duration-500">

                    <span
                      className="text-[#D4AF37] text-lg"
                      aria-hidden="true"
                    >
                      ✦
                    </span>

                  </div>

                </div>

                {/* Certification Name */}

                <h3
                  className="text-2xl sm:text-3xl text-white tracking-wide leading-[0.95] group-hover:text-[#F7E7C4] transition-colors duration-300"
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                  }}
                >
                  {cert.name}
                </h3>

                {/* Issuer */}

                <p
                  className="mt-4 text-[9px] tracking-[0.25em] text-[#C99E5D]"
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                  }}
                >
                  {cert.issuer}
                </p>

                {/* Category */}

                <div className="mt-6 pt-5 border-t border-[#8C6D4F]/10">

                  <span
                    className="text-[9px] tracking-[0.16em] text-[#8C6D4F]"
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                    }}
                  >
                    {cert.category}
                  </span>

                </div>

                {/* Bottom Corner */}

                <div className="absolute bottom-0 right-0 w-12 h-12 border-r border-b border-[#D4AF37]/0 group-hover:border-[#D4AF37]/30 transition-all duration-500" />

              </motion.div>
            ))}

          </div>

        </motion.div>

        {/* =========================================================
            TECHNOLOGY FOOTER
        ========================================================= */}

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
          className="mt-24 pt-8 border-t border-[#8C6D4F]/15"
        >

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">

            <div>

              <span
                className="block text-[9px] tracking-[0.3em] text-[#8C6D4F] mb-2"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                }}
              >
                CORE STACK
              </span>

              <p
                className="text-[11px] tracking-[0.12em] text-[#A8988B]"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                }}
              >
                REACT · NODE · EXPRESS · .NET · SQL · MONGODB · AZURE · AWS
              </p>

            </div>

            <a
              href="https://github.com/shaik007fayaz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[9px] tracking-[0.2em] text-[#D4AF37] hover:text-white transition-colors"
              style={{
                fontFamily: "'Montserrat', sans-serif",
              }}
            >
              GITHUB / SHAIK007FAYAZ ↗
            </a>

          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default ExperienceSection;