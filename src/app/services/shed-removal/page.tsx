import type { Metadata } from 'next'
import Header from '../../../components/Header'

export const metadata: Metadata = {
  title: 'Shed Removal Northern Virginia - Storage Shed Demolition & Disposal | Wee Haul',
  description: 'Professional shed removal and demolition in Northern Virginia. We remove storage sheds, garden sheds, tool sheds, and outbuildings. Complete demolition and debris removal in Fairfax, Loudoun, Prince William, Arlington. Call (571) 489-2961',
  keywords: 'shed removal Northern Virginia, storage shed demolition VA, garden shed removal, tool shed demolition, outbuilding removal Northern Virginia',
  alternates: {
    canonical: 'https://weehaulnow.com/services/shed-removal',
  },
}

export default function ShedRemovalPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-amber-50 to-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold text-gray-800 mb-6">
            Professional Shed Removal & Demolition in Northern Virginia
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Complete shed demolition and debris removal services
            <br />
            Storage Sheds • Garden Sheds • Tool Sheds • Outbuildings
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="tel:5714892961" 
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg text-xl transition-colors"
            >
              📞 Get Shed Removal Quote
            </a>
          </div>
        </div>
      </section>

      {/* Types of Sheds We Remove */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Types of Sheds & Outbuildings We Remove</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-amber-50 p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="text-xl font-bold mb-3 text-amber-800">Storage Sheds</h3>
              <p className="text-gray-700">Metal, wood, and plastic storage sheds of all sizes</p>
            </div>
            <div className="bg-amber-50 p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">🌿</div>
              <h3 className="text-xl font-bold mb-3 text-amber-800">Garden Sheds</h3>
              <p className="text-gray-700">Greenhouse sheds, potting sheds, garden storage</p>
            </div>
            <div className="bg-amber-50 p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-bold mb-3 text-amber-800">Tool Sheds</h3>
              <p className="text-gray-700">Workshop sheds, mechanic sheds, equipment storage</p>
            </div>
            <div className="bg-amber-50 p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">🏗️</div>
              <h3 className="text-xl font-bold mb-3 text-amber-800">Pole Barns</h3>
              <p className="text-gray-700">Agricultural buildings, pole structures, lean-tos</p>
            </div>
            <div className="bg-amber-50 p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">🏚️</div>
              <h3 className="text-xl font-bold mb-3 text-amber-800">Old Outbuildings</h3>
              <p className="text-gray-700">Dilapidated structures, unsafe buildings, old barns</p>
            </div>
            <div className="bg-amber-50 p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">🎪</div>
              <h3 className="text-xl font-bold mb-3 text-amber-800">Temporary Structures</h3>
              <p className="text-gray-700">Carports, canopies, temporary shelters</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Shed Removal Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Shed Removal Process</h2>
          <div className="grid md:grid-cols-5 gap-6">
            <div className="text-center">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-amber-800">1</span>
              </div>
              <h3 className="font-bold mb-2">Site Assessment</h3>
              <p className="text-gray-600 text-sm">Evaluate shed condition and access</p>
            </div>
            <div className="text-center">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-amber-800">2</span>
              </div>
              <h3 className="font-bold mb-2">Utility Check</h3>
              <p className="text-gray-600 text-sm">Verify no electrical or plumbing connections</p>
            </div>
            <div className="text-center">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-amber-800">3</span>
              </div>
              <h3 className="font-bold mb-2">Content Removal</h3>
              <p className="text-gray-600 text-sm">Clear all items from inside the shed</p>
            </div>
            <div className="text-center">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-amber-800">4</span>
              </div>
              <h3 className="font-bold mb-2">Demolition</h3>
              <p className="text-gray-600 text-sm">Safe, systematic shed dismantling</p>
            </div>
            <div className="text-center">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-amber-800">5</span>
              </div>
              <h3 className="font-bold mb-2">Site Cleanup</h3>
              <p className="text-gray-600 text-sm">Complete debris removal and cleanup</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us for Shed Removal */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Wee Haul for Shed Removal?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-xl font-bold mb-3 text-amber-800">Safe Demolition</h3>
              <p className="text-gray-700">Professional demolition techniques ensure safety for your property and our team</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-xl font-bold mb-3 text-amber-800">Complete Service</h3>
              <p className="text-gray-700">From demolition to debris removal, we handle every aspect of the job</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-xl font-bold mb-3 text-amber-800">Material Recycling</h3>
              <p className="text-gray-700">We recycle metal components and properly dispose of all materials</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-xl font-bold mb-3 text-amber-800">Foundation Removal</h3>
              <p className="text-gray-700">Optional concrete pad or foundation removal available</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-xl font-bold mb-3 text-amber-800">Same-Day Service</h3>
              <p className="text-gray-700">Quick response times for urgent shed removal needs</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-xl font-bold mb-3 text-amber-800">All Sizes</h3>
              <p className="text-gray-700">From small garden sheds to large pole barns and outbuildings</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-amber-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Remove Your Shed?</h2>
          <p className="text-xl mb-8">Professional shed demolition and removal throughout Northern Virginia</p>
          <a 
            href="tel:5714892961" 
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-12 rounded-lg text-xl transition-colors inline-block"
          >
            📞 Call: (571) 489-2961
          </a>
          <div className="mt-8 text-amber-200">
            <p>✅ Complete demolition service</p>
            <p>✅ All debris removed</p>
            <p>✅ Site left clean and clear</p>
          </div>
        </div>
      </section>
    </div>
  )
}