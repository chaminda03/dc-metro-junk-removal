import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Junk Removal Fairfax County VA - Same Day Pickup | Wee Haul',
  description: 'Professional junk removal services in Fairfax County, VA. Serving Fairfax, Vienna, McLean, Reston, Herndon. Same-day pickup, eco-friendly disposal. Call (571) 489-2961',
  keywords: 'junk removal Fairfax County, junk removal Fairfax VA, junk removal Vienna VA, junk removal McLean VA, junk removal Reston VA, junk removal Herndon VA, furniture removal Fairfax County',
  alternates: {
    canonical: 'https://weehaulnow.com/fairfax-county',
  },
}

export default function FairfaxCountyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-blue-900 text-white py-4 px-6">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold">Wee Haul Junk Removal</h1>
            </div>
            <div className="flex items-center space-x-6">
              <div className="text-right">
                <div className="text-xl font-bold text-orange-400">(571) 489-2961</div>
                <div className="text-sm">7AM - 9PM • 7 Days a Week</div>
              </div>
              <a 
                href="tel:5714892961" 
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg transition-colors"
              >
                📞 Call Now
              </a>
            </div>
          </div>
          
          {/* Navigation Menu */}
          <nav className="border-t border-blue-800 pt-4">
            <ul className="flex justify-center space-x-8">
              <li>
                <a href="/" className="hover:text-orange-400 font-medium transition-colors">HOME</a>
              </li>
              <li>
                <div className="relative group">
                  <button className="hover:text-orange-400 font-medium transition-colors">SERVICES</button>
                  <div className="absolute top-full left-0 bg-white text-gray-800 shadow-lg rounded-lg p-4 mt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="space-y-2">
                      <a href="/services/furniture-removal" className="block hover:text-orange-500">Furniture Removal</a>
                      <a href="/services/appliance-removal" className="block hover:text-orange-500">Appliance Removal</a>
                      <a href="/services/hot-tub-removal" className="block hover:text-orange-500">Hot Tub Removal</a>
                      <a href="/services/shed-removal" className="block hover:text-orange-500">Shed Removal</a>
                      <a href="/services/fence-removal" className="block hover:text-orange-500">Fence Removal</a>
                      <a href="/services/garage-cleanout" className="block hover:text-orange-500">Garage Cleanout</a>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="relative group">
                  <button className="hover:text-orange-400 font-medium transition-colors">LOCATIONS</button>
                  <div className="absolute top-full left-0 bg-white text-gray-800 shadow-lg rounded-lg p-4 mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="space-y-2">
                      <a href="/fairfax-county" className="block hover:text-orange-500">Fairfax County</a>
                      <a href="/loudoun-county" className="block hover:text-orange-500">Loudoun County</a>
                      <a href="/prince-william-county" className="block hover:text-orange-500">Prince William County</a>
                      <a href="/arlington-county" className="block hover:text-orange-500">Arlington County</a>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <a href="/blog" className="hover:text-orange-400 font-medium transition-colors">BLOG</a>
              </li>
              <li>
                <a href="/about" className="hover:text-orange-400 font-medium transition-colors">ABOUT</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-orange-400 font-medium transition-colors">CONTACT</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold text-gray-800 mb-6">
            #1 Junk Removal in Fairfax County, VA
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Professional junk removal services in Fairfax, Vienna, McLean, Reston, Herndon & Great Falls
            <br />
            Same-day pickup • Top Rated & insured • Eco-friendly disposal
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="tel:5714892961" 
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg text-xl transition-colors"
            >
              📞 Call Now for Free Quote
            </a>
          </div>
        </div>
      </section>

      {/* Fairfax County Cities */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Serving All of Fairfax County</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-blue-900">Fairfax, VA</h3>
              <p className="text-gray-600 mb-3">Professional junk removal in the heart of Fairfax County</p>
              <ul className="text-sm text-gray-500">
                <li>• Residential junk removal</li>
                <li>• Commercial cleanouts</li>
                <li>• Same-day service available</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-blue-900">Vienna, VA</h3>
              <p className="text-gray-600 mb-3">Trusted junk hauling services in Vienna</p>
              <ul className="text-sm text-gray-500">
                <li>• Furniture & appliance removal</li>
                <li>• Estate cleanouts</li>
                <li>• Construction debris removal</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-blue-900">McLean, VA</h3>
              <p className="text-gray-600 mb-3">Premium junk removal services in McLean</p>
              <ul className="text-sm text-gray-500">
                <li>• High-end furniture removal</li>
                <li>• Office cleanouts</li>
                <li>• Garage & basement cleanouts</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-blue-900">Reston, VA</h3>
              <p className="text-gray-600 mb-3">Reliable junk hauling in Reston community</p>
              <ul className="text-sm text-gray-500">
                <li>• Condo & townhome cleanouts</li>
                <li>• Moving assistance</li>
                <li>• Appliance disposal</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-blue-900">Herndon, VA</h3>
              <p className="text-gray-600 mb-3">Fast junk removal services in Herndon</p>
              <ul className="text-sm text-gray-500">
                <li>• Hot tub removal</li>
                <li>• Deck demolition</li>
                <li>• Yard waste removal</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-blue-900">Great Falls, VA</h3>
              <p className="text-gray-600 mb-3">Luxury home junk removal in Great Falls</p>
              <ul className="text-sm text-gray-500">
                <li>• Estate cleanouts</li>
                <li>• Pool equipment removal</li>
                <li>• Large item hauling</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Wee Haul for Fairfax County Junk Removal?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="font-bold mb-2">Same-Day Service</h3>
              <p className="text-gray-600">Quick response times throughout Fairfax County</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">♻️</span>
              </div>
              <h3 className="font-bold mb-2">Eco-Friendly</h3>
              <p className="text-gray-600">We recycle and donate whenever possible</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="font-bold mb-2">Licensed & Insured</h3>
              <p className="text-gray-600">Full coverage for your protection</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="font-bold mb-2">Fair Pricing</h3>
              <p className="text-gray-600">Transparent, competitive rates</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Remove Your Junk in Fairfax County?</h2>
          <p className="text-xl mb-8">Call now for immediate service throughout Fairfax County, VA</p>
          <a 
            href="tel:5714892961" 
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-12 rounded-lg text-xl transition-colors inline-block"
          >
            📞 Call Now: (571) 489-2961
          </a>
          <div className="mt-8 text-gray-300">
            <p>Email: info@weehaulnow.com</p>
            <p>Hours: 7AM - 9PM, 7 Days a Week</p>
          </div>
        </div>
      </section>
    </div>
  )
}