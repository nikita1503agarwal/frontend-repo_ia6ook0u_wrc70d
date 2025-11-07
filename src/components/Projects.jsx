import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const projects = [
  {
    title: 'Next.js SaaS Dashboard',
    description: 'Analytics, billing, and user management with server actions and charts.',
    tags: ['Next.js', 'Tailwind', 'PostgreSQL'],
  },
  {
    title: 'Realtime Chat',
    description: 'WebSockets powered chat with typing indicators and message reactions.',
    tags: ['React', 'Socket.io', 'Express'],
  },
  {
    title: '3D Product Configurator',
    description: 'Interactive 3D viewer with dynamic materials and lighting controls.',
    tags: ['React', 'Three.js', 'Spline'],
  },
]

function ProjectCard({ title, description, tags, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-sm backdrop-blur hover:shadow-lg transition-shadow"
    >
      <div className="flex items-start justify-between">
        <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
        <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs text-emerald-700">Featured</span>
      </div>
      <p className="mt-2 text-slate-600">{description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((t) => (
          <span key={t} className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700">{t}</span>
        ))}
      </div>
      <div className="mt-5 h-1 w-full overflow-hidden rounded bg-slate-100">
        <span className="block h-full w-0 bg-gradient-to-r from-blue-500 to-emerald-500 transition-all duration-500 group-hover:w-full" />
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const translateY = useTransform(scrollYProgress, [0, 1], [0, -80])

  return (
    <section id="projects" ref={ref} className="relative py-24">
      <motion.div style={{ y: translateY }} className="pointer-events-none absolute inset-0 -z-0 opacity-40">
        <div className="absolute -top-20 left-10 h-64 w-64 rounded-full bg-blue-300 blur-3xl" />
        <div className="absolute bottom-0 right-10 h-64 w-64 rounded-full bg-emerald-300 blur-3xl" />
      </motion.div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Selected Projects</h2>
          <p className="mt-3 text-slate-600">A mix of production work and experiments focused on performance and UX.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} index={i} {...p} />
          ))}
        </div>
      </div>
    </section>
  )
}
