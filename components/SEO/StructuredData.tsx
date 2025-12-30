import { Metadata } from 'next'

interface StructuredDataProps {
  type: 'Organization' | 'LocalBusiness' | 'WebSite'
  data?: Record<string, any>
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  const baseData = {
    '@context': 'https://schema.org',
    '@type': type,
  }

  const organizationData = {
    ...baseData,
    '@type': 'Organization',
    name: 'Magizh Media',
    url: 'https://magizhmedia.com',
    logo: 'https://magizhmedia.com/logo.png',
    description: 'Leading advertising agency in Chennai, Tamil Nadu. Expert branding, digital marketing, and creative design solutions.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'No.10/12, Ground Floor, Gangaiamman Koil Street, Alapakkam Main Rd',
      addressLocality: 'Maduravoyal',
      addressRegion: 'Tamil Nadu',
      postalCode: '600116',
      addressCountry: 'IN',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'info@magizhmedia.com',
      contactType: 'Customer Service',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '57',
    },
  }

  const localBusinessData = {
    ...baseData,
    '@type': 'LocalBusiness',
    name: 'Magizh Media',
    image: 'https://magizhmedia.com/logo.png',
    '@id': 'https://magizhmedia.com',
    url: 'https://magizhmedia.com',
    telephone: '',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'No.10/12, Ground Floor, Gangaiamman Koil Street, Alapakkam Main Rd',
      addressLocality: 'Maduravoyal',
      addressRegion: 'Tamil Nadu',
      postalCode: '600116',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '13.123456',
      longitude: '80.123456',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '00:00',
      closes: '23:59',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '57',
    },
  }

  const websiteData = {
    ...baseData,
    '@type': 'WebSite',
    name: 'Magizh Media',
    url: 'https://magizhmedia.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://magizhmedia.com/search?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  }

  let schemaData
  switch (type) {
    case 'Organization':
      schemaData = organizationData
      break
    case 'LocalBusiness':
      schemaData = localBusinessData
      break
    case 'WebSite':
      schemaData = websiteData
      break
    default:
      schemaData = baseData
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  )
}

