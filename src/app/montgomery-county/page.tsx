'use client'

import Header from '../../components/Header'
import ContactForm from '../../components/ContactForm'
import { useState } from 'react'

export default function MontgomeryCounty() {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false)
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6">
              Elite <span className="text-emerald-600">Junk Removal</span> Montgomery County
            </h1>
            <div className="w-32 h-1 bg-emerald-500 mx-auto mb-8"></div>
            <p className="text-xl sm:text-2xl text-gray-700 mb-8 leading-relaxed">
              Premium junk removal service for Potomac, Bethesda, Chevy Chase & Maryland's wealthiest communities
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a 
                href="tel:5714892961" 
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-8 rounded-lg text-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                📞 Call (571) 489-2961
              </a>
              <button 
                onClick={() => setIsContactFormOpen(true)}
                className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white font-bold py-4 px-8 rounded-lg text-xl transition-all duration-300"
              >
                Get Free Quote
              </button>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-green-500 text-2xl mb-2">✓</div>
                <h3 className="font-bold text-gray-900 mb-2">Same-Day Service</h3>
                <p className="text-gray-600 text-sm">Available 7AM-9PM daily</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-green-500 text-2xl mb-2">✓</div>
                <h3 className="font-bold text-gray-900 mb-2">Licensed & Insured</h3>
                <p className="text-gray-600 text-sm">$2M+ coverage for luxury homes</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-green-500 text-2xl mb-2">✓</div>
                <h3 className="font-bold text-gray-900 mb-2">White-Glove Service</h3>
                <p className="text-gray-600 text-sm">Luxury treatment guaranteed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ultra-Wealthy Neighborhoods Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Maryland's Most Exclusive Communities
              </h2>
              <div className="w-24 h-1 bg-emerald-500 mx-auto mb-6"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Specialized junk removal for Montgomery County's ultra-high net worth neighborhoods. Discretion and excellence guaranteed.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
              <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-8 rounded-2xl text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">💎</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Potomac</h3>
                <p className="text-gray-600 text-sm mb-4">Ultra-luxury estates, executive relocations, high-end cleanouts</p>
                <p className="text-emerald-600 font-semibold text-sm">Avg Home: $937K</p>
                <p className="text-xs text-gray-500 mt-1">83.8% college grads</p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">🏆</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Bethesda</h3>
                <p className="text-gray-600 text-sm mb-4">Medical professionals, luxury condos, upscale townhomes</p>
                <p className="text-blue-600 font-semibold text-sm">Avg Home: $958K</p>
                <p className="text-xs text-gray-500 mt-1">Mean Income: $290K</p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">👑</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Chevy Chase</h3>
                <p className="text-gray-600 text-sm mb-4">Million-dollar properties, country club district, executive homes</p>
                <p className="text-purple-600 font-semibold text-sm">Avg Home: $999K</p>
                <p className="text-xs text-gray-500 mt-1">Mean Income: $432K</p>
              </div>
              
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">🏡</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Travilah</h3>
                <p className="text-gray-600 text-sm mb-4">Custom luxury homes, estate properties, scenic river community</p>
                <p className="text-orange-600 font-semibold text-sm">Avg Home: $1.1M</p>
                <p className="text-xs text-gray-500 mt-1">Luxury estates</p>
              </div>
              
              <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-8 rounded-2xl text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">🌟</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Kensington</h3>
                <p className="text-gray-600 text-sm mb-4">Historic charm, upscale families, boutique neighborhood feel</p>
                <p className="text-teal-600 font-semibold text-sm">Mean Income: $232K</p>
                <p className="text-xs text-gray-500 mt-1">Historic luxury</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Services Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-emerald-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Luxury Junk Removal Services for Montgomery County
              </h2>
              <div className="w-24 h-1 bg-emerald-500 mx-auto mb-6"></div>
              <p className="text-xl text-gray-600">
                White-glove junk removal services designed for Maryland's most exclusive communities
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-emerald-500">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-2xl text-white">🏛️</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Million-Dollar Estate Cleanouts</h3>
                <p className="text-gray-600 mb-4">Complete estate liquidation services for Potomac and Chevy Chase luxury properties. We coordinate with estate attorneys, appraisers, and auction houses.</p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Fine art & antique handling</li>
                  <li>• Valuable item appraisal coordination</li>
                  <li>• Charitable donation maximization</li>
                  <li>• Confidential document destruction</li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-blue-500">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-2xl text-white">🎹</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Piano & Fine Furniture Removal</h3>
                <p className="text-gray-600 mb-4">Specialized removal of grand pianos, antique furniture, and high-value items with custom equipment and master craftsmen.</p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Grand piano specialists</li>
                  <li>• Custom protective wrapping</li>
                  <li>• Climate-controlled transport</li>
                  <li>• Zero-damage guarantee</li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-purple-500">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-2xl text-white">🏢</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Executive Home Office Cleanouts</h3>
                <p className="text-gray-600 mb-4">Discreet cleanouts for C-suite executives, medical professionals, and high-profile Bethesda residents with complete confidentiality.</p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Secure document shredding</li>
                  <li>• Medical equipment disposal</li>
                  <li>• IT equipment data wiping</li>
                  <li>• After-hours appointments</li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-orange-500">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-2xl text-white">🏗️</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Luxury Home Renovations</h3>
                <p className="text-gray-600 mb-4">Construction debris removal for high-end kitchen remodels, master suite additions, and luxury home improvements throughout Montgomery County.</p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Designer material removal</li>
                  <li>• Marble & granite disposal</li>
                  <li>• Appliance recycling</li>
                  <li>• Contractor coordination</li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-teal-500">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-teal-600 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-2xl text-white">🌿</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Eco-Luxury Disposal Services</h3>
                <p className="text-gray-600 mb-4">Environmentally conscious disposal for sustainability-minded residents with maximum donation and recycling efforts.</p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• 85% landfill diversion rate</li>
                  <li>• Tax-deductible donation receipts</li>
                  <li>• Carbon-neutral operations</li>
                  <li>• Sustainable packaging</li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-red-500">
                <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-red-600 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-2xl text-white">🚨</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Emergency Same-Day Service</h3>
                <p className="text-gray-600 mb-4">Priority emergency junk removal for urgent situations, real estate showings, and time-sensitive luxury home transactions.</p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• 2-hour response time</li>
                  <li>• Real estate agent partnerships</li>
                  <li>• Weekend & holiday availability</li>
                  <li>• Staging preparation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                What Montgomery County Residents Say
              </h2>
              <div className="w-24 h-1 bg-emerald-500 mx-auto mb-6"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-emerald-50 to-white p-8 rounded-2xl shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    <span>⭐⭐⭐⭐⭐</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-6 italic">"Exceptional service for our Potomac estate cleanout. They handled our antiques with museum-quality care and coordinated perfectly with our estate attorney. True professionals."</p>
                <div className="flex items-center">
                  <div>
                    <h4 className="font-bold text-gray-900">Margaret W.</h4>
                    <p className="text-sm text-gray-500">Potomac Resident</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    <span>⭐⭐⭐⭐⭐</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-6 italic">"Same-day service when we needed our Bethesda home staged for sale. They removed everything professionally and helped us get top dollar. Highly recommend for luxury properties."</p>
                <div className="flex items-center">
                  <div>
                    <h4 className="font-bold text-gray-900">Dr. James K.</h4>
                    <p className="text-sm text-gray-500">Bethesda Physician</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    <span>⭐⭐⭐⭐⭐</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-6 italic">"Complete discretion during our sensitive family situation. They handled everything with compassion and professionalism. The white-glove service exceeded expectations."</p>
                <div className="flex items-center">
                  <div>
                    <h4 className="font-bold text-gray-900">Patricia S.</h4>
                    <p className="text-sm text-gray-500">Chevy Chase Resident</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-green-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
              Why Montgomery County's Elite Choose Wee Haul
            </h2>
            <div className="w-24 h-1 bg-emerald-500 mx-auto mb-12"></div>
            
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Luxury Market Specialists</h3>
                    <p className="text-gray-600">Exclusive focus on Montgomery County's $1M+ properties with specialized training for high-value items.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Realtor Network Preferred</h3>
                    <p className="text-gray-600">Trusted by Montgomery County's top luxury real estate professionals for staging and move-out services.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Concierge-Level Service</h3>
                    <p className="text-gray-600">Personal account managers, flexible scheduling, and 24/7 emergency response for VIP clients.</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Maximum Insurance Protection</h3>
                    <p className="text-gray-600">$2M+ liability coverage specifically designed for luxury homes and high-value possessions.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">5</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Local Montgomery County Experts</h3>
                    <p className="text-gray-600">Born and raised locally with intimate knowledge of exclusive neighborhoods and community standards.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">6</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Charitable Giving Program</h3>
                    <p className="text-gray-600">Partner with Montgomery County's finest charities to maximize tax benefits and community impact.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-green-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready for White-Glove Junk Removal in Montgomery County?
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
            Same-day luxury service available. Trusted by Potomac, Bethesda & Chevy Chase's most discerning residents.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:5714892961" 
              className="bg-white text-emerald-600 hover:bg-emerald-50 font-bold py-4 px-8 rounded-lg text-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              📞 Call (571) 489-2961
            </a>
            <button 
              onClick={() => setIsContactFormOpen(true)}
              className="border-2 border-white text-white hover:bg-white hover:text-emerald-600 font-bold py-4 px-8 rounded-lg text-xl transition-all duration-300"
            >
              Get Free Quote
            </button>
          </div>
          
          <p className="text-emerald-200 mt-6 text-lg">
            Available 7AM - 9PM • 7 Days a Week • Emergency Service Available
          </p>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Wee Haul Junk Removal - Montgomery County Maryland",
            "description": "Elite junk removal services in Montgomery County MD. White-glove service for Potomac, Bethesda, Chevy Chase luxury homes. Same-day service, fully insured.",
            "url": "https://weehauljunkdc.com/montgomery-county",
            "telephone": "+15714892961",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Montgomery County",
              "addressRegion": "MD",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 39.1547,
              "longitude": -77.2405
            },
            "openingHours": "Mo-Su 07:00-21:00",
            "serviceArea": [
              {
                "@type": "City",
                "name": "Potomac",
                "addressRegion": "MD"
              },
              {
                "@type": "City",
                "name": "Bethesda", 
                "addressRegion": "MD"
              },
              {
                "@type": "City",
                "name": "Chevy Chase",
                "addressRegion": "MD"
              },
              {
                "@type": "City",
                "name": "Travilah",
                "addressRegion": "MD"
              },
              {
                "@type": "City", 
                "name": "Kensington",
                "addressRegion": "MD"
              }
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Luxury Junk Removal Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Estate Cleanout Services Potomac MD"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Piano Removal Bethesda Maryland"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Luxury Furniture Removal Chevy Chase"
                  }
                }
              ]
            },
            "sameAs": [
              "https://www.facebook.com/WeeHaulJunkRemoval/",
              "https://www.instagram.com/weehauljunkremoval/",
              "https://www.youtube.com/@weehauljunk",
              "https://www.linkedin.com/in/weehauljunkremoval/"
            ]
          })
        }}
      />

      <ContactForm 
        isOpen={isContactFormOpen} 
        onClose={() => setIsContactFormOpen(false)} 
      />
    </div>
  )
}