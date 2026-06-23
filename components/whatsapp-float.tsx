"use client"

import { FaWhatsapp } from "react-icons/fa"

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/573115654554"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#1ebe5a] rounded-full flex items-center justify-center shadow-lg shadow-black/20 hover:shadow-xl transition-all duration-300 transform hover:scale-110"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="text-2xl text-white" />
    </a>
  )
}
