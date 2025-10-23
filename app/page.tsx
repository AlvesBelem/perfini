import Hero from './components/hero'
import Footer from './components/Footer'
import IbamaSeal from './components/IbamaSeal'
import VideoSection from './components/VideoSection'
import ProductGallery from './components/ProductGallery'
import FeaturedProduct from './components/FeaturedProduct'
import FeaturedProductReversed from './components/FeaturedProductReversed'

export default function Home() {
  return (
    <main className="bg-neutral-50 text-neutral-800 font-sans">
      <Hero />
      <IbamaSeal />
      <VideoSection />
      <ProductGallery />
      < FeaturedProduct />
      <ProductGallery />
      <FeaturedProductReversed />
      <Footer />
    </main>
  )
}
