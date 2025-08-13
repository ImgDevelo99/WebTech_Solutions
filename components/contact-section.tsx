"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", message: "" })
    alert("¡Mensaje enviado! Nos pondremos en contacto contigo pronto.")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-white mb-6">Ponte en Contacto</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            ¿Tienes un proyecto en mente o alguna consulta? Completa el formulario y nos pondremos en contacto contigo a
            la brevedad.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-white mb-2">
                Nombre Completo
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Ej: Juan Pérez"
                className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-700 focus:ring-2 focus:ring-green-700/20 transition-colors duration-300"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
                Correo Electrónico
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Ej: tuemail@dominio.com"
                className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-700 focus:ring-2 focus:ring-green-700/20 transition-colors duration-300"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-white mb-2">
                Tu Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Cuéntanos sobre tu proyecto o consulta..."
                className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-700 focus:ring-2 focus:ring-green-700/20 transition-colors duration-300 resize-vertical"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-green-700 hover:bg-green-600 text-white py-4 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-700/25"
            >
              Enviar Mensaje
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
