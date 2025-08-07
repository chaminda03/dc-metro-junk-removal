import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    template: '%s | Wee Haul Junk Removal - Fairfax, Loudoun, Prince William, Arlington',
    default: 'Wee Haul Junk Removal - Same Day Pickup in Fairfax, Loudoun, Prince William & Arlington VA'
  },
  description: 'Professional junk removal services in Northern Virginia. Furniture removal, hot tub removal, shed removal, fence removal, garage cleanouts, basement cleanouts. Same-day pickup, eco-friendly disposal, top rated & insured. Serving Fairfax, Loudoun, Prince William & Arlington Counties.',
  keywords: 'junk removal Virginia, junk removal Fairfax VA, junk removal Loudoun County, junk removal Prince William County, junk removal Arlington VA, furniture removal, appliance removal, hot tub removal, shed removal, fence removal, garage cleanout, storage cleanout, basement cleanout, eviction cleanout, apartment cleanout, hoarder cleanout, light demolition, construction debris removal, same day junk removal',
  authors: [{ name: 'Wee Haul Junk Removal' }],
  creator: 'Wee Haul Junk Removal',
  publisher: 'Wee Haul Junk Removal',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://weehaulnow.com',
    siteName: 'Wee Haul Junk Removal',
    title: 'Wee Haul Junk Removal - Same Day Pickup in Northern Virginia',
    description: 'Professional junk removal services in Northern Virginia. Furniture removal, hot tub removal, shed removal, fence removal, garage cleanouts, basement cleanouts. Same-day pickup, eco-friendly disposal, top rated & insured. Serving Fairfax, Loudoun, Prince William & Arlington Counties.',
    images: [
      {
        url: '/images/wee-haul-junk-removal-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Wee Haul Junk Removal - Professional Junk Removal Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wee Haul Junk Removal - Same Day Pickup in Northern Virginia',
    description: 'Professional junk removal services in Northern Virginia. Same-day pickup, eco-friendly disposal, top rated & insured.',
    images: ['/images/wee-haul-junk-removal-twitter.jpg'],
    creator: '@weehaulnow',
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  alternates: {
    canonical: 'https://weehaulnow.com',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://weehaulnow.com",
              "name": "Wee Haul Junk Removal",
              "alternateName": "Wee Haul Junk Removal & Hauling",
              "description": "Professional junk removal and hauling services in Northern Virginia including Fairfax, Loudoun, Prince William, and Arlington Counties.",
              "url": "https://weehaulnow.com",
              "telephone": "(571) 489-2961",
              "email": "info@weehaulnow.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "2246 Pimmit Run Lane",
                "addressLocality": "Falls Church",
                "addressRegion": "VA",
                "postalCode": "22043",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 38.8462,
                "longitude": -77.3064
              },
              "areaServed": [
                {
                  "@type": "City",
                  "name": "Fairfax",
                  "containedInPlace": {
                    "@type": "State",
                    "name": "Virginia"
                  }
                },
                {
                  "@type": "AdministrativeArea",
                  "name": "Fairfax County",
                  "containedInPlace": {
                    "@type": "State", 
                    "name": "Virginia"
                  }
                },
                {
                  "@type": "AdministrativeArea",
                  "name": "Loudoun County",
                  "containedInPlace": {
                    "@type": "State",
                    "name": "Virginia"
                  }
                },
                {
                  "@type": "AdministrativeArea", 
                  "name": "Prince William County",
                  "containedInPlace": {
                    "@type": "State",
                    "name": "Virginia"
                  }
                },
                {
                  "@type": "AdministrativeArea",
                  "name": "Arlington County", 
                  "containedInPlace": {
                    "@type": "State",
                    "name": "Virginia"
                  }
                }
              ],
              "serviceType": [
                "Junk Removal",
                "Furniture Removal", 
                "Appliance Removal",
                "Hot Tub Removal",
                "Spa Removal",
                "Shed Removal",
                "Fence Removal",
                "Garage Cleanouts",
                "Storage Cleanouts",
                "Basement Cleanouts",
                "Eviction Cleanouts",
                "Apartment Cleanouts",
                "Hoarder Cleanouts",
                "Light Demolition",
                "Construction Debris Removal",
                "Estate Cleanouts",
                "Office Cleanouts",
                "Same Day Junk Pickup"
              ],
              "priceRange": "$$",
              "openingHours": "Mo-Su 07:00-21:00",
              "image": "https://weehaulnow.com/images/wee-haul-junk-removal-team.jpg",
              "logo": "https://weehaulnow.com/images/wee-haul-junk-removal-logo.png",
              "sameAs": [
                "https://www.facebook.com/weehaulnow",
                "https://www.instagram.com/weehaulnow", 
                "https://www.yelp.com/biz/wee-haul-junk-removal",
                "https://www.google.com/maps/place/wee-haul-junk-removal"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Junk Removal Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Residential Junk Removal"
                    }
                  },
                  {
                    "@type": "Offer", 
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Commercial Junk Removal"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service", 
                      "name": "Construction Debris Removal"
                    }
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
