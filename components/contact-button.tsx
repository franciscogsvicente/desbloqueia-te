"use client"

import { MessageCircle } from "lucide-react"
import { useState } from "react"

export function ContactButton() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href="https://wa.me/351913602519?text=Quero%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20Clube%20do%20Livro%21"
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-center transition-all duration-300 ${
          isHovered ? "bg-pink-700 pr-4" : "bg-pink-600"
        } text-white rounded-full shadow-lg`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="h-14 w-14 flex items-center justify-center rounded-full">
          <MessageCircle className="h-6 w-6" />
        </div>
        {isHovered && <span className="font-medium whitespace-nowrap pr-1">Falar com Suporte</span>}
      </a>
    </div>
  )
}
