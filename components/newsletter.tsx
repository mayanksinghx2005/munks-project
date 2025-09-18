"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, Gift, Crown } from "lucide-react"

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setTimeout(() => setIsSubscribed(false), 3000)
      setEmail("")
    }
  }

  return (
    <section className="py-20 bg-gradient-to-r from-primary via-secondary to-primary relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full animate-float" />
        <div
          className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-full animate-float"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="mb-12 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
              <Crown className="w-5 h-5 text-white" />
              <span className="text-white font-medium">Exclusive Membership</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Join the Royal Circle</h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Be the first to discover new collections, exclusive offers, and luxury experiences tailored just for you
            </p>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: Gift, title: "Exclusive Offers", desc: "Members-only discounts and early access" },
              { icon: Crown, title: "VIP Treatment", desc: "Priority customer service and support" },
              { icon: Mail, title: "Style Updates", desc: "Latest trends and fashion insights" },
            ].map((benefit, index) => (
              <div
                key={index}
                className="text-center animate-slide-in-left"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-white/80">{benefit.desc}</p>
              </div>
            ))}
          </div>

          {/* Newsletter Form */}
          <div className="max-w-md mx-auto animate-fade-in-up" style={{ animationDelay: "600ms" }}>
            {!isSubscribed ? (
              <form onSubmit={handleSubmit} className="flex gap-4">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-white/20 backdrop-blur-sm border-white/30 text-white placeholder:text-white/70 focus:bg-white/30"
                  required
                />
                <Button
                  type="submit"
                  className="bg-white text-primary hover:bg-white/90 px-8 hover-lift animate-pulse-glow"
                >
                  Join Now
                </Button>
              </form>
            ) : (
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 animate-scale-in">
                <div className="text-white text-xl font-bold mb-2">Welcome to the Royal Circle!</div>
                <div className="text-white/90">Check your email for exclusive offers</div>
              </div>
            )}

            <p className="text-white/70 text-sm mt-4">
              By subscribing, you agree to our Privacy Policy and Terms of Service
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
