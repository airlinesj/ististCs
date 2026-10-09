import { motion } from "framer-motion";

export function PageIntro({ eyebrow, title, children }: { eyebrow: string; title: string; children?: React.ReactNode }) {
  return <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="mx-auto max-w-3xl text-center">
    <p className="mb-4 text-xs font-bold uppercase tracking-[.3em] text-rose-300">{eyebrow}</p>
    <h1 className="text-balance font-display text-5xl leading-[.98] text-rose-50 md:text-7xl">{title}</h1>
    {children && <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-rose-100/70">{children}</p>}
  </motion.div>;
}
