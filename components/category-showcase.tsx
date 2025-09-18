"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"

const categories = [
  {
    id: 1,
    name: "Mens Fashion",
    description: "Sophisticated styles for the modern gentleman",
    image: "/luxury-mens-fashion-suits-and-formal-wear.jpg",
    itemCount: "120+ Items",
    featured: true,
    gradient: "from-blue-600/80 to-purple-600/80",
  },
  {
    id: 2,
    name: "Womens Fashion",
    description: "Elegant designs that celebrate femininity",
    image: "/luxury-womens-fashion-dresses-and-elegant-wear.jpg",
    itemCount: "200+ Items",
    featured: true,
    gradient: "from-pink-600/80 to-rose-600/80",
  },
  {
    id: 3,
    name: "Mens Accessories",
    description: "Premium accessories to complete your look",
    image: "/luxury-mens-accessories-watches-belts-wallets.jpg",
    itemCount: "80+ Items",
    featured: false,
    gradient: "from-amber-600/80 to-orange-600/80",
  },
  {
    id: 4,
    name: "Womens Accessories",
    description: "Exquisite pieces for the discerning woman",
    image: "/luxury-womens-accessories-jewelry-handbags.jpg",
    itemCount: "150+ Items",
    featured: false,
    gradient: "from-emerald-600/80 to-teal-600/80",
  },
]

export function CategoryShowcase() {
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null)

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-primary font-medium">Shop by Category</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Curated Collections</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Discover our meticulously curated collections designed for those who appreciate the finer things in life
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <Card
              key={category.id}
              className={cn(
                "group relative overflow-hidden border-0 bg-transparent hover-lift animate-scale-in",
                category.featured ? "md:col-span-1 lg:row-span-2" : "",
              )}
              style={{ animationDelay: `${index * 150}ms` }}
              onMouseEnter={() => setHoveredCategory(category.id)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              <CardContent className="p-0 relative h-80 lg:h-96">
                {/* Background Image */}
                <div className="absolute inset-0 overflow-hidden rounded-lg">
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    className={cn(
                      "w-full h-full object-cover transition-all duration-700",
                      hoveredCategory === category.id ? "scale-110" : "scale-100",
                    )}
                  />
                  <div
                    className={cn(
                      "absolute inset-0 bg-gradient-to-t transition-all duration-500",
                      category.gradient,
                      hoveredCategory === category.id ? "opacity-80" : "opacity-60",
                    )}
                  />
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                  {category.featured && (
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium border border-white/30">
                        Featured
                      </span>
                    </div>
                  )}

                  <div
                    className={cn(
                      "transition-all duration-500",
                      hoveredCategory === category.id ? "transform translate-y-0" : "transform translate-y-2",
                    )}
                  >
                    <p className="text-sm opacity-90 mb-2">{category.itemCount}</p>
                    <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                    <p
                      className={cn(
                        "text-sm opacity-90 mb-4 transition-all duration-500",
                        hoveredCategory === category.id ? "opacity-100" : "opacity-0",
                      )}
                    >
                      {category.description}
                    </p>

                    <Button
                      variant="ghost"
                      className={cn(
                        "text-white border-white/30 hover:bg-white/20 transition-all duration-500 group/btn",
                        hoveredCategory === category.id ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
                      )}
                    >
                      Explore Collection
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </div>
                </div>

                {/* Shimmer Effect */}
                <div
                  className={cn(
                    "absolute inset-0 opacity-0 transition-opacity duration-500",
                    hoveredCategory === category.id ? "opacity-100" : "",
                  )}
                >
                  <div className="absolute inset-0 animate-shimmer" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: "800ms" }}>
          <Button
            size="lg"
            className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-8 py-4 text-lg hover-lift animate-pulse-glow"
          >
            View All Categories
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  )
}
