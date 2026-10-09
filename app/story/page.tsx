"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, Heart } from "lucide-react";
import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";

const chapters = [
  ["01", "The First Hello", "Somehow, one ordinary hello became the beginning of my favorite everything."],
  ["02", "The Late Night Talks", "Hours became minutes when we talked about dreams, fears, and absolutely nothing."],
  ["03", "The Laughs We Couldn’t Stop", "You made the world softer. Even the quiet days started sounding like joy."],
  ["04", "The Choosing", "In all the little ways that count, I kept choosing you. I still do."],
];

export default function Story() {
  return <section className="mx-auto max-w-5xl px-4 py-12 sm:px-5 sm:py-20"><PageIntro eyebrow="chapter two · the beautiful middle" title="Our story, in little constellations">The moments that look small from far away are the ones I keep closest.</PageIntro>
    <div className="relative mx-auto mt-12 max-w-3xl before:absolute before:left-[18px] before:top-0 before:h-full before:w-px before:bg-gradient-to-b before:from-rose-400 before:via-rose-400/40 before:to-transparent md:mt-20 md:before:left-1/2">
      {chapters.map(([number, title, text], index) => <motion.article key={number} initial={{ opacity: 0, x: index % 2 ? 35 : -35 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: .6 }} className={`relative mb-14 pl-12 md:w-1/2 md:pl-0 ${index % 2 ? "md:ml-auto md:pl-12" : "md:pr-12 md:text-right"}`}>
        <span className={`absolute left-0 top-1 grid h-9 w-9 place-items-center rounded-full border border-rose-300/50 bg-plum text-xs font-bold text-rose-300 md:left-auto ${index % 2 ? "md:-left-4" : "md:-right-4"}`}>{number}</span>
        <div className="glass rounded-2xl p-5 transition hover:-translate-y-1 hover:border-rose-300/40 sm:p-6"><p className="text-xs uppercase tracking-[.25em] text-rose-300">{index === 0 ? "where it began" : "a favorite memory"}</p><h2 className="mt-2 font-display text-2xl text-rose-50 sm:text-3xl">{title}</h2><p className="mt-3 leading-7 text-rose-100/65">{text}</p><Heart className="mt-5 inline-block h-4 w-4 fill-rose-400/70 text-rose-400/70" /></div>
      </motion.article>)}
    </div>
    <div className="mt-16 text-center"><ArrowDown className="mx-auto mb-5 animate-bounce text-rose-300" /><Link href="/memories" className="inline-flex items-center gap-3 rounded-full border border-rose-300/40 px-7 py-4 font-semibold text-rose-100 transition hover:bg-white/10">See Our Memories 📸 <ArrowRight size={18} /></Link></div>
  </section>;
}
