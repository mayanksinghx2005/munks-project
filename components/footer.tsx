"use client"

import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin, Crown } from "lucide-react"

const footerLinks = {
  shop: [
    { name: "Mens Fashion", href: "/men" },
    { name: "Womens Fashion", href: "/women" },
    { name: "Accessories", href: "/accessories" },
    { name: "New Arrivals", href: "/new" },
    { name: "Sale", href: "/sale" },
  ],
  support: [
    { name: "Customer Service", href: "/support" },
    { name: "Size Guide", href: "/size-guide" },
    { name: "Shipping Info", href: "/shipping" },
    { name: "Returns", href: "/returns" },
    { name: "FAQ", href: "/faq" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Press", href: "/press" },
    { name: "Sustainability", href: "/sustainability" },
    { name: "Investors", href: "/investors" },
  ],
}

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Youtube, href: "#", label: "YouTube" },
]

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-card to-muted/30 border-t border-border">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2 animate-fade-in-up">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <Crown className="text-white w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold gradient-text">WolvarX</h3>
                  <p className="text-xs text-muted-foreground -mt-1">LUXURY STORE</p>
                </div>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed max-w-md">
                Experience the pinnacle of luxury fashion with WolvarX Store. We curate the finest collections for
                discerning individuals who appreciate quality, style, and sophistication.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Phone className="w-4 h-4" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Mail className="w-4 h-4" />
                  <span>hello@wolvarx.com</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>123 Luxury Ave, Fashion District</span>
                </div>
              </div>
            </div>

            {/* Shop Links */}
            <div className="animate-slide-in-left" style={{ animationDelay: "200ms" }}>
              <h4 className="font-bold text-foreground mb-6">Shop</h4>
              <ul className="space-y-3">
                {footerLinks.shop.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div className="animate-slide-in-left" style={{ animationDelay: "400ms" }}>
              <h4 className="font-bold text-foreground mb-6">Support</h4>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div className="animate-slide-in-left" style={{ animationDelay: "600ms" }}>
              <h4 className="font-bold text-foreground mb-6">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Social Links */}
            <div className="flex items-center gap-4 animate-fade-in-up">
              {socialLinks.map((social) => (
                <Button
                  key={social.label}
                  variant="ghost"
                  size="icon"
                  className="hover:text-primary hover-lift"
                  asChild
                >
                  <a href={social.href} aria-label={social.label}>
                    <social.icon className="w-5 h-5" />
                  </a>
                </Button>
              ))}
            </div>

            {/* Copyright */}
            <div className="text-center md:text-right animate-fade-in-up" style={{ animationDelay: "200ms" }}>
              <p className="text-muted-foreground text-sm">© 2024 WolvarX Store. All rights reserved.</p>
              <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                <a href="/privacy" className="hover:text-primary transition-colors">
                  Privacy Policy
                </a>
                <a href="/terms" className="hover:text-primary transition-colors">
                  Terms of Service
                </a>
                <a href="/cookies" className="hover:text-primary transition-colors">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
