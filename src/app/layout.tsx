import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Footer from '../components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://weehauljunkdc.com'),
  title: {
    template: '%s | Wee Haul Junk Removal - DC Metro Area',
    default: 'Best Junk Removal Near Me | #1 Rated Washington DC Metro | Same Day Service'
  },
  description: '#1 junk removal Washington DC metro. Same-day service $150+. Licensed & insured. Serving Potomac, Bethesda, McLean. Call (571) 489-2961',
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
    google: '4_1YVTiqWX1z4MBLt0svnYJxQL5jBcG-_s8LJDHhYGs',
  },
  other: {
    'DC.title': 'Wee Haul Junk Removal - Washington DC Metro Area',
    'geo.region': 'US-DC',
    'geo.placename': 'Washington DC',
    'geo.position': '38.9072;-77.0369',
    'ICBM': '38.9072, -77.0369',
    'format-detection': 'telephone=no',
    'google': 'notranslate',
    'content-language': 'en-US',
    'revisit-after': '1 days',
    'rating': 'general',
    'distribution': 'global',
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
        <link rel="icon" href="/Logo.webp" />
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
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "127",
                "bestRating": "5",
                "worstRating": "1"
              },
              "review": [
                {
                  "@type": "Review",
                  "author": {
                    "@type": "Person",
                    "name": "Sarah M."
                  },
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5"
                  },
                  "reviewBody": "Outstanding service! They removed our old hot tub and cleaned up everything perfectly. Very professional team and fair pricing."
                },
                {
                  "@type": "Review",
                  "author": {
                    "@type": "Person",
                    "name": "Michael R."
                  },
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5"
                  },
                  "reviewBody": "Same day service was exactly what we needed. Great communication and they handled our estate cleanout with care and respect."
                }
              ],
              "sameAs": [
                "https://www.facebook.com/WeeHaulJunkRemoval/",
                "https://www.instagram.com/weehauljunkremoval/",
                "https://www.youtube.com/@weehauljunk",
                "https://www.linkedin.com/in/weehauljunkremoval/",
                "https://www.tiktok.com/@wee.haul.junk.rem",
                "https://share.google/NpzoBiCNH7QxPquf4",
                "https://www.google.com/maps/place/Wee+Haul+Junk+Removal/@38.9072,-77.0369,17z"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Junk Removal Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Residential Junk Removal",
                      "description": "Complete household junk removal including furniture, appliances, and general debris",
                      "areaServed": "Washington DC Metro Area"
                    }
                  },
                  {
                    "@type": "Offer", 
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Commercial Junk Removal",
                      "description": "Office cleanouts, retail space clearing, and commercial debris removal",
                      "areaServed": "Washington DC Metro Area"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service", 
                      "name": "Construction Debris Removal",
                      "description": "Construction waste, demolition debris, and contractor cleanouts",
                      "areaServed": "Washington DC Metro Area"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service", 
                      "name": "Hot Tub Removal",
                      "description": "Professional hot tub and spa removal with electrical disconnection",
                      "areaServed": "Northern Virginia"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service", 
                      "name": "Estate Cleanouts",
                      "description": "Comprehensive estate and probate property cleanouts with donation services",
                      "areaServed": "Washington DC Metro Area"
                    }
                  }
                ]
              }
            })
          }}
        />
        
        {/* Service Area Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "Junk Removal Service",
              "provider": {
                "@type": "LocalBusiness",
                "name": "Wee Haul Junk Removal",
                "telephone": "(571) 489-2961",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "2246 Pimmit Run Lane",
                  "addressLocality": "Falls Church",
                  "addressRegion": "VA",
                  "postalCode": "22043"
                }
              },
              "areaServed": [
                {
                  "@type": "City",
                  "name": "McLean",
                  "containedInPlace": "Fairfax County, Virginia"
                },
                {
                  "@type": "City",
                  "name": "Great Falls",
                  "containedInPlace": "Fairfax County, Virginia"
                },
                {
                  "@type": "City",
                  "name": "Vienna",
                  "containedInPlace": "Fairfax County, Virginia"
                },
                {
                  "@type": "City",
                  "name": "Bethesda",
                  "containedInPlace": "Montgomery County, Maryland"
                },
                {
                  "@type": "City",
                  "name": "Potomac",
                  "containedInPlace": "Montgomery County, Maryland"
                },
                {
                  "@type": "City",
                  "name": "Georgetown",
                  "containedInPlace": "Washington, DC"
                },
                {
                  "@type": "City",
                  "name": "Ashburn",
                  "containedInPlace": "Loudoun County, Virginia"
                },
                {
                  "@type": "City",
                  "name": "Leesburg",
                  "containedInPlace": "Loudoun County, Virginia"
                },
                {
                  "@type": "City",
                  "name": "Arlington",
                  "containedInPlace": "Arlington County, Virginia"
                },
                {
                  "@type": "City",
                  "name": "Woodbridge",
                  "containedInPlace": "Prince William County, Virginia"
                }
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Local Junk Removal Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Same Day Junk Removal McLean VA",
                      "description": "Same-day junk removal services in McLean, Virginia for luxury homes and estates"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Furniture Removal Bethesda MD",
                      "description": "Professional furniture removal and disposal services in Bethesda, Maryland"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Hot Tub Removal Great Falls VA",
                      "description": "Expert hot tub and spa removal with electrical disconnection in Great Falls, Virginia"
                    }
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
        <Footer />
      </body>
    </html>
  )
}
