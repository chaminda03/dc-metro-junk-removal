import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://weehauljunkdc.com'),
  title: {
    template: '%s | Wee Haul Junk Removal - DC Metro Area',
    default: 'Junk Removal Near Me | Same Day Service Washington DC Metro | Wee Haul'
  },
  description: 'Professional junk removal services near you in Washington DC metro area. Same-day pickup, licensed & insured. Serving Potomac, Bethesda, Georgetown, Fairfax, Loudoun, Prince William Counties.',
  keywords: 'junk removal near me, junk removal Washington DC, junk removal Potomac MD, junk removal Bethesda, junk removal Georgetown, junk removal Chevy Chase, junk removal Fairfax VA, junk removal Loudoun County, same day junk removal, furniture removal, appliance removal, estate cleanout, luxury junk removal, construction debris removal, eco-friendly junk removal',
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
    url: 'https://weehauljunkdc.com',
    siteName: 'Wee Haul Junk Removal',
    title: 'Junk Removal Near Me | Same Day Service Washington DC Metro | Wee Haul',
    description: 'Professional junk removal services near you in Washington DC metro area. Same-day pickup, licensed & insured. Serving Potomac, Bethesda, Georgetown, Fairfax, Loudoun, Prince William Counties.',
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
    title: 'Junk Removal Near Me | Same Day Service Washington DC Metro | Wee Haul',
    description: 'Professional junk removal services near you in Washington DC metro area. Same-day pickup, licensed & insured. Serving wealthy neighborhoods.',
    images: ['/images/wee-haul-junk-removal-twitter.jpg'],
    creator: '@weehaulnow',
  },
  verification: {
    google: 'wee-haul-google-site-verification',
  },
  other: {
    'DC.title': 'Wee Haul Junk Removal - Washington DC Metro Area',
    'geo.region': 'US-DC',
    'geo.placename': 'Washington DC',
    'geo.position': '38.9072;-77.0369',
    'ICBM': '38.9072, -77.0369',
    'format-detection': 'telephone=no',
  },
  alternates: {
    canonical: 'https://weehauljunkdc.com',
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
              "@id": "https://weehauljunkdc.com",
              "name": "Wee Haul Junk Removal",
              "alternateName": ["Wee Haul Junk Removal & Hauling", "DC Metro Junk Removal", "Washington DC Junk Removal"],
              "description": "Premier junk removal and hauling services in Washington DC metro area including DC, Montgomery County MD, Fairfax, Loudoun, Prince William, and Arlington Counties. Same-day service for luxury homes.",
              "url": "https://weehauljunkdc.com",
              "paymentAccepted": "Cash, Check, Credit Card, Venmo, PayPal",
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
                "latitude": 38.9072,
                "longitude": -77.0369
              },
              "areaServed": [
                {
                  "@type": "City",
                  "name": "Washington",
                  "containedInPlace": {
                    "@type": "State",
                    "name": "District of Columbia"
                  }
                },
                {
                  "@type": "AdministrativeArea",
                  "name": "Montgomery County", 
                  "containedInPlace": {
                    "@type": "State",
                    "name": "Maryland"
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
                  "name": "Arlington County",
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
                }
              ],
              "serviceType": [
                "Junk Removal Near Me",
                "Same Day Junk Removal",
                "Luxury Junk Removal",
                "Estate Cleanouts",
                "Furniture Removal", 
                "Appliance Removal",
                "Piano Removal",
                "Hot Tub Removal",
                "Spa Removal", 
                "Shed Removal",
                "Shed Demolition",
                "Fence Removal",
                "Garage Cleanouts",
                "Storage Cleanouts",
                "Basement Cleanouts",
                "Eviction Cleanouts",
                "Apartment Cleanouts",
                "Hoarder Cleanouts",
                "Light Demolition",
                "Construction Debris Removal",
                "Office Cleanouts",
                "Corporate Relocations",
                "White Glove Service"
              ],
              "priceRange": "$$",
              "openingHours": "Mo-Su 07:00-21:00",
              "image": "https://weehauljunkdc.com/team-photo.webp",
              "logo": "https://weehauljunkdc.com/Logo.webp",
              "sameAs": [
                "https://www.facebook.com/WeeHaulJunkRemoval/",
                "https://www.instagram.com/weehauljunkremoval/",
                "https://www.youtube.com/@weehauljunk",
                "https://www.linkedin.com/in/weehauljunkremoval/",
                "https://www.tiktok.com/@wee.haul.junk.rem",
                "https://share.google/NpzoBiCNH7QxPquf4"
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
