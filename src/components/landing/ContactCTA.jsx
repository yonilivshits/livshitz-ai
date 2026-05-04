import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, Loader2 } from "lucide-react";
import { base44 } from "@/api/base44Client";

export default function ContactCTA() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;
    setLoading(true);
    await base44.entities.Lead.create({ name, phone, source: "landing_page" });
    setLoading(false);
    setSent(true);
  };

  return (
    <section id="contact" className="py-24 md:py-32 px-6 bg-primary relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary-foreground/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-foreground/3 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-heebo font-black text-3xl md:text-4xl text-primary-foreground mb-4">
            מוכן לשנות את הדרך
            <br />
            שהעסק שלך עובד?
          </h2>
          <p className="font-heebo text-primary-foreground/60 text-lg mb-12">
            השאירו פרטים ואחזור אליכם תוך 24 שעות
          </p>

          {sent ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-10 border border-primary-foreground/10"
            >
              <CheckCircle2 className="w-14 h-14 text-primary-foreground mx-auto mb-4" />
              <p className="font-heebo font-bold text-xl text-primary-foreground mb-2">
                תודה! קיבלתי את הפרטים
              </p>
              <p className="font-heebo text-primary-foreground/60">
                אחזור אליך בהקדם
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="שם מלא"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/15 rounded-xl px-6 py-4 text-primary-foreground placeholder:text-primary-foreground/40 font-heebo focus:outline-none focus:border-primary-foreground/40 transition-colors"
              />
              <input
                type="tel"
                placeholder="מספר טלפון"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="w-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/15 rounded-xl px-6 py-4 text-primary-foreground placeholder:text-primary-foreground/40 font-heebo focus:outline-none focus:border-primary-foreground/40 transition-colors"
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-primary-foreground text-primary font-heebo font-bold text-lg px-8 py-4 rounded-xl hover:bg-primary-foreground/90 transition-all duration-300 hover:shadow-xl hover:shadow-primary-foreground/10 flex items-center justify-center gap-3 disabled:opacity-70"
              >
                {loading ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    שליחה
                    <Send className="w-5 h-5 rotate-180" />
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}