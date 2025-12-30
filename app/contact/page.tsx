import type { Metadata } from 'next'
import ContactForm from '@/components/ui/ContactForm'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Contact Us - Magizh Media | Get in Touch | Open 24 Hours',
  description: 'Contact Magizh Media, Chennai\'s leading advertising agency. Located in Maduravoyal, Chennai. Open 24 hours. Call, email, or visit us today.',
}

export default function Contact() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block bg-green-600 text-white px-4 py-2 rounded-full mb-6 font-semibold">
              Open 24 Hours
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl text-primary-100">
              Ready to transform your brand? Let's discuss your project today.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you as soon as possible. We're available 24 hours to assist you.
              </p>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
              
              <div className="space-y-6 mb-8">
                <div>
                  <h3 className="text-xl font-semibold mb-3 flex items-center">
                    <span className="mr-3">📍</span> Address
                  </h3>
                  <p className="text-gray-700 ml-8">
                    No.10/12, Ground Floor,<br />
                    Gangaiamman Koil Street,<br />
                    Alapakkam Main Rd,<br />
                    Maduravoyal, Chennai,<br />
                    Tamil Nadu 600116<br />
                    <span className="text-sm text-gray-500">Location Code: 25R7+FX Chennai, Tamil Nadu</span>
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 flex items-center">
                    <span className="mr-3">📧</span> Email
                  </h3>
                  <a href="mailto:info@magizhmedia.com" className="text-primary-600 hover:text-primary-700 ml-8">
                    info@magizhmedia.com
                  </a>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 flex items-center">
                    <span className="mr-3">🌐</span> Website
                  </h3>
                  <a href="https://magizhmedia.com" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700 ml-8">
                    magizhmedia.com
                  </a>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 flex items-center">
                    <span className="mr-3">⏰</span> Business Hours
                  </h3>
                  <div className="ml-8">
                    <p className="text-gray-700 font-semibold">Open 24 Hours</p>
                    <p className="text-sm text-gray-500">We're always here to serve you</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 flex items-center">
                    <span className="mr-3">⭐</span> Rating
                  </h3>
                  <div className="ml-8">
                    <div className="flex items-center mb-2">
                      <span className="text-yellow-400 text-xl">★★★★★</span>
                      <span className="ml-2 font-semibold">5.0</span>
                    </div>
                    <p className="text-sm text-gray-500">57+ Reviews</p>
                  </div>
                </div>
              </div>

              <div className="bg-primary-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">Service Area</h3>
                <p className="text-gray-700">
                  We proudly serve clients across <strong>Chennai</strong> and <strong>Tamil Nadu</strong>. 
                  Whether you're nearby or across the state, we're here to help with your advertising and branding needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-8 text-center">Find Us</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.1234567890123!2d80.12345678901234!3d13.12345678901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDA3JzI0LjQiTiA4MMKwMDcnMjQuNCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
                title="Magizh Media Location"
              ></iframe>
            </div>
            <div className="mt-6 text-center">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Magizh+Media+Maduravoyal+Chennai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700 font-semibold"
              >
                Open in Google Maps →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            Contact us today and let's discuss how we can help your business grow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="mailto:info@magizhmedia.com" variant="secondary">
              Email Us
            </Button>
            <Button href="/services" variant="outline" className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-primary-700">
              View Services
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

