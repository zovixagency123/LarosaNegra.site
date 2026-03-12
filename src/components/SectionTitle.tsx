import { motion } from "motion/react";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionTitle({ title, subtitle, align = "center" }: SectionTitleProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className={`mb-12 ${align === "center" ? "text-center" : "text-left"}`}
    >
      {subtitle && (
        <span className="text-accent uppercase tracking-[0.3em] text-xs font-medium mb-2 block">
          {subtitle}
        </span>
      )}
      <h2 className="text-4xl md:text-5xl font-serif text-warm-white">
        {title}
      </h2>
      <div className={`h-px w-24 bg-accent/30 mt-4 ${align === "center" ? "mx-auto" : ""}`} />
    </motion.div>
  );
}
