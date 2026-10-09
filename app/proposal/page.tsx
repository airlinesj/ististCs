"use client";

import confetti from "canvas-confetti";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Heart, RotateCcw, Share2, Sparkles, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { PageIntro } from "@/components/PageIntro";

const noTexts = ["No 🙈", "Are you sure?", "Think again!", "You missed!", "Nice try!"];
export default function Proposal() {
  const [saidYes, setSaidYes] = useState(false);
  const [noIndex, setNoIndex] = useState(0);
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });
  const noButton = useRef<HTMLButtonElement>(null);
  useEffect(() => { if (!saidYes) localStorage.removeItem("tsitsi-yes"); }, [saidYes]);
  const celebrate = () => {
    setSaidYes(true); localStorage.setItem("tsitsi-yes", new Date().toISOString());
    const burst = () => confetti({ particleCount: 90, spread: 90, origin: { y: .65 }, colors: ["#e11d48", "#fda4af", "#fde68a", "#fff7ed"] });
    burst(); window.setTimeout(burst, 450); window.setTimeout(() => confetti({ particleCount: 160, spread: 160, startVelocity: 40, origin: { y: .3 } }), 900);
  };
  const dodge = () => { const x = Math.round((Math.random() - .5) * Math.min(300, window.innerWidth - 80)); const y = Math.round((Math.random() - .5) * Math.min(220, window.innerHeight - 120)); setNoPosition({ x, y }); setNoIndex((index) => (index + 1) % noTexts.length); };
  const share = async () => { if (navigator.share) await navigator.share({ title: "Tsitsi said yes!", text: "The most beautiful answer in the world ❤️" }); else await navigator.clipboard.writeText("Tsitsi said yes! ❤️"); };
  return <section className="relative mx-auto flex min-h-[78vh] max-w-5xl flex-col items-center px-4 py-12 text-center sm:px-5 sm:py-20"><div className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-rose-600/20 blur-[100px]" /><PageIntro eyebrow="chapter five · the big question" title="For the rest of our story..."><span className="text-rose-200">I have one very important question.</span></PageIntro>
    <motion.div initial={{ scale: .92, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="glass relative mt-8 w-full max-w-2xl rounded-3xl p-5 shadow-2xl shadow-rose-950/50 sm:mt-12 sm:p-14"><Sparkles className="mx-auto mb-6 text-amber-200" /><h2 className="font-display text-3xl leading-tight text-rose-50 sm:text-5xl">Tsitsi, Will You Make Me the Happiest Person and Say Yes?</h2><div className="mt-8 flex min-h-16 flex-col items-stretch justify-center gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center sm:gap-5"><button type="button" onClick={celebrate} className="min-h-12 rounded-full bg-rose-500 px-8 py-4 text-lg font-bold text-white shadow-lg shadow-rose-950/40 transition hover:scale-105 hover:bg-rose-400">YES! ❤️</button><button ref={noButton} type="button" onMouseEnter={dodge} onClick={dodge} style={{ transform: `translate(${noPosition.x}px, ${noPosition.y}px)` }} className="min-h-12 rounded-full border border-white/20 bg-white/10 px-7 py-3 text-rose-100 transition-transform duration-300">{noTexts[noIndex]}</button></div></motion.div>
    <p className="mt-8 text-sm text-rose-100/45">No pressure. Just a heart, asking another heart.</p>
    <AnimatePresence>{saidYes && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="fixed inset-0 z-50 grid place-items-center bg-plum/90 p-5 backdrop-blur-md"><motion.div initial={{ scale: .8, y: 20 }} animate={{ scale: 1, y: 0 }} className="relative max-w-lg rounded-3xl bg-[#fffaf2] p-8 text-center text-plum shadow-2xl sm:p-12"><button aria-label="Close celebration" onClick={() => setSaidYes(false)} className="absolute right-4 top-4 text-plum/40"><X /></button><div className="mx-auto mb-6 grid h-20 w-20 place-items-center rounded-full bg-rose-100"><Heart className="fill-rose-500 text-rose-500" size={38} /></div><h2 className="font-display text-4xl text-rose-600">You said yes!</h2><p className="mt-5 leading-7 text-plum/70">Tsitsi, my heart is doing cartwheels. Thank you for choosing this life with me — every next chapter has your name written all over it.</p><p className="mt-5 font-display text-xl">I love you, endlessly. ✨</p><div className="mt-8 flex justify-center gap-3"><button onClick={share} className="inline-flex items-center gap-2 rounded-full bg-plum px-5 py-3 text-sm text-white"><Share2 size={16} /> Share the joy</button><button onClick={() => setSaidYes(false)} className="inline-flex items-center gap-2 rounded-full border border-plum/20 px-5 py-3 text-sm"><Check size={16} /> Keep this moment</button></div></motion.div></motion.div>}</AnimatePresence>
  </section>;
}
