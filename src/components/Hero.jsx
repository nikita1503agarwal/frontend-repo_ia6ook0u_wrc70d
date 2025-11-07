import Spline from '@splinetool/react-spline'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function Hero() {
  const ref = useRef(null)

  // Track scroll progress within the hero to drive parallax
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  // Background moves a bit faster, foreground text slower for depth
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '-20%'])
  const glowY = useTransform(scrollYProgress, [0, 1], ['0%', '-12%'])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '-6%'])
  const contentOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.92])

  return (
    <section id="home" ref={ref} className="relative min-h-screen overflow-hidden">
      {/* Parallax background (Spline) */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <Spline
          scene="https://prod.spline.design/BWzdo650n-g-M9RS/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Soft vertical gradient that doesn't block Spline interaction */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/25 to-white/80 pointer-events-none"
          style={{ y: glowY }}
        />
      </motion.div>

      {/* Foreground content with subtle parallax */}
      <motion.div
        className="relative z-10 mx-auto max-w-7xl px-6 pt-28 pb-24"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-2xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-sm shadow-sm ring-1 ring-slate-200 backdrop-blur">
            <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
            Available for freelance projects
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900">
            React & Next.js Developer
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            I craft fast, modern web apps with delightful interactions, thoughtful motion, and scalable architecture.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-lg bg-slate-900 px-5 py-3 text-white shadow hover:shadow-lg transition-shadow"
            >
              View Projects
              <svg
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
            <a
              href="#contact"
              className="rounded-lg px-5 py-3 text-slate-900 ring-1 ring-slate-300 hover:bg-slate-50 transition"
            >
              Contact Me
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
