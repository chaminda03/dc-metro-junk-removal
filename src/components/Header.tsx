'use client'

export default function Header() {
  return (
    <header className="bg-blue-900 text-white py-4 px-6">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-4">
            <img src="/Logo.webp" alt="Wee Haul Junk Removal Logo" className="h-12 w-auto" />
            <h1 className="text-2xl font-bold">Wee Haul Junk Removal</h1>
          </div>
          <div className="flex items-center space-x-6">
            <div className="text-right">
              <div className="text-xl font-bold text-orange-400">(571) 489-2961</div>
              <div className="text-sm">7AM - 9PM • 7 Days a Week</div>
            </div>
            <a 
              href="tel:5714892961" 
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg transition-colors"
            >
              📞 Call Now
            </a>
          </div>
        </div>
        
        {/* Navigation Menu */}
        <nav className="border-t border-blue-800 pt-4">
          <ul className="flex justify-center space-x-8">
            <li>
              <a href="/" className="hover:text-orange-400 font-medium transition-colors">HOME</a>
            </li>
            <li>
              <div className="relative group">
                <button className="hover:text-orange-400 font-medium transition-colors">SERVICES</button>
                <div className="absolute top-full left-0 bg-white text-gray-800 shadow-lg rounded-lg p-4 mt-2 w-64 max-h-96 overflow-y-auto opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="space-y-2">
                    <a href="/services/furniture-removal" className="block hover:text-orange-500">Furniture Removal</a>
                    <a href="/services/appliance-removal" className="block hover:text-orange-500">Appliance Removal</a>
                    <a href="/services/hot-tub-removal" className="block hover:text-orange-500">Hot Tub Removal</a>
                    <a href="/services/shed-removal" className="block hover:text-orange-500">Shed Removal</a>
                    <a href="/services/fence-removal" className="block hover:text-orange-500">Fence Removal</a>
                    <a href="/services/garage-cleanout" className="block hover:text-orange-500">Garage Cleanout</a>
                    <a href="/services/storage-cleanout" className="block hover:text-orange-500">Storage Cleanout</a>
                    <a href="/services/basement-cleanout" className="block hover:text-orange-500">Basement Cleanout</a>
                    <a href="/services/eviction-cleanout" className="block hover:text-orange-500">Eviction Cleanout</a>
                    <a href="/services/apartment-cleanout" className="block hover:text-orange-500">Apartment Cleanout</a>
                    <a href="/services/hoarder-cleanout" className="block hover:text-orange-500">Hoarder Cleanout</a>
                    <a href="/services/light-demolition" className="block hover:text-orange-500">Light Demolition</a>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="relative group">
                <button className="hover:text-orange-400 font-medium transition-colors">LOCATIONS</button>
                <div className="absolute top-full left-0 bg-white text-gray-800 shadow-lg rounded-lg p-4 mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="space-y-2">
                    <a href="/fairfax-county" className="block hover:text-orange-500">Fairfax County</a>
                    <a href="/loudoun-county" className="block hover:text-orange-500">Loudoun County</a>
                    <a href="/prince-william-county" className="block hover:text-orange-500">Prince William County</a>
                    <a href="/arlington-county" className="block hover:text-orange-500">Arlington County</a>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <a href="/blog" className="hover:text-orange-400 font-medium transition-colors">BLOG</a>
            </li>
            <li>
              <a href="/about" className="hover:text-orange-400 font-medium transition-colors">ABOUT</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-orange-400 font-medium transition-colors">CONTACT</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}