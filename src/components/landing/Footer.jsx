import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center">
            <span className="font-mono text-primary font-bold text-xs">YL</span>
          </div>
          <span className="font-heebo font-bold text-foreground text-sm">יונתן ליבשיץ</span>
        </div>
        <span className="font-mono text-muted-foreground text-xs">
          © {new Date().getFullYear()} // all rights reserved
        </span>
        <span className="font-mono text-primary/40 text-xs">
          built with no-code · AI · ❤
        </span>
      </div>
    </footer>
  );
}