import type { Metadata } from 'next'
import Header from '../../components/Header'

export const metadata: Metadata = {
  title: 'Junk Removal Fairfax County VA - McLean, Vienna, Reston | Same Day Pickup',
  description: 'Top-rated junk removal in Fairfax County, VA. Serving McLean, Vienna, Great Falls, Reston, Herndon, Oakton. Same-day service, luxury home specialists. Licensed & insured. Call (571) 489-2961',
  keywords: 'junk removal Fairfax County VA, junk removal McLean VA, junk removal Vienna VA, junk removal Great Falls VA, junk removal Reston VA, junk removal Herndon VA, luxury junk removal Fairfax County, same day junk removal Fairfax VA',
  alternates: {
    canonical: 'https://weehauljunkdc.com/fairfax-county',
  },
}

export default function FairfaxCountyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            #1 Junk Removal in Fairfax County, VA
          </h1>
          <p className="text-xl text-gray-800 mb-8 max-w-3xl mx-auto">
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
              <p className="text-gray-800 mb-3">Professional junk removal in the heart of Fairfax County</p>
              <ul className="text-sm text-gray-700">
                <li>• Residential junk removal</li>
                <li>• Commercial cleanouts</li>
                <li>• Same-day service available</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-blue-900">Vienna, VA</h3>
              <p className="text-gray-800 mb-3">Trusted junk hauling services in Vienna</p>
              <ul className="text-sm text-gray-700">
                <li>• Furniture & appliance removal</li>
                <li>• Estate cleanouts</li>
                <li>• Construction debris removal</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-blue-900">McLean, VA</h3>
              <p className="text-gray-800 mb-3">Premium junk removal services in McLean</p>
              <ul className="text-sm text-gray-700">
                <li>• High-end furniture removal</li>
                <li>• Office cleanouts</li>
                <li>• Garage & basement cleanouts</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-blue-900">Reston, VA</h3>
              <p className="text-gray-800 mb-3">Reliable junk hauling in Reston community</p>
              <ul className="text-sm text-gray-700">
                <li>• Condo & townhome cleanouts</li>
                <li>• Moving assistance</li>
                <li>• Appliance disposal</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-blue-900">Herndon, VA</h3>
              <p className="text-gray-800 mb-3">Fast junk removal services in Herndon</p>
              <ul className="text-sm text-gray-700">
                <li>• Hot tub removal</li>
                <li>• Deck demolition</li>
                <li>• Yard waste removal</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-blue-900">Great Falls, VA</h3>
              <p className="text-gray-800 mb-3">Luxury home junk removal in Great Falls</p>
              <ul className="text-sm text-gray-700">
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
              <p className="text-gray-800">Quick response times throughout Fairfax County</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">♻️</span>
              </div>
              <h3 className="font-bold mb-2">Eco-Friendly</h3>
              <p className="text-gray-800">We recycle and donate whenever possible</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="font-bold mb-2">Licensed & Insured</h3>
              <p className="text-gray-800">Full coverage for your protection</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="font-bold mb-2">Fair Pricing</h3>
              <p className="text-gray-800">Transparent, competitive rates</p>
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