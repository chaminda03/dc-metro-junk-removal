'use client'

import { useState } from 'react'
import Header from '../../../components/Header'
import ContactForm from '../../../components/ContactForm'
import Head from 'next/head'

const basementCleanoutSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Basement Cleanout Services",
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
  "description": "Professional basement cleanout and junk removal services in Washington DC metro area",
  "areaServed": ["Fairfax County", "Arlington County", "Washington DC", "Montgomery County"],
  "serviceType": "Basement Cleanout"
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does basement cleanout cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Basement cleanout costs typically range from $150-800 depending on the amount of items. We provide free estimates and transparent pricing with no hidden fees."
      }
    },
    {
      "@type": "Question", 
      "name": "What items can you remove from my basement?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We remove furniture, appliances, electronics, boxes, holiday decorations, exercise equipment, and most household items. Hazardous materials require special handling."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide same-day basement cleanout service?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! We offer same-day basement cleanout service in Fairfax, Arlington, and Washington DC metro area. Call (571) 489-2961 to schedule."
      }
    },
    {
      "@type": "Question",
      "name": "Will you donate usable items from my basement?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely! We donate usable furniture, clothing, and household items to local charities as part of our eco-friendly disposal process."
      }
    }
  ]
}

export default function BasementCleanoutPage() {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false)

  return (
    <>
      <Head>
        <title>Basement Cleanout Services DC Metro | Wee Haul Junk Removal</title>
        <meta name="description" content="Professional basement cleanout services in DC Metro. Same-day service, eco-friendly disposal, licensed & insured. Transform your basement today!" />
        <meta name="keywords" content="basement cleanout, junk removal, basement cleaning DC, cluttered basement, basement organization" />
        <meta property="og:title" content="Basement Cleanout Services DC Metro | Wee Haul Junk Removal" />
        <meta property="og:description" content="Professional basement cleanout services in DC Metro. Same-day service, eco-friendly disposal, licensed & insured. Transform your basement today!" />
        <meta property="og:url" content="https://weehauljunkdc.com/services/basement-cleanout" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://weehauljunkdc.com/services/basement-cleanout" />
      </Head>
      <div className="min-h-screen bg-white">
        <Header />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(basementCleanoutSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-orange-600 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Professional Basement Cleanout Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Transform your cluttered basement into usable space with our eco-friendly cleanout services in DC Metro
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:5714892961"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors"
              >
                📞 Call (571) 489-2961
              </a>
              <a 
                href="https://calendly.com/weehaulnow-info/30min" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors"
              >
                📅 Book My Appointment
              </a>
              <button
                onClick={() => setIsContactFormOpen(true)}
                className="bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors border border-white/30"
              >
                Get Free Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* AI Snippet Optimization Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Basement Cleanout Questions Answered</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">What is the best basement cleanout service near me?</h3>
                <p className="text-gray-800">Wee Haul Junk Removal is the #1 rated basement cleanout service serving Washington DC metro area with same-day service, eco-friendly disposal, and competitive pricing starting at $150. <strong>Watch our video</strong> showing complete cleanup and sweeping process.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">How much does basement cleanout cost in DC metro?</h3>
                <p className="text-gray-800">Basement cleanout typically costs $150-800 in DC metro depending on the amount of items. Wee Haul provides free estimates with transparent pricing and no hidden fees.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Can you remove everything from my basement in one day?</h3>
                <p className="text-gray-800">Yes! Our professional team can complete most basement cleanouts in 2-4 hours, including furniture removal, appliance disposal, and debris hauling with same-day service available.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Do basement cleanout services recycle and donate items?</h3>
                <p className="text-gray-800">Wee Haul follows eco-friendly practices, donating usable furniture and household items to local charities and recycling electronics, metals, and other materials to minimize landfill waste.</p>
              </div>
            </div>
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
                  🎬 Watch Our Professional Basement Cleanout & Final Cleanup
                </h2>
                <p className="text-gray-600">
                  See our expert crew complete the basement cleanout process with thorough cleanup and sweeping
                </p>
              </div>
              
              <div className="relative bg-gray-900 rounded-xl overflow-hidden group cursor-pointer">
                <a 
                  href="https://youtube.com/shorts/b-HmS-zEo5s?si=cVjkJjtJoFC85tNP"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative"
                >
                  {/* Video Thumbnail */}
                  <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative">
                    <img 
                      src="https://img.youtube.com/vi/b-HmS-zEo5s/maxresdefault.jpg"
                      alt="Professional Basement Cleanout and Cleanup Process - Wee Haul"
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
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-600 items-center justify-center text-white hidden">
                      <div className="text-center">
                        <div className="text-4xl mb-2">🧹</div>
                        <div className="text-xl font-bold">Basement Cleanout Video</div>
                        <div className="text-sm opacity-90">Professional cleanup & sweeping</div>
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
                    
                    {/* Cleanup Badge */}
                    <div className="absolute top-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-xs font-medium">
                      Complete Cleanup
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
                  href="https://youtube.com/shorts/b-HmS-zEo5s?si=cVjkJjtJoFC85tNP"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  <span>▶️</span>
                  Watch Complete Basement Cleanup Process
                </a>
              </div>
              
              <div className="mt-6 text-center">
                <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <span className="text-blue-500">📦</span>
                    <span>Complete Removal</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-green-500">🧹</span>
                    <span>Final Cleanup</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-purple-500">✨</span>
                    <span>Pristine Finish</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Remove Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">What We Remove From Your Basement</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🪑</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Furniture & Appliances</h3>
                <p className="text-gray-600">Old sofas, chairs, refrigerators, washers, dryers, and all household appliances</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📦</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Boxes & Storage Items</h3>
                <p className="text-gray-600">Cardboard boxes, plastic bins, holiday decorations, and stored belongings</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💻</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Electronics & Equipment</h3>
                <p className="text-gray-600">Computers, TVs, exercise equipment, tools, and electronic devices</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Basement Cleanout Process</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">1</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Free Assessment</h3>
                <p className="text-gray-600">We evaluate your basement and provide transparent pricing</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">2</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Safe Removal</h3>
                <p className="text-gray-600">Professional team safely removes all unwanted items</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">3</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Eco-Friendly Disposal</h3>
                <p className="text-gray-600">We donate, recycle, and properly dispose of all materials</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">4</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Clean Finish</h3>
                <p className="text-gray-600">Final sweep and walkthrough of your transformed space</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Why Choose Wee Haul for Basement Cleanout?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-2xl shadow-lg border">
                <div className="text-orange-500 text-3xl mb-4">⚡</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Same-Day Service</h3>
                <p className="text-gray-600">Quick response times with same-day and next-day service available throughout DC metro</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg border">
                <div className="text-orange-500 text-3xl mb-4">💰</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Transparent Pricing</h3>
                <p className="text-gray-600">Upfront estimates with no hidden fees. You only pay for the space your items take up</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg border">
                <div className="text-orange-500 text-3xl mb-4">🌱</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Eco-Friendly Disposal</h3>
                <p className="text-gray-600">We donate usable items and recycle materials to minimize environmental impact</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg border">
                <div className="text-orange-500 text-3xl mb-4">🛡️</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Licensed & Insured</h3>
                <p className="text-gray-600">Fully licensed, bonded, and insured for your protection and peace of mind</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg border">
                <div className="text-orange-500 text-3xl mb-4">👥</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Professional Team</h3>
                <p className="text-gray-600">Background-checked, uniformed professionals with proper safety equipment</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg border">
                <div className="text-orange-500 text-3xl mb-4">📞</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Customer Satisfaction</h3>
                <p className="text-gray-600">100% satisfaction guarantee with follow-up service to ensure your happiness</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Basement Cleanout Service Areas</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-4 rounded-xl shadow">
                <h3 className="font-bold text-gray-900 mb-2">Fairfax County, VA</h3>
                <p className="text-gray-600 text-sm">Alexandria, Fairfax, McLean, Reston, Herndon, Vienna, Falls Church, Annandale</p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow">
                <h3 className="font-bold text-gray-900 mb-2">Arlington County, VA</h3>
                <p className="text-gray-600 text-sm">Arlington, Crystal City, Pentagon City, Clarendon, Ballston</p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow">
                <h3 className="font-bold text-gray-900 mb-2">Washington DC</h3>
                <p className="text-gray-600 text-sm">All quadrants and neighborhoods throughout the District</p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow">
                <h3 className="font-bold text-gray-900 mb-2">Montgomery County, MD</h3>
                <p className="text-gray-600 text-sm">Bethesda, Silver Spring, Rockville, Potomac, Gaithersburg</p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow">
                <h3 className="font-bold text-gray-900 mb-2">Prince William County, VA</h3>
                <p className="text-gray-600 text-sm">Woodbridge, Manassas, Dale City, Lake Ridge</p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow">
                <h3 className="font-bold text-gray-900 mb-2">Loudoun County, VA</h3>
                <p className="text-gray-600 text-sm">Leesburg, Sterling, Ashburn, Lansdowne</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl shadow-lg border">
                <h3 className="text-xl font-bold text-gray-900 mb-3">How much does basement cleanout cost?</h3>
                <p className="text-gray-800">Basement cleanout costs typically range from $150-800 depending on the amount of items. We provide free estimates and transparent pricing with no hidden fees.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg border">
                <h3 className="text-xl font-bold text-gray-900 mb-3">What items can you remove from my basement?</h3>
                <p className="text-gray-800">We remove furniture, appliances, electronics, boxes, holiday decorations, exercise equipment, and most household items. Hazardous materials require special handling.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg border">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Do you provide same-day basement cleanout service?</h3>
                <p className="text-gray-800">Yes! We offer same-day basement cleanout service in Fairfax, Arlington, and Washington DC metro area. Call (571) 489-2961 to schedule.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg border">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Will you donate usable items from my basement?</h3>
                <p className="text-gray-800">Absolutely! We donate usable furniture, clothing, and household items to local charities as part of our eco-friendly disposal process.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-orange-500 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Basement?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Get your free estimate today and discover why we're the top choice for basement cleanout in DC metro
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://calendly.com/weehaulnow-info/30min" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-bold text-lg transition-colors"
              >
                📅 Book My Appointment
              </a>
              <a
                href="tel:5714892961"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors"
              >
                📞 Call (571) 489-2961
              </a>
            </div>
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