"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Heart, Volume2, VolumeX } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { HeartPreloader } from "./HeartPreloader";

const steps = [{ href: "/", label: "Prologue" }, { href: "/story", label: "Our story" }, { href: "/memories", label: "Memories" }, { href: "/letter", label: "Letter" }, { href: "/proposal", label: "The question" }];

export function LayoutShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [music, setMusic] = useState(false);
  const audio = useRef<HTMLAudioElement>(null);
  const current = Math.max(0, steps.findIndex((step) => step.href === pathname));
  useEffect(() => { if (audio.current) music ? void audio.current.play().catch(() => undefined) : audio.current.pause(); }, [music]);
  return <div className="min-h-screen overflow-hidden bg-plum">
    <HeartPreloader />
    <audio ref={audio} loop src="https://cdn.pixabay.com/audio/2022/10/25/audio_946b7f5e66.mp3" />
    <div className="pointer-events-none fixed inset-0 z-0 opacity-60" style={{ background: "radial-gradient(circle at 15% 20%, #8e263d 0, transparent 28%), radial-gradient(circle at 85% 70%, #501d45 0, transparent 32%)" }} />
    <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,.22)_0_1px,transparent_2px),radial-gradient(circle_at_70%_40%,rgba(255,190,210,.2)_0_1px,transparent_2px)] bg-[length:180px_180px,230px_230px]" />
    <header className="relative z-20 mx-auto flex max-w-6xl items-center justify-between px-5 py-5 md:px-8">
      <Link href="/" className="flex items-center gap-2 font-display text-lg text-rose-100"><Heart className="h-4 w-4 fill-rose-400 text-rose-400" /> T &amp; forever</Link>
      <button aria-label={music ? "Mute music" : "Play music"} onClick={() => setMusic((value) => !value)} className="glass rounded-full p-3 text-rose-100 transition hover:bg-white/20">{music ? <Volume2 size={18} /> : <VolumeX size={18} />}</button>
    </header>
    <nav aria-label="Story progress" className="relative z-20 mx-auto flex max-w-2xl items-center justify-center gap-1 px-5 pb-2 sm:gap-3">
      {steps.map((step, index) => <div key={step.href} className="flex items-center gap-1 sm:gap-3">
        <Link href={index <= current + 1 ? step.href : "#"} aria-label={step.label} className={`grid h-2.5 w-2.5 rounded-full transition sm:h-3 sm:w-3 ${index <= current ? "bg-rose-400 shadow-[0_0_14px_#fb7185]" : "bg-white/25"} ${index === current ? "ring-4 ring-rose-300/20" : ""}`} />
        {index < steps.length - 1 && <span className={`h-px w-6 sm:w-14 ${index < current ? "bg-rose-400/70" : "bg-white/20"}`} />}
      </div>)}
    </nav>
    <AnimatePresence mode="wait"><motion.main key={pathname} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .45 }} className="relative z-10">{children}</motion.main></AnimatePresence>
    <footer className="relative z-10 mx-auto max-w-6xl px-5 py-10 text-center text-sm text-rose-100/45">made with all my heart for Tsitsi · {new Date().getFullYear()}</footer>
  </div>;
}
