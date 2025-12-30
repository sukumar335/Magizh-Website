import type { Metadata } from 'next'
import { testimonials } from '@/lib/data'
import Testimonials from '@/components/sections/Testimonials'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Reviews - Magizh Media | 5-Star Rated Advertising Agency in Chennai',
  description: 'Read client reviews and testimonials for Magizh Media. Rated 5.0 with 57+ reviews from satisfied clients across Chennai and Tamil Nadu.',
}

export default function Reviews() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-6">
              <span className="text-yellow-300 text-3xl">★★★★★</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Client Reviews</h1>
            <p className="text-xl text-primary-100 mb-4">
              Rated <span className="font-bold">5.0</span> with <span className="font-bold">57+ Reviews</span>
            </p>
            <p className="text-lg text-primary-200">
              See what our clients say about working with Magizh Media
            </p>
          </div>
        </div>
      </section>

      {/* All Testimonials */}
      <Testimonials testimonials={testimonials} showAll={true} />

      {/* Rating Breakdown */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Why Clients Love Us
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center bg-white p-6 rounded-lg shadow-md">
                <div className="text-5xl font-bold text-primary-600 mb-2">5.0</div>
                <div className="text-yellow-400 text-2xl mb-2">★★★★★</div>
                <p className="text-gray-600">Average Rating</p>
              </div>
              <div className="text-center bg-white p-6 rounded-lg shadow-md">
                <div className="text-5xl font-bold text-primary-600 mb-2">57+</div>
                <p className="text-gray-600 mb-2">Happy Clients</p>
                <p className="text-sm text-gray-500">And counting</p>
              </div>
              <div className="text-center bg-white p-6 rounded-lg shadow-md">
                <div className="text-5xl font-bold text-primary-600 mb-2">100%</div>
                <p className="text-gray-600 mb-2">Satisfaction Rate</p>
                <p className="text-sm text-gray-500">Client-focused approach</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Review Highlights */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              What Makes Us Stand Out
            </h2>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary-600">
                <h3 className="text-xl font-semibold mb-2">Creative Excellence</h3>
                <p className="text-gray-600">
                  "Magizh Media's creative team consistently delivers innovative designs that capture attention and drive results. Their work stands out in the market." - Multiple Clients
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary-600">
                <h3 className="text-xl font-semibold mb-2">Professional Service</h3>
                <p className="text-gray-600">
                  "Working with Magizh Media has been a pleasure. They're professional, responsive, and always deliver on time. Highly recommended!" - Multiple Clients
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary-600">
                <h3 className="text-xl font-semibold mb-2">Measurable Results</h3>
                <p className="text-gray-600">
                  "The campaigns Magizh Media created for us delivered measurable results. We saw significant growth in brand awareness and sales." - Multiple Clients
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary-600">
                <h3 className="text-xl font-semibold mb-2">24/7 Availability</h3>
                <p className="text-gray-600">
                  "The fact that they're available 24 hours is incredible. We've never had to wait for support, and they're always ready to help." - Multiple Clients
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Reviews CTA */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Share Your Experience
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            If you've worked with us, we'd love to hear about your experience!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="secondary">
              Leave a Review
            </Button>
            <a
              href="https://www.google.com/maps/place/Magizh+Media"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white text-primary-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
            >
              View on Google Maps
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

