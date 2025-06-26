"use client"

import { FaWhatsapp } from "react-icons/fa" // Official WhatsApp icon

export function WhatsAppFloat() {
  const openWhatsApp = () => {
    const phoneNumber = "7737726976"
    const message = "Hi! I need help with mobile repair services."
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <button
      onClick={openWhatsApp}
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 z-50 animate-pulse"
      aria-label="Contact us on WhatsApp"
    >
      <FaWhatsapp className="h-6 w-6" />
    </button>
  )
}
