"use client"

import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

interface WhatsAppButtonProps {
  className?: string
  variant?: "default" | "outline" | "secondary"
  size?: "default" | "sm" | "lg"
}

export function WhatsAppButton({ className, variant = "secondary", size = "default" }: WhatsAppButtonProps) {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/33650334116", "_blank")
  }

  return (
    <Button onClick={handleWhatsAppClick} variant={variant} size={size} className={className}>
      <MessageCircle className="w-4 h-4 mr-2" />
      Réserver sur WhatsApp
    </Button>
  )
}
