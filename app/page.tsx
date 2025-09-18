import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { CategoryShowcase } from "@/components/category-showcase"
import { FeaturedProducts } from "@/components/featured-products"
import { LuxuryFeatures } from "@/components/luxury-features"
import { Newsletter } from "@/components/newsletter"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <CategoryShowcase />
        <FeaturedProducts />
        <LuxuryFeatures />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
