import type { Metadata } from 'next'
import Header from '../../../components/Header'

// Enable static generation for better SEO indexing
export const dynamic = 'force-static'
export const revalidate = 86400 // 24 hours

export const metadata: Metadata = {
  title: 'Hot Tub Removal Northern Virginia - Spa & Jacuzzi Removal | Wee Haul',
  description: 'Professional hot tub and spa removal in Northern Virginia. We remove jacuzzis, spas, swim spas, and pool equipment. Expert demolition and disposal in Fairfax, Loudoun, Prince William, Arlington. Call (571) 489-2961',
  keywords: 'hot tub removal Northern Virginia, spa removal VA, jacuzzi removal, swim spa removal, hot tub demolition, spa disposal Northern Virginia',
  alternates: {
    canonical: 'https://weehauljunkdc.com/services/hot-tub-removal',
  },
}

export default function HotTubRemovalPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Expert Hot Tub & Spa Removal in Northern Virginia
          </h1>
          <p className="text-xl text-gray-800 mb-8 max-w-3xl mx-auto">
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

      {/* Hot Tub Types */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Hot Tubs & Spas We Remove</h2>
            <p className="text-xl text-gray-800 max-w-3xl mx-auto">
              Complete removal service for all types of hot tubs, spas, and related equipment
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4 text-center">🛁</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Portable Hot Tubs</h3>
              <ul className="text-gray-800 space-y-1">
                <li>• Above-ground spas (2-8 person)</li>
                <li>• Plug-and-play models</li>
                <li>• Inflatable hot tubs</li>
                <li>• Rotomolded spas</li>
                <li>• Acrylic shell hot tubs</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4 text-center">🏗️</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">In-Ground Spas</h3>
              <ul className="text-gray-800 space-y-1">
                <li>• Concrete/gunite spas</li>
                <li>• Fiberglass spa shells</li>
                <li>• Tile & stone finished spas</li>
                <li>• Custom built-in jacuzzis</li>
                <li>• Pool-attached spas</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4 text-center">🏊</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Swim Spas</h3>
              <ul className="text-gray-800 space-y-1">
                <li>• Exercise spas (12-20 feet)</li>
                <li>• Endless pools</li>
                <li>• Dual-zone swim spas</li>
                <li>• Current-generation systems</li>
                <li>• Commercial fitness spas</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4 text-center">⚡</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Electrical Systems</h3>
              <ul className="text-gray-800 space-y-1">
                <li>• Control panels & circuit boards</li>
                <li>• GFCI disconnect boxes</li>
                <li>• Pumps & circulation systems</li>
                <li>• Heaters (electric & gas)</li>
                <li>• LED lighting systems</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4 text-center">🔧</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Plumbing & Filtration</h3>
              <ul className="text-gray-800 space-y-1">
                <li>• PVC plumbing & manifolds</li>
                <li>• Filter housings & cartridges</li>
                <li>• Jets, valves & fittings</li>
                <li>• Ozone & UV systems</li>
                <li>• Salt water systems</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4 text-center">🏗️</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Decking & Surrounds</h3>
              <ul className="text-gray-800 space-y-1">
                <li>• Composite & wood decking</li>
                <li>• Concrete pads & slabs</li>
                <li>• Stone & brick surrounds</li>
                <li>• Steps & safety railings</li>
                <li>• Gazebos & privacy screens</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Removal Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Professional Hot Tub Removal Process</h2>
            <p className="text-xl text-gray-800 max-w-3xl mx-auto">
              Safe, efficient removal with complete site restoration
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Site Assessment</h3>
              <p className="text-gray-800">
                Comprehensive inspection of hot tub type, access routes, and utility connections for safe removal planning.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Utility Disconnection</h3>
              <p className="text-gray-800">
                Professional electrical and plumbing disconnection following safety protocols and local codes.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Controlled Demolition</h3>
              <p className="text-gray-800">
                Systematic dismantling using specialized tools to minimize property damage during removal.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">4</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Complete Cleanup</h3>
              <p className="text-gray-800">
                Full debris removal, site cleanup, and preparation for your next project or landscaping.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Hot Tub Removal Pricing</h2>
            <p className="text-xl text-gray-800 max-w-3xl mx-auto">
              Transparent pricing based on hot tub size and complexity
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Standard Hot Tubs</h3>
              <div className="text-3xl font-bold text-blue-600 mb-4">$400-600</div>
              <ul className="text-gray-800 space-y-2 mb-4">
                <li>• 4-6 person portable spas</li>
                <li>• Above-ground units</li>
                <li>• Standard electrical disconnect</li>
                <li>• Easy access locations</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md border-2 border-blue-500">
              <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm mb-4 inline-block">Most Common</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Large/In-Ground</h3>
              <div className="text-3xl font-bold text-blue-600 mb-4">$600-1200</div>
              <ul className="text-gray-800 space-y-2 mb-4">
                <li>• 6-8+ person hot tubs</li>
                <li>• In-ground spas</li>
                <li>• Complex utility disconnection</li>
                <li>• Difficult access or demolition</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Swim Spas</h3>
              <div className="text-3xl font-bold text-blue-600 mb-4">$1200+</div>
              <ul className="text-gray-800 space-y-2 mb-4">
                <li>• 12-20 foot swim spas</li>
                <li>• Exercise pools</li>
                <li>• Dual-zone systems</li>
                <li>• Commercial installations</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 bg-blue-100 rounded-lg p-6 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-2">⭐ Additional Services</h3>
            <div className="grid md:grid-cols-2 gap-4 text-left mt-4">
              <div>
                <h4 className="font-bold text-gray-900">Electrical Disconnection</h4>
                <p className="text-gray-800">Licensed electrician: $150-300 additional</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Concrete/Decking Removal</h4>
                <p className="text-gray-800">Deck/pad removal: $300-800 additional</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Hot Tub Removal Challenges We Solve</h2>
            <p className="text-xl text-gray-800 max-w-3xl mx-auto">
              Overcoming common obstacles in hot tub removal projects
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">🚧 Common Challenges</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-red-400 pl-4">
                  <h4 className="font-bold text-gray-900">Tight Access Areas</h4>
                  <p className="text-gray-800">Hot tubs installed in backyards with narrow gates or limited access</p>
                </div>
                <div className="border-l-4 border-red-400 pl-4">
                  <h4 className="font-bold text-gray-900">Complex Wiring</h4>
                  <p className="text-gray-800">240V electrical systems requiring licensed electrician disconnection</p>
                </div>
                <div className="border-l-4 border-red-400 pl-4">
                  <h4 className="font-bold text-gray-900">Heavy Weight</h4>
                  <p className="text-gray-800">Most hot tubs weigh 3000-6000 lbs and require specialized equipment</p>
                </div>
                <div className="border-l-4 border-red-400 pl-4">
                  <h4 className="font-bold text-gray-900">Integrated Decking</h4>
                  <p className="text-gray-800">Built-in decks, steps, and surrounds complicating removal process</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">✅ Our Solutions</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-green-400 pl-4">
                  <h4 className="font-bold text-gray-900">Crane & Heavy Equipment</h4>
                  <p className="text-gray-800">Professional lifting equipment for tight spaces and over obstacles</p>
                </div>
                <div className="border-l-4 border-green-400 pl-4">
                  <h4 className="font-bold text-gray-900">Licensed Electricians</h4>
                  <p className="text-gray-800">Certified professionals for safe electrical disconnection and code compliance</p>
                </div>
                <div className="border-l-4 border-green-400 pl-4">
                  <h4 className="font-bold text-gray-900">Controlled Demolition</h4>
                  <p className="text-gray-800">Strategic dismantling to reduce weight and enable removal piece by piece</p>
                </div>
                <div className="border-l-4 border-green-400 pl-4">
                  <h4 className="font-bold text-gray-900">Complete Package</h4>
                  <p className="text-gray-800">Full-service removal including decking, electrical, plumbing, and cleanup</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Hot Tub Removal Service Areas</h2>
            <p className="text-xl text-gray-800 max-w-3xl mx-auto">
              Professional hot tub and spa removal throughout the DC metro area
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-bold text-gray-900 mb-2">🏛️ Washington DC</h3>
              <p className="text-gray-800 text-sm">Georgetown, Dupont Circle, Capitol Hill, Adams Morgan</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-bold text-gray-900 mb-2">🌟 Fairfax County</h3>
              <p className="text-gray-800 text-sm">McLean, Great Falls, Vienna, Oakton, Tysons, Reston</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-bold text-gray-900 mb-2">🏘️ Loudoun County</h3>
              <p className="text-gray-800 text-sm">Ashburn, Leesburg, Sterling, Herndon, Purcellville</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-bold text-gray-900 mb-2">🏛️ Arlington County</h3>
              <p className="text-gray-800 text-sm">Arlington, Rosslyn, Ballston, Pentagon City</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-bold text-gray-900 mb-2">🏡 Prince William</h3>
              <p className="text-gray-800 text-sm">Woodbridge, Manassas, Gainesville, Haymarket</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-bold text-gray-900 mb-2">💎 Montgomery County</h3>
              <p className="text-gray-800 text-sm">Bethesda, Potomac, Chevy Chase, Rockville</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Hot Tub Removal FAQ</h2>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">How do you remove a hot tub from a fenced backyard?</h3>
              <p className="text-gray-800">
                We use professional lifting equipment including cranes and specialized dollies to lift hot tubs over fences, around tight corners, or through narrow gates. For extremely tight spaces, we can dismantle the hot tub on-site to reduce size and weight.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Do you handle electrical disconnection for 240V hot tubs?</h3>
              <p className="text-gray-800">
                Yes, we work with licensed electricians to safely disconnect 240V electrical connections according to local codes. This service typically costs $150-300 additional depending on the complexity of the electrical setup.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">What about in-ground spas and built-in jacuzzis?</h3>
              <p className="text-gray-800">
                In-ground spa removal requires specialized demolition techniques. We carefully break up concrete, remove plumbing and electrical systems, and backfill the excavated area. This is typically more complex and costs $600-1200+ depending on size and construction.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">How long does hot tub removal take?</h3>
              <p className="text-gray-800">
                Standard portable hot tub removal typically takes 2-4 hours. In-ground spas or complex demolition projects may take 1-2 full days. We provide accurate time estimates during our initial assessment.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Will you remove the concrete pad or decking too?</h3>
              <p className="text-gray-800">
                Yes, we can remove concrete pads, wooden decks, stone surrounds, and related structures for an additional fee ($300-800). This includes breaking up concrete, removing decking materials, and cleaning up all debris.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">What happens to the hot tub after removal?</h3>
              <p className="text-gray-800">
                We prioritize environmentally responsible disposal. Usable components like pumps and heaters may be resold or donated. Fiberglass and acrylic shells are recycled where possible. Metal components are separated for scrap recycling.
              </p>
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