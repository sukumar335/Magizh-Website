import type { Metadata } from 'next'
import { services } from '@/lib/data'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Services - Magizh Media | Advertising & Marketing Solutions in Chennai',
  description: 'Comprehensive advertising and marketing services in Chennai: advertising campaigns, branding, digital marketing, social media, and content production.',
}

export default function Services() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-primary-100">
              Comprehensive advertising and marketing solutions tailored to your business needs
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="text-4xl mb-4">✨</div>
                <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <a
                  href="/contact"
                  className="text-primary-600 hover:text-primary-700 font-semibold inline-flex items-center"
                >
                  Get Started →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              How We Deliver Excellence
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Advertising Campaigns</h3>
                <p className="text-gray-700 mb-4">
                  Our advertising campaigns are designed to capture attention and drive action. We develop comprehensive strategies that include:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Multi-channel campaign planning and execution</li>
                  <li>Creative concept development and design</li>
                  <li>Media planning and buying</li>
                  <li>Campaign performance tracking and optimization</li>
                  <li>ROI analysis and reporting</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4">Branding & Creative Design</h3>
                <p className="text-gray-700 mb-4">
                  Build a strong brand identity that resonates with your audience:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Logo design and brand identity development</li>
                  <li>Brand guidelines and style guides</li>
                  <li>Visual design for print and digital media</li>
                  <li>Packaging design</li>
                  <li>Brand positioning and messaging</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4">Digital Marketing</h3>
                <p className="text-gray-700 mb-4">
                  Reach your audience online with our comprehensive digital marketing services:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Search Engine Optimization (SEO)</li>
                  <li>Search Engine Marketing (SEM) and PPC</li>
                  <li>Content marketing and strategy</li>
                  <li>Email marketing campaigns</li>
                  <li>Website optimization and conversion rate optimization</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4">Social Media Promotion</h3>
                <p className="text-gray-700 mb-4">
                  Engage your audience and grow your online presence:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Social media strategy and planning</li>
                  <li>Content creation and curation</li>
                  <li>Community management</li>
                  <li>Social media advertising</li>
                  <li>Analytics and performance reporting</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4">Content & Media Production</h3>
                <p className="text-gray-700 mb-4">
                  High-quality content that tells your story:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Video production and editing</li>
                  <li>Photography and image editing</li>
                  <li>Graphic design and illustrations</li>
                  <li>Copywriting and content writing</li>
                  <li>Animation and motion graphics</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Our Process
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="font-semibold mb-2">Discovery</h3>
                <p className="text-sm text-gray-600">
                  We understand your business, goals, and target audience
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="font-semibold mb-2">Strategy</h3>
                <p className="text-sm text-gray-600">
                  We develop a customized strategy tailored to your needs
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="font-semibold mb-2">Execution</h3>
                <p className="text-sm text-gray-600">
                  We bring your campaign to life with creative excellence
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  4
                </div>
                <h3 className="font-semibold mb-2">Optimization</h3>
                <p className="text-sm text-gray-600">
                  We track performance and optimize for better results
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            Let's discuss how we can help your business grow with our services.
          </p>
          <Button href="/contact" variant="secondary">
            Contact Us Today
          </Button>
        </div>
      </section>
    </>
  )
}

