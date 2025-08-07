import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Eviction Cleanout Northern Virginia - Property Management Junk Removal | Wee Haul',
  description: 'Professional eviction cleanout services in Northern Virginia. Fast property cleaning for landlords and property managers. Complete tenant cleanout in Fairfax, Loudoun, Prince William, Arlington. Call (571) 489-2961',
  keywords: 'eviction cleanout Northern Virginia, property management cleanout VA, tenant junk removal, landlord cleanout service Northern Virginia',
}

export default function EvictionCleanoutPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-blue-900 text-white py-4 px-6">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Wee Haul Junk Removal</h1>
          <div className="flex items-center space-x-6">
            <div className="text-xl font-bold text-orange-400">(571) 489-2961</div>
            <a href="tel:5714892961" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg">📞 Call Now</a>
          </div>
        </div>
      </header>
      <section className="bg-gradient-to-b from-red-50 to-white py-20 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold text-gray-800 mb-6">Eviction Cleanout Services in Northern Virginia</h2>
          <p className="text-xl text-gray-600 mb-8">Fast property cleaning for landlords and property managers</p>
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