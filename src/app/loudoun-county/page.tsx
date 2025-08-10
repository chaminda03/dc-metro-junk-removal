import type { Metadata } from 'next'
import Header from '../../components/Header'

export const metadata: Metadata = {
  title: 'Junk Removal Loudoun County VA - Ashburn, Sterling, Leesburg | Wee Haul',
  description: 'Professional junk removal in Loudoun County, VA. Serving Ashburn, Sterling, Leesburg, Purcellville. Same-day pickup, top rated & insured. Call (571) 489-2961',
  keywords: 'junk removal Loudoun County, junk removal Ashburn VA, junk removal Sterling VA, junk removal Leesburg VA, junk removal Purcellville VA, furniture removal Loudoun County',
  alternates: {
    canonical: 'https://weehauljunkdc.com/loudoun-county',
  },
}

export default function LoudounCountyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-green-50 to-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Loudoun County's Premier Junk Removal Service
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Serving Ashburn, Sterling, Leesburg, Purcellville & Hamilton
            <br />
            Fast, reliable junk hauling throughout Loudoun County, VA
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="tel:5714892961" 
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg text-xl transition-colors"
            >
              📞 Get Free Quote Today
            </a>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Loudoun County Service Areas</h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-green-700">Ashburn, VA</h3>
              <p className="text-gray-600 mb-3">Leading junk removal service in Ashburn</p>
              <ul className="text-sm text-gray-500">
                <li>• Tech corridor office cleanouts</li>
                <li>• New construction debris</li>
                <li>• Residential furniture removal</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-green-700">Sterling, VA</h3>
              <p className="text-gray-600 mb-3">Trusted junk hauling in Sterling</p>
              <ul className="text-sm text-gray-500">
                <li>• Apartment cleanouts</li>
                <li>• Appliance removal</li>
                <li>• Storage unit cleanouts</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-green-700">Leesburg, VA</h3>
              <p className="text-gray-600 mb-3">Historic Leesburg junk removal experts</p>
              <ul className="text-sm text-gray-500">
                <li>• Historic home cleanouts</li>
                <li>• Estate sales cleanup</li>
                <li>• Renovation debris removal</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-green-700">Purcellville, VA</h3>
              <p className="text-gray-600 mb-3">Rural property junk removal</p>
              <ul className="text-sm text-gray-500">
                <li>• Barn & shed cleanouts</li>
                <li>• Farm equipment removal</li>
                <li>• Large property cleanups</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-green-700">Hamilton, VA</h3>
              <p className="text-gray-600 mb-3">Small town, big service</p>
              <ul className="text-sm text-gray-500">
                <li>• Residential cleanouts</li>
                <li>• Moving assistance</li>
                <li>• Yard waste removal</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-green-700">Dulles Area</h3>
              <p className="text-gray-600 mb-3">Airport corridor service</p>
              <ul className="text-sm text-gray-500">
                <li>• Corporate office cleanouts</li>
                <li>• Hotel furniture removal</li>
                <li>• Commercial services</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Loudoun County Specialties */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Loudoun County Junk Removal Specialties</h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-green-800">New Home Construction</h3>
              <p className="text-gray-700">Loudoun County's booming construction creates debris - we handle the cleanup</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-green-800">Tech Company Cleanouts</h3>
              <p className="text-gray-700">Office furniture, electronics, and IT equipment disposal for tech corridor businesses</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-green-800">Historic Home Renovations</h3>
              <p className="text-gray-700">Careful removal of materials from Leesburg's historic properties</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-green-800">Vineyard & Farm Cleanup</h3>
              <p className="text-gray-700">Equipment, buildings, and agricultural waste removal</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-green-800">Moving Services</h3>
              <p className="text-gray-700">Loudoun County residents relocating need unwanted item removal</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-green-800">Pool & Spa Removal</h3>
              <p className="text-gray-700">Hot tubs, above-ground pools, and outdoor equipment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-green-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Loudoun County Junk Removal Experts</h1>
          <p className="text-xl mb-8">Serving all of Loudoun County with fast, professional service</p>
          <a 
            href="tel:5714892961" 
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-12 rounded-lg text-xl transition-colors inline-block"
          >
            📞 Call: (571) 489-2961
          </a>
          <div className="mt-8 text-green-200">
            <p>📧 info@weehaulnow.com</p>
            <p>🕐 7AM - 9PM Daily</p>
            <p>📍 Serving all of Loudoun County, Virginia</p>
          </div>
        </div>
      </section>
    </div>
  )
}