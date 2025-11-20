import { motion, useScroll, useTransform } from 'framer-motion'
import Spline from '@splinetool/react-spline'

function GlassCard({ delay = 0, className = '', children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, rotateX: -10, rotateY: 10 }}
      animate={{ opacity: 1, y: 0, rotateX: 0, rotateY: 0 }}
      transition={{ duration: 1.2, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)] ${className}`}
    >
      {/* holographic noise */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl mix-blend-overlay opacity-20" style={{ background: 'url(https://grainy-gradients.vercel.app/noise.svg)' }} />
      {children}
      {/* neon rim light */}
      <div className="pointer-events-none absolute -inset-px rounded-3xl" style={{
        background: 'linear-gradient(120deg, rgba(16,185,129,0.35), rgba(59,130,246,0.25), rgba(16,185,129,0.35))',
        filter: 'blur(8px)',
        opacity: 0.8
      }} />
    </motion.div>
  )
}

function Floating({ delay = 0, children, className = '' }) {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: [0, -12, 0] }}
      transition={{ duration: 6, delay, repeat: Infinity, ease: 'easeInOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

function Hero() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -80])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.96])

  return (
    <section className="relative min-h-[120vh] w-full bg-black text-white overflow-hidden">
      {/* Spline 3D background cover */}
      <div className="absolute inset-0"> 
        <Spline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        {/* gradient overlays for depth */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_10%,rgba(0,0,0,0)_0%,rgba(0,0,0,0.45)_60%,rgba(0,0,0,0.85)_100%)]" />
        <div className="pointer-events-none absolute inset-0" style={{
          background: 'radial-gradient(1200px 500px at 50% 10%, rgba(16,185,129,0.18), transparent 60%)'
        }} />
      </div>

      {/* Content layer */}
      <motion.div style={{ y, scale }} className="relative z-10 max-w-7xl mx-auto px-6 pt-40 pb-32">
        {/* Floating glass main panel */}
        <GlassCard className="p-10 md:p-14">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-10">
            <div>
              <p className="text-xs md:text-sm tracking-widest text-white/60 font-[var(--font-geist-mono)]">DIGITAL CREATIVE AGENCY</p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight mt-4 leading-[1.05]">
                We design interfaces for the next dimension
              </h1>
              <p className="text-white/70 max-w-xl mt-5 text-sm md:text-base">
                Ultra-minimal systems, high fidelity motion, and spatial web experiences. Built with love for the future.
              </p>
              <div className="mt-8 flex items-center gap-3">
                <button className="relative group px-5 py-2.5 text-xs font-[var(--font-geist-mono)] tracking-widest uppercase rounded-full border border-white/15 bg-white/5 hover:bg-white/10 transition">
                  Start a project
                  <span className="pointer-events-none absolute inset-0 rounded-full border border-emerald-400/40 opacity-0 group-hover:opacity-100 transition" />
                </button>
                <button className="px-5 py-2.5 text-xs font-[var(--font-geist-mono)] tracking-widest uppercase rounded-full border border-white/15 hover:bg-white/5 transition">Our work</button>
              </div>
            </div>

            {/* UI blocks on the right */}
            <div className="grid grid-cols-2 gap-4 w-full md:w-auto md:min-w-[340px]">
              <Floating delay={0.2}>
                <GlassCard className="p-4 w-full aspect-[4/3]">
                  <div className="h-full w-full rounded-2xl bg-gradient-to-br from-emerald-400/30 to-cyan-400/20" />
                </GlassCard>
              </Floating>
              <Floating delay={0.6}>
                <GlassCard className="p-4 w-full aspect-[4/3]">
                  <div className="h-full w-full rounded-2xl bg-gradient-to-br from-white/20 to-transparent" />
                </GlassCard>
              </Floating>
              <Floating delay={0.4}>
                <GlassCard className="p-4 w-full aspect-[1/1]">
                  <div className="h-full w-full rounded-xl border border-white/10" />
                </GlassCard>
              </Floating>
              <Floating delay={0.8}>
                <GlassCard className="p-4 w-full aspect-[1/1]">
                  <div className="h-full w-full rounded-xl bg-[conic-gradient(from_180deg_at_50%_50%,rgba(16,185,129,0.25),rgba(59,130,246,0.15),rgba(16,185,129,0.25))]" />
                </GlassCard>
              </Floating>
            </div>
          </div>
        </GlassCard>

        {/* Surrounding floating elements - abstract 4D vibe */}
        <div className="relative mt-10">
          <div className="pointer-events-none absolute -top-24 -left-10 w-56 h-56 rounded-full blur-3xl bg-emerald-500/20" />
          <div className="pointer-events-none absolute -bottom-10 -right-10 w-72 h-72 rounded-full blur-3xl bg-cyan-500/10" />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[...Array(8)].map((_, i) => (
              <Floating key={i} delay={0.2 * i}>
                <GlassCard className="p-4 h-28">
                  <div className="h-full w-full rounded-xl border border-white/10 bg-white/2" />
                </GlassCard>
              </Floating>
            ))}
          </div>
        </div>
      </motion.div>

      {/* subtle scanline / noise overlay */}
      <div className="pointer-events-none absolute inset-0 mix-blend-soft-light opacity-[0.06]" style={{ backgroundImage: 'repeating-linear-gradient(0deg, #fff, #fff 1px, transparent 1px, transparent 2px)' }} />
    </section>
  )
}

export default Hero
