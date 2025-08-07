export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
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
                  <div className="absolute top-full left-0 bg-white text-gray-800 shadow-lg rounded-lg p-4 mt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="space-y-2">
                      <a href="/services/furniture-removal" className="block hover:text-orange-500">Furniture Removal</a>
                      <a href="/services/appliance-removal" className="block hover:text-orange-500">Appliance Removal</a>
                      <a href="/services/hot-tub-removal" className="block hover:text-orange-500">Hot Tub Removal</a>
                      <a href="/services/shed-removal" className="block hover:text-orange-500">Shed Removal</a>
                      <a href="/services/fence-removal" className="block hover:text-orange-500">Fence Removal</a>
                      <a href="/services/garage-cleanout" className="block hover:text-orange-500">Garage Cleanout</a>
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

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-blue-50 to-white py-20">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-10">
          <img src="/hero-image.webp" alt="Junk Removal Service" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl font-bold text-gray-800 mb-6">
            #1 Junk Removal in Northern Virginia
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Same-day pickup • Eco-friendly disposal • Top Rated & insured
            <br />
            Serving Fairfax, Loudoun, Prince William & Arlington Counties
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a 
              href="tel:5714892961" 
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg text-xl transition-colors"
            >
              📞 Call Now for Free Quote
            </a>
            <a 
              href="#contact" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-xl transition-colors"
            >
              Get Free Estimate
            </a>
          </div>
          
          {/* Team Photo */}
          <div className="max-w-2xl mx-auto">
            <img src="/team-photo.webp" alt="Wee Haul Junk Removal Team" className="w-full rounded-lg shadow-lg" />
            <p className="mt-4 text-gray-600">Our professional junk removal team serving Northern Virginia</p>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Service Areas in Northern Virginia</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-bold mb-2 text-blue-900">Fairfax County</h3>
              <p className="text-gray-600">Fairfax, Vienna, McLean, Reston, Herndon, Great Falls</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-bold mb-2 text-blue-900">Loudoun County</h3>
              <p className="text-gray-600">Ashburn, Sterling, Leesburg, Purcellville, Hamilton</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-bold mb-2 text-blue-900">Prince William County</h3>
              <p className="text-gray-600">Manassas, Woodbridge, Dale City, Gainesville, Haymarket</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-bold mb-2 text-blue-900">Arlington County</h3>
              <p className="text-gray-600">Arlington, Crystal City, Ballston, Clarendon, Rosslyn</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Junk Removal Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-blue-900">Furniture Removal</h3>
              <p className="text-gray-700">Old sofas, mattresses, dressers, tables, chairs, and more</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-blue-900">Appliance Removal</h3>
              <p className="text-gray-700">Refrigerators, washers, dryers, dishwashers, water heaters</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-blue-900">Hot Tub & Spa Removal</h3>
              <p className="text-gray-700">Professional hot tub removal, spas, and pool equipment</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-blue-900">Shed Removal</h3>
              <p className="text-gray-700">Complete shed demolition and debris removal</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-blue-900">Fence Removal</h3>
              <p className="text-gray-700">Wood, vinyl, chain link fence removal and disposal</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-blue-900">Garage Cleanout</h3>
              <p className="text-gray-700">Complete garage cleaning and junk removal</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-blue-900">Storage Cleanout</h3>
              <p className="text-gray-700">Storage unit and facility cleanouts</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-blue-900">Basement Cleanout</h3>
              <p className="text-gray-700">Full basement clearing and junk removal</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-blue-900">Eviction Cleanout</h3>
              <p className="text-gray-700">Property management and landlord cleanout services</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-blue-900">Apartment Cleanout</h3>
              <p className="text-gray-700">Complete apartment and condo cleanouts</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-blue-900">Hoarder Cleanout</h3>
              <p className="text-gray-700">Sensitive, professional hoarding cleanup services</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-blue-900">Light Demolition</h3>
              <p className="text-gray-700">Interior demolition, deck removal, and construction debris</p>
            </div>
          </div>
        </div>
      </section>

      {/* Before & After Gallery */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">See Our Work - Before & After</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <img src="/before-after-1.PNG" alt="Garage Cleanout Before and After" className="w-full h-48 object-cover rounded-lg mb-3" />
              <h3 className="font-bold text-center">Garage Cleanout</h3>
              <p className="text-center text-gray-600 text-sm">Complete garage transformation</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <img src="/before-after-2.jpg" alt="Basement Cleanout Before and After" className="w-full h-48 object-cover rounded-lg mb-3" />
              <h3 className="font-bold text-center">Basement Cleanout</h3>
              <p className="text-center text-gray-600 text-sm">Basement cleared and cleaned</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <img src="/before-after-3.jpg" alt="Furniture Removal Before and After" className="w-full h-48 object-cover rounded-lg mb-3" />
              <h3 className="font-bold text-center">Furniture Removal</h3>
              <p className="text-center text-gray-600 text-sm">Old furniture removed safely</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Get Your Free Quote Today</h2>
            <p className="text-xl mb-8">Fast, reliable junk removal service in Northern Virginia</p>
            
            <div className="bg-gray-800 p-8 rounded-lg">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="text-left">
                  <h3 className="text-xl font-bold mb-4 text-orange-400">Contact Information</h3>
                  <p className="mb-2">📞 <strong>(571) 489-2961</strong></p>
                  <p className="mb-2">📧 info@weehaulnow.com</p>
                  <p className="mb-2">📍 2246 Pimmit Run Lane, Falls Church, VA 22043</p>
                  <p className="mb-4">🕐 7AM - 9PM, 7 Days a Week</p>
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-bold mb-4 text-orange-400">Service Guarantee</h3>
                  <ul className="space-y-2">
                    <li>✅ Same-day pickup available</li>
                    <li>✅ Top Rated & insured</li>
                    <li>✅ Eco-friendly disposal</li>
                    <li>✅ Fair, transparent pricing</li>
                    <li>✅ 100% satisfaction guarantee</li>
                  </ul>
                </div>
              </div>
              
              <a 
                href="tel:5714892961" 
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-12 rounded-lg text-xl transition-colors inline-block"
              >
                📞 Call Now: (571) 489-2961
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2025 Wee Haul Junk Removal. All rights reserved.</p>
          <p className="mt-2">Professional junk removal services in Fairfax, Loudoun, Prince William & Arlington Counties, Virginia</p>
        </div>
      </footer>
    </div>
  );
}
