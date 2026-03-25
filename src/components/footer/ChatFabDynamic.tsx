"use client";

import dynamic from "next/dynamic";

const ChatFab = dynamic(() => import("./ChatFab").then((m) => m.ChatFab), {
  ssr: false,
});

export function ChatFabDynamic() {
  return <ChatFab />;
}
