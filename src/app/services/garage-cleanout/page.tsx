import type { Metadata } from 'next'
import Header from '../../../components/Header'

export const metadata: Metadata = {
  title: 'Garage Cleanout Northern Virginia - Garage Junk Removal Service | Wee Haul',
  description: 'Professional garage cleanout services in Northern Virginia. Complete garage cleaning, junk removal, and organization. Clear your garage space in Fairfax, Loudoun, Prince William, Arlington. Call (571) 489-2961',
  keywords: 'garage cleanout Northern Virginia, garage cleaning VA, garage junk removal, garage organization, garage clearing Northern Virginia',
  alternates: {
    canonical: 'https://weehauljunkdc.com/services/garage-cleanout',
  },
}

export default function GarageCleanoutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="bg-gradient-to-b from-yellow-50 to-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold text-gray-800 mb-6">Professional Garage Cleanout Services in Northern Virginia</h2>
          <p className="text-xl text-gray-800 mb-8 max-w-3xl mx-auto">Complete garage cleaning and junk removal<br />Reclaim Your Garage Space Today</p>
          <a href="tel:5714892961" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg text-xl transition-colors">📞 Schedule Garage Cleanout</a>
        </div>
      </section>

      <section className="py-16 bg-yellow-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Reclaim Your Garage?</h2>
          <p className="text-xl mb-8">Professional garage cleanout throughout Northern Virginia</p>
          <a href="tel:5714892961" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-12 rounded-lg text-xl transition-colors inline-block">📞 Call: (571) 489-2961</a>
        </div>
      </section>
    </div>
  )
}