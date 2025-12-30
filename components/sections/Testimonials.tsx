import { Testimonial } from '@/lib/types'

interface TestimonialsProps {
  testimonials: Testimonial[]
  showAll?: boolean
}

export default function Testimonials({ testimonials, showAll = false }: TestimonialsProps) {
  const displayTestimonials = showAll ? testimonials : testimonials.slice(0, 3)

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-lg text-gray-600">
            Trusted by businesses across Chennai and Tamil Nadu
          </p>
          <div className="flex items-center justify-center mt-4">
            <span className="text-yellow-400 text-3xl">★★★★★</span>
            <span className="ml-3 text-xl font-semibold">5.0 Rating</span>
            <span className="ml-2 text-gray-500">(57+ Reviews)</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {displayTestimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {'★'.repeat(testimonial.rating)}
                </div>
              </div>
              <p className="text-gray-700 mb-4 italic">"{testimonial.comment}"</p>
              <div className="border-t pt-4">
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                {testimonial.date && (
                  <p className="text-sm text-gray-500">{testimonial.date}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {!showAll && testimonials.length > 3 && (
          <div className="text-center mt-8">
            <a
              href="/reviews"
              className="text-primary-600 hover:text-primary-700 font-semibold"
            >
              View All Reviews →
            </a>
          </div>
        )}
      </div>
    </section>
  )
}

