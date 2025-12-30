import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">Magizh Media</h3>
            <p className="mb-4 text-gray-400">
              Your trusted partner for innovative advertising and branding solutions in Chennai and Tamil Nadu.
            </p>
            <div className="flex items-center space-x-2 mb-2">
              <span className="text-yellow-400">★★★★★</span>
              <span className="text-sm">5.0 Rating</span>
              <span className="text-gray-500">•</span>
              <span className="text-sm">57+ Reviews</span>
            </div>
            <div className="inline-block bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium mt-2">
              Open 24 Hours
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-white transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="hover:text-white transition-colors">
                  Reviews
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <p className="text-gray-400">
                  No.10/12, Ground Floor,<br />
                  Gangaiamman Koil Street,<br />
                  Alapakkam Main Rd,<br />
                  Maduravoyal, Chennai,<br />
                  Tamil Nadu 600116
                </p>
              </li>
              <li>
                <a href="mailto:info@magizhmedia.com" className="hover:text-white transition-colors">
                  info@magizhmedia.com
                </a>
              </li>
              <li>
                <a href="https://magizhmedia.com" className="hover:text-white transition-colors">
                  magizhmedia.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {currentYear} Magizh Media. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

