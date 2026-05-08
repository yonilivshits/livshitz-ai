import React from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-primary-foreground/3 rounded-full blur-3xl" />
        <div className="absolute top-10 left-10 w-2 h-2 bg-primary-foreground/20 rounded-full" />
        <div className="absolute top-1/3 right-20 w-1.5 h-1.5 bg-primary-foreground/15 rounded-full" />
        <div className="absolute bottom-20 right-1/3 w-1 h-1 bg-primary-foreground/20 rounded-full" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-4">
          {/* Text content */}
          <div className="flex-1 text-center lg:text-right">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <p className="text-primary-foreground/60 font-heebo font-medium text-sm md:text-base tracking-widest uppercase mb-6">
                פתרונות AI בתהליכי ארגון
              </p>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
              className="font-heebo font-black text-4xl md:text-5xl lg:text-6xl text-primary-foreground leading-tight mb-8"
            >
              המערכת צריכה להסתגל
              <br />
              <span className="relative">
                אליך
                <span className="absolute -bottom-2 right-0 left-0 h-1 bg-primary-foreground/30 rounded-full" />
              </span>
              {" — "}
              לא להיפך
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="font-heebo font-light text-lg md:text-xl text-primary-foreground/70 leading-relaxed max-w-xl mb-12"
            >
              אני בונה לעסקים מערכות ERP ו-CRM מותאמות אישית, שחוסכות שעות עבודה,
              מבטלות ניירת מיותרת, ונותנות לך תמונה בזמן אמת של מה שקורה בעסק.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
            >
              <a
                href="#contact"
                className="bg-primary-foreground text-primary font-heebo font-bold px-10 py-4 rounded-full text-lg hover:bg-primary-foreground/90 transition-all duration-300 hover:shadow-xl hover:shadow-primary-foreground/10 hover:-translate-y-0.5"
              >
                בואו נדבר
              </a>
              <a
                href="#pains"
                className="text-primary-foreground/70 font-heebo font-medium flex items-center gap-2 hover:text-primary-foreground transition-colors duration-200"
              >
                למד עוד
                <ArrowDown className="w-4 h-4" />
              </a>
            </motion.div>
          </div>

          {/* GIF with green-screen removal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="flex-shrink-0 w-72 h-72 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px] relative"
          >
            <img
              src="https://media.base44.com/images/public/69f81e40fcd63302d3cc609c/11510dac8_download2.gif"
              alt="AI animation"
              className="w-full h-full object-contain"
              style={{ mixBlendMode: "screen" }}
            />
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}