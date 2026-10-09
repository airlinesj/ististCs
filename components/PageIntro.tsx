import { motion } from "framer-motion";

export function PageIntro({ eyebrow, title, children }: { eyebrow: string; title: string; children?: React.ReactNode }) {
  return <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="mx-auto max-w-3xl text-center">
    <p className="mb-4 text-[.68rem] font-bold uppercase tracking-[.2em] text-rose-300 sm:text-xs sm:tracking-[.3em]">{eyebrow}</p>
    <h1 className="text-balance font-display text-4xl leading-[.98] text-rose-50 sm:text-5xl md:text-7xl">{title}</h1>
    {children && <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-rose-100/70 sm:mt-6 sm:text-lg sm:leading-8">{children}</p>}
  </motion.div>;
}
