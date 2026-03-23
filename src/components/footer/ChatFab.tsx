"use client";

export function ChatFab({ label = "Chat with us" }: { label?: string }) {
  return (
    <a
      href="#contact"
      className="fixed bottom-6 right-5 z-[60] inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-4 py-3 text-sm font-semibold text-ink shadow-card transition hover:brightness-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
    >
      <span aria-hidden>💬</span>
      {label}
    </a>
  );
}
