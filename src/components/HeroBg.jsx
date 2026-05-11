import { motion } from "framer-motion";

export default function HeroBg() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_20%_20%,rgba(201,107,74,0.35),transparent_60%),radial-gradient(50%_50%_at_80%_30%,rgba(143,175,147,0.25),transparent_60%),radial-gradient(60%_60%_at_60%_90%,rgba(201,107,74,0.18),transparent_60%)]" />
      <motion.div
        className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-white/10 blur-3xl"
        animate={{ x: [0, 40, 0], y: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-white/5 blur-3xl"
        animate={{ x: [0, -30, 0], y: [0, -25, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-forest/10 to-brand-forest" />
    </div>
  );
}