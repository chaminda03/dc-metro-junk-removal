import type { Metadata } from 'next'
import Header from '../../components/Header'

export const metadata: Metadata = {
  title: 'About Wee Haul Junk Removal - DC Metro\'s Most Trusted Hauling Company | Licensed & Insured',
  description: 'Learn about Wee Haul Junk Removal - Washington DC Metro Area\'s premier junk removal company. Serving Fairfax, Arlington, Loudoun, Prince William, Montgomery Counties with professional, eco-friendly service since our founding. Licensed, insured, and locally owned.',
  keywords: 'about Wee Haul junk removal, DC metro junk removal company, Fairfax junk removal experts, Arlington hauling company, Loudoun County junk haulers, Prince William junk removal, Montgomery County hauling, Washington DC junk removal professionals, licensed junk removal company, local junk haulers, eco-friendly junk removal, trusted junk removal service',
  alternates: {
    canonical: 'https://weehauljunkdc.com/about',
  },
  openGraph: {
    title: 'About Wee Haul Junk Removal - DC Metro\'s Most Trusted Company',
    description: 'Washington DC Metro Area\'s premier junk removal company serving luxury neighborhoods with professional, eco-friendly service.',
    url: 'https://weehauljunkdc.com/about',
    images: ['/team-photo.webp'],
  },
}

