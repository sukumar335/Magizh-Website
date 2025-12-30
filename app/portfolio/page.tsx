import type { Metadata } from 'next'
import { portfolioItems } from '@/lib/data'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Portfolio - Magizh Media | Our Work & Case Studies',
  description: 'View our portfolio of successful advertising campaigns, branding projects, and marketing solutions for clients across Chennai and Tamil Nadu.',
}

export default function Portfolio() {
  const categories = ['All', ...Array.from(new Set(portfolioItems.map(item => item.category)))]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Portfolio</h1>
            <p className="text-xl text-primary-100">
              Showcasing our successful projects and creative solutions
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {item.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  {item.clientName && (
                    <p className="text-sm text-gray-500 mb-4">
                      Client: <span className="font-semibold">{item.clientName}</span>
                    </p>
                  )}
                  <a
                    href="/contact"
                    className="text-primary-600 hover:text-primary-700 font-semibold inline-flex items-center"
                  >
                    Discuss Your Project →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Highlights */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Success Stories
            </h2>

            <div className="space-y-12">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <span className="bg-primary-100 text-primary-700 px-4 py-2 rounded-full font-semibold mr-4">
                    Case Study 1
                  </span>
                  <h3 className="text-2xl font-bold">Tech Startup Brand Identity</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  We helped a Chennai-based tech startup establish a strong brand identity that positioned them as an industry leader. The comprehensive rebranding included logo design, brand guidelines, website, and marketing materials.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div>
                    <p className="text-3xl font-bold text-primary-600">300%</p>
                    <p className="text-gray-600">Increase in brand recognition</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-primary-600">150%</p>
                    <p className="text-gray-600">Growth in lead generation</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <span className="bg-primary-100 text-primary-700 px-4 py-2 rounded-full font-semibold mr-4">
                    Case Study 2
                  </span>
                  <h3 className="text-2xl font-bold">E-commerce Digital Campaign</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Our multi-channel digital marketing campaign for an e-commerce client resulted in significant growth in online sales and customer engagement across all platforms.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div>
                    <p className="text-3xl font-bold text-primary-600">250%</p>
                    <p className="text-gray-600">Increase in online sales</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-primary-600">180%</p>
                    <p className="text-gray-600">ROI improvement</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <span className="bg-primary-100 text-primary-700 px-4 py-2 rounded-full font-semibold mr-4">
                    Case Study 3
                  </span>
                  <h3 className="text-2xl font-bold">Restaurant Social Media Strategy</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Through strategic social media management and engaging content creation, we helped a local restaurant grow its online presence and increase footfall significantly.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div>
                    <p className="text-3xl font-bold text-primary-600">500%</p>
                    <p className="text-gray-600">Growth in followers</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-primary-600">200%</p>
                    <p className="text-gray-600">Increase in footfall</p>
                  </div>
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
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            Let's discuss how we can help your business achieve similar results.
          </p>
          <Button href="/contact" variant="secondary">
            Start Your Project
          </Button>
        </div>
      </section>
    </>
  )
}

