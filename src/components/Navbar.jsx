import { useState } from 'react'
import { motion } from 'framer-motion'
import { Rocket, Github, Linkedin } from 'lucide-react'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [active, setActive] = useState('#home')

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl/30"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2 font-semibold">
            <Rocket className="h-6 w-6 text-blue-600" />
            <span className="text-slate-900">FlameDev</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setActive(item.href)}
                className={`relative text-slate-600 hover:text-slate-900 transition-colors`}
              >
                {item.label}
                {active === item.href && (
                  <motion.span
                    layoutId="active-underline"
                    className="absolute -bottom-1 left-0 h-0.5 w-full bg-blue-600"
                  />
                )}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-md hover:bg-slate-100 transition"
            >
              <Github className="h-5 w-5 text-slate-700" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-md hover:bg-slate-100 transition"
            >
              <Linkedin className="h-5 w-5 text-slate-700" />
            </a>
          </div>
        </div>
      </div>
    </motion.header>
  )
}
