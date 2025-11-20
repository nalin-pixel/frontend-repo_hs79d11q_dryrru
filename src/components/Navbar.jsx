import { useState, useEffect } from 'react'
import { Menu } from 'lucide-react'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 transition-all ${
      scrolled ? 'backdrop-blur-md bg-black/40 border-b border-white/10' : 'bg-transparent'
    }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-md bg-gradient-to-br from-emerald-400/90 to-cyan-400/90 shadow-[0_0_30px_rgba(16,185,129,0.45)]" />
          <span className="text-sm tracking-widest text-white/90 font-[var(--font-geist-mono)]">NEBULA.LAB</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-xs text-white/70 font-[var(--font-geist-mono)]">
          <a href="#work" className="hover:text-white transition">WORK</a>
          <a href="#about" className="hover:text-white transition">ABOUT</a>
          <a href="#contact" className="hover:text-white transition">CONTACT</a>
        </div>

        <button className="md:hidden text-white/80" aria-label="Open Menu">
          <Menu size={18} />
        </button>
      </nav>
    </div>
  )
}

export default Navbar
