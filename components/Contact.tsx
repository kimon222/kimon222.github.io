"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send } from "lucide-react"

export default function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", { name, email, message })
    setName("")
    setEmail("")
    setMessage("")
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-b from-green-100 to-yellow-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-primary">Get in touch</h2>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
          <Input
            type="text"
            placeholder="your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="bg-white/50 backdrop-blur-sm"
          />
          <Input
            type="email"
            placeholder="your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-white/50 backdrop-blur-sm"
          />
          <Textarea
            placeholder="your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="min-h-[100px] bg-white/50 backdrop-blur-sm"
          />
          <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-white">
            Send message <Send className="ml-2 h-4 w-4" />
          </Button>
        </form>
      </div>
    </section>
  )
}

