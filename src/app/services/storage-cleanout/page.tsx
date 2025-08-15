'use client'

import { useState } from 'react'
import Header from '../../../components/Header'
import ContactForm from '../../../components/ContactForm'
import Head from 'next/head'
import Image from 'next/image'

const storageCleanoutSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Storage Unit Cleanout Services",
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
  "description": "Professional storage unit cleanout services in Fairfax County VA. Stop paying monthly storage fees - we make your unit clean and empty fast!",
  "areaServed": ["Fairfax County", "Arlington County", "Washington DC", "Montgomery County", "Prince William County", "Loudoun County"],
  "serviceType": "Storage Unit Cleanout",
  "video": {
    "@type": "VideoObject",
    "name": "Professional Storage Unit Cleanout Process - Wee Haul",
    "description": "Watch our expert team efficiently clean out storage units with complete removal and eco-friendly disposal",
    "thumbnailUrl": "https://img.youtube.com/vi/FEVH_-L2nJ0/maxresdefault.jpg",
    "embedUrl": "https://www.youtube.com/embed/FEVH_-L2nJ0",
    "uploadDate": "2024-12-01",
    "duration": "PT60S"
  }
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does a storage unit cleanout cost in Fairfax County?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Storage unit cleanout costs range from $250-$589 depending on unit size and amount of items. Small units (5x5) typically cost $250, while larger units (10x20) may cost $589. We provide upfront pricing with no hidden fees and free estimates."
      }
    },
    {
      "@type": "Question", 
      "name": "What items can you remove from my storage unit?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We remove furniture, appliances, boxes, electronics, clothing, books, sporting equipment, and construction materials. We cannot remove hazardous materials like paint, chemicals, or batteries. Our team safely handles heavy items."
      }
    },
    {
      "@type": "Question",
      "name": "How long does a storage unit cleanout take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most storage unit cleanouts take 1-3 hours depending on unit size. Small units (5x5) usually take 1 hour, while larger units (10x20) may take up to 3 hours. Our efficient team works quickly to minimize disruption."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide same-day storage unit cleanout services?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! We offer same-day service for urgent situations. Call us at (571) 489-2961 for immediate storage unit cleanout in Fairfax County, Arlington, and DC metro area."
      }
    }
  ]
}

