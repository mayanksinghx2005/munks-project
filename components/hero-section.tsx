"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Play } from "lucide-react"
import { cn } from "@/lib/utils"

const heroSlides = [
  {
    id: 1,
    title: "Royal Collection 2024",
    subtitle: "Discover Luxury Redefined",
    description:
      "Experience the pinnacle of fashion with our exclusive royal collection featuring premium materials and exquisite craftsmanship.",
    image: "/luxury-fashion-model-wearing-elegant-royal-outfit.jpg",
    cta: "Shop Collection",
    accent: "New Arrival",
  },
  {
    id: 2,
    title: "Mens Premium Line",
    subtitle: "Sophistication Meets Style",
    description:
      "Elevate your wardrobe with our meticulously crafted mens collection designed for the modern gentleman.",
    image: "/sophisticated-male-model-in-luxury-suit.jpg",
    cta: "Explore Mens",
    accent: "Limited Edition",
  },
  {
    id: 3,
    title: "Womens Elegance",
    subtitle: "Grace in Every Thread",
    description: "Embrace timeless elegance with our womens collection that celebrates femininity and luxury.",
    image: "/elegant-female-model-in-luxury-dress.jpg",
    cta: "Shop Womens",
    accent: "Exclusive",
  },
]

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
    setIsAutoPlaying(false)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
  }

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Slides */}
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={cn(
            "absolute inset-0 transition-all duration-1000 ease-in-out",
            index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105",
          )}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent z-10" />
          <img src={slide.image || "/placeholder.svg"} alt={slide.title} className="w-full h-full object-cover" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-20 h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            {heroSlides.map((slide, index) => (
              <div
                key={slide.id}
                className={cn(
                  "transition-all duration-800",
                  index === currentSlide ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8",
                )}
              >
                {index === currentSlide && (
                  <>
                    <div className="mb-4 animate-fade-in-up">
                      <span className="inline-block px-4 py-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full text-primary font-medium text-sm">
                        {slide.accent}
                      </span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 animate-slide-in-left">
                      <span className="block">{slide.title.split(" ")[0]}</span>
                      <span className="block gradient-text">{slide.title.split(" ").slice(1).join(" ")}</span>
                    </h1>

                    <h2
                      className="text-2xl md:text-3xl text-white/90 mb-6 animate-slide-in-left"
                      style={{ animationDelay: "200ms" }}
                    >
                      {slide.subtitle}
                    </h2>

                    <p
                      className="text-lg text-white/80 mb-8 max-w-lg leading-relaxed animate-fade-in-up"
                      style={{ animationDelay: "400ms" }}
                    >
                      {slide.description}
                    </p>

                    <div
                      className="flex flex-col sm:flex-row gap-4 animate-fade-in-up"
                      style={{ animationDelay: "600ms" }}
                    >
                      <Button
                        size="lg"
                        className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg hover-lift animate-pulse-glow"
                      >
                        {slide.cta}
                      </Button>
                      <Button
                        variant="outline"
                        size="lg"
                        className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg hover-lift bg-transparent"
                      >
                        <Play className="w-5 h-5 mr-2" />
                        Watch Story
                      </Button>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" onClick={prevSlide} className="text-white hover:bg-white/20 hover-lift">
            <ChevronLeft className="w-6 h-6" />
          </Button>

          <div className="flex space-x-2">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-300",
                  index === currentSlide ? "bg-primary scale-125" : "bg-white/50 hover:bg-white/70",
                )}
              />
            ))}
          </div>

          <Button variant="ghost" size="icon" onClick={nextSlide} className="text-white hover:bg-white/20 hover-lift">
            <ChevronRight className="w-6 h-6" />
          </Button>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 right-10 animate-float" style={{ animationDelay: "1s" }}>
        <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full backdrop-blur-sm border border-white/10" />
      </div>
      <div className="absolute bottom-1/4 right-1/4 animate-float" style={{ animationDelay: "2s" }}>
        <div className="w-12 h-12 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-full backdrop-blur-sm border border-white/10" />
      </div>
    </section>
  )
}
