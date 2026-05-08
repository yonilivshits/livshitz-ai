import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const TYPING_LINES = [
{ text: "const system = new ERP({ customized: true });", delay: 0 },
{ text: "system.automate('procurement', 'hr', 'reporting');", delay: 800 },
{ text: "system.connect('realtime_dashboard');", delay: 1600 },
{ text: "// חיסכון של 50%+ בשעות עבודה ✓", delay: 2400, green: true }];


function TerminalLine({ line, startDelay }) {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), startDelay);
    return () => clearTimeout(t);
  }, [startDelay]);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayed(line.text.slice(0, i));
      if (i >= line.text.length) clearInterval(interval);
    }, 28);
    return () => clearInterval(interval);
  }, [started, line.text]);

  if (!started && displayed === "") return <div className="h-5" />;

  return (
    <div className={`font-mono text-sm leading-relaxed ${line.green ? "text-primary" : "text-foreground/70"}`}>
      <span className="text-primary/50 mr-3 select-none">›</span>
      {displayed}
      {displayed.length < line.text.length && started &&
      <span className="inline-block w-2 h-4 bg-primary ml-0.5 animate-pulse align-middle" />
      }
    </div>);

}

function ParticleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 1.5 + 0.5
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(74, 222, 128, 0.35)";
        ctx.fill();
      });
      // draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(74, 222, 128, ${0.08 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      <ParticleCanvas />

      {/* Glow orbs */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(74,222,128,1) 1px, transparent 1px), linear-gradient(90deg, rgba(74,222,128,1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px"
        }} />
      

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-24 pt-32">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">

          {/* Left: Text */}
          <div className="flex-1 text-center lg:text-right max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-8">
              
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="font-mono text-primary text-xs tracking-widest">NO-CODE · ERP · CRM · AI</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-heebo font-black text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-6">
              
              המערכת צריכה
              <br />
              <span className="text-primary">להסתגל אליך</span>
              <br />
              לא להיפך
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-heebo font-light text-lg text-muted-foreground leading-relaxed mb-10 max-w-xl">
              
              אני בונה לעסקים מערכות ERP ו-CRM מותאמות אישית, שחוסכות שעות עבודה,
              מבטלות ניירת מיותרת, ונותנות לך תמונה בזמן אמת של מה שקורה בעסק.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              
              <a
                href="#contact"
                className="group relative bg-primary text-primary-foreground font-heebo font-bold px-8 py-3.5 rounded-xl text-base hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 overflow-hidden">
                
                <span className="relative z-10">בואו נדבר</span>
                <div className="absolute inset-0 bg-white/10 translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
              </a>
              <a
                href="#pains"
                className="text-muted-foreground font-heebo font-medium flex items-center gap-2 hover:text-foreground transition-colors duration-200 text-sm">
                
                <ArrowDown className="w-4 h-4" />
                גלה עוד
              </a>
            </motion.div>
          </div>

          {/* Right: Terminal + GIF */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="flex-shrink-0 w-full max-w-md lg:max-w-lg">
            
            {/* Terminal window */}
            













            

            {/* GIF below terminal */}
            <div className="mt-4 flex justify-center">
              <div className="w-56 h-56 md:w-72 md:h-72">
                <img src="https://media.base44.com/videos/public/69f81e40fcd63302d3cc609c/6456849b7___.mp4"

                alt="AI animation"
                className="w-full h-full object-contain"
                style={{ mixBlendMode: "screen" }} />
                
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>);

}