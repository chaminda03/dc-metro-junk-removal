'use client'

import { useState } from 'react'
import Header from '../../../components/Header'
import ContactForm from '../../../components/ContactForm'
import Head from 'next/head'

const applianceRemovalSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Appliance Removal Services",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Wee Haul Junk Removal",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Fairfax",
      "addressRegion": "VA",
      "addressCountry": "US"
    },
    "telephone": "(571) 489-2961"
  },
  "description": "Professional appliance removal services in Northern Virginia including refrigerators, washers, dryers, dishwashers, and water heaters",
  "areaServed": ["Fairfax County", "Arlington County", "Washington DC", "Montgomery County"],
  "serviceType": "Appliance Removal",
  "video": {
    "@type": "VideoObject",
    "name": "Professional Appliance Removal Process - Wee Haul",
    "description": "Watch our expert team safely remove appliances including refrigerators, washers, and dryers in Northern Virginia",
    "thumbnailUrl": "https://img.youtube.com/vi/U5A2LTH6A1w/maxresdefault.jpg",
    "embedUrl": "https://www.youtube.com/embed/U5A2LTH6A1w",
    "uploadDate": "2024-12-01",
    "duration": "PT60S"
  }
}

export default function ApplianceRemovalPage() {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false)

  return (
    <>
      <Head>
        <title>Appliance Removal Northern Virginia - Refrigerator, Washer, Dryer Pickup | Wee Haul</title>
        <meta name="description" content="Professional appliance removal in Northern Virginia. We remove refrigerators, washers, dryers, dishwashers, water heaters. Eco-friendly disposal. Call (571) 489-2961" />
        <meta name="keywords" content="appliance removal Northern Virginia, refrigerator removal VA, washer dryer removal, dishwasher removal, water heater removal" />
        <meta property="og:title" content="Appliance Removal Northern Virginia - Refrigerator, Washer, Dryer Pickup | Wee Haul" />
        <meta property="og:description" content="Professional appliance removal in Northern Virginia. We remove refrigerators, washers, dryers, dishwashers, water heaters. Eco-friendly disposal." />
        <meta property="og:url" content="https://weehauljunkdc.com/services/appliance-removal" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://weehauljunkdc.com/services/appliance-removal" />
      </Head>
      <div className="min-h-screen bg-white">
        <Header />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(applianceRemovalSchema) }}
        />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-green-50 to-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Professional Appliance Removal in Northern Virginia
          </h1>
          <p className="text-xl text-gray-800 mb-8 max-w-3xl mx-auto">
            Safe, efficient appliance pickup and eco-friendly disposal
            <br />
            Refrigerators • Washers • Dryers • Dishwashers • Water Heaters
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="tel:5714892961" 
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg text-xl transition-colors"
            >
              📞 Schedule Appliance Pickup
            </a>
            <a 
              href="https://calendly.com/weehaulnow-info/30min" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-lg text-xl transition-colors"
            >
              📅 Book My Appointment
            </a>
            <button
              onClick={() => setIsContactFormOpen(true)}
              className="bg-white border-2 border-orange-500 text-orange-500 hover:bg-orange-50 font-bold py-4 px-8 rounded-lg text-xl transition-colors"
            >
              Get Free Quote
            </button>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  🎬 Watch Our Professional Appliance Removal in Action
                </h2>
                <p className="text-gray-600">
                  See how our expert team safely removes refrigerators, washers, dryers, and other appliances
                </p>
              </div>
              
              <div className="relative bg-gray-900 rounded-xl overflow-hidden group cursor-pointer">
                <a 
                  href="https://youtube.com/shorts/U5A2LTH6A1w?si=cI2YPaI4Odezlx7V"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative"
                >
                  {/* Video Thumbnail */}
                  <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative">
                    <img 
                      src="https://img.youtube.com/vi/U5A2LTH6A1w/maxresdefault.jpg"
                      alt="Professional Appliance Removal Process - Wee Haul"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                        if (nextElement) {
                          nextElement.style.display = 'flex';
                        }
                      }}
                    />
                    {/* Fallback if thumbnail fails */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-green-600 items-center justify-center text-white hidden">
                      <div className="text-center">
                        <div className="text-4xl mb-2">📦</div>
                        <div className="text-xl font-bold">Appliance Removal Video</div>
                        <div className="text-sm opacity-90">Click to watch on YouTube</div>
                      </div>
                    </div>
                    
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/50 transition-colors">
                      <div className="bg-red-600 rounded-full p-4 group-hover:bg-red-700 transition-colors shadow-lg">
                        <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>
                    
                    {/* YouTube Shorts Badge */}
                    <div className="absolute top-3 left-3 bg-black/70 text-white px-2 py-1 rounded text-xs font-medium">
                      YouTube Shorts
                    </div>
                    
                    {/* Professional Badge */}
                    <div className="absolute top-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-xs font-medium">
                      Professional Service
                    </div>
                    
                    {/* Duration Badge */}
                    <div className="absolute bottom-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-xs font-medium">
                      0:60
                    </div>
                  </div>
                </a>
              </div>
              
              {/* Call to Action */}
              <div className="mt-4 text-center">
                <a 
                  href="https://youtube.com/shorts/U5A2LTH6A1w?si=cI2YPaI4Odezlx7V"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  <span>▶️</span>
                  Watch Professional Appliance Removal Process
                </a>
              </div>
              
              <div className="mt-6 text-center">
                <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <span className="text-blue-500">📦</span>
                    <span>Refrigerators</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-green-500">🔧</span>
                    <span>Washers & Dryers</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-red-500">🛡️</span>
                    <span>Safe & Insured</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Appliances We Remove */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Complete Appliance Removal Services</h2>
            <p className="text-xl text-gray-800 max-w-3xl mx-auto">
              Professional removal and EPA-compliant disposal of all major appliances
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4 text-center">❄️</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Refrigerators & Freezers</h3>
              <ul className="text-gray-800 space-y-1">
                <li>• Full-size refrigerators (side-by-side, French door)</li>
                <li>• Mini fridges & compact units</li>
                <li>• Chest freezers & upright freezers</li>
                <li>• Wine coolers & beverage centers</li>
                <li>• Commercial refrigeration units</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4 text-center">🌊</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Washers & Dryers</h3>
              <ul className="text-gray-800 space-y-1">
                <li>• Top-load & front-load washers</li>
                <li>• Electric & gas dryers</li>
                <li>• Stackable washer/dryer units</li>
                <li>• Portable & compact units</li>
                <li>• Commercial laundry equipment</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4 text-center">🍽️</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Dishwashers</h3>
              <ul className="text-gray-800 space-y-1">
                <li>• Built-in dishwashers</li>
                <li>• Portable dishwashers</li>
                <li>• Countertop dishwashers</li>
                <li>• Commercial dishwashing units</li>
                <li>• Drawer-style dishwashers</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4 text-center">🔥</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Water Heaters</h3>
              <ul className="text-gray-800 space-y-1">
                <li>• Tank water heaters (30-80+ gallons)</li>
                <li>• Tankless water heaters</li>
                <li>• Electric & gas water heaters</li>
                <li>• Hybrid heat pump water heaters</li>
                <li>• Commercial water heating systems</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4 text-center">🍳</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Kitchen Appliances</h3>
              <ul className="text-gray-800 space-y-1">
                <li>• Gas & electric ranges/stoves</li>
                <li>• Wall ovens & cooktops</li>
                <li>• Microwaves (countertop & built-in)</li>
                <li>• Garbage disposals</li>
                <li>• Range hoods & ventilation</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4 text-center">❄️</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">HVAC Equipment</h3>
              <ul className="text-gray-800 space-y-1">
                <li>• Central air conditioning units</li>
                <li>• Window & portable AC units</li>
                <li>• Furnaces & boilers</li>
                <li>• Heat pumps</li>
                <li>• Dehumidifiers & air purifiers</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Removal Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Appliance Removal Process</h2>
            <p className="text-xl text-gray-800 max-w-3xl mx-auto">
              Safe, efficient, and environmentally responsible appliance removal
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Free Estimate</h3>
              <p className="text-gray-800">
                Call for instant pricing. We provide transparent quotes with no hidden fees.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Safe Disconnection</h3>
              <p className="text-gray-800">
                Our team safely disconnects appliances from utilities (additional fees may apply).
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Professional Removal</h3>
              <p className="text-gray-800">
                We handle all heavy lifting and transport appliances safely from your property.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">4</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">EPA Compliance</h3>
              <p className="text-gray-800">
                Proper refrigerant recovery and environmentally responsible disposal or recycling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Appliance Removal Pricing</h2>
            <p className="text-xl text-gray-800 max-w-3xl mx-auto">
              Competitive rates for professional appliance removal and disposal
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Small Appliances</h3>
              <div className="text-3xl font-bold text-green-600 mb-4">$75-125</div>
              <ul className="text-gray-800 space-y-2 mb-4">
                <li>• Microwaves</li>
                <li>• Dishwashers</li>
                <li>• Garbage disposals</li>
                <li>• Portable AC units</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md border-2 border-green-500">
              <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm mb-4 inline-block">Most Common</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Major Appliances</h3>
              <div className="text-3xl font-bold text-green-600 mb-4">$125-200</div>
              <ul className="text-gray-800 space-y-2 mb-4">
                <li>• Refrigerators</li>
                <li>• Washers & dryers</li>
                <li>• Stoves & ovens</li>
                <li>• Water heaters</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Large/Commercial</h3>
              <div className="text-3xl font-bold text-green-600 mb-4">$200+</div>
              <ul className="text-gray-800 space-y-2 mb-4">
                <li>• Commercial refrigeration</li>
                <li>• HVAC systems</li>
                <li>• Industrial equipment</li>
                <li>• Multiple appliances</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 bg-green-100 rounded-lg p-6 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-2">💡 Additional Services</h3>
            <div className="grid md:grid-cols-2 gap-4 text-left mt-4">
              <div>
                <h4 className="font-bold text-gray-900">Disconnection Services</h4>
                <p className="text-gray-800">Plumbing/electrical disconnection: $50-100 additional</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Same-Day Service</h4>
                <p className="text-gray-800">Available for urgent removals (subject to availability)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Environmental Responsibility */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Environmentally Responsible Disposal</h2>
            <p className="text-xl text-gray-800 max-w-3xl mx-auto">
              We follow strict EPA guidelines for appliance disposal and recycling
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">🌍 Our Environmental Commitment</h3>
              <ul className="space-y-4 text-gray-800">
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 text-xl">✓</span>
                  <div>
                    <strong>Refrigerant Recovery:</strong> All refrigerants are properly recovered and disposed of according to EPA Section 608 regulations
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 text-xl">✓</span>
                  <div>
                    <strong>Metal Recycling:</strong> Steel, copper, and aluminum components are separated and sent to certified recycling facilities
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 text-xl">✓</span>
                  <div>
                    <strong>Hazardous Material Handling:</strong> Proper disposal of oils, mercury switches, and other hazardous components
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 text-xl">✓</span>
                  <div>
                    <strong>Donation Programs:</strong> Working appliances are donated to local charities when possible
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-green-50 rounded-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">📊 Environmental Impact</h3>
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">95%</div>
                  <div className="text-gray-800">Material Recovery Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">100%</div>
                  <div className="text-gray-800">EPA Compliance</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">500+</div>
                  <div className="text-gray-800">Appliances Recycled Monthly</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Appliance Removal Service Areas</h2>
            <p className="text-xl text-gray-800 max-w-3xl mx-auto">
              Professional appliance pickup throughout the DC metro area
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-bold text-gray-900 mb-2">🏛️ Washington DC</h3>
              <p className="text-gray-800 text-sm">Georgetown, Dupont Circle, Capitol Hill, Adams Morgan</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-bold text-gray-900 mb-2">🌟 Fairfax County</h3>
              <p className="text-gray-800 text-sm">McLean, Great Falls, Vienna, Oakton, Tysons</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-bold text-gray-900 mb-2">🏘️ Loudoun County</h3>
              <p className="text-gray-800 text-sm">Ashburn, Leesburg, Sterling, Herndon, Reston</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-bold text-gray-900 mb-2">🏛️ Arlington County</h3>
              <p className="text-gray-800 text-sm">Arlington, Rosslyn, Ballston, Pentagon City</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-bold text-gray-900 mb-2">🏡 Prince William</h3>
              <p className="text-gray-800 text-sm">Woodbridge, Manassas, Gainesville, Haymarket</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-bold text-gray-900 mb-2">💎 Montgomery County</h3>
              <p className="text-gray-800 text-sm">Bethesda, Potomac, Chevy Chase, Rockville</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Appliance Removal FAQ</h2>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Do you handle refrigerant removal from refrigerators and AC units?</h3>
              <p className="text-gray-800">
                Yes, we are EPA Section 608 certified for refrigerant recovery. We properly remove and dispose of all refrigerants according to federal environmental regulations, ensuring no harmful chemicals are released into the atmosphere.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Can you disconnect my appliances before removal?</h3>
              <p className="text-gray-800">
                We can provide basic disconnection services for an additional fee ($50-100). For complex plumbing or electrical work, we recommend having a licensed professional disconnect the appliance before our arrival to ensure safety and code compliance.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">What's the difference in cost between different appliance types?</h3>
              <p className="text-gray-800">
                Pricing depends on size, weight, and disposal complexity. Small appliances like microwaves cost $75-125, major appliances like refrigerators cost $125-200, while large commercial units or HVAC systems start at $200. Refrigerated appliances require special handling due to refrigerant recovery.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Do you remove built-in appliances?</h3>
              <p className="text-gray-800">
                Yes, we remove built-in dishwashers, wall ovens, cooktops, and other integrated appliances. Additional labor charges may apply for removal of cabinetry or countertop modifications needed to access the appliance safely.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">How do you dispose of water heaters?</h3>
              <p className="text-gray-800">
                Water heaters are drained completely and the metal tank is recycled. Gas water heaters require disconnection from the gas line (additional service). We ensure proper disposal of any sediment or mineral buildup according to local waste management regulations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Remove Your Old Appliances?</h2>
          <p className="text-xl mb-8">Professional, EPA-compliant appliance removal throughout Northern Virginia</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://calendly.com/weehaulnow-info/30min" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-green-900 hover:bg-gray-100 font-bold py-4 px-12 rounded-lg text-xl transition-colors"
            >
              📅 Book My Appointment
            </a>
            <a 
              href="tel:5714892961" 
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-12 rounded-lg text-xl transition-colors"
            >
              📞 Call: (571) 489-2961
            </a>
          </div>
          <div className="mt-8 text-green-200">
            <p>✅ EPA compliant disposal</p>
            <p>✅ Same-day service available</p>
            <p>✅ Eco-friendly recycling</p>
          </div>
        </div>
      </section>
        <ContactForm 
          isOpen={isContactFormOpen} 
          onClose={() => setIsContactFormOpen(false)} 
        />
      </div>
    </>
  )
}