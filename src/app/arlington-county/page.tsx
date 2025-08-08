import type { Metadata } from 'next'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: 'Junk Removal Arlington County VA - Arlington, Crystal City | Wee Haul',
  description: 'Professional junk removal in Arlington County, VA. Serving Arlington, Crystal City, Ballston, Clarendon, Rosslyn. Urban junk hauling experts. Call (571) 489-2961',
  keywords: 'junk removal Arlington County, junk removal Arlington VA, junk removal Crystal City VA, junk removal Ballston VA, junk removal Clarendon VA, junk removal Rosslyn VA',
  alternates: {
    canonical: 'https://weehauljunkdc.com/arlington-county',
  },
}

export default function ArlingtonCountyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-red-50 to-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold text-gray-800 mb-6">
            Arlington County's Premier Junk Removal
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Urban junk hauling specialists serving Arlington, Crystal City, Ballston & Rosslyn
            <br />
            Expert navigation of Arlington's unique urban challenges
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="tel:5714892961" 
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg text-xl transition-colors"
            >
              📞 Schedule Pickup Now
            </a>
          </div>
        </div>
      </section>

      {/* Arlington Neighborhoods */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Arlington County Neighborhoods</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-red-700">Arlington, VA</h3>
              <p className="text-gray-600 mb-3">Full-service junk removal throughout Arlington</p>
              <ul className="text-sm text-gray-500">
                <li>• High-rise apartment cleanouts</li>
                <li>• Townhome furniture removal</li>
                <li>• Metro-accessible service</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-red-700">Crystal City, VA</h3>
              <p className="text-gray-600 mb-3">Urban renewal junk removal</p>
              <ul className="text-sm text-gray-500">
                <li>• Office building cleanouts</li>
                <li>• Condo furniture removal</li>
                <li>• Commercial space clearing</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-red-700">Ballston, VA</h3>
              <p className="text-gray-600 mb-3">Modern urban living solutions</p>
              <ul className="text-sm text-gray-500">
                <li>• High-rise building access</li>
                <li>• Tech office cleanouts</li>
                <li>• Residential tower service</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-red-700">Clarendon, VA</h3>
              <p className="text-gray-600 mb-3">Mixed-use development specialist</p>
              <ul className="text-sm text-gray-500">
                <li>• Restaurant equipment removal</li>
                <li>• Retail space cleanouts</li>
                <li>• Urban apartment service</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-red-700">Rosslyn, VA</h3>
              <p className="text-gray-600 mb-3">Corporate corridor cleaning</p>
              <ul className="text-sm text-gray-500">
                <li>• Corporate office cleanouts</li>
                <li>• Executive furniture removal</li>
                <li>• Building renovation debris</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-red-700">Pentagon City</h3>
              <p className="text-gray-600 mb-3">Government area specialist</p>
              <ul className="text-sm text-gray-500">
                <li>• Secure facility cleanouts</li>
                <li>• Government office clearing</li>
                <li>• High-security building access</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Urban Challenges */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Arlington County Urban Expertise</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-red-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-red-800">High-Rise Buildings</h3>
              <p className="text-gray-700">Expert navigation of elevators, loading docks, and building restrictions in Arlington's towers</p>
            </div>
            <div className="bg-red-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-red-800">Parking Challenges</h3>
              <p className="text-gray-700">Efficient loading in tight urban spaces with limited parking and traffic considerations</p>
            </div>
            <div className="bg-red-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-red-800">Metro Access</h3>
              <p className="text-gray-700">Service areas near Metro stations with understanding of transit-oriented living needs</p>
            </div>
            <div className="bg-red-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-red-800">HOA Compliance</h3>
              <p className="text-gray-700">Working with condo boards and HOAs for compliant, respectful service</p>
            </div>
            <div className="bg-red-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-red-800">Business Districts</h3>
              <p className="text-gray-700">Commercial cleanouts in Rosslyn, Crystal City, and Ballston business corridors</p>
            </div>
            <div className="bg-red-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-red-800">Historic Areas</h3>
              <p className="text-gray-700">Respectful service in Arlington's historic neighborhoods and landmarks</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Why Arlington County Chooses Wee Haul</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-red-700">Urban Specialists</h3>
              <p className="text-gray-600 mb-4">
                We understand Arlington County's unique urban environment. From navigating narrow streets 
                to working within building restrictions, our team has the experience and equipment for 
                efficient city junk removal.
              </p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>High-rise building experience</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Parking permit assistance</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Building management coordination</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-red-700">Fast & Reliable</h3>
              <p className="text-gray-600 mb-4">
                Arlington County residents and businesses need quick, reliable service. We provide 
                same-day pickup when possible and always arrive on time with professional, 
                courteous service.
              </p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Same-day service available</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>2-hour arrival windows</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Professional uniformed team</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-red-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Arlington County Junk Removal Experts</h2>
          <p className="text-xl mb-8">From Crystal City to Rosslyn - professional urban junk removal</p>
          <div className="max-w-2xl mx-auto mb-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-red-800 p-4 rounded-lg">
                <h4 className="font-bold mb-2">Residential Service</h4>
                <p className="text-sm">Apartments, condos, townhomes</p>
              </div>
              <div className="bg-red-800 p-4 rounded-lg">
                <h4 className="font-bold mb-2">Commercial Service</h4>
                <p className="text-sm">Offices, retail, restaurants</p>
              </div>
            </div>
          </div>
          <a 
            href="tel:5714892961" 
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-12 rounded-lg text-xl transition-colors inline-block"
          >
            📞 Call: (571) 489-2961
          </a>
          <div className="mt-8 text-red-200">
            <p>📧 info@weehaulnow.com</p>
            <p>🕐 7AM - 9PM Daily</p>
            <p>🚇 Metro-accessible service throughout Arlington County</p>
          </div>
        </div>
      </section>
    </div>
  )
}