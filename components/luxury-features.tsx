"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Shield, Truck, Crown, Headphones, Award, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"

const features = [
  {
    icon: Crown,
    title: "Premium Quality",
    description: "Handcrafted with the finest materials and attention to detail",
    gradient: "from-yellow-400 to-orange-500",
  },
  {
    icon: Shield,
    title: "Lifetime Warranty",
    description: "Comprehensive protection for all your luxury purchases",
    gradient: "from-blue-400 to-purple-500",
  },
  {
    icon: Truck,
    title: "Express Delivery",
    description: "Free worldwide shipping with white-glove service",
    gradient: "from-green-400 to-emerald-500",
  },
  {
    icon: Headphones,
    title: "24/7 Concierge",
    description: "Personal shopping assistance whenever you need it",
    gradient: "from-pink-400 to-rose-500",
  },
  {
    icon: Award,
    title: "Authenticity Guaranteed",
    description: "Every piece comes with a certificate of authenticity",
    gradient: "from-purple-400 to-indigo-500",
  },
  {
    icon: Sparkles,
    title: "Exclusive Access",
    description: "First access to limited collections and special events",
    gradient: "from-cyan-400 to-blue-500",
  },
]

export function LuxuryFeatures() {
  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">The WolvarX Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Discover what makes shopping with us an extraordinary journey of luxury and sophistication
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className={cn(
                "group relative overflow-hidden border-0 bg-card/50 backdrop-blur-sm hover-lift animate-scale-in",
                "hover:bg-card/80 transition-all duration-500",
              )}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-8 text-center">
                {/* Icon */}
                <div className="relative mb-6">
                  <div
                    className={cn(
                      "w-20 h-20 mx-auto rounded-full bg-gradient-to-br flex items-center justify-center",
                      "group-hover:scale-110 transition-all duration-500 animate-float",
                      feature.gradient,
                    )}
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <feature.icon className="w-10 h-10 text-white" />
                  </div>

                  {/* Glow Effect */}
                  <div
                    className={cn(
                      "absolute inset-0 w-20 h-20 mx-auto rounded-full bg-gradient-to-br opacity-0",
                      "group-hover:opacity-30 transition-all duration-500 blur-xl",
                      feature.gradient,
                    )}
                  />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>

                {/* Shimmer Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 animate-shimmer" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in-up"
          style={{ animationDelay: "800ms" }}
        >
          {[
            { number: "50K+", label: "Happy Customers" },
            { number: "1000+", label: "Premium Products" },
            { number: "25+", label: "Countries Served" },
            { number: "99.9%", label: "Satisfaction Rate" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">{stat.number}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