export default function AboutPage() {
  const achievements = [
    {
      number: "5000+",
      label: "Satisfied Customers",
      icon: "😊"
    },
    {
      number: "10,000+",
      label: "Items Removed",
      icon: "📦"
    },
    {
      number: "85%",
      label: "Recycled or Donated",
      icon: "♻️"
    },
    {
      number: "24/7",
      label: "Emergency Service",
      icon: "🚨"
    }
  ]

  const serviceAreas = [
    {
      county: "Washington DC",
      neighborhoods: "Georgetown, Dupont Circle, Capitol Hill, Adams Morgan, Foggy Bottom",
      description: "Serving DC's most prestigious neighborhoods with white-glove junk removal service"
    },
    {
      county: "Montgomery County, MD",
      neighborhoods: "Potomac, Bethesda, Chevy Chase, Rockville, Silver Spring",
      description: "Premium service for Maryland's wealthiest communities and luxury estates"
    },
    {
      county: "Fairfax County, VA",
      neighborhoods: "McLean, Great Falls, Vienna, Reston, Herndon, Oakton",
      description: "Expert junk removal for Northern Virginia's premier residential areas"
    },
    {
      county: "Arlington County, VA",
      neighborhoods: "Arlington, Crystal City, Ballston, Clarendon, Rosslyn",
      description: "Urban junk removal specialists for Arlington's dynamic communities"
    },
    {
      county: "Loudoun County, VA",
      neighborhoods: "Ashburn, Sterling, Leesburg, Purcellville, Lansdowne",
      description: "Comprehensive service for Loudoun's rapidly growing communities"
    },
    {
      county: "Prince William County, VA",
      neighborhoods: "Manassas, Woodbridge, Dale City, Gainesville, Haymarket",
      description: "Reliable, professional junk removal throughout Prince William County"
    }
  ]

  const teamValues = [
    {
      title: "Professionalism",
      description: "Our uniformed team arrives on time, treats your property with respect, and delivers exceptional service every time.",
      icon: "👔"
    },
    {
      title: "Environmental Responsibility",
      description: "We're committed to eco-friendly practices, recycling and donating 85% of items we collect to minimize landfill impact.",
      icon: "🌱"
    },
    {
      title: "Community Focus",
      description: "As a locally-owned business, we're invested in making our DC Metro communities cleaner and more beautiful.",
      icon: "🏘️"
    },
    {
      title: "Reliability",
      description: "Licensed, insured, and bonded with emergency and after-hours service to meet your schedule.",
      icon: "⭐"
    }
  ]

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Wee Haul Junk Removal",
    "alternateName": "Wee Haul Junk Removal & Hauling",
    "description": "Washington DC Metro Area's most trusted junk removal company serving luxury neighborhoods in Fairfax, Arlington, Loudoun, Prince William, Montgomery Counties and Washington DC.",
    "url": "https://weehauljunkdc.com",
    "telephone": "(571) 489-2961",
    "email": "info@weehaulnow.com",
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "VA",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 38.9072,
      "longitude": -77.0369
    },
    "areaServed": [
      {
        "@type": "Place",
        "name": "Washington DC"
      },
      {
        "@type": "Place",
        "name": "Fairfax County, Virginia"
      },
      {
        "@type": "Place",
        "name": "Arlington County, Virginia"
      },
      {
        "@type": "Place",
        "name": "Loudoun County, Virginia"
      },
      {
        "@type": "Place",
        "name": "Prince William County, Virginia"
      },
      {
        "@type": "Place",
        "name": "Montgomery County, Maryland"
      }
    ],
    "serviceType": [
      "Junk Removal",
      "Furniture Removal",
      "Appliance Removal",
      "Estate Cleanout",
      "Construction Debris Removal"
    ],
    "priceRange": "$$",
    "openingHours": "Mo-Su 07:00-21:00",
    "hasCredential": [
      "Licensed",
      "Insured", 
      "Bonded"
    ],
    "foundingDate": "2020",
    "founder": {
      "@type": "Person",
      "name": "Wee Haul Team"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "200"
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-gray-900 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              About <span className="text-orange-400">Wee Haul</span> Junk Removal
            </h1>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Washington DC Metro Area's most trusted junk removal company, serving luxury neighborhoods with professional, eco-friendly service since our founding.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:5714892961"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl"
              >
                📞 Call (571) 489-2961
              </a>
              <a 
                href="/services"
                className="bg-transparent border-2 border-orange-500 hover:bg-orange-500 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300"
              >
                View Our Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="w-16 h-1 bg-orange-500 mx-auto mb-8"></div>
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="bg-gray-50 rounded-2xl p-8 mb-12">
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  <strong>Wee Haul Junk Removal & Hauling</strong> is your trusted local junk removal expert serving Fairfax, Arlington, and the entire Washington DC metro area. What started as a simple mission to help our neighbors declutter their homes has grown into the region's most respected junk removal company.
                </p>
                <p className="text-lg text-gray-800 leading-relaxed mb-6">
                  We specialize in fast, affordable residential and commercial junk hauling—including furniture removal, appliance pickup, garage cleanouts, and office cleanups. Whether it's a single item or full property cleanout, our friendly, uniformed professionals show up on time and get it done right, with eco-friendly disposal and recycling included in every job.
                </p>
                <p className="text-lg text-gray-800 leading-relaxed">
                  Need it fast? We offer emergency and after-hours junk removal to fit your busy schedule. From luxury estates in Potomac and McLean to bustling apartments in Arlington and condos in downtown DC, we've earned our reputation as the DC Metro Area's most reliable junk removal company.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">Why We Started Wee Haul</h3>
                  <p className="text-gray-800 mb-4">
                    Living in the Washington DC Metro Area, we saw too many families and businesses struggling with junk removal companies that were unreliable, overpriced, or didn't care about the environment. We knew our community deserved better.
                  </p>
                  <p className="text-gray-800 mb-4">
                    Founded on the principles of honesty, reliability, and environmental responsibility, Wee Haul was created to provide the DC Metro Area with a junk removal service that homeowners and businesses could trust completely.
                  </p>
                  <p className="text-gray-800">
                    Today, we're proud to serve over 5,000 satisfied customers across Washington DC, Fairfax, Arlington, Loudoun, Prince William, and Montgomery Counties, making our communities cleaner and more beautiful, one pickup at a time.
                  </p>
                </div>
                <div className="bg-orange-50 rounded-2xl p-8">
                  <h4 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h4>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    "To provide the Washington DC Metro Area with reliable, professional, and eco-friendly junk removal services that exceed expectations while contributing to cleaner, more sustainable communities."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Impact by the Numbers</h2>
            <p className="text-xl text-orange-100">Making a difference across the DC Metro Area</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-6xl mb-4">{achievement.icon}</div>
                <div className="text-4xl font-bold mb-2">{achievement.number}</div>
                <div className="text-orange-100 font-semibold">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Core Values</h2>
            <p className="text-xl text-gray-800">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {teamValues.map((value, index) => (
              <div key={index} className="text-center bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-5xl mb-6">{value.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-800 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Communities We Serve</h2>
            <p className="text-xl text-gray-800">Trusted junk removal across the Washington DC Metro Area</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {serviceAreas.map((area, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{area.county}</h3>
                <p className="text-orange-600 font-semibold mb-4 text-sm">
                  {area.neighborhoods}
                </p>
                <p className="text-gray-800 leading-relaxed">{area.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-700 mb-6">
              <strong>Don't see your area listed?</strong> We're constantly expanding our service area. Call us to see if we can help!
            </p>
            <a 
              href="tel:5714892961"
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              📞 Check Service Availability
            </a>
          </div>
        </div>
      </section>

      {/* Credentials & Licenses */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Licensed, Insured & Trusted</h2>
              <p className="text-xl text-gray-800">Your peace of mind is our priority</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-2xl p-8 mb-12">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-4xl mb-4">🏆</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Fully Licensed</h3>
                  <p className="text-gray-800">All required business licenses and permits for junk removal operations</p>
                </div>
                <div>
                  <div className="text-4xl mb-4">🛡️</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Fully Insured</h3>
                  <p className="text-gray-800">Comprehensive liability insurance protects you and your property</p>
                </div>
                <div>
                  <div className="text-4xl mb-4">⭐</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Bonded Team</h3>
                  <p className="text-gray-800">All team members are background-checked and bonded professionals</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Environmental Certifications</h3>
              <div className="flex flex-wrap justify-center gap-6 mb-8">
                <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-semibold">
                  ♻️ EPA Compliant Disposal
                </div>
                <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-semibold">
                  🌱 Green Business Certified
                </div>
                <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-semibold">
                  📋 Waste Reduction Partner
                </div>
              </div>
              <p className="text-gray-800 leading-relaxed">
                We're committed to responsible disposal practices, partnering with local recycling centers and donation facilities to ensure 85% of collected items are diverted from landfills.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Experience the Wee Haul Difference?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join thousands of satisfied customers across the Washington DC Metro Area. Professional, reliable, and eco-friendly junk removal service that exceeds expectations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a 
              href="tel:5714892961"
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-12 rounded-xl text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              📞 Call (571) 489-2961
            </a>
            <a 
              href="/services"
              className="bg-transparent border-2 border-orange-500 hover:bg-orange-500 text-white font-bold py-4 px-12 rounded-xl text-xl transition-all duration-300"
            >
              View All Services
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto text-center">
            <div>
              <div className="text-2xl font-bold text-orange-400 mb-2">Same-Day Service</div>
              <p className="text-gray-300">Available for most areas</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-orange-400 mb-2">Emergency Hours</div>
              <p className="text-gray-300">After-hours pickup available</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-orange-400 mb-2">Free Estimates</div>
              <p className="text-gray-300">Transparent, upfront pricing</p>
            </div>
          </div>

          <p className="text-gray-400 mt-8">
            7AM - 9PM • 7 Days a Week • Serving DC Metro Area Since 2020
          </p>
        </div>
      </section>
    </div>
  )
}