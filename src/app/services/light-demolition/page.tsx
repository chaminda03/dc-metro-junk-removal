import type { Metadata } from 'next'
import Header from '../../../components/Header'

export const metadata: Metadata = {
  title: 'Light Demolition Northern Virginia - Interior Demolition & Deck Removal | Wee Haul',
  description: 'Professional light demolition services in Northern Virginia. Interior demolition, deck removal, and small structure demolition in Fairfax, Loudoun, Prince William, Arlington. Call (571) 489-2961',
  keywords: 'light demolition Northern Virginia, interior demolition VA, deck removal, small demolition Northern Virginia',
}

export default function LightDemolitionPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <section className="bg-gradient-to-b from-orange-50 to-white py-20 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold text-gray-800 mb-6">Light Demolition Services in Northern Virginia</h2>
          <p className="text-xl text-gray-600 mb-8">Professional interior demolition and small structure removal</p>
          <a href="tel:5714892961" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg text-xl">📞 Get Demolition Quote</a>
        </div>
      </section>
      <section className="py-16 bg-orange-900 text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">Professional Demolition Services</h2>
          <a href="tel:5714892961" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-12 rounded-lg text-xl">📞 Call: (571) 489-2961</a>
        </div>
      </section>
    </div>
  )
}