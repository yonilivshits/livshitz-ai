import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, Loader2, Terminal } from "lucide-react";
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
    <section id="contact" className="py-28 px-6 relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(rgba(74,222,128,1) 1px, transparent 1px), linear-gradient(90deg, rgba(74,222,128,1) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/6 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono text-primary text-xs tracking-[0.3em] uppercase block mb-4">
            // צור קשר
          </span>
          <h2 className="font-heebo font-black text-3xl md:text-4xl text-foreground mb-4">
            מוכן לשנות את הדרך<br />
            <span className="text-primary">שהעסק שלך עובד?</span>
          </h2>
          <p className="font-heebo text-muted-foreground mb-10">
            השאירו פרטים ואחזור אליכם תוך 24 שעות
          </p>

          {sent ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-card border border-primary/30 rounded-2xl p-10"
            >
              <CheckCircle2 className="w-12 h-12 text-primary mx-auto mb-4" />
              <p className="font-heebo font-bold text-xl text-foreground mb-2">
                תודה! קיבלתי את הפרטים
              </p>
              <p className="font-mono text-primary/60 text-sm">// אחזור אליך בהקדם</p>
            </motion.div>
          ) : (
            <div className="bg-card/80 backdrop-blur-sm border border-border rounded-2xl overflow-hidden shadow-2xl shadow-black/30">
              {/* Terminal header */}
              <div className="flex items-center gap-2 px-5 py-3 border-b border-border bg-secondary/50">
                <div className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-primary/60" />
                <span className="font-mono text-xs text-muted-foreground mr-auto flex items-center gap-1.5">
                  <Terminal className="w-3 h-3" />
                  new_lead.submit()
                </span>
              </div>

              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                <div className="relative">
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 font-mono text-primary/40 text-xs pointer-events-none">name:</span>
                  <input
                    type="text"
                    placeholder="שם מלא"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    dir="rtl"
                    className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-3.5 pr-16 text-foreground placeholder:text-muted-foreground font-heebo text-sm focus:outline-none focus:border-primary/50 focus:bg-secondary transition-all"
                  />
                </div>
                <div className="relative">
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 font-mono text-primary/40 text-xs pointer-events-none">phone:</span>
                  <input
                    type="tel"
                    placeholder="מספר טלפון"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    dir="rtl"
                    className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-3.5 pr-16 text-foreground placeholder:text-muted-foreground font-heebo text-sm focus:outline-none focus:border-primary/50 focus:bg-secondary transition-all"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-primary text-primary-foreground font-heebo font-bold text-base px-8 py-3.5 rounded-xl hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 flex items-center justify-center gap-3 disabled:opacity-60 mt-2"
                >
                  {loading ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      שלח פרטים
                    </>
                  )}
                </button>
              </form>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}