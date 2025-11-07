import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Let’s build something great</h2>
          <p className="mt-3 text-slate-600">Tell me about your project and timelines. I reply within 24 hours.</p>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-10 max-w-2xl rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-sm backdrop-blur"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-slate-700">Name</label>
              <input className="mt-1 w-full rounded-lg border-slate-200 bg-white/80 px-3 py-2 shadow-sm outline-none focus:ring-2 focus:ring-blue-500" placeholder="Jane Doe" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Email</label>
              <input type="email" className="mt-1 w-full rounded-lg border-slate-200 bg-white/80 px-3 py-2 shadow-sm outline-none focus:ring-2 focus:ring-blue-500" placeholder="jane@email.com" />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-slate-700">Message</label>
              <textarea rows="4" className="mt-1 w-full rounded-lg border-slate-200 bg-white/80 px-3 py-2 shadow-sm outline-none focus:ring-2 focus:ring-blue-500" placeholder="What are we building?" />
            </div>
          </div>
          <div className="mt-6 flex justify-center">
            <button className="group inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-white shadow hover:bg-blue-700 transition">
              Send Message
              <svg className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  )
}
