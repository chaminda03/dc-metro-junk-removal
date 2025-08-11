import type { Metadata } from 'next'
import Header from '../../../components/Header'

export const metadata: Metadata = {
  title: 'Appliance Removal Northern Virginia - Refrigerator, Washer, Dryer Pickup | Wee Haul',
  description: 'Professional appliance removal in Northern Virginia. We remove refrigerators, washers, dryers, dishwashers, water heaters. Eco-friendly disposal in Fairfax, Loudoun, Prince William, Arlington. Call (571) 489-2961',
  keywords: 'appliance removal Northern Virginia, refrigerator removal VA, washer dryer removal, dishwasher removal, water heater removal, appliance disposal Northern Virginia',
  alternates: {
    canonical: 'https://weehauljunkdc.com/services/appliance-removal',
  },
}

export default function ApplianceRemovalPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-green-50 to-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Professional Appliance Removal in Northern Virginia
          </h1>
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
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Complete Appliance Removal Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional removal and EPA-compliant disposal of all major appliances
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4 text-center">❄️</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Refrigerators & Freezers</h3>
              <ul className="text-gray-600 space-y-1">
                <li>• Full-size refrigerators (side-by-side, French door)</li>
                <li>• Mini fridges & compact units</li>
                <li>• Chest freezers & upright freezers</li>
                <li>• Wine coolers & beverage centers</li>
                <li>• Commercial refrigeration units</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4 text-center">🌊</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Washers & Dryers</h3>
              <ul className="text-gray-600 space-y-1">
                <li>• Top-load & front-load washers</li>
                <li>• Electric & gas dryers</li>
                <li>• Stackable washer/dryer units</li>
                <li>• Portable & compact units</li>
                <li>• Commercial laundry equipment</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4 text-center">🍽️</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Dishwashers</h3>
              <ul className="text-gray-600 space-y-1">
                <li>• Built-in dishwashers</li>
                <li>• Portable dishwashers</li>
                <li>• Countertop dishwashers</li>
                <li>• Commercial dishwashing units</li>
                <li>• Drawer-style dishwashers</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4 text-center">🔥</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Water Heaters</h3>
              <ul className="text-gray-600 space-y-1">
                <li>• Tank water heaters (30-80+ gallons)</li>
                <li>• Tankless water heaters</li>
                <li>• Electric & gas water heaters</li>
                <li>• Hybrid heat pump water heaters</li>
                <li>• Commercial water heating systems</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4 text-center">🍳</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Kitchen Appliances</h3>
              <ul className="text-gray-600 space-y-1">
                <li>• Gas & electric ranges/stoves</li>
                <li>• Wall ovens & cooktops</li>
                <li>• Microwaves (countertop & built-in)</li>
                <li>• Garbage disposals</li>
                <li>• Range hoods & ventilation</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4 text-center">❄️</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">HVAC Equipment</h3>
              <ul className="text-gray-600 space-y-1">
                <li>• Central air conditioning units</li>
                <li>• Window & portable AC units</li>
                <li>• Furnaces & boilers</li>
                <li>• Heat pumps</li>
                <li>• Dehumidifiers & air purifiers</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Removal Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Appliance Removal Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Safe, efficient, and environmentally responsible appliance removal
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Free Estimate</h3>
              <p className="text-gray-600">
                Call for instant pricing. We provide transparent quotes with no hidden fees.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Safe Disconnection</h3>
              <p className="text-gray-600">
                Our team safely disconnects appliances from utilities (additional fees may apply).
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Professional Removal</h3>
              <p className="text-gray-600">
                We handle all heavy lifting and transport appliances safely from your property.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">4</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">EPA Compliance</h3>
              <p className="text-gray-600">
                Proper refrigerant recovery and environmentally responsible disposal or recycling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Appliance Removal Pricing</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Competitive rates for professional appliance removal and disposal
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Small Appliances</h3>
              <div className="text-3xl font-bold text-green-600 mb-4">$75-125</div>
              <ul className="text-gray-600 space-y-2 mb-4">
                <li>• Microwaves</li>
                <li>• Dishwashers</li>
                <li>• Garbage disposals</li>
                <li>• Portable AC units</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md border-2 border-green-500">
              <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm mb-4 inline-block">Most Common</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Major Appliances</h3>
              <div className="text-3xl font-bold text-green-600 mb-4">$125-200</div>
              <ul className="text-gray-600 space-y-2 mb-4">
                <li>• Refrigerators</li>
                <li>• Washers & dryers</li>
                <li>• Stoves & ovens</li>
                <li>• Water heaters</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Large/Commercial</h3>
              <div className="text-3xl font-bold text-green-600 mb-4">$200+</div>
              <ul className="text-gray-600 space-y-2 mb-4">
                <li>• Commercial refrigeration</li>
                <li>• HVAC systems</li>
                <li>• Industrial equipment</li>
                <li>• Multiple appliances</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 bg-green-100 rounded-lg p-6 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-2">💡 Additional Services</h3>
            <div className="grid md:grid-cols-2 gap-4 text-left mt-4">
              <div>
                <h4 className="font-bold text-gray-900">Disconnection Services</h4>
                <p className="text-gray-600">Plumbing/electrical disconnection: $50-100 additional</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Same-Day Service</h4>
                <p className="text-gray-600">Available for urgent removals (subject to availability)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Environmental Responsibility */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Environmentally Responsible Disposal</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow strict EPA guidelines for appliance disposal and recycling
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">🌍 Our Environmental Commitment</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 text-xl">✓</span>
                  <div>
                    <strong>Refrigerant Recovery:</strong> All refrigerants are properly recovered and disposed of according to EPA Section 608 regulations
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 text-xl">✓</span>
                  <div>
                    <strong>Metal Recycling:</strong> Steel, copper, and aluminum components are separated and sent to certified recycling facilities
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 text-xl">✓</span>
                  <div>
                    <strong>Hazardous Material Handling:</strong> Proper disposal of oils, mercury switches, and other hazardous components
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 text-xl">✓</span>
                  <div>
                    <strong>Donation Programs:</strong> Working appliances are donated to local charities when possible
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-green-50 rounded-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">📊 Environmental Impact</h3>
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">95%</div>
                  <div className="text-gray-600">Material Recovery Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">100%</div>
                  <div className="text-gray-600">EPA Compliance</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">500+</div>
                  <div className="text-gray-600">Appliances Recycled Monthly</div>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Appliance Removal Service Areas</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional appliance pickup throughout the DC metro area
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-bold text-gray-900 mb-2">🏛️ Washington DC</h3>
              <p className="text-gray-600 text-sm">Georgetown, Dupont Circle, Capitol Hill, Adams Morgan</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-bold text-gray-900 mb-2">🌟 Fairfax County</h3>
              <p className="text-gray-600 text-sm">McLean, Great Falls, Vienna, Oakton, Tysons</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-bold text-gray-900 mb-2">🏘️ Loudoun County</h3>
              <p className="text-gray-600 text-sm">Ashburn, Leesburg, Sterling, Herndon, Reston</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-bold text-gray-900 mb-2">🏛️ Arlington County</h3>
              <p className="text-gray-600 text-sm">Arlington, Rosslyn, Ballston, Pentagon City</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-bold text-gray-900 mb-2">🏡 Prince William</h3>
              <p className="text-gray-600 text-sm">Woodbridge, Manassas, Gainesville, Haymarket</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-bold text-gray-900 mb-2">💎 Montgomery County</h3>
              <p className="text-gray-600 text-sm">Bethesda, Potomac, Chevy Chase, Rockville</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Appliance Removal FAQ</h2>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Do you handle refrigerant removal from refrigerators and AC units?</h3>
              <p className="text-gray-600">
                Yes, we are EPA Section 608 certified for refrigerant recovery. We properly remove and dispose of all refrigerants according to federal environmental regulations, ensuring no harmful chemicals are released into the atmosphere.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Can you disconnect my appliances before removal?</h3>
              <p className="text-gray-600">
                We can provide basic disconnection services for an additional fee ($50-100). For complex plumbing or electrical work, we recommend having a licensed professional disconnect the appliance before our arrival to ensure safety and code compliance.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">What's the difference in cost between different appliance types?</h3>
              <p className="text-gray-600">
                Pricing depends on size, weight, and disposal complexity. Small appliances like microwaves cost $75-125, major appliances like refrigerators cost $125-200, while large commercial units or HVAC systems start at $200. Refrigerated appliances require special handling due to refrigerant recovery.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Do you remove built-in appliances?</h3>
              <p className="text-gray-600">
                Yes, we remove built-in dishwashers, wall ovens, cooktops, and other integrated appliances. Additional labor charges may apply for removal of cabinetry or countertop modifications needed to access the appliance safely.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">How do you dispose of water heaters?</h3>
              <p className="text-gray-600">
                Water heaters are drained completely and the metal tank is recycled. Gas water heaters require disconnection from the gas line (additional service). We ensure proper disposal of any sediment or mineral buildup according to local waste management regulations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Remove Your Old Appliances?</h2>
          <p className="text-xl mb-8">Professional, EPA-compliant appliance removal throughout Northern Virginia</p>
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