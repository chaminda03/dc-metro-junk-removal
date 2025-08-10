'use client'

import { useState, useEffect, useRef } from 'react'

export default function Header() {
  const [servicesOpen, setServicesOpen] = useState(false)
  const [locationsOpen, setLocationsOpen] = useState(false)
  const headerRef = useRef<HTMLElement>(null)

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setServicesOpen(false)
        setLocationsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])
  return (
    <header ref={headerRef} className="bg-blue-900 text-white py-4 px-6">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-2 sm:space-x-4">
            <img src="/Logo.webp" alt="Wee Haul Junk Removal Logo" className="h-8 sm:h-12 w-auto" />
            <div className="text-lg sm:text-2xl font-bold">Wee Haul Junk Removal</div>
          </div>
          <div className="flex items-center space-x-2 sm:space-x-6">
            <div className="text-right hidden sm:block">
              <div className="text-xl font-bold text-orange-400">(571) 489-2961</div>
              <div className="text-sm">7AM - 9PM • 7 Days a Week</div>
            </div>
            <div className="text-right sm:hidden">
              <div className="text-xs font-bold text-orange-400 whitespace-nowrap">(571) 489-2961</div>
            </div>
            <a 
              href="tel:5714892961" 
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-2 sm:px-4 rounded-lg transition-colors text-sm sm:text-base"
            >
              <span className="sm:hidden">📞</span>
              <span className="hidden sm:inline">📞 Call Now</span>
            </a>
          </div>
        </div>
        
        {/* Navigation Menu */}
        <nav className="border-t border-blue-800 pt-4">
          <ul className="flex justify-center space-x-2 sm:space-x-8 flex-wrap">
            <li>
              <a href="/" className="hover:text-orange-400 font-medium transition-colors text-sm sm:text-base">HOME</a>
            </li>
            <li>
              <div className="relative">
                <button 
                  onClick={() => {
                    setServicesOpen(!servicesOpen)
                    setLocationsOpen(false)
                  }}
                  className="hover:text-orange-400 font-medium transition-colors text-sm sm:text-base focus:outline-none"
                >
                  SERVICES <span className="ml-1">{servicesOpen ? '▼' : '▼'}</span>
                </button>
                <div className={`absolute top-full left-1/2 transform -translate-x-1/2 sm:left-0 sm:transform-none bg-white text-gray-800 shadow-lg rounded-lg p-4 mt-2 w-64 max-h-96 overflow-y-auto transition-all duration-200 z-50 ${
                  servicesOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}>
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
              <div className="relative">
                <button 
                  onClick={() => {
                    setLocationsOpen(!locationsOpen)
                    setServicesOpen(false)
                  }}
                  className="hover:text-orange-400 font-medium transition-colors text-sm sm:text-base focus:outline-none"
                >
                  LOCATIONS <span className="ml-1">{locationsOpen ? '▼' : '▼'}</span>
                </button>
                <div className={`absolute top-full left-1/2 transform -translate-x-1/2 sm:left-0 sm:transform-none bg-white text-gray-800 shadow-lg rounded-lg p-4 mt-2 w-56 transition-all duration-200 z-50 ${
                  locationsOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}>
                  <div className="space-y-2">
                    <a href="/fairfax-county" className="block hover:text-orange-500">Fairfax County</a>
                    <a href="/arlington-county" className="block hover:text-orange-500">Arlington County</a>
                    <a href="/loudoun-county" className="block hover:text-orange-500">Loudoun County</a>
                    <a href="/washington-dc" className="block hover:text-orange-500">Washington DC</a>
                    <a href="/montgomery-county" className="block hover:text-orange-500">Montgomery County</a>
                    <a href="/prince-william-county" className="block hover:text-orange-500">Prince William County</a>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <a href="/blog" className="hover:text-orange-400 font-medium transition-colors text-sm sm:text-base">BLOG</a>
            </li>
            <li>
              <a href="/about" className="hover:text-orange-400 font-medium transition-colors text-sm sm:text-base">ABOUT</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-orange-400 font-medium transition-colors text-sm sm:text-base">CONTACT</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}