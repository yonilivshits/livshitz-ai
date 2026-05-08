import React from "react";
import { motion } from "framer-motion";
import { Search, Lightbulb, Boxes } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "מיפוי תהליכים",
    desc: "נבין לעומק איך העסק שלכם עובד, מה הצרכים ומה הפערים.",
    code: "map_processes()",
  },
  {
    icon: Lightbulb,
    number: "02",
    title: "זיהוי הזדמנויות",
    desc: "נאתר את הנקודות שבהן אוטומציה והתאמה אישית יכולות לשנות הכל.",
    code: "find_opportunities()",
  },
  {
    icon: Boxes,
    number: "03",
    title: "בנייה מודולרית",
    desc: "נבנה מערכת גמישה שגדלה אתכם, ללא תלות בפלטפורמה אחת.",
    code: "build_modular()",
  },
];

export default function ProcessSteps() {
  return (
    <section id="process" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-primary text-xs tracking-[0.3em] uppercase block mb-4">
            // התהליך
          </span>
          <h2 className="font-heebo font-black text-3xl md:text-4xl text-foreground">
            שלושה שלבים. תוצאות אמיתיות.
          </h2>
        </motion.div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-16 right-[16.5%] left-[16.5%] h-px bg-gradient-to-l from-transparent via-primary/20 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="group text-center relative"
              >
                {/* Icon circle */}
                <div className="relative mx-auto w-16 h-16 mb-6">
                  <div className="w-full h-full rounded-2xl bg-card border border-border flex items-center justify-center group-hover:border-primary/40 group-hover:bg-primary/10 transition-all duration-400">
                    <step.icon className="w-7 h-7 text-muted-foreground group-hover:text-primary transition-colors duration-400" />
                  </div>
                  <div className="absolute -top-2 -left-2 w-5 h-5 rounded-full bg-background border border-primary/30 flex items-center justify-center">
                    <span className="font-mono text-primary text-[9px] font-bold">{step.number}</span>
                  </div>
                </div>

                <div className="font-mono text-primary/40 text-xs mb-3 group-hover:text-primary/70 transition-colors duration-400">
                  {step.code}
                </div>

                <h3 className="font-heebo font-bold text-lg text-foreground mb-3">{step.title}</h3>
                <p className="font-heebo text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}