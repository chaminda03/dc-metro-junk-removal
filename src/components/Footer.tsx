export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info & NAP */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <img src="/Logo.webp" alt="Wee Haul Junk Removal Logo" className="h-12 w-auto" />
              <div className="text-xl font-bold">Wee Haul Junk Removal</div>
            </div>
            
            {/* NAP Information */}
            <div className="space-y-3 mb-6">
              <div className="flex items-start space-x-3">
                <span className="text-orange-400">📍</span>
                <div>
                  <strong>Address:</strong><br />
                  2246 Pimmit Run Lane<br />
                  Falls Church, VA 22043
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <span className="text-orange-400">📞</span>
                <div>
                  <strong>Phone:</strong> <a href="tel:5714892961" className="text-orange-400 hover:text-orange-300">(571) 489-2961</a>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <span className="text-orange-400">📧</span>
                <div>
                  <strong>Email:</strong> <a href="mailto:info@weehaulnow.com" className="text-orange-400 hover:text-orange-300">info@weehaulnow.com</a>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <span className="text-orange-400">🕐</span>
                <div>
                  <strong>Hours:</strong> Mon-Sun 7:00 AM - 9:00 PM
                </div>
              </div>
            </div>
            
            <p className="text-gray-300 text-sm leading-relaxed">
              Professional junk removal and hauling services throughout Washington DC metro area. 
              Licensed, insured, and committed to eco-friendly disposal practices.
            </p>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-orange-400">Service Areas</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/washington-dc" className="hover:text-orange-400 transition-colors">Washington DC</a></li>
              <li><a href="/montgomery-county" className="hover:text-orange-400 transition-colors">Montgomery County, MD</a></li>
              <li><a href="/fairfax-county" className="hover:text-orange-400 transition-colors">Fairfax County, VA</a></li>
              <li><a href="/arlington-county" className="hover:text-orange-400 transition-colors">Arlington County, VA</a></li>
              <li><a href="/loudoun-county" className="hover:text-orange-400 transition-colors">Loudoun County, VA</a></li>
              <li><a href="/prince-william-county" className="hover:text-orange-400 transition-colors">Prince William County, VA</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-orange-400">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/services/furniture-removal" className="hover:text-orange-400 transition-colors">Furniture Removal</a></li>
              <li><a href="/services/appliance-removal" className="hover:text-orange-400 transition-colors">Appliance Removal</a></li>
              <li><a href="/services/hot-tub-removal" className="hover:text-orange-400 transition-colors">Hot Tub Removal</a></li>
              <li><a href="/services/garage-cleanout" className="hover:text-orange-400 transition-colors">Garage Cleanout</a></li>
              <li><a href="/services" className="hover:text-orange-400 transition-colors">All Services</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © 2025 Wee Haul Junk Removal. All rights reserved.
            </div>
            
            {/* Social Media & Review Links */}
            <div className="flex space-x-4">
              <a href="https://www.google.com/maps/place/Wee+Haul+Junk+Removal/@38.9072,-77.0369,17z" 
                 target="_blank" rel="noopener noreferrer" 
                 className="text-gray-400 hover:text-orange-400 text-sm">
                Google Reviews
              </a>
              <a href="https://www.facebook.com/WeeHaulJunkRemoval/" 
                 target="_blank" rel="noopener noreferrer" 
                 className="text-gray-400 hover:text-orange-400 text-sm">
                Facebook
              </a>
              <a href="https://www.instagram.com/weehauljunkremoval/" 
                 target="_blank" rel="noopener noreferrer" 
                 className="text-gray-400 hover:text-orange-400 text-sm">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Local Business Schema for Footer */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Wee Haul Junk Removal",
            "url": "https://weehauljunkdc.com",
            "telephone": "(571) 489-2961",
            "email": "info@weehaulnow.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "2246 Pimmit Run Lane",
              "addressLocality": "Falls Church",
              "addressRegion": "VA",
              "postalCode": "22043",
              "addressCountry": "US"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "(571) 489-2961",
              "contactType": "customer service",
              "areaServed": ["Washington DC", "Montgomery County MD", "Fairfax County VA", "Arlington County VA", "Loudoun County VA", "Prince William County VA"],
              "availableLanguage": "English"
            }
          })
        }}
      />
    </footer>
  )
}