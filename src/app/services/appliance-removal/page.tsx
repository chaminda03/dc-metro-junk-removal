import type { Metadata } from 'next'
import Header from '../../../components/Header'

export const metadata: Metadata = {
  title: 'Appliance Removal Northern Virginia - Refrigerator, Washer, Dryer Pickup | Wee Haul',
  description: 'Professional appliance removal in Northern Virginia. We remove refrigerators, washers, dryers, dishwashers, water heaters. Eco-friendly disposal in Fairfax, Loudoun, Prince William, Arlington. Call (571) 489-2961',
  keywords: 'appliance removal Northern Virginia, refrigerator removal VA, washer dryer removal, dishwasher removal, water heater removal, appliance disposal Northern Virginia',
  alternates: {
    canonical: 'https://weehaulnow.com/services/appliance-removal',
  },
}

export default function ApplianceRemovalPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-green-50 to-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold text-gray-800 mb-6">
            Professional Appliance Removal in Northern Virginia
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Safe, efficient appliance pickup and eco-friendly disposal
            <br />
            Refrigerators • Washers • Dryers • Dishwashers • Water Heaters
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="tel:5714892961" 
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg text-xl transition-colors"
            >
              📞 Schedule Appliance Pickup
            </a>
          </div>
        </div>
      </section>

      {/* Appliances We Remove */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Appliances We Remove</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-green-50 p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">❄️</div>
              <h3 className="text-xl font-bold mb-3 text-green-800">Refrigerators & Freezers</h3>
              <p className="text-gray-700">Full-size refrigerators, mini fridges, chest freezers, upright freezers</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">🌊</div>
              <h3 className="text-xl font-bold mb-3 text-green-800">Washers & Dryers</h3>
              <p className="text-gray-700">Top-load, front-load washers, electric and gas dryers, stackable units</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">🍽️</div>
              <h3 className="text-xl font-bold mb-3 text-green-800">Dishwashers</h3>
              <p className="text-gray-700">Built-in dishwashers, portable dishwashers, countertop models</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">🔥</div>
              <h3 className="text-xl font-bold mb-3 text-green-800">Water Heaters</h3>
              <p className="text-gray-700">Tank and tankless water heaters, electric and gas units</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">🍳</div>
              <h3 className="text-xl font-bold mb-3 text-green-800">Kitchen Appliances</h3>
              <p className="text-gray-700">Stoves, ovens, microwaves, garbage disposals, range hoods</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">❄️</div>
              <h3 className="text-xl font-bold mb-3 text-green-800">HVAC Units</h3>
              <p className="text-gray-700">Air conditioners, furnaces, heat pumps, boilers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Appliance Removal */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Wee Haul for Appliance Removal?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-green-800">EPA Compliant Disposal</h3>
              <p className="text-gray-700">We properly handle refrigerants and hazardous materials according to EPA regulations</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-green-800">Recycling Programs</h3>
              <p className="text-gray-700">Metal components are recycled, reducing environmental impact</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-green-800">Same-Day Service</h3>
              <p className="text-gray-700">Quick removal when you need it most, including weekends</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-green-800">No Heavy Lifting</h3>
              <p className="text-gray-700">Our team handles all the heavy lifting and transportation</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-green-800">Utility Disconnection</h3>
              <p className="text-gray-700">We can disconnect appliances safely (plumbing/electrical extra)</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-green-800">Fair Pricing</h3>
              <p className="text-gray-700">Transparent pricing with no hidden fees or surprises</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Remove Your Old Appliances?</h2>
          <p className="text-xl mb-8">Professional appliance removal throughout Northern Virginia</p>
          <a 
            href="tel:5714892961" 
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-12 rounded-lg text-xl transition-colors inline-block"
          >
            📞 Call: (571) 489-2961
          </a>
          <div className="mt-8 text-green-200">
            <p>✅ EPA compliant disposal</p>
            <p>✅ Same-day service available</p>
            <p>✅ Eco-friendly recycling</p>
          </div>
        </div>
      </section>
    </div>
  )
}