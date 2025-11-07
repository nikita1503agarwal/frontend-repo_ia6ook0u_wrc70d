import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Contact from './components/Contact'
import BackgroundFX from './components/BackgroundFX'

function App() {
  return (
    <div className="relative min-h-screen bg-white text-slate-900">
      {/* Animated background */}
      <BackgroundFX />

      {/* Navigation */}
      <Navbar />

      {/* Content sections */}
      <main>
        <Hero />
        <Projects />
        <Contact />

        <footer className="py-10 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} FlameDev — Built with React, Tailwind, and Framer Motion
        </footer>
      </main>
    </div>
  )
}

export default App
