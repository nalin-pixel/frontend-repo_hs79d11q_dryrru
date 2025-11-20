import { motion } from 'framer-motion'

function Showcase() {
  const items = [
    { title: 'Spatial UI Systems', tag: 'Research' },
    { title: 'Holographic Dashboards', tag: 'Product' },
    { title: 'Realtime 3D Websites', tag: 'Web' },
    { title: 'Procedural Design Tools', tag: 'R&D' },
  ]

  return (
    <section id="work" className="relative bg-black text-white py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 flex items-end justify-between">
          <h2 className="text-2xl md:text-4xl tracking-tight">Selected Work</h2>
          <p className="text-white/60 text-sm font-[var(--font-geist-mono)]">FUTURISTIC — MINIMAL — PRECISE</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((it, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: idx * 0.08 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent"
            >
              <div className="aspect-[16/9] bg-[radial-gradient(60%_80%_at_50%_20%,rgba(16,185,129,0.15),transparent_60%)]" />
              <div className="p-6 flex items-center justify-between">
                <div>
                  <div className="text-xs text-emerald-300/80 font-[var(--font-geist-mono)]">{it.tag}</div>
                  <h3 className="text-xl mt-1">{it.title}</h3>
                </div>
                <button className="px-4 py-2 text-xs rounded-full border border-white/15 hover:bg-white/5 transition font-[var(--font-geist-mono)]">View</button>
              </div>
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-[radial-gradient(600px_200px_at_50%_0%,rgba(16,185,129,0.12),transparent)]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Showcase
