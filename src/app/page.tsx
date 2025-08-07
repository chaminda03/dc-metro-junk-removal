import Header from '../components/Header'

export default function Home() {
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
                  <a 
                    href="#contact" 
                    className="group border-2 border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white font-bold py-4 px-8 rounded-lg text-xl transition-all duration-300 transform hover:scale-105"
                  >
                    Get Free Quote
                  </a>
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
                <img src="/before-after-1.PNG" alt="Garage Cleanout Before and After" className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  COMPLETED
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Garage Cleanout</h3>
                <p className="text-gray-600 mb-4">Complete garage transformation - from cluttered to clean and organized</p>
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
                  <a 
                    href="tel:5714892961" 
                    className="inline-block bg-white text-orange-600 font-bold py-6 px-12 rounded-2xl text-2xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl"
                  >
                    📞 GET FREE QUOTE NOW
                  </a>
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
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">f</span>
                </div>
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">@</span>
                </div>
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">in</span>
                </div>
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
    </div>
  );
}
