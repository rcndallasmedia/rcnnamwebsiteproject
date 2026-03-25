"use client";

export function ChatFab({ label = "Chat with us" }: { label?: string }) {
  return (
    <a
      href="#contact"
      className="focus-ring fixed bottom-6 right-5 z-[60] inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-4 py-3 text-sm font-semibold text-ink shadow-card transition duration-200 ease-out hover:brightness-105 motion-reduce:transition-none"
    >
      <span aria-hidden>💬</span>
      {label}
    </a>
  );
}
