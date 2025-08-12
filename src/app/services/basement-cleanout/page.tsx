import type { Metadata } from 'next'
import Header from '../../../components/Header'

export const metadata: Metadata = {
  title: 'Basement Cleanout Northern Virginia - Basement Junk Removal Service | Wee Haul',
  description: 'Professional basement cleanout services in Northern Virginia. Complete basement cleaning, junk removal, and clearing. Transform your basement space in Fairfax, Loudoun, Prince William, Arlington. Call (571) 489-2961',
  keywords: 'basement cleanout Northern Virginia, basement cleaning VA, basement junk removal, basement clearing Northern Virginia',
}

export default function BasementCleanoutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <section className="bg-gradient-to-b from-gray-50 to-white py-20 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold text-gray-800 mb-6">Basement Cleanout Services in Northern Virginia</h2>
          <p className="text-xl text-gray-800 mb-8">Professional basement cleaning and junk removal</p>
          <a href="tel:5714892961" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg text-xl">📞 Schedule Basement Cleanout</a>
        </div>
      </section>
      <section className="py-16 bg-gray-900 text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">Transform Your Basement Today</h2>
          <a href="tel:5714892961" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-12 rounded-lg text-xl">📞 Call: (571) 489-2961</a>
        </div>
      </section>
    </div>
  )
}