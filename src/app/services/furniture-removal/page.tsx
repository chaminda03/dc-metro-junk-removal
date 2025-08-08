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
          <h2 className="text-5xl font-bold text-gray-800 mb-6">
            Professional Furniture Removal in Northern Virginia
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Expert furniture pickup and disposal services
            <br />
            Sofas • Mattresses • Couches • Dining Sets • Bedroom Furniture
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