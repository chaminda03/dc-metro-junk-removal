import type { Metadata } from 'next'
import Header from '../../components/Header'

export const metadata: Metadata = {
  title: 'Professional Junk Removal Services DC Metro | Same-Day Pickup | Wee Haul',
  description: 'Complete junk removal services in Washington DC, Fairfax, Arlington, Loudoun, Prince William, Montgomery Counties. Furniture removal, appliance disposal, estate cleanouts, construction debris. Licensed & insured. Call (571) 489-2961',
  keywords: 'junk removal services DC metro, furniture removal Northern Virginia, appliance removal Washington DC, estate cleanout Fairfax County, construction debris removal Montgomery County, same day junk removal Arlington, professional junk haulers Loudoun County, licensed junk removal Prince William County, eco-friendly junk disposal, residential cleanout services, commercial junk removal',
  alternates: {
    canonical: 'https://weehauljunkdc.com/services',
  },
  openGraph: {
    title: 'Professional Junk Removal Services - DC Metro Area | Wee Haul',
    description: 'Complete junk removal services across Washington DC metro area. Same-day pickup, licensed & insured. Serving luxury neighborhoods in all counties.',
    url: 'https://weehauljunkdc.com/services',
    images: ['/services-hero.jpg'],
  },
}

export default function ServicesPage() {

  const services = [
    {
      title: "Furniture Removal",
      description: "Professional removal of sofas, mattresses, dining sets, and all household furniture",
      icon: "🛋️",
      url: "/services/furniture-removal",
      features: ["Same-day pickup", "Heavy lifting included", "Eco-friendly disposal", "No hidden fees"]
    },
    {
      title: "Appliance Removal", 
      description: "Safe disposal of refrigerators, washers, dryers, dishwashers, and water heaters",
      icon: "🏠",
      url: "/services/appliance-removal",
      features: ["EPA-compliant disposal", "Refrigerant recycling", "Free disconnect service", "Scheduled pickup"]
    },
    {
      title: "Hot Tub Removal",
      description: "Complete hot tub and spa demolition, removal, and site cleanup",
      icon: "🛁",
      url: "/services/hot-tub-removal", 
      features: ["Full demolition", "Electrical disconnect", "Site restoration", "Permit assistance"]
    },
    {
      title: "Shed Removal & Demolition",
      description: "Complete shed demolition and debris removal for storage and garden sheds",
      icon: "🏚️",
      url: "/services/shed-removal",
      features: ["Complete demolition", "Foundation removal", "Debris hauling", "Site cleanup"]
    },
    {
      title: "Fence Removal",
      description: "Professional fence removal including wood, vinyl, chain link, and metal fencing",
      icon: "🚧",
      url: "/services/fence-removal",
      features: ["All fence types", "Post extraction", "Permit handling", "Property restoration"]
    },
    {
      title: "Garage Cleanout",
      description: "Complete garage cleaning and organization with junk removal service",
      icon: "🏠",
      url: "/services/garage-cleanout",
      features: ["Full cleanout service", "Sorting included", "Donation pickup", "Deep cleaning"]
    },
    {
      title: "Storage Unit Cleanout",
      description: "Complete storage facility cleaning and junk removal services",
      icon: "📦",
      url: "/services/storage-cleanout", 
      features: ["Facility coordination", "Complete cleanout", "Inventory sorting", "Quick turnaround"]
    },
    {
      title: "Basement Cleanout",
      description: "Professional basement cleaning and junk removal service",
      icon: "🏠",
      url: "/services/basement-cleanout",
      features: ["Tight space access", "Water damage cleanup", "Mold-safe removal", "Complete transformation"]
    },
    {
      title: "Eviction Cleanout",
      description: "Fast property cleaning for landlords and property managers",
      icon: "🏢",
      url: "/services/eviction-cleanout",
      features: ["24-hour turnaround", "Property management", "Legal compliance", "Tenant coordination"]
    },
    {
      title: "Apartment Cleanout", 
      description: "Professional apartment and condo cleanout and junk removal",
      icon: "🏢",
      url: "/services/apartment-cleanout",
      features: ["Moving assistance", "Condo compliance", "Elevator coordination", "Building protection"]
    },
    {
      title: "Hoarder Cleanout",
      description: "Compassionate, professional hoarding cleanup and restoration",
      icon: "🏠",
      url: "/services/hoarder-cleanout", 
      features: ["Sensitive approach", "Biohazard handling", "Family support", "Discretion assured"]
    },
    {
      title: "Light Demolition",
      description: "Professional interior demolition and small structure removal",
      icon: "🔨",
      url: "/services/light-demolition",
      features: ["Interior demo", "Deck removal", "Small structures", "Permit assistance"]
    }
  ]

  const serviceAreas = [
    {
      name: "Washington DC",
      neighborhoods: "Georgetown • Dupont Circle • Capitol Hill • Adams Morgan",
      description: "Premium junk removal in DC's most prestigious neighborhoods",
      url: "/washington-dc"
    },
    {
      name: "Montgomery County",
      neighborhoods: "Potomac • Bethesda • Chevy Chase • Rockville",
      description: "Luxury junk removal for Maryland's wealthiest communities",
      url: "/montgomery-county"
    },
    {
      name: "Fairfax County",
      neighborhoods: "McLean • Vienna • Great Falls • Reston",
      description: "Professional service for Northern Virginia's premier locations",
      url: "/fairfax-county"
    },
    {
      name: "Arlington County", 
      neighborhoods: "Arlington • Crystal City • Ballston • Clarendon",
      description: "Urban junk removal expertise for Arlington's communities",
      url: "/arlington-county"
    },
    {
      name: "Loudoun County",
      neighborhoods: "Ashburn • Sterling • Leesburg • Purcellville", 
      description: "Comprehensive service for Loudoun's growing communities",
      url: "/loudoun-county"
    },
    {
      name: "Prince William County",
      neighborhoods: "Manassas • Woodbridge • Dale City • Gainesville",
      description: "Reliable junk removal throughout Prince William County",
      url: "/prince-william-county"
    }
  ]

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Professional Junk Removal Services - DC Metro Area",
    "description": "Complete junk removal services in Washington DC, Fairfax, Arlington, Loudoun, Prince William, Montgomery Counties. Same-day pickup, licensed & insured.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Wee Haul Junk Removal",
      "telephone": "(571) 489-2961",
      "email": "info@weehaulnow.com",
      "url": "https://weehauljunkdc.com",
      "address": {
        "@type": "PostalAddress",
        "addressRegion": "VA",
        "addressCountry": "US"
      }
    },
    "areaServed": [
      {
        "@type": "Place",
        "name": "Washington DC"
      },
      {
        "@type": "Place", 
        "name": "Fairfax County, VA"
      },
      {
        "@type": "Place",
        "name": "Arlington County, VA"
      },
      {
        "@type": "Place",
        "name": "Loudoun County, VA"
      },
      {
        "@type": "Place",
        "name": "Prince William County, VA"
      },
      {
        "@type": "Place",
        "name": "Montgomery County, MD"
      }
    ],
    "serviceType": [
      "Furniture Removal",
      "Appliance Removal", 
      "Hot Tub Removal",
      "Shed Removal",
      "Fence Removal",
      "Garage Cleanout",
      "Estate Cleanout",
      "Construction Debris Removal"
    ],
    "offers": {
      "@type": "Offer",
      "description": "Same-day junk removal service with free estimates",
      "priceRange": "$$"
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
              Professional <span className="text-orange-400">Junk Removal</span> Services
            </h1>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Complete junk removal solutions across Washington DC Metro Area. Same-day pickup, licensed & insured service for residential and commercial properties.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:5714892961"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl"
              >
                📞 Get Free Estimate
              </a>
              <a 
                href="tel:5714892961"
                className="bg-transparent border-2 border-orange-500 hover:bg-orange-500 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300"
              >
                Call (571) 489-2961
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Complete Junk Removal Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From single-item pickup to complete property cleanouts, we handle all your junk removal needs with professionalism and care.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="p-8">
                  <div className="text-5xl mb-4 text-center">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <a 
                    href={service.url}
                    className="block text-center bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
                  >
                    Learn More →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Wee Haul Junk Removal?</h2>
            <p className="text-xl text-gray-600">The DC Metro Area's most trusted junk removal company</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Same-Day Service</h3>
              <p className="text-gray-600">Fast, reliable pickup when you need it most. Many jobs completed the same day you call.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🏆</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Licensed & Insured</h3>
              <p className="text-gray-600">Fully licensed, bonded, and insured for your protection and peace of mind.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">♻️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Eco-Friendly</h3>
              <p className="text-gray-600">We recycle, donate, and properly dispose of items to minimize landfill impact.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">💰</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Transparent Pricing</h3>
              <p className="text-gray-600">Upfront, honest pricing with no hidden fees. Free estimates for all jobs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Areas We Serve</h2>
            <p className="text-xl text-gray-600">Premium junk removal across the Washington DC Metro Area</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {serviceAreas.map((area, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{area.name}</h3>
                  <p className="text-orange-600 font-semibold mb-3 text-sm">{area.neighborhoods}</p>
                  <p className="text-gray-600 mb-4">{area.description}</p>
                  <a 
                    href={area.url}
                    className="text-orange-600 hover:text-orange-700 font-semibold flex items-center"
                  >
                    View Service Area →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Simple 3-Step Process</h2>
            <p className="text-xl text-orange-100">Easy, hassle-free junk removal in just three steps</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Call or Book Online</h3>
              <p className="text-orange-100 leading-relaxed">Contact us for a free estimate. We'll schedule a convenient time for pickup.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">We Arrive & Quote</h3>
              <p className="text-orange-100 leading-relaxed">Our team arrives on time, reviews your items, and provides upfront pricing.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">We Haul It Away</h3>
              <p className="text-orange-100 leading-relaxed">Once approved, we remove everything and clean up. You relax and enjoy your space!</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <a 
              href="tel:5714892961"
              className="bg-white text-orange-600 font-bold py-4 px-12 rounded-2xl text-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              📞 Start Your Project Today
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Everything you need to know about our junk removal services</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">What items do you remove?</h3>
              <p className="text-gray-600">We remove almost everything! Furniture, appliances, electronics, construction debris, yard waste, and more. We cannot remove hazardous materials like paint, chemicals, or asbestos.</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">How do you price your services?</h3>
              <p className="text-gray-600">Pricing is based on volume - how much space your items take in our truck. We provide upfront, transparent pricing with no hidden fees. Most jobs range from $150-$800.</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Do you offer same-day service?</h3>
              <p className="text-gray-600">Yes! We offer same-day service for most areas when availability permits. Call us early in the day for the best chance of same-day pickup.</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Are you licensed and insured?</h3>
              <p className="text-gray-600">Absolutely! We are fully licensed, bonded, and insured. Our team is professional, uniformed, and trained to handle all types of junk removal safely.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gray-900 text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">Ready to Reclaim Your Space?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers across the DC Metro Area. Professional, reliable, and eco-friendly junk removal service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:5714892961"
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-12 rounded-xl text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              📞 Get Free Quote Now
            </a>
            <a 
              href="tel:5714892961"
              className="bg-transparent border-2 border-orange-500 hover:bg-orange-500 text-white font-bold py-4 px-12 rounded-xl text-xl transition-all duration-300"
            >
              Call (571) 489-2961
            </a>
          </div>
          <p className="text-gray-400 mt-6">7AM - 9PM • 7 Days a Week • Same Day Service Available</p>
        </div>
      </section>

    </div>
  )
}