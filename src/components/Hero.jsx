import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/20 to-white/80 pointer-events-none" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 pb-24">
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
            <a href="#projects" className="group inline-flex items-center gap-2 rounded-lg bg-slate-900 px-5 py-3 text-white shadow hover:shadow-lg transition-shadow">
              View Projects
              <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </a>
            <a href="#contact" className="rounded-lg px-5 py-3 text-slate-900 ring-1 ring-slate-300 hover:bg-slate-50 transition">Contact Me</a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
