"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export function HeartPreloader() {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), 900);
    return () => window.clearTimeout(timer);
  }, []);
  return <AnimatePresence>{visible && <motion.div initial={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] grid place-items-center bg-plum">
    <div className="text-center"><div className="heart-loader mx-auto" /><p className="mt-5 font-display text-xl text-rose-200">A little something for you...</p></div>
  </motion.div>}</AnimatePresence>;
}
