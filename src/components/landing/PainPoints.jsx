import React from "react";
import { motion } from "framer-motion";
import { Banknote, Lock, FileSpreadsheet, EyeOff } from "lucide-react";

const pains = [
  {
    icon: Banknote,
    code: "ERR_001",
    title: "משלמים הרבה, מקבלים מעט",
    desc: "מערכות יקרות שלא באמת עונות על הצרכים הספציפיים שלכם. כל תוספת עולה עוד כסף.",
  },
  {
    icon: Lock,
    code: "ERR_002",
    title: "שבויים בתוכנה הלא נכונה",
    desc: "מתאימים את העסק לתוכנה, במקום שהתוכנה תתאים לעסק. vendor lock-in שמעכב אתכם.",
  },
  {
    icon: FileSpreadsheet,
    code: "ERR_003",
    title: "ניירת ואקסל ללא סוף",
    desc: "טבלאות על גבי טבלאות, כפילויות, ובזבוז זמן יקר. כל עדכון ידני מסכן טעויות.",
  },
  {
    icon: EyeOff,
    code: "ERR_004",
    title: "אין תמונה ברורה של העסק",
    desc: "המידע מפוזר, אין דשבורד אחד שמראה מה קורה. קבלת החלטות בחושך.",
  },
];

export default function PainPoints() {
  return (
    <section id="pains" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-primary text-xs tracking-[0.3em] uppercase block mb-4">
            // מכירים את זה?
          </span>
          <h2 className="font-heebo font-black text-3xl md:text-4xl text-foreground">
            הכאבים שמעכבים את העסק
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {pains.map((pain, i) => (
            <motion.div
              key={pain.code}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group relative bg-card border border-border rounded-2xl p-6 hover:border-primary/30 transition-all duration-400 overflow-hidden cursor-default"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-transparent transition-all duration-500 pointer-events-none" />

              <div className="flex items-start gap-5 relative z-10">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-destructive/10 border border-destructive/20 flex items-center justify-center group-hover:border-primary/30 group-hover:bg-primary/10 transition-all duration-400">
                  <pain.icon className="w-5 h-5 text-destructive group-hover:text-primary transition-colors duration-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-heebo font-bold text-base text-foreground">{pain.title}</h3>
                    <span className="font-mono text-xs text-destructive/60 group-hover:text-primary/50 transition-colors duration-400">{pain.code}</span>
                  </div>
                  <p className="font-heebo text-muted-foreground text-sm leading-relaxed">{pain.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}