import type { Metadata } from 'next'
import Header from '../../../components/Header'

// Enable static generation for better SEO indexing
export const dynamic = 'force-static'
export const revalidate = 86400 // 24 hours

export const metadata: Metadata = {
  title: 'Eviction Cleanout Northern Virginia - Property Management Junk Removal | Wee Haul',
  description: 'Professional eviction cleanout services in Northern Virginia. Fast property cleaning for landlords and property managers. Complete tenant cleanout in Fairfax, Loudoun, Prince William, Arlington. Call (571) 489-2961',
  keywords: 'eviction cleanout Northern Virginia, property management cleanout VA, tenant junk removal, landlord cleanout service Northern Virginia',
}

export default function EvictionCleanoutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <section className="bg-gradient-to-b from-red-50 to-white py-20 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold text-gray-800 mb-6">Eviction Cleanout Services in Northern Virginia</h2>
          <p className="text-xl text-gray-800 mb-8">Fast property cleaning for landlords and property managers</p>
          <a href="tel:5714892961" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg text-xl">📞 Schedule Eviction Cleanout</a>
        </div>
      </section>
      <section className="py-16 bg-red-900 text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">Property Ready for Next Tenant</h2>
          <a href="tel:5714892961" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-12 rounded-lg text-xl">📞 Call: (571) 489-2961</a>
        </div>
      </section>
    </div>
  )
}