import Header from '../../components/Header'

export default function WashingtonDC() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-red-50 via-blue-50 to-gray-50 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6">
              Premium <span className="text-red-600">Junk Removal</span> in Washington DC
            </h1>
            <div className="w-32 h-1 bg-red-500 mx-auto mb-8"></div>
            <p className="text-xl sm:text-2xl text-gray-700 mb-8 leading-relaxed">
              Same-day junk removal service for Georgetown, Dupont Circle, Wesley Heights & DC's most exclusive neighborhoods
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a 
                href="tel:5714892961" 
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg text-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                📞 Call (571) 489-2961
              </a>
              <button className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-bold py-4 px-8 rounded-lg text-xl transition-all duration-300">
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
                <p className="text-gray-600 text-sm">Fully bonded for your protection</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-green-500 text-2xl mb-2">✓</div>
                <h3 className="font-bold text-gray-900 mb-2">Eco-Friendly</h3>
                <p className="text-gray-600 text-sm">Donate & recycle whenever possible</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Neighborhoods Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Washington DC's Premier Neighborhoods
              </h2>
              <div className="w-24 h-1 bg-red-500 mx-auto mb-6"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Professional junk removal services for DC's most exclusive residential areas. Discreet, efficient, and white-glove service.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-2xl text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">🏛️</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Georgetown</h3>
                <p className="text-gray-600 text-sm mb-4">Historic luxury homes, estate cleanouts, high-value furniture removal</p>
                <p className="text-red-600 font-semibold text-sm">Avg Home Value: $2M+</p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">🌆</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Dupont Circle</h3>
                <p className="text-gray-600 text-sm mb-4">Luxury condos, corporate relocations, same-day service</p>
                <p className="text-blue-600 font-semibold text-sm">Median Income: $150K+</p>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">🏘️</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Wesley Heights</h3>
                <p className="text-gray-600 text-sm mb-4">Executive homes, basement cleanouts, construction debris</p>
                <p className="text-green-600 font-semibold text-sm">Median Income: $180K+</p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">🏙️</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Mass Ave Heights</h3>
                <p className="text-gray-600 text-sm mb-4">Diplomatic residences, white-glove service, discretion assured</p>
                <p className="text-purple-600 font-semibold text-sm">Median Income: $200K+</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services for DC Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Luxury Junk Removal Services in DC
              </h2>
              <div className="w-24 h-1 bg-red-500 mx-auto mb-6"></div>
              <p className="text-xl text-gray-600">
                Specialized services for Washington DC's most discerning residents
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-red-600 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-2xl text-white">🏡</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Estate Cleanouts</h3>
                <p className="text-gray-600 mb-4">Full-service estate cleanouts with respectful handling of personal belongings. We work with estate attorneys and real estate professionals.</p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Antique & artwork careful handling</li>
                  <li>• Donation coordination</li>
                  <li>• Document disposal services</li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-2xl text-white">🏢</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Corporate Relocations</h3>
                <p className="text-gray-600 mb-4">Executive office cleanouts, embassy relocations, and corporate moves with complete discretion and professionalism.</p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Confidential document shredding</li>
                  <li>• After-hours service available</li>
                  <li>• Secure item handling</li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-2xl text-white">🛋️</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Luxury Furniture Removal</h3>
                <p className="text-gray-600 mb-4">Safe removal of high-end furniture, pianos, artwork, and antiques with specialized equipment and trained professionals.</p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Piano removal specialists</li>
                  <li>• Art & antique care</li>
                  <li>• Damage-free guarantee</li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-2xl text-white">🏗️</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Construction Cleanup</h3>
                <p className="text-gray-600 mb-4">Post-renovation cleanup for luxury home improvements, kitchen remodels, and construction debris removal.</p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Drywall & debris removal</li>
                  <li>• Flooring material disposal</li>
                  <li>• Site cleanup services</li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-2xl text-white">📦</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Hoarding Cleanup</h3>
                <p className="text-gray-600 mb-4">Compassionate hoarding cleanup services with complete discretion, working with families and healthcare professionals.</p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Sensitive approach</li>
                  <li>• Medical waste disposal</li>
                  <li>• Insurance coordination</li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-teal-600 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-2xl text-white">🌿</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Eco-Luxury Disposal</h3>
                <p className="text-gray-600 mb-4">Environmentally responsible disposal with maximum donation and recycling efforts for sustainability-conscious residents.</p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• 80% diversion from landfills</li>
                  <li>• Charitable donation receipts</li>
                  <li>• Carbon-neutral hauling</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us for DC */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
              Why Washington DC Residents Choose Wee Haul
            </h2>
            <div className="w-24 h-1 bg-red-500 mx-auto mb-12"></div>
            
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">White-Glove Service</h3>
                    <p className="text-gray-600">Luxury treatment for high-end homes with careful handling of valuable items and respectful service.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Same-Day Response</h3>
                    <p className="text-gray-600">Emergency junk removal available 7AM-9PM for urgent situations and last-minute needs.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Complete Discretion</h3>
                    <p className="text-gray-600">Privacy and confidentiality assured for high-profile clients, diplomatic residences, and executive properties.</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Upfront Pricing</h3>
                    <p className="text-gray-600">Transparent, no-surprise pricing with free estimates and guaranteed rates for DC metro area.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">5</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Luxury Insurance</h3>
                    <p className="text-gray-600">Comprehensive insurance coverage for high-value items with specialized handling protocols.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">6</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Local Expertise</h3>
                    <p className="text-gray-600">Born and raised in the DC area with deep knowledge of local neighborhoods and requirements.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready for Premium Junk Removal in Washington DC?
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
            Same-day service available. Call now for immediate response or schedule your free estimate.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:5714892961" 
              className="bg-white text-red-600 hover:bg-red-50 font-bold py-4 px-8 rounded-lg text-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              📞 Call (571) 489-2961
            </a>
            <button className="border-2 border-white text-white hover:bg-white hover:text-red-600 font-bold py-4 px-8 rounded-lg text-xl transition-all duration-300">
              Get Free Quote
            </button>
          </div>
          
          <p className="text-red-200 mt-6 text-lg">
            Available 7AM - 9PM • 7 Days a Week • Same-Day Service
          </p>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Wee Haul Junk Removal - Washington DC",
            "description": "Premium junk removal services in Washington DC. Same-day service for Georgetown, Dupont Circle, Wesley Heights & luxury neighborhoods. Licensed, insured, eco-friendly.",
            "url": "https://weehaulnow.com/washington-dc",
            "telephone": "+15714892961",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Washington",
              "addressRegion": "DC",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 38.9072,
              "longitude": -77.0369
            },
            "openingHours": "Mo-Su 07:00-21:00",
            "serviceArea": [
              {
                "@type": "City",
                "name": "Washington",
                "addressRegion": "DC"
              }
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Junk Removal Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Estate Cleanout Services Washington DC"
                  }
                },
                {
                  "@type": "Offer", 
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Luxury Furniture Removal Georgetown"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service", 
                    "name": "Same-Day Junk Removal Dupont Circle"
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
    </div>
  )
}