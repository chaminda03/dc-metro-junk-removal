import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Storage Unit Cleanout Northern Virginia - Storage Facility Junk Removal | Wee Haul',
  description: 'Professional storage unit cleanout in Northern Virginia. Complete storage facility cleaning and junk removal services. Clear your storage space in Fairfax, Loudoun, Prince William, Arlington. Call (571) 489-2961',
  keywords: 'storage unit cleanout Northern Virginia, storage facility cleaning VA, storage junk removal, storage unit clearing Northern Virginia',
  alternates: {
    canonical: 'https://weehaulnow.com/services/storage-cleanout',
  },
}

export default function StorageCleanoutPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-blue-900 text-white py-4 px-6">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Wee Haul Junk Removal</h1>
          <div className="flex items-center space-x-6">
            <div className="text-xl font-bold text-orange-400">(571) 489-2961</div>
            <a href="tel:5714892961" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg transition-colors">📞 Call Now</a>
          </div>
        </div>
      </header>

      <section className="bg-gradient-to-b from-purple-50 to-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold text-gray-800 mb-6">Storage Unit Cleanout Services in Northern Virginia</h2>
          <p className="text-xl text-gray-600 mb-8">Complete storage facility cleaning and junk removal</p>
          <a href="tel:5714892961" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg text-xl transition-colors">📞 Schedule Storage Cleanout</a>
        </div>
      </section>

      <section className="py-16 bg-purple-900 text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">Need Your Storage Unit Cleaned Out?</h2>
          <a href="tel:5714892961" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-12 rounded-lg text-xl transition-colors inline-block">📞 Call: (571) 489-2961</a>
        </div>
      </section>
    </div>
  )
}