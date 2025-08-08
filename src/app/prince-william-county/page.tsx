import type { Metadata } from 'next'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: 'Junk Removal Prince William County VA - Manassas, Woodbridge | Wee Haul',
  description: 'Professional junk removal in Prince William County, VA. Serving Manassas, Woodbridge, Dale City, Gainesville. Same-day pickup available. Call (571) 489-2961',
  keywords: 'junk removal Prince William County, junk removal Manassas VA, junk removal Woodbridge VA, junk removal Dale City VA, junk removal Gainesville VA, furniture removal Prince William County',
  alternates: {
    canonical: 'https://weehauljunkdc.com/prince-william-county',
  },
}

export default function PrinceWilliamCountyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-purple-50 to-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold text-gray-800 mb-6">
            Prince William County Junk Removal Experts
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Professional junk hauling in Manassas, Woodbridge, Dale City & Gainesville
            <br />
            Trusted by Prince William County residents and businesses
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="tel:5714892961" 
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg text-xl transition-colors"
            >
              📞 Free Quote Today
            </a>
          </div>
        </div>
      </section>

      {/* Service Cities */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Prince William County Cities We Serve</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-purple-700">Manassas, VA</h3>
              <p className="text-gray-600 mb-3">Historic city junk removal specialists</p>
              <ul className="text-sm text-gray-500">
                <li>• Downtown business cleanouts</li>
                <li>• Historic district renovations</li>
                <li>• Residential estate cleanouts</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-purple-700">Woodbridge, VA</h3>
              <p className="text-gray-600 mb-3">Community-focused junk hauling</p>
              <ul className="text-sm text-gray-500">
                <li>• Townhome cleanouts</li>
                <li>• Appliance disposal</li>
                <li>• Moving assistance</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-purple-700">Dale City, VA</h3>
              <p className="text-gray-600 mb-3">Neighborhood junk removal</p>
              <ul className="text-sm text-gray-500">
                <li>• Garage cleanouts</li>
                <li>• Furniture removal</li>
                <li>• Construction debris</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-purple-700">Gainesville, VA</h3>
              <p className="text-gray-600 mb-3">Growing community services</p>
              <ul className="text-sm text-gray-500">
                <li>• New home cleanup</li>
                <li>• Pool equipment removal</li>
                <li>• Deck demolition</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-purple-700">Haymarket, VA</h3>
              <p className="text-gray-600 mb-3">Rural area specialist</p>
              <ul className="text-sm text-gray-500">
                <li>• Farm equipment removal</li>
                <li>• Large property cleanups</li>
                <li>• Shed & barn cleanouts</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-purple-700">Lake Ridge, VA</h3>
              <p className="text-gray-600 mb-3">Lakefront property services</p>
              <ul className="text-sm text-gray-500">
                <li>• Dock equipment removal</li>
                <li>• Waterfront cleanouts</li>
                <li>• Seasonal cleanup</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Common Junk Types */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">What We Remove in Prince William County</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <div className="text-4xl mb-3">🛋️</div>
              <h4 className="font-bold text-purple-800">Furniture</h4>
              <p className="text-sm text-gray-600">Sofas, beds, tables, chairs</p>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <div className="text-4xl mb-3">🏠</div>
              <h4 className="font-bold text-purple-800">Appliances</h4>
              <p className="text-sm text-gray-600">Refrigerators, washers, dryers</p>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <div className="text-4xl mb-3">🚧</div>
              <h4 className="font-bold text-purple-800">Construction</h4>
              <p className="text-sm text-gray-600">Debris, drywall, flooring</p>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <div className="text-4xl mb-3">📺</div>
              <h4 className="font-bold text-purple-800">Electronics</h4>
              <p className="text-sm text-gray-600">TVs, computers, stereos</p>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <div className="text-4xl mb-3">🏊</div>
              <h4 className="font-bold text-purple-800">Hot Tubs</h4>
              <p className="text-sm text-gray-600">Spas, pools, equipment</p>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <div className="text-4xl mb-3">🏢</div>
              <h4 className="font-bold text-purple-800">Office Items</h4>
              <p className="text-sm text-gray-600">Desks, chairs, equipment</p>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <div className="text-4xl mb-3">🌿</div>
              <h4 className="font-bold text-purple-800">Yard Waste</h4>
              <p className="text-sm text-gray-600">Branches, leaves, debris</p>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <div className="text-4xl mb-3">📦</div>
              <h4 className="font-bold text-purple-800">Moving Boxes</h4>
              <p className="text-sm text-gray-600">Boxes, packing materials</p>
            </div>
          </div>
        </div>
      </section>

      {/* Local Knowledge */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Local Prince William County Expertise</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-purple-700">We Know PWC</h3>
              <p className="text-gray-600 mb-4">
                Our team understands Prince William County's unique needs, from historic Manassas properties 
                to new developments in Gainesville. We're familiar with local disposal regulations and 
                recycling centers.
              </p>
              <ul className="text-sm space-y-1">
                <li>✅ Local disposal facility partnerships</li>
                <li>✅ HOA-compliant service</li>
                <li>✅ Historic property experience</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-purple-700">Community Focused</h3>
              <p className="text-gray-600 mb-4">
                We're proud to serve Prince William County families and businesses. Our team lives and 
                works in the community, providing personalized service with local knowledge.
              </p>
              <ul className="text-sm space-y-1">
                <li>✅ Local team members</li>
                <li>✅ Community partnerships</li>
                <li>✅ Neighborhood-friendly service</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-purple-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Prince William County's Trusted Junk Removal</h2>
          <p className="text-xl mb-8">From Manassas to Woodbridge - we've got you covered</p>
          <a 
            href="tel:5714892961" 
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-12 rounded-lg text-xl transition-colors inline-block"
          >
            📞 (571) 489-2961
          </a>
          <div className="mt-8 text-purple-200">
            <p>Available 7 days a week throughout Prince William County</p>
            <p>Same-day service available</p>
          </div>
        </div>
      </section>
    </div>
  )
}