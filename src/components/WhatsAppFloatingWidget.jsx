import React from 'react';
import { MessageSquare } from 'lucide-react';

export default function WhatsAppFloatingWidget() {
  return (
    <a
      href="https://wa.me/919998074759?text=Hi%20Dreamer%20Technologies!%20I%20would%20like%20to%20discuss%20a%20CRM%20%2F%20IPPBX%20project."
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-40 group flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-3 rounded-full shadow-xl shadow-emerald-950/30 transition-all hover:scale-105"
    >
      <MessageSquare className="w-5 h-5 fill-white" />
      <span className="text-xs font-bold hidden sm:inline">Chat on WhatsApp</span>
    </a>
  );
}