"use client";

import { motion } from "framer-motion";
import { ArrowRight, Heart, LockKeyhole, MailOpen } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { PageIntro } from "@/components/PageIntro";

const reasons = [
  ["01", "Your kindness", "You make room for every version of me."],
  ["02", "Your laugh", "It is my favorite sound in any room."],
  ["03", "Your courage", "You keep choosing brave, beautiful things."],
  ["04", "Your magic", "You turn small moments into memories."],
  ["05", "Your honesty", "With you, my heart never needs a disguise."],
  ["06", "Your patience", "You teach me that love can be gentle."],
  ["07", "Your spark", "You make every plan feel like an adventure."],
  ["08", "Your softness", "You care deeply, and the world is better for it."],
  ["09", "Your becoming", "I love who you are and who you are becoming."],
  ["10", "Simply you", "There is no substitute for the way you are you."],
];

export default function Letter() {
  const [open, setOpen] = useState(false);
  const [flipped, setFlipped] = useState<string | null>(null);
  return <section className="mx-auto max-w-6xl px-4 py-12 sm:px-5 sm:py-20"><PageIntro eyebrow="chapter four · from the heart" title="A letter I hope you can feel">Some things are too important to leave unsaid.</PageIntro>
    <div className="mx-auto mt-14 max-w-2xl">
      <button type="button" aria-label={open ? "Close letter" : "Open letter"} onClick={() => setOpen(true)} className={`relative mx-auto block h-64 w-full max-w-md rounded-lg bg-[#d99291] shadow-2xl shadow-rose-950/40 transition [perspective:1000px] ${open ? "pointer-events-none opacity-0" : "hover:-translate-y-2"}`}>
        <div className="absolute inset-0 rounded-lg bg-[#c77c82]" /><div className={`absolute left-0 top-0 z-10 h-1/2 w-full origin-top border-b border-rose-950/15 bg-[#e8aaa1] transition duration-700 [clip-path:polygon(0_0,100%_0,50%_100%)] ${open ? "rotate-x-180" : ""}`} /><div className="absolute inset-0 z-20 grid place-items-center"><Heart className="fill-rose-100 text-rose-100" size={45} /></div><p className="absolute bottom-5 left-0 right-0 z-20 flex items-center justify-center gap-2 text-sm font-semibold text-rose-950/60"><MailOpen size={16} /> click to open</p>
      </button>
      {open && <motion.article initial={{ opacity: 0, y: 20, rotateX: -8 }} animate={{ opacity: 1, y: 0, rotateX: 0 }} className="rounded-lg bg-[#fffaf2] p-7 text-plum shadow-2xl sm:p-12"><div className="mb-8 flex items-center justify-between border-b border-plum/10 pb-5"><span className="font-display text-2xl">For Tsitsi, always</span><LockKeyhole size={17} className="text-rose-500" /></div><p className="font-display text-xl leading-9 sm:text-2xl">My dearest Tsitsi,</p><p className="mt-5 leading-8 text-plum/75">If I could give you one thing, it would be the ability to see yourself through my eyes. You would see the person who makes the ordinary extraordinary, who brings warmth to every room, and who makes me want to become a little more generous with every passing day.</p><p className="mt-5 leading-8 text-plum/75">Thank you for every laugh, every honest conversation, and every quiet moment that somehow meant everything. I don&apos;t just love our story so far. I love the thought of every page still waiting for us.</p><p className="mt-8 font-display text-2xl text-rose-600">All my love, forever.</p></motion.article>}
    </div>
    <div className="mt-16 sm:mt-24"><h2 className="text-center font-display text-3xl text-rose-50 sm:text-4xl">10 reasons why it&apos;s always been you</h2><div className="mx-auto mt-8 grid max-w-5xl grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 md:grid-cols-5">{reasons.map(([number, front, back]) => <button type="button" key={number} onClick={() => setFlipped(flipped === number ? null : number)} className="h-44 [perspective:800px]"><motion.div animate={{ rotateY: flipped === number ? 180 : 0 }} transition={{ duration: .5 }} className="relative h-full w-full [transform-style:preserve-3d]"><div className="glass absolute inset-0 grid place-items-center rounded-2xl p-4 [backface-visibility:hidden]"><span className="text-3xl text-rose-300">{number}</span><strong className="font-display text-lg text-rose-50">{front}</strong></div><div className="absolute inset-0 grid place-items-center rounded-2xl bg-rose-500 p-4 text-center text-white [backface-visibility:hidden] [transform:rotateY(180deg)]"><Heart className="mb-2 fill-white" size={20} /><span className="text-sm leading-6">{back}</span></div></motion.div></button>)}</div></div>
    <div className="mt-16 text-center"><Link href="/proposal" className="inline-flex items-center gap-3 rounded-full bg-rose-500 px-7 py-4 font-semibold text-white transition hover:bg-rose-400">One Final Question For You... 💍 <ArrowRight size={18} /></Link></div>
  </section>;
}
