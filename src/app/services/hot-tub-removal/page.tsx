import type { Metadata } from 'next'
import Header from '../../../components/Header'

export const metadata: Metadata = {
  title: 'Hot Tub Removal Northern Virginia - Spa & Jacuzzi Removal | Wee Haul',
  description: 'Professional hot tub and spa removal in Northern Virginia. We remove jacuzzis, spas, swim spas, and pool equipment. Expert demolition and disposal in Fairfax, Loudoun, Prince William, Arlington. Call (571) 489-2961',
  keywords: 'hot tub removal Northern Virginia, spa removal VA, jacuzzi removal, swim spa removal, hot tub demolition, spa disposal Northern Virginia',
  alternates: {
    canonical: 'https://weehaulnow.com/services/hot-tub-removal',
  },
}

export default function HotTubRemovalPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold text-gray-800 mb-6">
            Expert Hot Tub & Spa Removal in Northern Virginia
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Professional hot tub demolition and disposal services
            <br />
            Hot Tubs • Spas • Jacuzzis • Swim Spas • Pool Equipment
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="tel:5714892961" 
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg text-xl transition-colors"
            >
              📞 Get Hot Tub Removal Quote
            </a>
          </div>
        </div>
      </section>

      {/* What We Remove */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Hot Tub & Spa Equipment We Remove</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">🛁</div>
              <h3 className="text-xl font-bold mb-3 text-blue-800">Hot Tubs & Spas</h3>
              <p className="text-gray-700">Above-ground and in-ground hot tubs, portable spas, built-in jacuzzis</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">🏊</div>
              <h3 className="text-xl font-bold mb-3 text-blue-800">Swim Spas</h3>
              <p className="text-gray-700">Exercise spas, endless pools, swim-in-place units</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-3 text-blue-800">Electrical Components</h3>
              <p className="text-gray-700">Control panels, pumps, heaters, GFCI disconnects</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-bold mb-3 text-blue-800">Plumbing & Filters</h3>
              <p className="text-gray-700">Pipes, valves, filtration systems, jets, skimmers</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">🏗️</div>
              <h3 className="text-xl font-bold mb-3 text-blue-800">Decking & Surrounds</h3>
              <p className="text-gray-700">Wood decks, concrete pads, stone surrounds, steps</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">🧰</div>
              <h3 className="text-xl font-bold mb-3 text-blue-800">Accessories</h3>
              <p className="text-gray-700">Covers, steps, handrails, lighting, sound systems</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Hot Tub Removal Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-800">1</span>
              </div>
              <h3 className="font-bold mb-2">Assessment</h3>
              <p className="text-gray-600">We inspect your hot tub and access routes for safe removal</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-800">2</span>
              </div>
              <h3 className="font-bold mb-2">Disconnection</h3>
              <p className="text-gray-600">Safe electrical and plumbing disconnection by professionals</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-800">3</span>
              </div>
              <h3 className="font-bold mb-2">Demolition</h3>
              <p className="text-gray-600">Careful dismantling and removal of all components</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-800">4</span>
              </div>
              <h3 className="font-bold mb-2">Cleanup</h3>
              <p className="text-gray-600">Complete site cleanup and debris removal</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Hot Tub Removal Service Areas</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-center mb-8 text-gray-600">
              We provide professional hot tub and spa removal services throughout Northern Virginia
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-blue-800">Fairfax County Communities:</h3>
                <p className="text-gray-700">Fairfax, Vienna, McLean, Reston, Herndon, Great Falls, Burke, Springfield, Annandale, Centreville, Chantilly, Oakton</p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-blue-800">Loudoun County Communities:</h3>
                <p className="text-gray-700">Ashburn, Sterling, Leesburg, Purcellville, Hamilton, Middleburg, Round Hill, Lovettsville</p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-blue-800">Prince William County:</h3>
                <p className="text-gray-700">Manassas, Woodbridge, Dale City, Gainesville, Haymarket, Occoquan, Dumfries</p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-blue-800">Arlington County:</h3>
                <p className="text-gray-700">Arlington, Crystal City, Ballston, Clarendon, Rosslyn, Pentagon City</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Need Your Hot Tub Removed?</h2>
          <p className="text-xl mb-8">Professional hot tub demolition and removal throughout Northern Virginia</p>
          <a 
            href="tel:5714892961" 
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-12 rounded-lg text-xl transition-colors inline-block"
          >
            📞 Call: (571) 489-2961
          </a>
          <div className="mt-8 text-blue-200">
            <p>✅ Safe electrical disconnection</p>
            <p>✅ Complete demolition service</p>
            <p>✅ Site cleanup included</p>
          </div>
        </div>
      </section>
    </div>
  )
}