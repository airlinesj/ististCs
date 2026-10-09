"use client";

import { motion } from "framer-motion";
import { ArrowRight, CalendarDays, Maximize2, Upload, X } from "lucide-react";
import Link from "next/link";
import { ChangeEvent, DragEvent, useEffect, useState } from "react";
import { PageIntro } from "@/components/PageIntro";

type Memory = { id: string; src: string; caption: string; date: string; mood: string };
const starter: Memory[] = [
  { id: "one", src: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=900&q=80", caption: "The kind of day I wish I could bottle.", date: "A favorite day", mood: "golden" },
  { id: "two", src: "https://images.unsplash.com/photo-1494774157365-9e04c6720e47?auto=format&fit=crop&w=900&q=80", caption: "You make ordinary feel like magic.", date: "Always", mood: "soft" },
  { id: "three", src: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=900&q=80", caption: "A thousand tiny reasons to smile.", date: "Us", mood: "joy" },
];

export default function Memories() {
  const [memories, setMemories] = useState<Memory[]>(starter);
  const [busy, setBusy] = useState(false);
  const [caption, setCaption] = useState("");
  const [selected, setSelected] = useState<Memory | null>(null);
  useEffect(() => { const saved = localStorage.getItem("tsitsi-memories"); if (saved) setMemories(JSON.parse(saved)); }, []);
  const addFile = (file?: File) => {
    if (!file || !file.type.startsWith("image/")) return;
    setBusy(true);
    const reader = new FileReader();
    reader.onload = () => {
      const image = new Image();
      image.onload = () => {
        const scale = Math.min(1, 1400 / Math.max(image.naturalWidth, image.naturalHeight));
        const canvas = document.createElement("canvas");
        canvas.width = Math.round(image.naturalWidth * scale);
        canvas.height = Math.round(image.naturalHeight * scale);
        canvas.getContext("2d")?.drawImage(image, 0, 0, canvas.width, canvas.height);
        const memory = { id: crypto.randomUUID(), src: canvas.toDataURL("image/jpeg", .86), caption: caption || "A new page in our story.", date: new Date().toLocaleDateString(), mood: "new" };
        setMemories((items) => { const next = [memory, ...items]; localStorage.setItem("tsitsi-memories", JSON.stringify(next)); return next; });
        setCaption("");
        setBusy(false);
      };
      image.src = String(reader.result);
    };
    reader.readAsDataURL(file);
  };
  const onDrop = (event: DragEvent<HTMLLabelElement>) => { event.preventDefault(); addFile(event.dataTransfer.files[0]); };
  const onChange = (event: ChangeEvent<HTMLInputElement>) => addFile(event.target.files?.[0]);
  return <section className="mx-auto max-w-6xl px-5 py-20"><PageIntro eyebrow="chapter three · our little archive" title="Memories, kept warm">Add the snapshots that make your heart do that little flutter.</PageIntro>
    <div className="mx-auto mt-12 max-w-2xl"><input value={caption} onChange={(e) => setCaption(e.target.value)} placeholder="A caption for your next memory..." className="mb-4 w-full rounded-xl border border-white/15 bg-white/10 px-5 py-3 text-cream outline-none placeholder:text-rose-100/35 focus:border-rose-300/60" />
      <label onDrop={onDrop} onDragOver={(e) => e.preventDefault()} className="glass flex cursor-pointer flex-col items-center justify-center rounded-2xl border-dashed p-8 text-center transition hover:border-rose-300/60 hover:bg-white/15"><input type="file" accept="image/*" onChange={onChange} className="hidden" />{busy ? <div className="action-loader" /> : <><Upload className="mb-3 text-rose-300" /><p className="font-semibold text-rose-50">Drop a memory here</p><p className="mt-1 text-sm text-rose-100/50">or click to choose a photo · saved only in this browser</p></>}</label>
    </div>
    <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">{memories.map((memory, index) => <motion.button type="button" whileHover={{ rotate: 0, y: -8, scale: 1.02 }} onClick={() => setSelected(memory)} key={memory.id} className={`group rounded-sm bg-[#fffaf2] p-3 pb-6 text-left shadow-2xl shadow-black/25 ${index % 2 ? "rotate-2" : "-rotate-2"}`}><div className="relative aspect-[4/3] overflow-hidden bg-rose-100"><img src={memory.src} alt={memory.caption} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" /><Maximize2 className="absolute right-3 top-3 rounded-full bg-black/40 p-2 text-white opacity-0 transition group-hover:opacity-100" size={34} /></div><p className="mt-4 font-display text-xl text-plum">{memory.caption}</p><p className="mt-2 flex items-center gap-2 text-xs uppercase tracking-widest text-plum/50"><CalendarDays size={13} /> {memory.date} · {memory.mood}</p></motion.button>)}</div>
    <div className="mt-16 text-center"><Link href="/letter" className="inline-flex items-center gap-3 rounded-full bg-rose-500 px-7 py-4 font-semibold text-white transition hover:bg-rose-400">Read What My Heart Says 💌 <ArrowRight size={18} /></Link></div>
    {selected && <div role="dialog" aria-modal="true" className="fixed inset-0 z-50 grid place-items-center bg-black/80 p-5" onClick={() => setSelected(null)}><button aria-label="Close memory" className="absolute right-5 top-5 rounded-full bg-white/10 p-2 text-white"><X /></button><img src={selected.src} alt={selected.caption} className="max-h-[85vh] max-w-full rounded-lg object-contain" onClick={(e) => e.stopPropagation()} /></div>}
  </section>;
}
