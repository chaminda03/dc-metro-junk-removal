'use client'

import { useState } from 'react'
import Header from '../../../components/Header'
import ContactForm from '../../../components/ContactForm'
import Head from 'next/head'
import Image from 'next/image'

const fenceRemovalSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Fence Removal Services",
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
  "description": "Professional fence removal services in Fairfax County VA including wood, vinyl, chain link, and metal fence removal",
  "areaServed": ["Fairfax County", "Arlington County", "Washington DC", "Montgomery County"],
  "serviceType": "Fence Removal",
  "video": {
    "@type": "VideoObject",
    "name": "Professional Fence Removal Process in Action - Wee Haul",
    "description": "Watch our expert team professionally remove fences in Fairfax County VA with specialized equipment and techniques",
    "thumbnailUrl": "https://img.youtube.com/vi/WhhJY__orMA/maxresdefault.jpg",
    "embedUrl": "https://www.youtube.com/embed/WhhJY__orMA",
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
      "name": "How much does fence removal cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Fence removal costs vary by fence type and length, typically $300-1500. We provide free estimates and transparent pricing with no hidden fees."
      }
    },
    {
      "@type": "Question", 
      "name": "What types of fences can you remove?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We remove all fence types: wood, vinyl, chain link, wrought iron, composite, and metal fencing. Includes post and concrete footing removal."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide same-day fence removal?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! We offer same-day fence removal service in Fairfax County, Arlington, and Washington DC metro area. Call (571) 489-2961 to schedule."
      }
    },
    {
      "@type": "Question",
      "name": "Do you remove fence posts and concrete footings?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely! We provide complete fence removal including post extraction, concrete footing removal, and site cleanup and restoration."
      }
    }
  ]
}

