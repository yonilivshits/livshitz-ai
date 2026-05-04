import React from "react";
import { motion } from "framer-motion";
import { Clock, Fingerprint, Award } from "lucide-react";

const stats = [
  { icon: Clock, number: "50%+", label: "חיסכון בשעות עבודה" },
  { icon: Fingerprint, number: "100%", label: "מותאם אישית" },
  { icon: Award, number: "10+", label: "שנות ניסיון" },
];

export default function StatsBar() {
  return (
    <section className="relative -mt-16 z-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-card rounded-2xl shadow-xl shadow-foreground/5 border border-border p-8 md:p-10"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <stat.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="font-heebo font-black text-3xl md:text-4xl text-foreground mb-1">
                  {stat.number}
                </span>
                <span className="font-heebo text-muted-foreground text-sm font-medium">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}