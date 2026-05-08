import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const stats = [
  { number: 50, suffix: "%+", label: "חיסכון בשעות עבודה", sub: "ממוצע לאחר הטמעה" },
  { number: 100, suffix: "%", label: "מותאם אישית", sub: "לכל עסק בנפרד" },
  { number: 10, suffix: "+", label: "שנות ניסיון", sub: "בניהול ואוטומציה" },
];

function CountUp({ target, suffix, inView }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / 50;
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 30);
    return () => clearInterval(timer);
  }, [inView, target]);
  return <span>{count}{suffix}</span>;
}

export default function StatsBar() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative py-0 px-6 -mt-8 z-20">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden border border-border shadow-2xl shadow-black/40"
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="bg-card/90 backdrop-blur-sm p-8 text-center relative group hover:bg-accent/30 transition-colors duration-300"
            >
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/3 transition-colors duration-300 rounded-none" />
              <div className="relative z-10">
                <div className="font-heebo font-black text-4xl md:text-5xl text-primary mb-2">
                  <CountUp target={stat.number} suffix={stat.suffix} inView={inView} />
                </div>
                <div className="font-heebo font-bold text-foreground text-base mb-1">{stat.label}</div>
                <div className="font-mono text-muted-foreground text-xs">{stat.sub}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}