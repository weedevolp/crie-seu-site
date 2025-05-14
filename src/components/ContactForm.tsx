"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: ""
  })
  const [errors, setErrors] = useState({
    name: "",
    phone: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Reset errors
    setErrors({ name: "", phone: "" })
    
    // Validate
    let hasError = false
    if (!formData.name) {
      setErrors(prev => ({ ...prev, name: "Nome é obrigatório" }))
      hasError = true
    }
    if (!formData.phone) {
      setErrors(prev => ({ ...prev, phone: "Telefone é obrigatório" }))
      hasError = true
    }

    if (hasError) return

    // Format WhatsApp message
    const message = `Olá, meu nome é ${formData.name} e preciso de um site! Meu telefone: ${formData.phone}`
    const whatsappUrl = `https://wa.me/5534991628328?text=${encodeURIComponent(message)}`
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, "_blank")
  }

  return (
    <Card className="w-full max-w-md mx-auto p-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Input
            type="text"
            placeholder="Seu nome"
            value={formData.name}
            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
            className={errors.name ? "border-red-500" : ""}
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>
        
        <div>
          <Input
            type="tel"
            placeholder="Seu telefone"
            value={formData.phone}
            onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
            className={errors.phone ? "border-red-500" : ""}
          />
          {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
        </div>

        <Button type="submit" className="w-full bg-gray-900 hover:bg-gray-800">
          Enviar Mensagem
        </Button>
      </form>
    </Card>
  )
}
