"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";

export default function Home() {
  return <section className="mx-auto flex min-h-[78vh] max-w-6xl flex-col items-center justify-center px-4 py-12 text-center sm:px-5 sm:py-16">
    <motion.div animate={{ y: [0, -10, 0], rotate: [0, 3, 0] }} transition={{ duration: 5, repeat: Infinity }} className="mb-6 text-5xl sm:mb-8 sm:text-6xl">♡</motion.div>
    <PageIntro eyebrow="a tiny universe, made for one" title="A Story Written For Tsitsi ✨">Every great love story has a beginning... let&apos;s walk through ours.</PageIntro>
    <motion.div initial={{ opacity: 0, scale: .95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: .35 }} className="glass mt-8 max-w-lg rounded-2xl p-5 text-left shadow-2xl shadow-rose-950/30 sm:mt-10 sm:p-6">
      <div className="mb-4 flex items-center gap-2 text-sm text-rose-200"><Sparkles size={16} /> Invitation, sealed with a smile</div>
      <p className="font-display text-2xl leading-relaxed text-cream">“Come with me. There are five little chapters waiting to tell you how much you mean to me.”</p>
    </motion.div>
    <Link href="/story" className="group mt-8 inline-flex min-h-12 items-center gap-3 rounded-full bg-rose-500 px-6 py-4 font-semibold text-white shadow-xl shadow-rose-900/40 transition hover:-translate-y-1 hover:bg-rose-400 sm:mt-9 sm:px-7">Open Our Chapter <ArrowRight className="transition group-hover:translate-x-1" /></Link>
  </section>;
}
