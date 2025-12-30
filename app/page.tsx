import Hero from '@/components/sections/Hero'
import Testimonials from '@/components/sections/Testimonials'
import Button from '@/components/ui/Button'
import { testimonials, services } from '@/lib/data'

export default function Home() {
  return (
    <>
      <Hero />
      
      {/* Value Proposition */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Magizh Media?
            </h2>
            <p className="text-lg text-gray-600">
              We combine creativity with strategy to deliver advertising solutions that drive real results for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-2">Strategic Approach</h3>
              <p className="text-gray-600">
                Data-driven strategies tailored to your business goals and target audience.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-xl font-semibold mb-2">Creative Excellence</h3>
              <p className="text-gray-600">
                Innovative designs and campaigns that capture attention and inspire action.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold mb-2">Proven Results</h3>
              <p className="text-gray-600">
                Track record of success with 5-star ratings and satisfied clients across Chennai.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-gray-600">
              Comprehensive advertising and marketing solutions for your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 6).map((service) => (
              <div
                key={service.id}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <a
                  href="/services"
                  className="text-primary-600 hover:text-primary-700 font-medium"
                >
                  Learn More →
                </a>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button href="/services" variant="primary">
              View All Services
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials testimonials={testimonials} />

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Brand?
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            Let's discuss how we can help your business grow with innovative advertising solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="secondary">
              Get Started Today
            </Button>
            <Button href="/portfolio" variant="outline" className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-primary-700">
              View Our Work
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

