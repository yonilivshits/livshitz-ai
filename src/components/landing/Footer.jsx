import React from "react";

export default function Footer() {
  return (
    <footer className="bg-foreground py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-heebo font-bold text-background text-lg">
          יונתן ליבשיץ
        </span>
        <span className="font-heebo text-background/50 text-sm">
          © {new Date().getFullYear()} כל הזכויות שמורות
        </span>
      </div>
    </footer>
  );
}