export default function StorageCleanoutPage() {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false)

  return (
    <>
      <Head>
        <title>Storage Unit Cleanout Fairfax County VA | Stop Paying Storage Fees | Wee Haul</title>
        <meta name="description" content="Professional storage unit cleanout in Fairfax County VA. Stop paying monthly storage fees! Same-day service, eco-friendly disposal. Call (571) 489-2961" />
        <meta name="keywords" content="storage unit cleanout Fairfax County VA, storage facility cleaning Northern Virginia, storage junk removal VA, stop paying storage fees" />
        <meta property="og:title" content="Storage Unit Cleanout Fairfax County VA | Stop Paying Storage Fees | Wee Haul" />
        <meta property="og:description" content="Professional storage unit cleanout in Fairfax County VA. Stop paying monthly storage fees! Same-day service, eco-friendly disposal." />
        <meta property="og:url" content="https://weehauljunkdc.com/services/storage-cleanout" />
        <meta property="og:image" content="https://weehauljunkdc.com/images/services/Storage-Unit-Cleanup.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://weehauljunkdc.com/services/storage-cleanout" />
      </Head>
      <div className="min-h-screen bg-white">
        <Header />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(storageCleanoutSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        {/* Hero Section with Background Image */}
        <section className="relative bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 text-white py-20 overflow-hidden">
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  Professional Storage Unit Cleanout Services
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-purple-100">
                  Stop Paying Monthly Storage Fees - We Make Your Unit Clean and Empty Fast!
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="tel:5714892961"
                    className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors text-center"
                  >
                    📞 Call (571) 489-2961
                  </a>
                  <a 
                    href="https://calendly.com/weehauljunk/estimate" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors text-center"
                  >
                    📅 Book Online
                  </a>
                  <button
                    onClick={() => setIsContactFormOpen(true)}
                    className="bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors border border-white/30"
                  >
                    Get Free Quote
                  </button>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-2">
                  <Image
                    src="/images/services/Storage-Unit-Cleanup.jpg"
                    alt="Professional storage unit cleanout service in Fairfax County VA"
                    width={600}
                    height={400}
                    className="rounded-xl shadow-2xl w-full h-auto"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI Snippet Optimization Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Storage Unit Cleanout Questions Answered</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-2xl shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">How much does a storage unit cleanout cost in Fairfax County?</h3>
                  <p className="text-gray-800">Storage unit cleanout costs range from $250-$589 depending on unit size and amount of items. Small units (5x5) typically cost $250, while larger units (10x20) may cost $589. We provide upfront pricing with no hidden fees. <strong>Watch our 1,200+ viewed video</strong> showing complete storage cleanout process.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">What items can you remove from my storage unit?</h3>
                  <p className="text-gray-800">We remove furniture, appliances, boxes, electronics, clothing, books, sporting equipment, and construction materials. We cannot remove hazardous materials like paint, chemicals, or batteries.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">How long does a storage unit cleanout take?</h3>
                  <p className="text-gray-800">Most storage unit cleanouts take 1-3 hours depending on unit size. Small units (5x5) usually take 1 hour, while larger units (10x20) may take up to 3 hours with our efficient professional team.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Do you provide same-day storage unit cleanout services?</h3>
                  <p className="text-gray-800">Yes! We offer same-day service for urgent situations in Fairfax County, Arlington, and DC metro area. Call (571) 489-2961 for immediate storage unit cleanout service.</p>
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
                    🎬 Watch Our Professional Storage Unit Cleanout Process
                  </h2>
                  <p className="text-gray-600">
                    See how our expert team efficiently cleans out storage units with complete removal and eco-friendly disposal
                  </p>
                </div>
                
                <div className="relative bg-gray-900 rounded-xl overflow-hidden group cursor-pointer">
                  <a 
                    href="https://youtube.com/shorts/FEVH_-L2nJ0?feature=share"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative"
                  >
                    {/* Video Thumbnail */}
                    <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative">
                      <img 
                        src="https://img.youtube.com/vi/FEVH_-L2nJ0/maxresdefault.jpg"
                        alt="Professional Storage Unit Cleanout Process - Wee Haul"
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
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-indigo-700 items-center justify-center text-white hidden">
                        <div className="text-center">
                          <div className="text-4xl mb-2">📦</div>
                          <div className="text-xl font-bold">Storage Cleanout Video</div>
                          <div className="text-sm opacity-90">Professional removal & disposal</div>
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
                      
                      {/* Views Badge */}
                      <div className="absolute top-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-xs font-medium">
                        1,200+ views
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
                    href="https://youtube.com/shorts/FEVH_-L2nJ0?feature=share"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                  >
                    <span>▶️</span>
                    Watch Complete Storage Unit Cleanout Process
                  </a>
                </div>
                
                <div className="mt-6 text-center">
                  <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <span className="text-red-500">👁️</span>
                      <span>1,200+ views</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-purple-500">📦</span>
                      <span>Complete Cleanout</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-green-500">♻️</span>
                      <span>Eco-Friendly</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Storage Unit Cleanout Pricing</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-2xl shadow-lg border">
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Small Units</h3>
                    <div className="text-4xl font-bold text-purple-600 mb-4">$250</div>
                    <ul className="text-gray-800 space-y-2 mb-6">
                      <li>✓ 5x5 storage units</li>
                      <li>✓ Up to 1 hour service</li>
                      <li>✓ Complete cleanout</li>
                      <li>✓ Eco-friendly disposal</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-purple-500">
                  <div className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm mb-4 inline-block">Most Popular</div>
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Medium Units</h3>
                    <div className="text-4xl font-bold text-purple-600 mb-4">$350-450</div>
                    <ul className="text-gray-800 space-y-2 mb-6">
                      <li>✓ 10x10 storage units</li>
                      <li>✓ 1-2 hours service</li>
                      <li>✓ Sorting available</li>
                      <li>✓ Donation coordination</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-2xl shadow-lg border">
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Large Units</h3>
                    <div className="text-4xl font-bold text-purple-600 mb-4">$589</div>
                    <ul className="text-gray-800 space-y-2 mb-6">
                      <li>✓ 10x20+ storage units</li>
                      <li>✓ 2-3 hours service</li>
                      <li>✓ Heavy item removal</li>
                      <li>✓ Complete facility cleanup</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 bg-purple-100 rounded-lg p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">💡 Stop Paying Monthly Storage Fees!</h3>
                <p className="text-gray-800">Average storage unit fee in Fairfax County: $150/month. Our one-time cleanout service pays for itself in just 2-4 months!</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services We Provide */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Complete Storage Unit Services</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="text-center bg-white p-6 rounded-xl shadow-lg">
                  <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📦</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Complete Cleanout</h3>
                  <p className="text-gray-600">Full unit emptying with all items removed and disposed of properly</p>
                </div>
                <div className="text-center bg-white p-6 rounded-xl shadow-lg">
                  <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🔍</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Sorting Services</h3>
                  <p className="text-gray-600">Help decide what to keep, donate, or dispose of from your storage</p>
                </div>
                <div className="text-center bg-white p-6 rounded-xl shadow-lg">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">♻️</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Eco-Friendly Disposal</h3>
                  <p className="text-gray-600">Donation and recycling programs to minimize environmental impact</p>
                </div>
                <div className="text-center bg-white p-6 rounded-xl shadow-lg">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🚚</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Heavy Item Removal</h3>
                  <p className="text-gray-600">Safe removal of furniture, appliances, and exercise equipment</p>
                </div>
                <div className="text-center bg-white p-6 rounded-xl shadow-lg">
                  <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Same-Day Service</h3>
                  <p className="text-gray-600">Emergency cleanouts for payment deadlines and moving schedules</p>
                </div>
                <div className="text-center bg-white p-6 rounded-xl shadow-lg">
                  <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🏠</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Item Transport</h3>
                  <p className="text-gray-600">Transport items you want to keep back to your home</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Why Choose Wee Haul for Storage Unit Cleanout?</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-2xl shadow-lg border">
                  <div className="text-purple-500 text-3xl mb-4">🏢</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Local Fairfax County Experts</h3>
                  <p className="text-gray-600">We understand area regulations and work with local storage facilities</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg border">
                  <div className="text-purple-500 text-3xl mb-4">⚡</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Same-Day Service Available</h3>
                  <p className="text-gray-600">Urgent cleanouts for payment deadlines and moving schedules</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg border">
                  <div className="text-purple-500 text-3xl mb-4">♻️</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Eco-Friendly Disposal</h3>
                  <p className="text-gray-600">Donation and recycling programs for environmentally responsible disposal</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg border">
                  <div className="text-purple-500 text-3xl mb-4">💰</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Transparent Pricing</h3>
                  <p className="text-gray-600">No hidden fees or surprises - upfront pricing before we start</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg border">
                  <div className="text-purple-500 text-3xl mb-4">🛡️</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Fully Insured & Licensed</h3>
                  <p className="text-gray-600">Comprehensive insurance and Virginia waste disposal compliance</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg border">
                  <div className="text-purple-500 text-3xl mb-4">👥</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Professional Uniformed Team</h3>
                  <p className="text-gray-600">Trained professionals who respect your property and belongings</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Frequently Asked Questions About Storage Unit Cleanouts</h2>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-2xl shadow-lg border">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Do I need to be present during the storage unit cleanout?</h3>
                  <p className="text-gray-800">No, you don't need to stay during the cleanout. Many customers provide access details and let our professional team handle everything. However, if you want to sort through items or save specific belongings, we recommend being present.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg border">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">What happens to my items after removal - do you donate or recycle?</h3>
                  <p className="text-gray-800">We're committed to eco-friendly disposal. Usable items go to local charities like Purple Heart and Habitat ReStore. Recyclable materials go to certified facilities. We only send items to landfills as a last resort.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg border">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Can you help me sort through items to keep some things?</h3>
                  <p className="text-gray-800">Absolutely! We offer sorting services where our team helps you decide what to keep, donate, or dispose of. This is perfect if your storage unit has been untouched for years.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg border">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Is your storage unit cleanout service insured and licensed?</h3>
                  <p className="text-gray-800">Yes, Wee Haul is fully licensed and insured for your protection. We carry comprehensive insurance covering any potential damage during the cleanout process and follow all Virginia waste disposal regulations.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Storage Unit Cleanout Service Areas</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white p-4 rounded-xl shadow">
                  <h3 className="font-bold text-gray-900 mb-2">Fairfax County, VA</h3>
                  <p className="text-gray-600 text-sm">Vienna, McLean, Reston, Herndon, Great Falls, Falls Church, Springfield, Burke</p>
                </div>
                <div className="bg-white p-4 rounded-xl shadow">
                  <h3 className="font-bold text-gray-900 mb-2">Arlington County, VA</h3>
                  <p className="text-gray-600 text-sm">Arlington, Crystal City, Ballston, Clarendon, Rosslyn</p>
                </div>
                <div className="bg-white p-4 rounded-xl shadow">
                  <h3 className="font-bold text-gray-900 mb-2">Washington DC</h3>
                  <p className="text-gray-600 text-sm">All quadrants and neighborhoods throughout the District</p>
                </div>
                <div className="bg-white p-4 rounded-xl shadow">
                  <h3 className="font-bold text-gray-900 mb-2">Montgomery County, MD</h3>
                  <p className="text-gray-600 text-sm">Potomac, Bethesda, Chevy Chase, Rockville, Silver Spring</p>
                </div>
                <div className="bg-white p-4 rounded-xl shadow">
                  <h3 className="font-bold text-gray-900 mb-2">Prince William County, VA</h3>
                  <p className="text-gray-600 text-sm">Manassas, Woodbridge, Dale City, Gainesville, Haymarket</p>
                </div>
                <div className="bg-white p-4 rounded-xl shadow">
                  <h3 className="font-bold text-gray-900 mb-2">Loudoun County, VA</h3>
                  <p className="text-gray-600 text-sm">Ashburn, Sterling, Leesburg, Purcellville, Hamilton</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">Ready to Stop Paying Storage Fees?</h2>
              <p className="text-xl mb-8 text-purple-100">
                Don't let your storage unit continue draining your budget. Get your storage unit cleaned out fast and reclaim your monthly savings!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://calendly.com/weehauljunk/estimate" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-bold text-lg transition-colors"
                >
                  📅 Book Estimate Online
                </a>
                <a
                  href="tel:5714892961"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors"
                >
                  📞 Call (571) 489-2961
                </a>
              </div>
              <div className="mt-8 text-purple-100">
                <p>✅ Same-day service available</p>
                <p>✅ Free estimates</p>
                <p>✅ Eco-friendly disposal</p>
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