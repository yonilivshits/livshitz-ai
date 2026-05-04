import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function PersonalStory() {
  return (
    <section id="story" className="py-24 md:py-32 px-6 bg-primary">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-foreground/10 mb-10">
            <Quote className="w-7 h-7 text-primary-foreground/60" />
          </div>

          <span className="block font-heebo text-primary-foreground/50 font-bold text-sm tracking-widest uppercase mb-6">
            הסיפור שלי
          </span>

          <p className="font-heebo font-light text-xl md:text-2xl text-primary-foreground/90 leading-relaxed mb-8">
            שנים ניהלתי מסעדות ואופרציות בקנה מידה גדול. הייתי אחראי על כוח אדם,
            תהליכים, רכש ובקרה. סבלתי מאותן מערכות שבורות שכולם מכירים.
          </p>

          <p className="font-heebo font-light text-xl md:text-2xl text-primary-foreground/90 leading-relaxed mb-12">
            התחלתי ללמוד כלי No-Code, פיתחתי כלים לניהול הארגון שלי, וכיום אני
            מביא את הידע הזה לעסקים אחרים.
          </p>

          <div className="flex flex-col items-center gap-2">
            <span className="font-heebo font-bold text-primary-foreground text-lg">
              יונתן ליבשיץ
            </span>
            <span className="font-heebo text-primary-foreground/50 text-sm">
              פתרונות AI בתהליכי ארגון
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}