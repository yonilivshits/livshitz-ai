import React from "react";
import { motion } from "framer-motion";
import { Timer, BarChart3, Layers, DollarSign } from "lucide-react";

const benefits = [
{
  icon: Timer,
  title: "חיסכון בשעות עבודה",
  desc: "אוטומציה של תהליכים חוזרים מפנה זמן למה שבאמת חשוב.",
  metric: "50%+",
  metricLabel: "פחות עבודה ידנית"
},
{
  icon: BarChart3,
  title: "תמונה בזמן אמת",
  desc: "דשבורדים חיים שנותנים תמונה מלאה של מצב העסק בכל רגע.",
  metric: "360°",
  metricLabel: "ויזיביליות מלאה"
},
{
  icon: Layers,
  title: "גמישות מלאה",
  desc: "המערכת מתאימה את עצמה לתהליכים שלכם ולא להיפך.",
  metric: "100%",
  metricLabel: "מותאם לעסק שלכם"
},
{
  icon: DollarSign,
  title: "עלות הגיונית",
  desc: "פתרון מותאם אישית בעלות שהגיונית לעסקים קטנים ובינוניים.",
  metric: "ROI",
  metricLabel: "חיובי מהיר"
}];


export default function Benefits() {
  return (
    <section id="benefits" className="py-28 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-secondary/30" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/6 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16">
          
          <span className="font-mono text-primary tracking-[0.3em] uppercase block mb-4 text-sm font-bold"> למה לבחור בי

          </span>
          <h2 className="font-heebo font-black text-3xl md:text-4xl text-foreground">
            היתרונות שתקבלו
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {benefits.map((benefit, i) =>
          <motion.div
            key={benefit.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="group relative bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-6 hover:border-primary/30 transition-all duration-400 overflow-hidden">
            
              <div className="absolute inset-0 bg-gradient-to-b from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-transparent transition-all duration-500" />

              <div className="relative z-10">
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors duration-400">
                  <benefit.icon className="w-5 h-5 text-primary" />
                </div>

                <div className="font-heebo font-black text-2xl text-primary mb-0.5">{benefit.metric}</div>
                <div className="font-mono text-primary/50 text-xs mb-4">{benefit.metricLabel}</div>

                <h3 className="font-heebo font-bold text-sm text-foreground mb-2">{benefit.title}</h3>
                <p className="font-heebo text-muted-foreground text-xs leading-relaxed">{benefit.desc}</p>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}