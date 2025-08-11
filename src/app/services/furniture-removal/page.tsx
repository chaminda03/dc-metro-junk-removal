import type { Metadata } from 'next'
import Header from '../../../components/Header'

export const metadata: Metadata = {
  title: 'Furniture Removal Northern Virginia - Sofa, Mattress, Couch Pickup | Wee Haul',
  description: 'Professional furniture removal in Northern Virginia. We remove sofas, mattresses, couches, dining sets, beds. Serving Fairfax, Loudoun, Prince William, Arlington. Call (571) 489-2961',
  keywords: 'furniture removal Northern Virginia, sofa removal VA, mattress removal VA, couch pickup, bed removal, dining room furniture removal, furniture disposal Northern Virginia',
  alternates: {
    canonical: 'https://weehauljunkdc.com/services/furniture-removal',
  },
}

export default function FurnitureRemovalPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-amber-50 to-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Professional Furniture Removal in Northern Virginia
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Expert furniture pickup and disposal services throughout DC Metro Area
            <br />
            Sofas • Mattresses • Couches • Dining Sets • Bedroom Furniture • Office Furniture
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="tel:5714892961" 
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg text-xl transition-colors"
            >
              📞 Schedule Furniture Pickup
            </a>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Complete Furniture Removal Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We handle all types of furniture removal from single items to complete home or office cleanouts
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Living Room Furniture */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">🛋️ Living Room Furniture</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Sectional sofas & couches</li>
                <li>• Recliners & armchairs</li>
                <li>• Coffee tables & end tables</li>
                <li>• Entertainment centers</li>
                <li>• Bookcases & shelving units</li>
                <li>• Ottoman & footrests</li>
              </ul>
            </div>

            {/* Bedroom Furniture */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">🛏️ Bedroom Furniture</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• King, queen, full & twin beds</li>
                <li>• Mattresses & box springs</li>
                <li>• Dressers & armoires</li>
                <li>• Nightstands & side tables</li>
                <li>• Bedroom sets (complete)</li>
                <li>• Vanities & mirrors</li>
              </ul>
            </div>

            {/* Dining Room Furniture */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">🍽️ Dining Room Sets</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Dining tables (all sizes)</li>
                <li>• Dining chairs & benches</li>
                <li>• China cabinets & hutches</li>
                <li>• Buffets & sideboards</li>
                <li>• Bar carts & wine racks</li>
                <li>• Complete dining sets</li>
              </ul>
            </div>

            {/* Office Furniture */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">🏢 Office Furniture</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Executive & office desks</li>
                <li>• Office chairs & seating</li>
                <li>• Filing cabinets & storage</li>
                <li>• Conference tables</li>
                <li>• Cubicle systems</li>
                <li>• Reception furniture</li>
              </ul>
            </div>

            {/* Specialty Items */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">🎹 Specialty Furniture</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Pianos (upright & grand)</li>
                <li>• Pool tables & game tables</li>
                <li>• Exercise equipment</li>
                <li>• Outdoor patio furniture</li>
                <li>• Antique furniture</li>
                <li>• Custom built-ins</li>
              </ul>
            </div>

            {/* Large Appliances */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">📺 Electronic Furniture</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Large screen TVs</li>
                <li>• Entertainment systems</li>
                <li>• Stereo cabinets</li>
                <li>• Computer desks</li>
                <li>• Gaming furniture</li>
                <li>• Home theater seating</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Furniture Removal Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple, efficient, and stress-free furniture removal in Northern Virginia
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Free Quote</h3>
              <p className="text-gray-600">
                Call us at (571) 489-2961 for an instant quote. We provide transparent pricing over the phone.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Schedule Pickup</h3>
              <p className="text-gray-600">
                We offer same-day and next-day scheduling. Choose a 2-hour window that works for you.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Professional Removal</h3>
              <p className="text-gray-600">
                Our trained team safely removes your furniture from anywhere in your home or office.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">4</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Eco-Friendly Disposal</h3>
              <p className="text-gray-600">
                We donate, recycle, or properly dispose of your furniture responsibly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Transparent Furniture Removal Pricing</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              No hidden fees. Volume-based pricing means you only pay for the space your furniture takes up.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-lg p-8 shadow-md text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Single Items</h3>
              <div className="text-4xl font-bold text-orange-600 mb-4">$75-150</div>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li>• Single chair or table</li>
                <li>• Small dresser</li>
                <li>• Nightstand</li>
                <li>• Small appliances</li>
              </ul>
              <p className="text-sm text-gray-500">Perfect for individual pieces</p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md text-center border-2 border-orange-500">
              <div className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm mb-4 inline-block">Most Popular</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Room Sets</h3>
              <div className="text-4xl font-bold text-orange-600 mb-4">$200-400</div>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li>• Living room set</li>
                <li>• Bedroom set</li>
                <li>• Dining room set</li>
                <li>• Multiple large items</li>
              </ul>
              <p className="text-sm text-gray-500">Great for room makeovers</p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Full Cleanouts</h3>
              <div className="text-4xl font-bold text-orange-600 mb-4">$500+</div>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li>• Entire home furniture</li>
                <li>• Estate cleanouts</li>
                <li>• Office furniture</li>
                <li>• Moving cleanouts</li>
              </ul>
              <p className="text-sm text-gray-500">Complete furniture removal</p>
            </div>
          </div>
          
          <div className="mt-12 bg-orange-100 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">💰 Special Discounts Available</h3>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Senior Discount</h4>
                <p className="text-gray-600">15% off for customers 65+</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Military Discount</h4>
                <p className="text-gray-600">10% off for active & veterans</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Large Volume</h4>
                <p className="text-gray-600">Special rates for full truckloads</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Furniture Removal Service Areas</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional furniture pickup throughout the Washington DC metro area
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">🏛️ Washington DC</h3>
              <ul className="text-gray-600 space-y-1">
                <li>• Georgetown</li>
                <li>• Dupont Circle</li>
                <li>• Capitol Hill</li>
                <li>• Adams Morgan</li>
                <li>• Foggy Bottom</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">🌟 Fairfax County</h3>
              <ul className="text-gray-600 space-y-1">
                <li>• McLean</li>
                <li>• Great Falls</li>
                <li>• Vienna</li>
                <li>• Oakton</li>
                <li>• Tysons</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">🏘️ Loudoun County</h3>
              <ul className="text-gray-600 space-y-1">
                <li>• Ashburn</li>
                <li>• Leesburg</li>
                <li>• Sterling</li>
                <li>• Herndon</li>
                <li>• Reston</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">🏛️ Arlington County</h3>
              <ul className="text-gray-600 space-y-1">
                <li>• Arlington</li>
                <li>• Rosslyn</li>
                <li>• Ballston</li>
                <li>• Pentagon City</li>
                <li>• Crystal City</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">🏡 Prince William</h3>
              <ul className="text-gray-600 space-y-1">
                <li>• Woodbridge</li>
                <li>• Manassas</li>
                <li>• Gainesville</li>
                <li>• Haymarket</li>
                <li>• Dale City</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">💎 Montgomery County</h3>
              <ul className="text-gray-600 space-y-1">
                <li>• Bethesda</li>
                <li>• Potomac</li>
                <li>• Chevy Chase</li>
                <li>• Rockville</li>
                <li>• Silver Spring</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Wee Haul for Furniture Removal?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted by thousands of DC metro area residents for reliable furniture removal
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Same-Day Service</h3>
              <p className="text-gray-600">
                Need furniture removed today? We offer same-day pickup for urgent removals in Northern Virginia.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Fully Insured</h3>
              <p className="text-gray-600">
                Licensed and insured for your protection. We carry comprehensive liability insurance.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">♻️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Eco-Friendly</h3>
              <p className="text-gray-600">
                We donate usable furniture to local charities and recycle what we can't donate.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">💪</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Professional Team</h3>
              <p className="text-gray-600">
                Trained, uniformed professionals who treat your home with respect and care.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">💯</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Satisfaction Guaranteed</h3>
              <p className="text-gray-600">
                We're not satisfied until you're completely happy with our service.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">📱</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Easy Scheduling</h3>
              <p className="text-gray-600">
                Book online or call us directly. Flexible scheduling to fit your busy lifestyle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Common questions about furniture removal in Northern Virginia
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">How much does furniture removal cost in Northern Virginia?</h3>
              <p className="text-gray-600">
                Our furniture removal pricing is volume-based, starting at $75 for single items and ranging from $200-400 for room sets. We provide transparent pricing with no hidden fees. Factors affecting cost include the size and weight of items, accessibility, and disposal requirements.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Do you remove furniture from upstairs or basements?</h3>
              <p className="text-gray-600">
                Absolutely! Our professional team is experienced in safely removing furniture from all levels of your home, including upstairs bedrooms, basement family rooms, and attics. We have the proper equipment and techniques to navigate stairs and tight spaces safely.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">What happens to my old furniture after removal?</h3>
              <p className="text-gray-600">
                We prioritize environmentally responsible disposal. Furniture in good condition is donated to local charities. Items that can be recycled are taken to appropriate recycling facilities. Only furniture that cannot be donated or recycled goes to licensed disposal facilities.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">How quickly can you remove my furniture?</h3>
              <p className="text-gray-600">
                We offer same-day furniture removal service throughout Northern Virginia, subject to availability. Most furniture removals can be scheduled within 24-48 hours. For urgent removals, call us directly at (571) 489-2961 to check same-day availability.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Do I need to be present during furniture pickup?</h3>
              <p className="text-gray-600">
                While it's helpful to have someone present to provide access and answer any questions, it's not always required. We can arrange pickup from garages, porches, or other accessible areas if you cannot be present. We'll discuss the details when scheduling your appointment.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Are there any items you won't remove?</h3>
              <p className="text-gray-600">
                We remove most furniture items, but we cannot take hazardous materials, items with mold or severe water damage, or anything containing asbestos. We'll let you know if we encounter any items we cannot remove and can recommend appropriate disposal methods.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-amber-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Remove Your Furniture?</h2>
          <p className="text-xl mb-8">Professional furniture removal throughout Northern Virginia</p>
          <a 
            href="tel:5714892961" 
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-12 rounded-lg text-xl transition-colors inline-block"
          >
            📞 Call: (571) 489-2961
          </a>
          <div className="mt-8 text-amber-200">
            <p>✅ Same-day service available</p>
            <p>✅ Top Rated & insured</p>
            <p>✅ Eco-friendly disposal</p>
          </div>
        </div>
      </section>
    </div>
  )
}