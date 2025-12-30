import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import StructuredData from '@/components/SEO/StructuredData'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300','400','500','600','700','800']
})

export const metadata: Metadata = {
  title: 'Magizh Media - Leading Advertising Agency in Chennai | 5-Star Rated',
  description: 'Magizh Media is a trusted, creative advertising agency in Chennai, Tamil Nadu. Expert branding, digital marketing, and creative design solutions. Rated 5.0 with 57+ reviews. Open 24 hours.',
  keywords: 'advertising agency Chennai, branding agency Tamil Nadu, digital marketing Chennai, creative design Chennai, social media marketing, content production',
  authors: [{ name: 'Magizh Media' }],
  openGraph: {
    title: 'Magizh Media - Leading Advertising Agency in Chennai',
    description: 'Expert advertising & branding solutions. Rated 5.0 with 57+ reviews.',
    url: 'https://magizhmedia.com',
    siteName: 'Magizh Media',
    locale: 'en_IN',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <StructuredData type="Organization" />
        <StructuredData type="LocalBusiness" />
        <StructuredData type="WebSite" />
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
