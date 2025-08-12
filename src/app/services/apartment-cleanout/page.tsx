import type { Metadata } from 'next'
import Header from '../../../components/Header'

export const metadata: Metadata = {
  title: 'Apartment Cleanout Northern Virginia - Condo & Apartment Junk Removal | Wee Haul',
  description: 'Professional apartment and condo cleanout in Northern Virginia. Complete apartment junk removal, moving assistance, and property cleaning in Fairfax, Loudoun, Prince William, Arlington. Call (571) 489-2961',
  keywords: 'apartment cleanout Northern Virginia, condo cleanout VA, apartment junk removal, moving cleanout Northern Virginia',
}

export default function ApartmentCleanoutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <section className="bg-gradient-to-b from-blue-50 to-white py-20 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold text-gray-800 mb-6">Apartment & Condo Cleanout Services</h2>
          <p className="text-xl text-gray-800 mb-8">Professional apartment and condo junk removal</p>
          <a href="tel:5714892961" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg text-xl">📞 Schedule Apartment Cleanout</a>
        </div>
      </section>
      <section className="py-16 bg-blue-900 text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">Moving Made Easy</h2>
          <a href="tel:5714892961" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-12 rounded-lg text-xl">📞 Call: (571) 489-2961</a>
        </div>
      </section>
    </div>
  )
}