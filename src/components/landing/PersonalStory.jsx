import React from "react";
import { motion } from "framer-motion";
import { Terminal, ChefHat, Code2, Rocket } from "lucide-react";

const timeline = [
  { icon: ChefHat, label: "ניהול מסעדות ואופרציות בקנה מידה גדול", sub: "כוח אדם, תהליכים, רכש ובקרה" },
  { icon: Terminal, label: "התנסות עם מערכות שבורות", sub: "סבלתי מאותן בעיות שכולם מכירים" },
  { icon: Code2, label: "למידת כלי No-Code", sub: "פיתחתי כלים לניהול הארגון שלי" },
  { icon: Rocket, label: "מביא את הידע לעסקים אחרים", sub: "ניסיון אמיתי + טכנולוגיה מודרנית" },
];

export default function PersonalStory() {
  return (
    <section id="story" className="py-28 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-secondary/40" />
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(rgba(74,222,128,1) 1px, transparent 1px), linear-gradient(90deg, rgba(74,222,128,1) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />
      <div className="absolute top-0 right-1/3 w-72 h-72 bg-primary/8 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: Story text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-mono text-primary text-xs tracking-[0.3em] uppercase block mb-4">
              // הסיפור שלי
            </span>
            <h2 className="font-heebo font-black text-3xl md:text-4xl text-foreground mb-6">
              ניסיון מהשטח.<br />
              <span className="text-primary">לא מהספרים.</span>
            </h2>
            <p className="font-heebo text-muted-foreground text-base leading-relaxed mb-6">
              שנים ניהלתי מסעדות ואופרציות בקנה מידה גדול. הייתי אחראי על כוח אדם,
              תהליכים, רכש ובקרה.
            </p>
            <p className="font-heebo text-muted-foreground text-base leading-relaxed mb-6">
              סבלתי מאותן מערכות שבורות שכולם מכירים. התחלתי ללמוד כלי No-Code,
              פיתחתי כלים לניהול הארגון שלי.
            </p>
            <p className="font-heebo text-foreground font-medium text-base leading-relaxed">
              כיום אני מביא את הידע הזה לעסקים אחרים — עם הבנה אמיתית של מה עסק צריך.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center font-heebo font-black text-primary text-lg">
                י
              </div>
              <div>
                <div className="font-heebo font-bold text-foreground">יונתן ליבשיץ</div>
                <div className="font-mono text-primary/60 text-xs">AI Solutions Architect</div>
              </div>
            </div>
          </motion.div>

          {/* Right: Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-4"
          >
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-center gap-4 bg-card/60 backdrop-blur-sm border border-border rounded-xl p-4 hover:border-primary/30 transition-colors duration-300 group"
              >
                <div className="shrink-0 w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-heebo font-semibold text-foreground text-sm">{item.label}</div>
                  <div className="font-mono text-muted-foreground text-xs mt-0.5">{item.sub}</div>
                </div>
                <div className="mr-auto shrink-0 w-6 h-6 rounded-full border border-primary/20 flex items-center justify-center">
                  <span className="font-mono text-primary/60 text-xs">{String(i + 1).padStart(2, "0")}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}