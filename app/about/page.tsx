import type { Metadata } from 'next'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'About Us - Magizh Media | Leading Advertising Agency in Chennai',
  description: 'Learn about Magizh Media, a trusted advertising agency in Chennai. Our mission, vision, and commitment to delivering innovative branding and marketing solutions.',
}

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Magizh Media</h1>
            <p className="text-xl text-primary-100">
              Your trusted partner for innovative advertising and branding solutions
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-4">
                Magizh Media was founded with a vision to transform businesses through creative advertising and strategic branding. Based in Chennai, Tamil Nadu, we have been serving clients across the region with innovative marketing solutions that drive real results.
              </p>
              <p className="text-gray-700 mb-4">
                Our journey began with a simple belief: every business deserves advertising that not only looks great but also delivers measurable outcomes. Over the years, we've built a reputation for excellence, earning a 5-star rating with 57+ satisfied clients who trust us with their branding and marketing needs.
              </p>
              <p className="text-gray-700">
                Today, Magizh Media stands as one of Chennai's most trusted advertising agencies, known for our creative approach, professional service, and commitment to client success. We're open 24 hours to serve you whenever you need us.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-700 text-lg">
                To empower businesses in Chennai and Tamil Nadu with innovative advertising and branding solutions that drive growth, build brand recognition, and create lasting connections with their target audience.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
              <p className="text-gray-700 text-lg">
                To be the leading creative advertising agency in South India, recognized for our excellence, innovation, and unwavering commitment to client success. We envision a future where every business we serve achieves remarkable growth through strategic marketing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Why Choose Magizh Media?</h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">⭐</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">5-Star Rated Excellence</h3>
                  <p className="text-gray-600">
                    With a perfect 5.0 rating and 57+ reviews, we've proven our commitment to delivering exceptional results that exceed client expectations.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🎨</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Creative Expertise</h3>
                  <p className="text-gray-600">
                    Our team of creative professionals brings fresh ideas and innovative approaches to every project, ensuring your brand stands out in the market.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">📊</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Data-Driven Strategies</h3>
                  <p className="text-gray-600">
                    We combine creativity with analytics to create campaigns that not only look great but also deliver measurable ROI and business growth.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🤝</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Client-Focused Approach</h3>
                  <p className="text-gray-600">
                    Your success is our priority. We work closely with you to understand your business, goals, and challenges, ensuring solutions that truly fit your needs.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">⏰</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Available 24/7</h3>
                  <p className="text-gray-600">
                    We're open 24 hours to serve you whenever you need us. Your projects and deadlines matter, and we're here to support you around the clock.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">📍</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Local Expertise</h3>
                  <p className="text-gray-600">
                    Based in Chennai with deep understanding of the Tamil Nadu market, we know what works for local businesses and can help you connect with your audience effectively.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's Work Together
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            Ready to take your brand to the next level? Get in touch with us today.
          </p>
          <Button href="/contact" variant="secondary">
            Contact Us
          </Button>
        </div>
      </section>
    </>
  )
}

