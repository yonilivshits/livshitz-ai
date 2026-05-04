import React from "react";
import { motion } from "framer-motion";
import { Timer, BarChart3, Settings2, Wallet } from "lucide-react";

const benefits = [
  {
    icon: Timer,
    title: "חיסכון בשעות עבודה",
    desc: "אוטומציה של תהליכים חוזרים מפנה זמן למה שבאמת חשוב.",
  },
  {
    icon: BarChart3,
    title: "תמונה בזמן אמת",
    desc: "דשבורדים חיים שנותנים תמונה מלאה של מצב העסק בכל רגע.",
  },
  {
    icon: Settings2,
    title: "גמישות מלאה",
    desc: "המערכת מתאימה את עצמה לתהליכים שלכם ולא להיפך.",
  },
  {
    icon: Wallet,
    title: "עלות הגיונית",
    desc: "פתרון מותאם אישית בעלות שהגיונית לעסקים קטנים ובינוניים.",
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-24 md:py-32 px-6 bg-muted/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block font-heebo text-primary font-bold text-sm tracking-widest uppercase mb-4">
            למה לבחור בי
          </span>
          <h2 className="font-heebo font-black text-3xl md:text-4xl text-foreground">
            היתרונות שתקבלו
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card rounded-2xl border border-border p-8 text-center hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-500 group"
            >
              <div className="mx-auto w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-500">
                <benefit.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-500" />
              </div>
              <h3 className="font-heebo font-bold text-lg text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="font-heebo text-muted-foreground text-sm leading-relaxed">
                {benefit.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}