function Footer() {
  return (
    <footer id="contact" className="relative bg-black text-white py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
        <div>
          <div className="text-sm tracking-widest text-white/60 font-[var(--font-geist-mono)]">NEBULA.LAB</div>
          <h4 className="text-2xl mt-2">Let’s build your next dimension</h4>
        </div>
        <div className="flex items-center gap-3">
          <a href="#" className="px-4 py-2 text-xs rounded-full border border-white/15 hover:bg-white/5 transition font-[var(--font-geist-mono)]">Email</a>
          <a href="#" className="px-4 py-2 text-xs rounded-full border border-white/15 hover:bg-white/5 transition font-[var(--font-geist-mono)]">Behance</a>
          <a href="#" className="px-4 py-2 text-xs rounded-full border border-white/15 hover:bg-white/5 transition font-[var(--font-geist-mono)]">Dribbble</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
