"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, ShoppingBag, Star, Eye } from "lucide-react"
import { cn } from "@/lib/utils"

const products = [
  {
    id: 1,
    name: "Royal Velvet Blazer",
    category: "Mens Fashion",
    price: 899,
    originalPrice: 1299,
    rating: 4.9,
    reviews: 127,
    image: "/luxury-mens-velvet-blazer-royal-blue.jpg",
    badge: "Best Seller",
    colors: ["#1e40af", "#7c2d12", "#166534"],
    isNew: false,
    isSale: true,
  },
  {
    id: 2,
    name: "Silk Evening Gown",
    category: "Womens Fashion",
    price: 1299,
    originalPrice: null,
    rating: 5.0,
    reviews: 89,
    image: "/luxury-womens-silk-evening-gown-elegant.jpg",
    badge: "Exclusive",
    colors: ["#be123c", "#1f2937", "#059669"],
    isNew: true,
    isSale: false,
  },
  {
    id: 3,
    name: "Diamond Cufflinks",
    category: "Mens Accessories",
    price: 599,
    originalPrice: null,
    rating: 4.8,
    reviews: 45,
    image: "/luxury-diamond-cufflinks-mens-accessories.jpg",
    badge: "Limited",
    colors: ["#d4d4d8", "#fbbf24", "#be123c"],
    isNew: false,
    isSale: false,
  },
  {
    id: 4,
    name: "Pearl Necklace Set",
    category: "Womens Accessories",
    price: 799,
    originalPrice: 999,
    rating: 4.9,
    reviews: 156,
    image: "/luxury-pearl-necklace-set-womens-jewelry.jpg",
    badge: "Trending",
    colors: ["#ffffff", "#fbbf24", "#ec4899"],
    isNew: false,
    isSale: true,
  },
  {
    id: 5,
    name: "Cashmere Overcoat",
    category: "Mens Fashion",
    price: 1599,
    originalPrice: null,
    rating: 4.9,
    reviews: 78,
    image: "/luxury-mens-cashmere-overcoat-winter-coat.jpg",
    badge: "Premium",
    colors: ["#1f2937", "#7c2d12", "#374151"],
    isNew: true,
    isSale: false,
  },
  {
    id: 6,
    name: "Designer Handbag",
    category: "Womens Accessories",
    price: 1199,
    originalPrice: 1499,
    rating: 4.8,
    reviews: 203,
    image: "/luxury-designer-handbag-womens-leather-bag.jpg",
    badge: "Hot",
    colors: ["#7c2d12", "#1f2937", "#be123c"],
    isNew: false,
    isSale: true,
  },
]

export function FeaturedProducts() {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null)
  const [selectedColor, setSelectedColor] = useState<{ [key: number]: string }>({})

  const handleColorSelect = (productId: number, color: string) => {
    setSelectedColor((prev) => ({ ...prev, [productId]: color }))
  }

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Featured Products</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Handpicked selections from our premium collections, crafted for those who demand excellence
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card
              key={product.id}
              className={cn(
                "group relative overflow-hidden border-0 bg-card hover-lift animate-scale-in luxury-shadow",
              )}
              style={{ animationDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <CardContent className="p-0">
                {/* Product Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className={cn(
                      "w-full h-80 object-cover transition-all duration-700",
                      hoveredProduct === product.id ? "scale-110" : "scale-100",
                    )}
                  />

                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    {product.isNew && <Badge className="bg-secondary text-white animate-pulse-glow">New</Badge>}
                    {product.isSale && <Badge className="bg-destructive text-white">Sale</Badge>}
                    <Badge variant="secondary" className="bg-black/20 text-white backdrop-blur-sm">
                      {product.badge}
                    </Badge>
                  </div>

                  {/* Quick Actions */}
                  <div
                    className={cn(
                      "absolute top-4 right-4 flex flex-col gap-2 transition-all duration-500",
                      hoveredProduct === product.id ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4",
                    )}
                  >
                    <Button size="icon" variant="secondary" className="bg-white/90 hover:bg-white hover-lift">
                      <Heart className="w-4 h-4" />
                    </Button>
                    <Button size="icon" variant="secondary" className="bg-white/90 hover:bg-white hover-lift">
                      <Eye className="w-4 h-4" />
                    </Button>
                  </div>

                  {/* Overlay */}
                  <div
                    className={cn(
                      "absolute inset-0 bg-black/20 transition-all duration-500",
                      hoveredProduct === product.id ? "opacity-100" : "opacity-0",
                    )}
                  />
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <div className="mb-2">
                    <p className="text-sm text-muted-foreground">{product.category}</p>
                  </div>

                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{product.name}</h3>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={cn(
                            "w-4 h-4",
                            i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300",
                          )}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>

                  {/* Colors */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-sm text-muted-foreground">Colors:</span>
                    <div className="flex gap-1">
                      {product.colors.map((color, colorIndex) => (
                        <button
                          key={colorIndex}
                          onClick={() => handleColorSelect(product.id, color)}
                          className={cn(
                            "w-6 h-6 rounded-full border-2 transition-all duration-200 hover:scale-110",
                            selectedColor[product.id] === color || (!selectedColor[product.id] && colorIndex === 0)
                              ? "border-primary shadow-lg"
                              : "border-gray-300",
                          )}
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Price */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-2xl font-bold text-primary">${product.price}</span>
                    {product.originalPrice && (
                      <span className="text-lg text-muted-foreground line-through">${product.originalPrice}</span>
                    )}
                  </div>

                  {/* Add to Cart Button */}
                  <Button
                    className={cn(
                      "w-full bg-primary hover:bg-primary/90 text-white transition-all duration-300 hover-lift",
                      hoveredProduct === product.id ? "animate-pulse-glow" : "",
                    )}
                  >
                    <ShoppingBag className="w-4 h-4 mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: "600ms" }}>
          <Button variant="outline" size="lg" className="px-8 py-4 text-lg hover-lift bg-transparent">
            Load More Products
          </Button>
        </div>
      </div>
    </section>
  )
}
