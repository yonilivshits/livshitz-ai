import React from "react";
import { motion } from "framer-motion";
import { Search, Lightbulb, Blocks } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "מיפוי תהליכים",
    desc: "נבין לעומק איך העסק שלכם עובד, מה הצרכים ומה הפערים.",
  },
  {
    icon: Lightbulb,
    number: "02",
    title: "זיהוי הזדמנויות",
    desc: "נאתר את הנקודות שבהן אוטומציה והתאמה אישית יכולות לשנות הכל.",
  },
  {
    icon: Blocks,
    number: "03",
    title: "בנייה מודולרית",
    desc: "נבנה מערכת גמישה שגדלה אתכם, ללא תלות בפלטפורמה אחת.",
  },
];

export default function ProcessSteps() {
  return (
    <section id="process" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block font-heebo text-primary font-bold text-sm tracking-widest uppercase mb-4">
            איך זה עובד
          </span>
          <h2 className="font-heebo font-black text-3xl md:text-4xl text-foreground">
            התהליך — פשוט ויעיל
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative text-center group"
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-0 -translate-x-1/2 w-full h-px bg-border" />
              )}

              <div className="relative z-10 mx-auto w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:shadow-lg group-hover:shadow-primary/20 transition-all duration-500">
                <step.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors duration-500" />
              </div>

              <span className="block font-heebo text-primary/40 font-black text-5xl mb-3">
                {step.number}
              </span>
              <h3 className="font-heebo font-bold text-xl text-foreground mb-3">
                {step.title}
              </h3>
              <p className="font-heebo text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}