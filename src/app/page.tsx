'use client'

import Header from '../components/Header'
import ContactForm from '../components/ContactForm'
import { useState } from 'react'

export default function Home() {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false)
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-orange-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-4000"></div>
        </div>
        
        <div className="relative z-10 flex items-center min-h-screen">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center justify-between">
              {/* Left Content */}
              <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
                <h1 className="text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                    JUNK REMOVAL
                  </span>
                  <br />
                  <span className="text-white">EXPERTS</span>
                </h1>
                <div className="w-24 h-1 bg-orange-500 mx-auto lg:mx-0 mb-6"></div>
                <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
                  Same-day pickup throughout <strong className="text-orange-400">Northern Virginia</strong>
                  <br />
                  Professional • Insured • Eco-friendly
                </p>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <a 
                    href="tel:5714892961" 
                    className="group relative overflow-hidden bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl"
                  >
                    <span className="relative z-10">📞 (571) 489-2961</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                  </a>
                  <button 
                    onClick={() => setIsContactFormOpen(true)}
                    className="group border-2 border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white font-bold py-4 px-8 rounded-lg text-xl transition-all duration-300 transform hover:scale-105"
                  >
                    Get Free Quote
                  </button>
                </div>
                
                {/* Trust Indicators */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm">
                  <div className="flex items-center space-x-2">
                    <span className="text-green-400 text-lg">✓</span>
                    <span>Same-Day Service</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-green-400 text-lg">✓</span>
                    <span>Licensed & Insured</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-green-400 text-lg">✓</span>
                    <span>Top Rated</span>
                  </div>
                </div>
              </div>
              
              {/* Right Content - Team Photo */}
              <div className="lg:w-1/2 lg:pl-12">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl transform rotate-3"></div>
                  <img 
                    src="/team-photo.webp" 
                    alt="Wee Haul Junk Removal Professional Team" 
                    className="relative z-10 w-full rounded-2xl shadow-2xl transform -rotate-1 hover:rotate-0 transition-transform duration-500"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-white text-gray-900 p-4 rounded-xl shadow-2xl">
                    <div className="text-2xl font-bold text-orange-500">7AM-9PM</div>
                    <div className="text-sm">7 Days a Week</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center text-white opacity-60">
            <span className="text-sm mb-2">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">Serving All of Northern Virginia</h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fast, reliable junk removal service across Fairfax, Loudoun, Prince William & Arlington Counties
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
            <a href="/fairfax-county" className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-transparent hover:border-orange-200">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-600 rounded-bl-2xl rounded-tr-2xl flex items-center justify-center">
                <span className="text-white font-bold text-sm">NOVA</span>
              </div>
              <div className="text-center pt-4">
                <h3 className="text-2xl font-bold mb-3 text-blue-900 group-hover:text-orange-600 transition-colors">Fairfax County</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">Fairfax • Vienna • McLean • Reston • Herndon • Great Falls</p>
                <span className="inline-block text-orange-500 font-semibold group-hover:text-orange-600 transition-colors">
                  Learn More →
                </span>
              </div>
            </a>
            
            <a href="/loudoun-county" className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-transparent hover:border-orange-200">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-bl-2xl rounded-tr-2xl flex items-center justify-center">
                <span className="text-white font-bold text-sm">NOVA</span>
              </div>
              <div className="text-center pt-4">
                <h3 className="text-2xl font-bold mb-3 text-blue-900 group-hover:text-orange-600 transition-colors">Loudoun County</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">Ashburn • Sterling • Leesburg • Purcellville • Hamilton</p>
                <span className="inline-block text-orange-500 font-semibold group-hover:text-orange-600 transition-colors">
                  Learn More →
                </span>
              </div>
            </a>
            
            <a href="/prince-william-county" className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-transparent hover:border-orange-200">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-400 to-purple-600 rounded-bl-2xl rounded-tr-2xl flex items-center justify-center">
                <span className="text-white font-bold text-sm">NOVA</span>
              </div>
              <div className="text-center pt-4">
                <h3 className="text-2xl font-bold mb-3 text-blue-900 group-hover:text-orange-600 transition-colors">Prince William County</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">Manassas • Woodbridge • Dale City • Gainesville • Haymarket</p>
                <span className="inline-block text-orange-500 font-semibold group-hover:text-orange-600 transition-colors">
                  Learn More →
                </span>
              </div>
            </a>
            
            <a href="/arlington-county" className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-transparent hover:border-orange-200">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-bl-2xl rounded-tr-2xl flex items-center justify-center">
                <span className="text-white font-bold text-sm">NOVA</span>
              </div>
              <div className="text-center pt-4">
                <h3 className="text-2xl font-bold mb-3 text-blue-900 group-hover:text-orange-600 transition-colors">Arlington County</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">Arlington • Crystal City • Ballston • Clarendon • Rosslyn</p>
                <span className="inline-block text-orange-500 font-semibold group-hover:text-orange-600 transition-colors">
                  Learn More →
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">Our Junk Removal Services</h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional junk removal services throughout Northern Virginia. No job too big or small.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {/* Furniture Removal */}
            <div className="group relative bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-2xl hover:border-orange-200 transition-all duration-300 transform hover:-translate-y-2">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-t-2xl"></div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-2xl text-white">🛋️</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Furniture Removal</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Sofas, mattresses, dressers, tables, chairs & more</p>
                <a href="/services/furniture-removal" className="inline-block mt-4 text-orange-500 hover:text-orange-600 font-semibold transition-colors">
                  Learn More →
                </a>
              </div>
            </div>

            {/* Appliance Removal */}
            <div className="group relative bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-2xl hover:border-orange-200 transition-all duration-300 transform hover:-translate-y-2">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-t-2xl"></div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-2xl text-white">🔌</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Appliance Removal</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Refrigerators, washers, dryers, dishwashers & water heaters</p>
                <a href="/services/appliance-removal" className="inline-block mt-4 text-orange-500 hover:text-orange-600 font-semibold transition-colors">
                  Learn More →
                </a>
              </div>
            </div>

            {/* Hot Tub Removal */}
            <div className="group relative bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-2xl hover:border-orange-200 transition-all duration-300 transform hover:-translate-y-2">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-purple-600 rounded-t-2xl"></div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-2xl text-white">🛁</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Hot Tub Removal</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Professional hot tub removal, spas & pool equipment</p>
                <a href="/services/hot-tub-removal" className="inline-block mt-4 text-orange-500 hover:text-orange-600 font-semibold transition-colors">
                  Learn More →
                </a>
              </div>
            </div>

            {/* Shed Removal */}
            <div className="group relative bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-2xl hover:border-orange-200 transition-all duration-300 transform hover:-translate-y-2">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-green-600 rounded-t-2xl"></div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-2xl text-white">🏚️</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Shed Removal</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Complete shed demolition & debris removal</p>
                <a href="/services/shed-removal" className="inline-block mt-4 text-orange-500 hover:text-orange-600 font-semibold transition-colors">
                  Learn More →
                </a>
              </div>
            </div>

            {/* Fence Removal */}
            <div className="group relative bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-2xl hover:border-orange-200 transition-all duration-300 transform hover:-translate-y-2">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-t-2xl"></div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-2xl text-white">🚧</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Fence Removal</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Wood, vinyl, chain link fence removal & disposal</p>
                <a href="/services/fence-removal" className="inline-block mt-4 text-orange-500 hover:text-orange-600 font-semibold transition-colors">
                  Learn More →
                </a>
              </div>
            </div>

            {/* Garage Cleanout */}
            <div className="group relative bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-2xl hover:border-orange-200 transition-all duration-300 transform hover:-translate-y-2">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-400 to-red-600 rounded-t-2xl"></div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-2xl text-white">🏠</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Garage Cleanout</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Complete garage cleaning & junk removal</p>
                <a href="/services/garage-cleanout" className="inline-block mt-4 text-orange-500 hover:text-orange-600 font-semibold transition-colors">
                  Learn More →
                </a>
              </div>
            </div>

            {/* Storage Cleanout */}
            <div className="group relative bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-2xl hover:border-orange-200 transition-all duration-300 transform hover:-translate-y-2">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-400 to-indigo-600 rounded-t-2xl"></div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-2xl text-white">📦</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Storage Cleanout</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Storage unit & facility cleanouts</p>
                <a href="/services/storage-cleanout" className="inline-block mt-4 text-orange-500 hover:text-orange-600 font-semibold transition-colors">
                  Learn More →
                </a>
              </div>
            </div>

            {/* Basement Cleanout */}
            <div className="group relative bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-2xl hover:border-orange-200 transition-all duration-300 transform hover:-translate-y-2">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-400 to-teal-600 rounded-t-2xl"></div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-2xl text-white">🏘️</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Basement Cleanout</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Full basement clearing & junk removal</p>
                <a href="/services/basement-cleanout" className="inline-block mt-4 text-orange-500 hover:text-orange-600 font-semibold transition-colors">
                  Learn More →
                </a>
              </div>
            </div>
          </div>
          
          {/* View All Services Button */}
          <div className="text-center mt-12">
            <a href="/services" className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              View All Services →
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">What Our Customers Say</h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it - hear from satisfied customers across Northern Virginia
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="flex text-orange-400 text-xl mr-2">★★★★★</div>
                <span className="text-sm text-gray-300">5.0 • Google Review</span>
              </div>
              <p className="text-gray-200 mb-6 leading-relaxed italic">
                "Amazing service! They showed up on time, worked efficiently, and cleaned up everything perfectly. The team was professional and the pricing was fair. Highly recommend Wee Haul!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center font-bold text-white mr-4">
                  S
                </div>
                <div>
                  <div className="font-semibold">Sarah M.</div>
                  <div className="text-sm text-gray-400">Fairfax County</div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="flex text-orange-400 text-xl mr-2">★★★★★</div>
                <span className="text-sm text-gray-300">5.0 • Yelp Review</span>
              </div>
              <p className="text-gray-200 mb-6 leading-relaxed italic">
                "Called them for a basement cleanout and they exceeded expectations. Very reasonable pricing and they donated items that were still good. Great communication throughout!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center font-bold text-white mr-4">
                  M
                </div>
                <div>
                  <div className="font-semibold">Mike D.</div>
                  <div className="text-sm text-gray-400">Loudoun County</div>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="flex text-orange-400 text-xl mr-2">★★★★★</div>
                <span className="text-sm text-gray-300">5.0 • Facebook Review</span>
              </div>
              <p className="text-gray-200 mb-6 leading-relaxed italic">
                "Same-day service for hot tub removal! Couldn't believe how quickly they responded and the job was done perfectly. Will definitely use them again."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center font-bold text-white mr-4">
                  J
                </div>
                <div>
                  <div className="font-semibold">Jennifer L.</div>
                  <div className="text-sm text-gray-400">Prince William County</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Stats Row */}
          <div className="grid md:grid-cols-4 gap-8 mt-16 text-center">
            <div className="border-r border-white/20 last:border-r-0">
              <div className="text-4xl font-bold text-orange-400 mb-2">1000+</div>
              <div className="text-gray-300">Jobs Completed</div>
            </div>
            <div className="border-r border-white/20 last:border-r-0">
              <div className="text-4xl font-bold text-orange-400 mb-2">5.0</div>
              <div className="text-gray-300">Average Rating</div>
            </div>
            <div className="border-r border-white/20 last:border-r-0">
              <div className="text-4xl font-bold text-orange-400 mb-2">Same Day</div>
              <div className="text-gray-300">Service Available</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-400 mb-2">100%</div>
              <div className="text-gray-300">Satisfaction Rate</div>
            </div>
          </div>
          
          {/* Follow Us Section */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-6">Follow Our Work</h3>
            <p className="text-gray-300 mb-8">See daily updates and behind-the-scenes content from our junk removal projects</p>
            <div className="flex justify-center gap-4 flex-wrap">
              <a href="https://www.youtube.com/@weehauljunk" target="_blank" rel="noopener noreferrer"
                 className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 text-white px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-3">
                <span className="text-xl">📺</span>
                <span className="font-semibold">YouTube</span>
              </a>
              <a href="https://www.tiktok.com/@wee.haul.junk.rem" target="_blank" rel="noopener noreferrer"
                 className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 text-white px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-3">
                <span className="text-xl">🎵</span>
                <span className="font-semibold">TikTok</span>
              </a>
              <a href="https://www.instagram.com/weehauljunkremoval/" target="_blank" rel="noopener noreferrer"
                 className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 text-white px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-3">
                <span className="text-xl">📷</span>
                <span className="font-semibold">Instagram</span>
              </a>
              <a href="https://share.google/NpzoBiCNH7QxPquf4" target="_blank" rel="noopener noreferrer"
                 className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 text-white px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-3">
                <span className="text-xl">⭐</span>
                <span className="font-semibold">Google Reviews</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Before & After Gallery */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">See Our Work - Before & After</h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real transformations from our professional junk removal services
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img src="/before-after-1.PNG" alt="Shed Removal and Demolition Before and After" className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  COMPLETED
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Shed Removal / Shed Demolition</h3>
                <p className="text-gray-600 mb-4">Complete shed demolition and debris removal - professional and efficient</p>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="mr-4">📍 Fairfax County</span>
                  <span>⏱️ Same Day</span>
                </div>
              </div>
            </div>
            
            <div className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img src="/before-after-2.jpg" alt="Basement Cleanout Before and After" className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  COMPLETED
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Basement Cleanout</h3>
                <p className="text-gray-600 mb-4">Full basement clearing and junk removal with eco-friendly disposal</p>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="mr-4">📍 Loudoun County</span>
                  <span>⏱️ 2 Hours</span>
                </div>
              </div>
            </div>
            
            <div className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative overflow-hidden bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center h-64">
                <div className="text-center">
                  <div className="text-6xl mb-4">📸</div>
                  <div className="text-xl font-bold text-gray-700 mb-2">Your Project Next!</div>
                  <div className="text-gray-600">Call us for a free quote</div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Ready to Start?</h3>
                <p className="text-gray-600 mb-4">Get your free quote and join our satisfied customers today</p>
                <a href="tel:5714892961" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded-lg transition-colors">
                  📞 Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-orange-600 via-orange-500 to-red-500 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-5xl lg:text-6xl font-bold mb-6">Ready to Get Started?</h2>
              <p className="text-2xl text-orange-100 mb-8">
                Get your <strong>FREE quote</strong> and same-day junk removal service
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Contact Info */}
              <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-8 border border-white/30">
                <h3 className="text-2xl font-bold mb-6 text-center lg:text-left">Contact Us Now</h3>
                
                <div className="space-y-4 mb-8">
                  <a href="tel:5714892961" className="flex items-center p-4 bg-white/20 rounded-2xl hover:bg-white/30 transition-all group">
                    <div className="w-12 h-12 bg-white text-orange-500 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                      📞
                    </div>
                    <div>
                      <div className="font-bold text-xl">(571) 489-2961</div>
                      <div className="text-orange-100">Call now for instant quote</div>
                    </div>
                  </a>
                  
                  <div className="flex items-center p-4 bg-white/20 rounded-2xl">
                    <div className="w-12 h-12 bg-white text-orange-500 rounded-2xl flex items-center justify-center mr-4">
                      📧
                    </div>
                    <div>
                      <div className="font-bold">info@weehaulnow.com</div>
                      <div className="text-orange-100">Email us anytime</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center p-4 bg-white/20 rounded-2xl">
                    <div className="w-12 h-12 bg-white text-orange-500 rounded-2xl flex items-center justify-center mr-4">
                      🕐
                    </div>
                    <div>
                      <div className="font-bold">7AM - 9PM</div>
                      <div className="text-orange-100">7 Days a Week</div>
                    </div>
                  </div>
                </div>
                
                <div className="text-center lg:text-left">
                  <div className="text-sm text-orange-100 mb-4">Serving all of Northern Virginia</div>
                  <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                    <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Fairfax</span>
                    <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Loudoun</span>
                    <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Prince William</span>
                    <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Arlington</span>
                  </div>
                </div>
              </div>
              
              {/* Right Side - Service Guarantees */}
              <div className="text-center lg:text-left">
                <h3 className="text-3xl font-bold mb-8">Why Choose Wee Haul?</h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center justify-center lg:justify-start">
                    <div className="w-8 h-8 bg-white text-orange-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      ⚡
                    </div>
                    <div className="text-lg">Same-day service available</div>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start">
                    <div className="w-8 h-8 bg-white text-orange-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      🛡️
                    </div>
                    <div className="text-lg">Licensed & fully insured</div>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start">
                    <div className="w-8 h-8 bg-white text-orange-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      ♻️
                    </div>
                    <div className="text-lg">Eco-friendly disposal & donation</div>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start">
                    <div className="w-8 h-8 bg-white text-orange-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      💰
                    </div>
                    <div className="text-lg">Fair, transparent pricing</div>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start">
                    <div className="w-8 h-8 bg-white text-orange-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      ⭐
                    </div>
                    <div className="text-lg">100% satisfaction guarantee</div>
                  </div>
                </div>
                
                {/* Big CTA Button */}
                <div className="text-center">
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button 
                      onClick={() => setIsContactFormOpen(true)}
                      className="bg-white text-orange-600 font-bold py-6 px-12 rounded-2xl text-2xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl"
                    >
                      📝 GET FREE QUOTE NOW
                    </button>
                    <a 
                      href="tel:5714892961" 
                      className="border-2 border-white text-white hover:bg-white hover:text-orange-600 font-bold py-6 px-12 rounded-2xl text-2xl transition-all duration-300 transform hover:scale-105"
                    >
                      📞 CALL NOW
                    </a>
                  </div>
                  <div className="mt-4 text-orange-100">
                    Call now or we'll call you back within 5 minutes!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-4 mb-4">
                <img src="/Logo.webp" alt="Wee Haul Junk Removal Logo" className="h-10 w-auto" />
                <div className="text-xl font-bold">Wee Haul Junk Removal</div>
              </div>
              <p className="text-gray-400 mb-4">
                Professional junk removal services throughout Northern Virginia. Licensed, insured, and eco-friendly.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="https://www.facebook.com/WeeHaulJunkRemoval/" target="_blank" rel="noopener noreferrer" 
                   className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors group">
                  <svg className="w-5 h-5 text-white group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="https://www.instagram.com/weehauljunkremoval/" target="_blank" rel="noopener noreferrer"
                   className="w-10 h-10 bg-pink-600 hover:bg-pink-700 rounded-full flex items-center justify-center transition-colors group">
                  <svg className="w-5 h-5 text-white group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="https://www.youtube.com/@weehauljunk" target="_blank" rel="noopener noreferrer"
                   className="w-10 h-10 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition-colors group">
                  <svg className="w-5 h-5 text-white group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/weehauljunkremoval/" target="_blank" rel="noopener noreferrer"
                   className="w-10 h-10 bg-blue-700 hover:bg-blue-800 rounded-full flex items-center justify-center transition-colors group">
                  <svg className="w-5 h-5 text-white group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="https://www.tiktok.com/@wee.haul.junk.rem" target="_blank" rel="noopener noreferrer"
                   className="w-10 h-10 bg-black hover:bg-gray-800 rounded-full flex items-center justify-center transition-colors group">
                  <svg className="w-5 h-5 text-white group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                  </svg>
                </a>
                <a href="https://share.google/NpzoBiCNH7QxPquf4" target="_blank" rel="noopener noreferrer"
                   className="w-10 h-10 bg-blue-500 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors group">
                  <svg className="w-5 h-5 text-white group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a href="/services" className="block text-gray-400 hover:text-orange-400 transition-colors">All Services</a>
                <a href="/fairfax-county" className="block text-gray-400 hover:text-orange-400 transition-colors">Service Areas</a>
                <a href="/about" className="block text-gray-400 hover:text-orange-400 transition-colors">About Us</a>
                <a href="/blog" className="block text-gray-400 hover:text-orange-400 transition-colors">Blog</a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center">
                  <span className="mr-2">📞</span>
                  <a href="tel:5714892961" className="hover:text-orange-400 transition-colors">(571) 489-2961</a>
                </div>
                <div className="flex items-center">
                  <span className="mr-2">📧</span>
                  <span>info@weehaulnow.com</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-2">📍</span>
                  <span>Falls Church, VA</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-2">🕐</span>
                  <span>7AM - 9PM, 7 Days</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Wee Haul Junk Removal. All rights reserved.</p>
            <p className="mt-2">Professional junk removal services in Fairfax, Loudoun, Prince William & Arlington Counties, Virginia</p>
          </div>
        </div>
      </footer>

      {/* Contact Form Modal */}
      <ContactForm 
        isOpen={isContactFormOpen} 
        onClose={() => setIsContactFormOpen(false)} 
      />
    </div>
  );
}
