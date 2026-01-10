"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    type: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // form feature to add here
    console.log("Form submitted:", formData)
    alert("Mensagem enviada com sucesso! Entraremos em contato em breve.")
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-background border-2 border-border p-8">
      <div className="space-y-2">
        <Label htmlFor="name" className="text-sm font-medium text-foreground">
          Nome completo *
        </Label>
        <Input
          id="name"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="border-2"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className="text-sm font-medium text-foreground">
          Email *
        </Label>
        <Input
          id="email"
          type="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="border-2"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone" className="text-sm font-medium text-foreground">
          Telefone *
        </Label>
        <Input
          id="phone"
          type="tel"
          required
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="border-2"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="type" className="text-sm font-medium text-foreground">
          Tipo de contrato *
        </Label>
        <Input
          id="type"
          required
          placeholder="Ex: Contrato de prestação de serviços"
          value={formData.type}
          onChange={(e) => setFormData({ ...formData, type: e.target.value })}
          className="border-2"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="text-sm font-medium text-foreground">
          Mensagem *
        </Label>
        <Textarea
          id="message"
          required
          rows={5}
          placeholder="Descreva brevemente suas necessidades contratuais..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="border-2 resize-none"
        />
      </div>

      <Button type="submit" size="lg" className="w-full bg-foreground text-background hover:bg-foreground/90">
        Enviar Solicitação
      </Button>

      <p className="text-xs text-muted-foreground text-center">
        * Campos obrigatórios. Seus dados serão tratados com confidencialidade.
      </p>
    </form>
  )
}
