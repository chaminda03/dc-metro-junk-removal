import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Fence Removal Northern Virginia - Wood, Vinyl, Chain Link Fence Removal | Wee Haul',
  description: 'Professional fence removal in Northern Virginia. We remove wood fences, vinyl fences, chain link, and metal fencing. Complete fence demolition and post removal in Fairfax, Loudoun, Prince William, Arlington. Call (571) 489-2961',
  keywords: 'fence removal Northern Virginia, wood fence removal VA, vinyl fence removal, chain link fence removal, fence demolition Northern Virginia',
  alternates: {
    canonical: 'https://weehaulnow.com/services/fence-removal',
  },
}

export default function FenceRemovalPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header - Using same navigation as other pages */}
      <header className="bg-blue-900 text-white py-4 px-6">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold">Wee Haul Junk Removal</h1>
            <div className="flex items-center space-x-6">
              <div className="text-right">
                <div className="text-xl font-bold text-orange-400">(571) 489-2961</div>
                <div className="text-sm">7AM - 9PM • 7 Days a Week</div>
              </div>
              <a href="tel:5714892961" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg transition-colors">📞 Call Now</a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-green-50 to-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold text-gray-800 mb-6">Professional Fence Removal in Northern Virginia</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">Complete fence demolition and post removal services<br />Wood • Vinyl • Chain Link • Metal • Privacy Fences</p>
          <a href="tel:5714892961" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg text-xl transition-colors">📞 Get Fence Removal Quote</a>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Need Your Fence Removed?</h2>
          <p className="text-xl mb-8">Professional fence removal throughout Northern Virginia</p>
          <a href="tel:5714892961" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-12 rounded-lg text-xl transition-colors inline-block">📞 Call: (571) 489-2961</a>
        </div>
      </section>
    </div>
  )
}