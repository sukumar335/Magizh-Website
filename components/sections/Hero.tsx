import Button from '@/components/ui/Button'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white section-padding">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <span className="text-yellow-300 text-lg">★★★★★</span>
            <span className="ml-2 font-semibold">5.0 Rating • 57+ Reviews</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Creative Advertising & Branding Solutions in Chennai
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-primary-100">
            Transform your brand with innovative marketing strategies. Trusted by businesses across Tamil Nadu.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="secondary">
              Enquire Now
            </Button>
            <Button href="/services" variant="outline" className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-primary-700">
              Our Services
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  )
}

