"use client"

import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function FloatingWhatsApp() {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/33650334116", "_blank")
  }

  return (
    <Button
      onClick={handleWhatsAppClick}
      size="lg"
      className="fixed bottom-6 right-6 z-50 rounded-full w-14 h-14 bg-secondary hover:bg-secondary/90 shadow-lg"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="sr-only">Contacter via WhatsApp</span>
    </Button>
  )
}
