import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hoarder Cleanout Northern Virginia - Hoarding Cleanup Service | Wee Haul',
  description: 'Professional, compassionate hoarder cleanout services in Northern Virginia. Sensitive hoarding cleanup, sanitization, and restoration in Fairfax, Loudoun, Prince William, Arlington. Call (571) 489-2961',
  keywords: 'hoarder cleanout Northern Virginia, hoarding cleanup VA, hoarding sanitization, compassionate cleanout Northern Virginia',
}

export default function HoarderCleanoutPage() {
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
      <section className="bg-gradient-to-b from-teal-50 to-white py-20 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold text-gray-800 mb-6">Compassionate Hoarder Cleanout Services</h2>
          <p className="text-xl text-gray-600 mb-8">Professional, sensitive hoarding cleanup and restoration</p>
          <a href="tel:5714892961" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg text-xl">📞 Confidential Consultation</a>
        </div>
      </section>
      <section className="py-16 bg-teal-900 text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">We're Here to Help</h2>
          <a href="tel:5714892961" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-12 rounded-lg text-xl">📞 Call: (571) 489-2961</a>
        </div>
      </section>
    </div>
  )
}