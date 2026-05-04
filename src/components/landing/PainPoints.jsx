import React from "react";
import { motion } from "framer-motion";
import { Banknote, Lock, FileSpreadsheet, EyeOff } from "lucide-react";

const pains = [
  {
    icon: Banknote,
    title: "משלמים הרבה, מקבלים מעט",
    desc: "מערכות יקרות שלא באמת עונות על הצרכים הספציפיים שלכם.",
  },
  {
    icon: Lock,
    title: "שבויים בתוכנה הלא נכונה",
    desc: "מתאימים את העסק לתוכנה, במקום שהתוכנה תתאים לעסק.",
  },
  {
    icon: FileSpreadsheet,
    title: "ניירת ואקסל ללא סוף",
    desc: "טבלאות על גבי טבלאות, כפילויות, ובזבוז זמן יקר.",
  },
  {
    icon: EyeOff,
    title: "אין תמונה ברורה של העסק",
    desc: "המידע מפוזר, אין דשבורד אחד שמראה מה באמת קורה.",
  },
];

export default function PainPoints() {
  return (
    <section id="pains" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block font-heebo text-primary font-bold text-sm tracking-widest uppercase mb-4">
            מכירים את זה?
          </span>
          <h2 className="font-heebo font-black text-3xl md:text-4xl text-foreground">
            הכאבים שמעכבים את העסק
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pains.map((pain, i) => (
            <motion.div
              key={pain.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative bg-card rounded-2xl border border-border p-8 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-500"
            >
              <div className="flex gap-5">
                <div className="shrink-0 w-14 h-14 rounded-2xl bg-destructive/10 flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-500">
                  <pain.icon className="w-6 h-6 text-destructive group-hover:text-primary transition-colors duration-500" />
                </div>
                <div>
                  <h3 className="font-heebo font-bold text-lg text-foreground mb-2">
                    {pain.title}
                  </h3>
                  <p className="font-heebo text-muted-foreground leading-relaxed text-sm">
                    {pain.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}