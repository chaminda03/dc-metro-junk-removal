import Link from 'next/link'
import Header from '../components/Header'

// Enable static generation for 404 page
export const dynamic = 'force-static'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Page Not Found</h2>
            <p className="text-xl text-gray-800 mb-8 leading-relaxed">
              Sorry, we couldn't find the page you're looking for. But don't worry - we can still help you with all your junk removal needs!
            </p>
            
            <div className="space-y-4 mb-12">
              <div className="bg-orange-50 p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Need Junk Removal Service?</h3>
                <p className="text-gray-800 mb-4">Same-day service available throughout Washington DC metro area</p>
                <a 
                  href="tel:5714892961" 
                  className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors inline-block"
                >
                  📞 Call Now: (571) 489-2961
                </a>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-blue-50 p-6 rounded-2xl">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Popular Services</h3>
                <ul className="space-y-2 text-gray-800">
                  <li><Link href="/services/furniture-removal" className="hover:text-orange-600">Furniture Removal</Link></li>
                  <li><Link href="/services/appliance-removal" className="hover:text-orange-600">Appliance Removal</Link></li>
                  <li><Link href="/services/hot-tub-removal" className="hover:text-orange-600">Hot Tub Removal</Link></li>
                  <li><Link href="/services/garage-cleanout" className="hover:text-orange-600">Garage Cleanout</Link></li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-6 rounded-2xl">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Service Areas</h3>
                <ul className="space-y-2 text-gray-800">
                  <li><Link href="/fairfax-county" className="hover:text-orange-600">Fairfax County</Link></li>
                  <li><Link href="/loudoun-county" className="hover:text-orange-600">Loudoun County</Link></li>
                  <li><Link href="/washington-dc" className="hover:text-orange-600">Washington DC</Link></li>
                  <li><Link href="/montgomery-county" className="hover:text-orange-600">Montgomery County</Link></li>
                </ul>
              </div>
            </div>
            
            <div className="space-x-4">
              <Link 
                href="/" 
                className="bg-gray-900 hover:bg-gray-800 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors inline-block"
              >
                Go Home
              </Link>
              <Link 
                href="/services" 
                className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors inline-block"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}