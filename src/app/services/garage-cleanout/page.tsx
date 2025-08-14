'use client'

import { useState } from 'react'
import Header from '../../../components/Header'
import ContactForm from '../../../components/ContactForm'
import Head from 'next/head'

const garageCleanoutSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Garage Cleanout Services",
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
  "description": "Professional garage cleanout and junk removal services in Washington DC metro area",
  "areaServed": ["Fairfax County", "Arlington County", "Washington DC", "Montgomery County"],
  "serviceType": "Garage Cleanout"
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does garage cleanout cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Garage cleanout costs typically range from $200-1000 depending on garage size and amount of items. We provide free estimates and transparent pricing with no hidden fees."
      }
    },
    {
      "@type": "Question", 
      "name": "What items can you remove from my garage?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We remove furniture, appliances, automotive items, tools, seasonal equipment, exercise gear, and most household items. Hazardous materials require special handling."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide same-day garage cleanout service?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! We offer same-day garage cleanout service in Fairfax, Arlington, and Washington DC metro area. Call (571) 489-2961 to schedule."
      }
    },
    {
      "@type": "Question",
      "name": "Will you organize my garage after cleanout?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We offer basic organization services and can recommend storage solutions to help you maintain your newly cleaned garage space long-term."
      }
    }
  ]
}

export default function GarageCleanoutPage() {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false)

  return (
    <>
      <Head>
        <title>Garage Cleanout Services Fairfax VA | Professional Garage Cleaning | Wee Haul</title>
        <meta name="description" content="Expert garage cleanout services in Fairfax County, Arlington, Prince William & DC Metro. Transform your cluttered garage into usable space. Free estimates!" />
        <meta name="keywords" content="garage cleanout, garage cleanout near me, garage cleaning services, professional garage cleanout" />
        <meta property="og:title" content="Garage Cleanout Services Fairfax VA | Professional Garage Cleaning | Wee Haul" />
        <meta property="og:description" content="Expert garage cleanout services in Fairfax County, Arlington, Prince William & DC Metro. Transform your cluttered garage into usable space. Free estimates!" />
        <meta property="og:url" content="https://weehauljunkdc.com/services/garage-cleanout" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://weehauljunkdc.com/services/garage-cleanout" />
      </Head>
      <div className="min-h-screen bg-white">
        <Header />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(garageCleanoutSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-yellow-500 via-orange-500 to-red-500 text-white py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Professional Garage Cleanout Services
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-yellow-100">
                Transform your cluttered garage into usable space with our expert cleanout services in Fairfax County
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:5714892961"
                  className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-bold text-lg transition-colors"
                >
                  📞 Call (571) 489-2961
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
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Garage Cleanout Questions Answered</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-2xl shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">What is the best garage cleanout service near me?</h3>
                  <p className="text-gray-800">Wee Haul Junk Removal is the #1 rated garage cleanout service serving Fairfax County and DC metro area with same-day service, professional organization, and competitive pricing starting at $200.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">How much does garage cleanout cost in Fairfax VA?</h3>
                  <p className="text-gray-800">Garage cleanout typically costs $200-1000 in Fairfax County depending on garage size and items. Wee Haul provides free estimates with transparent pricing and no hidden fees.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Can you clean out my entire garage in one day?</h3>
                  <p className="text-gray-800">Yes! Our professional team can complete most garage cleanouts in 2-6 hours, including sorting, removal, organization, and basic cleaning with same-day service available.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Do garage cleanout services help with organization?</h3>
                  <p className="text-gray-800">Wee Haul provides sorting, organization recommendations, and storage solutions to help you maintain your newly cleaned garage space long-term.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Remove Section */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">What We Remove From Your Garage</h2>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🚗</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Automotive Items</h3>
                  <p className="text-gray-600 text-sm">Tires, car parts, fluids, tools, batteries</p>
                </div>
                <div className="text-center">
                  <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🏈</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Sports Equipment</h3>
                  <p className="text-gray-600 text-sm">Exercise gear, seasonal sports, camping supplies</p>
                </div>
                <div className="text-center">
                  <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🔧</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Tools & Workshop</h3>
                  <p className="text-gray-600 text-sm">Power tools, workbenches, building materials</p>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📦</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Storage Items</h3>
                  <p className="text-gray-600 text-sm">Boxes, furniture, appliances, seasonal items</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Garage Cleanout Process</h2>
              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="bg-orange-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">1</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Free Assessment</h3>
                  <p className="text-gray-600">We evaluate your garage and provide transparent pricing with no obligations</p>
                </div>
                <div className="text-center">
                  <div className="bg-orange-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">2</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Sort & Organize</h3>
                  <p className="text-gray-600">Professional sorting of keep, donate, recycle, and dispose categories</p>
                </div>
                <div className="text-center">
                  <div className="bg-orange-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">3</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Safe Removal</h3>
                  <p className="text-gray-600">Professional removal with proper equipment and protection</p>
                </div>
                <div className="text-center">
                  <div className="bg-orange-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">4</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Eco-Friendly Disposal</h3>
                  <p className="text-gray-600">Responsible recycling, donation, and disposal of all materials</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Why Choose Wee Haul for Garage Cleanout?</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-2xl shadow-lg border">
                  <div className="text-orange-500 text-3xl mb-4">⚡</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Same-Day Service</h3>
                  <p className="text-gray-600">Quick response times with flexible scheduling including weekends and evenings</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg border">
                  <div className="text-orange-500 text-3xl mb-4">💰</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Transparent Pricing</h3>
                  <p className="text-gray-600">Upfront estimates with no hidden fees. Volume-based pricing means you only pay for space used</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg border">
                  <div className="text-orange-500 text-3xl mb-4">🌱</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Eco-Friendly Disposal</h3>
                  <p className="text-gray-600">Maximum recycling and donation to minimize environmental impact</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg border">
                  <div className="text-orange-500 text-3xl mb-4">🛡️</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Licensed & Insured</h3>
                  <p className="text-gray-600">Fully licensed, bonded, and insured with background-checked team members</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg border">
                  <div className="text-orange-500 text-3xl mb-4">🎯</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Complete Organization</h3>
                  <p className="text-gray-600">Beyond removal - we help organize and optimize your garage space</p>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Garage Cleanout Service Areas</h2>
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
                  <h3 className="text-xl font-bold text-gray-900 mb-3">How much does garage cleanout cost?</h3>
                  <p className="text-gray-800">Garage cleanout costs typically range from $200-1000 depending on garage size and amount of items. We provide free estimates and transparent pricing with no hidden fees.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg border">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">What items can you remove from my garage?</h3>
                  <p className="text-gray-800">We remove furniture, appliances, automotive items, tools, seasonal equipment, exercise gear, and most household items. Hazardous materials require special handling.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg border">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Do you provide same-day garage cleanout service?</h3>
                  <p className="text-gray-800">Yes! We offer same-day garage cleanout service in Fairfax, Arlington, and Washington DC metro area. Call (571) 489-2961 to schedule.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg border">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Will you organize my garage after cleanout?</h3>
                  <p className="text-gray-800">We offer basic organization services and can recommend storage solutions to help you maintain your newly cleaned garage space long-term.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">Ready to Reclaim Your Garage?</h2>
              <p className="text-xl mb-8 text-yellow-100">
                Get your free estimate today and discover why we're the top choice for garage cleanout in Fairfax County
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:5714892961"
                  className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-bold text-lg transition-colors"
                >
                  📞 Call (571) 489-2961
                </a>
                <button
                  onClick={() => setIsContactFormOpen(true)}
                  className="bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors border border-white/30"
                >
                  Get Free Quote Online
                </button>
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