export default function FenceRemovalPage() {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false)

  return (
    <>
      <Head>
        <title>Fence Removal Fairfax County VA | Same Day | Wee Haul</title>
        <meta name="description" content="Expert fence removal Northern VA. Wood, vinyl, chain link removal. Same day service, licensed & insured. Call (571) 489-2961" />
        <meta name="keywords" content="fence removal Fairfax County VA, wood fence removal Northern Virginia, vinyl fence removal VA, chain link fence removal" />
        <meta property="og:title" content="Fence Removal Fairfax County VA | Same Day | Wee Haul" />
        <meta property="og:description" content="Expert fence removal Northern VA. Wood, vinyl, chain link removal. Same day service, licensed & insured." />
        <meta property="og:url" content="https://weehauljunkdc.com/services/fence-removal" />
        <meta property="og:image" content="https://weehauljunkdc.com/images/services/Fence-Removal.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://weehauljunkdc.com/services/fence-removal" />
      </Head>
      <div className="min-h-screen bg-white">
        <Header />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(fenceRemovalSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        {/* Hero Section with Background Image */}
        <section className="relative bg-gradient-to-br from-green-600 via-green-700 to-emerald-800 text-white py-20 overflow-hidden">
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  Professional Fence Removal Services
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-green-100">
                  Expert fence removal throughout Fairfax County and DC Metro. All fence types, same-day service available.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="tel:5714892961"
                    className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors text-center"
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
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-2">
                  <Image
                    src="/images/services/Fence-Removal.jpg"
                    alt="Professional fence removal service in Fairfax County VA"
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
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Fence Removal Questions Answered</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-2xl shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">What is the best fence removal service near me?</h3>
                  <p className="text-gray-800">Wee Haul Junk Removal is the #1 rated fence removal service serving Fairfax County and DC metro area with same-day service, all fence types, and competitive pricing starting at $300. <strong>Watch our 1,600+ viewed video</strong> showing professional fence removal in action.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">How much does fence removal cost in Fairfax VA?</h3>
                  <p className="text-gray-800">Fence removal typically costs $300-1500 in Fairfax County depending on fence type and length. Wee Haul provides free estimates with transparent pricing and no hidden fees.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Can you remove fence posts and concrete footings?</h3>
                  <p className="text-gray-800">Yes! Our professional team provides complete fence removal including post extraction, concrete footing removal, site cleanup, and restoration with same-day service available.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">What types of fences can you remove?</h3>
                  <p className="text-gray-800">We remove all fence types: wood, vinyl, chain link, wrought iron, composite, and metal fencing with professional equipment and eco-friendly disposal methods.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Before/After Section with Second Image */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Professional Results You Can Trust</h2>
                <p className="text-xl text-gray-600">See the difference our expert fence removal makes</p>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="bg-green-50 rounded-2xl p-2">
                    <Image
                      src="/images/services/Fence-removal-log.jpg"
                      alt="Fence removal logs and debris professionally cleared"
                      width={600}
                      height={400}
                      className="rounded-xl shadow-lg w-full h-auto"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Complete Fence Removal & Cleanup</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">✓</div>
                      <p className="text-gray-800"><strong>Professional Dismantling:</strong> Safe removal of all fence materials without property damage</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">✓</div>
                      <p className="text-gray-800"><strong>Post & Footing Extraction:</strong> Complete removal including concrete footings and underground posts</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">✓</div>
                      <p className="text-gray-800"><strong>Debris Cleanup:</strong> All materials hauled away leaving your property clean and ready</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">✓</div>
                      <p className="text-gray-800"><strong>Site Restoration:</strong> Grading, backfill, and cleanup to restore original landscape</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Fence Types We Remove */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">All Fence Types Professionally Removed</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center bg-white p-6 rounded-xl shadow-lg">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🪵</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Wood Fences</h3>
                  <p className="text-gray-600 text-sm">Privacy, picket, cedar, pressure-treated lumber</p>
                </div>
                <div className="text-center bg-white p-6 rounded-xl shadow-lg">
                  <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">⛓️</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Chain Link</h3>
                  <p className="text-gray-600 text-sm">Residential, commercial, security, temporary</p>
                </div>
                <div className="text-center bg-white p-6 rounded-xl shadow-lg">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🏠</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Vinyl & PVC</h3>
                  <p className="text-gray-600 text-sm">Privacy, decorative, composite materials</p>
                </div>
                <div className="text-center bg-white p-6 rounded-xl shadow-lg">
                  <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🔧</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Metal & Iron</h3>
                  <p className="text-gray-600 text-sm">Wrought iron, aluminum, ornamental steel</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Why Choose Wee Haul for Fence Removal?</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-2xl shadow-lg border">
                  <div className="text-green-500 text-3xl mb-4">⚡</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Same-Day Service</h3>
                  <p className="text-gray-600">Emergency and scheduled fence removal with flexible timing throughout DC metro</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg border">
                  <div className="text-green-500 text-3xl mb-4">💰</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Transparent Pricing</h3>
                  <p className="text-gray-600">Upfront estimates with no hidden fees. Fair pricing based on fence type and length</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg border">
                  <div className="text-green-500 text-3xl mb-4">🌱</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Eco-Friendly Disposal</h3>
                  <p className="text-gray-600">Metal recycling, wood donation, and proper disposal to minimize environmental impact</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg border">
                  <div className="text-green-500 text-3xl mb-4">🛡️</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Licensed & Insured</h3>
                  <p className="text-gray-600">Fully licensed, bonded, and insured with background-checked professionals</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg border">
                  <div className="text-green-500 text-3xl mb-4">🔧</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Complete Removal</h3>
                  <p className="text-gray-600">Posts, concrete footings, cleanup, and site restoration all included</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg border">
                  <div className="text-green-500 text-3xl mb-4">📞</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Customer Satisfaction</h3>
                  <p className="text-gray-600">100% satisfaction guarantee with follow-up service and quality assurance</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Process */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Fence Removal Process</h2>
              
              {/* Video Section */}
              <div className="mb-16">
                <div className="bg-white p-8 rounded-2xl shadow-lg max-w-4xl mx-auto">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      🎬 Watch Our Professional Fence Removal in Action
                    </h3>
                    <p className="text-gray-600">
                      See how our expert team safely and efficiently removes fences with professional equipment
                    </p>
                  </div>
                  
                  <div className="relative bg-gray-900 rounded-xl overflow-hidden group cursor-pointer">
                    <a 
                      href="https://youtube.com/shorts/WhhJY__orMA?si=2ySDXFdaCu8TpEYo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block relative"
                    >
                      {/* Video Thumbnail */}
                      <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative">
                        <img 
                          src="https://img.youtube.com/vi/WhhJY__orMA/maxresdefault.jpg"
                          alt="Professional Fence Removal Process - Wee Haul"
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            e.currentTarget.nextElementSibling.style.display = 'flex';
                          }}
                        />
                        {/* Fallback if thumbnail fails */}
                        <div className="absolute inset-0 bg-gradient-to-br from-green-600 to-emerald-700 items-center justify-center text-white hidden">
                          <div className="text-center">
                            <div className="text-4xl mb-2">🎬</div>
                            <div className="text-xl font-bold">Fence Removal Video</div>
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
                        
                        {/* Views Badge */}
                        <div className="absolute top-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-xs font-medium">
                          1,600+ views
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
                      href="https://youtube.com/shorts/WhhJY__orMA?si=2ySDXFdaCu8TpEYo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                    >
                      <span>▶️</span>
                      Watch Our Professional Fence Removal Process
                    </a>
                  </div>
                  
                  <div className="mt-6 text-center">
                    <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <span className="text-red-500">👁️</span>
                        <span>1,600+ views</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="text-green-500">✅</span>
                        <span>Professional Results</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="text-blue-500">🛡️</span>
                        <span>Safe & Insured</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Process Steps */}
              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">1</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Free Assessment</h3>
                  <p className="text-gray-600">We evaluate your fence and provide transparent pricing with no obligations</p>
                </div>
                <div className="text-center">
                  <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">2</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Safe Dismantling</h3>
                  <p className="text-gray-600">Systematic panel removal with landscape and property protection</p>
                </div>
                <div className="text-center">
                  <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">3</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Post Extraction</h3>
                  <p className="text-gray-600">Complete removal of posts and concrete footings with specialized equipment</p>
                </div>
                <div className="text-center">
                  <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">4</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Site Restoration</h3>
                  <p className="text-gray-600">Complete cleanup, grading, and site preparation for your next project</p>
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
                  <h3 className="text-xl font-bold text-gray-900 mb-3">How much does fence removal cost?</h3>
                  <p className="text-gray-800">Fence removal costs vary by fence type and length, typically $300-1500. We provide free estimates and transparent pricing with no hidden fees.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg border">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">What types of fences can you remove?</h3>
                  <p className="text-gray-800">We remove all fence types: wood, vinyl, chain link, wrought iron, composite, and metal fencing. Includes post and concrete footing removal.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg border">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Do you provide same-day fence removal?</h3>
                  <p className="text-gray-800">Yes! We offer same-day fence removal service in Fairfax County, Arlington, and Washington DC metro area. Call (571) 489-2961 to schedule.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg border">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Do you remove fence posts and concrete footings?</h3>
                  <p className="text-gray-800">Absolutely! We provide complete fence removal including post extraction, concrete footing removal, and site cleanup and restoration.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Fence Removal Service Areas</h2>
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
        <section className="py-16 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">Ready to Remove Your Fence?</h2>
              <p className="text-xl mb-8 text-green-100">
                Get your free estimate today and discover why we're the top choice for fence removal in Fairfax County
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:5714892961"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors"
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