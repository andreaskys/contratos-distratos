"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { toast } from "sonner"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    type: "",
    message: "",
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Preparar dados para envio
      const emailData = {
        name: formData.name,
        email: formData.email,
        subject: `Contrato: ${formData.type}`,
        message: `Telefone: ${formData.phone}\n\nTipo de Contrato: ${formData.type}\n\n${formData.message}`,
      }

      // Enviar para API
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Erro ao enviar email')
      }

      // Sucesso
      toast.success('Mensagem enviada com sucesso! Entraremos em contato em breve.')
      setFormData({ name: "", email: "", phone: "", type: "", message: "" })
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Erro ao enviar mensagem'
      toast.error(errorMessage)
    } finally {
      setIsLoading(false)
    }
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
          disabled={isLoading}
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
          disabled={isLoading}
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
          disabled={isLoading}
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
          disabled={isLoading}
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
          disabled={isLoading}
          rows={5}
          placeholder="Descreva brevemente suas necessidades contratuais..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="border-2 resize-none"
        />
      </div>

      <Button 
        type="submit" 
        size="lg" 
        disabled={isLoading}
        className="w-full bg-foreground text-background hover:bg-foreground/90 disabled:opacity-50 cursor-wait"
      >
        {isLoading ? 'Enviando...' : 'Enviar Solicitação'}
      </Button>

      <p className="text-xs text-muted-foreground text-center">
        * Campos obrigatórios. Seus dados serão tratados com confidencialidade.
      </p>
    </form>
  )
}
