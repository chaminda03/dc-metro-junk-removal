import type { Metadata } from 'next'
import Header from '../../../components/Header'

// Enable static generation for better performance
export const dynamic = 'force-static'
export const revalidate = 86400 // Revalidate once per day

export const metadata: Metadata = {
  title: 'Fence Removal Fairfax County VA | Same Day Service | Wee Haul',
  description: 'Expert fence removal in Northern Virginia. Wood, vinyl, chain link fence removal. Same day service, licensed & insured. Call (571) 489-2961',
  keywords: 'fence removal Fairfax County VA, wood fence removal Northern Virginia, vinyl fence removal VA, chain link fence removal, fence demolition Fairfax VA, post removal Northern Virginia, same day fence removal',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Fence Removal Fairfax County VA | Same Day Service',
    description: 'Expert fence removal in Northern Virginia. Wood, vinyl, chain link fence removal. Same day service, licensed & insured.',
    url: 'https://weehauljunkdc.com/services/fence-removal',
    siteName: 'Wee Haul Junk Removal',
    type: 'website',
  },
  alternates: {
    canonical: 'https://weehauljunkdc.com/services/fence-removal',
  },
}

export default function FenceRemovalPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-green-50 to-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Professional Fence Removal Services in Fairfax County VA
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            Expert fence removal and disposal throughout Northern Virginia and DC Metro Area
          </p>
          <p className="text-lg text-gray-600 mb-8">
            Same Day & Next Day Service Available
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="tel:5714892961" 
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg text-xl transition-colors"
            >
              📞 Get Your Free Estimate Today: (571) 489-2961
            </a>
          </div>
        </div>
      </section>

      {/* Expert Services Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Expert Fence Removal Services Throughout Northern Virginia</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              When it's time to remove that old, damaged, or unwanted fence from your property, Wee Haul Junk Removal & Hauling is Northern Virginia's trusted choice for professional fence removal services. Our skilled team specializes in safe, efficient, and eco-friendly fence removal for residential and commercial properties throughout Fairfax County, Arlington County, Prince William County, Loudoun County, Montgomery County, and the entire DC metro area.
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              Whether you're dealing with a deteriorating wood fence, rusty chain link fencing, or need complete fence line clearing for a renovation project, our experienced professionals deliver same day and next day service at the most competitive rates in the region.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Wee Haul for Your Fence Removal Needs?</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-green-600 text-2xl mb-3">✅</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Licensed, Bonded & Insured</h3>
              <p className="text-gray-600">Professional fence removal specialists with full coverage</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-green-600 text-2xl mb-3">✅</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Same Day & Next Day Service</h3>
              <p className="text-gray-600">Available throughout Northern Virginia when you need it most</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-green-600 text-2xl mb-3">✅</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">All Fence Types</h3>
              <p className="text-gray-600">Wood, vinyl, chain link, wrought iron, and composite fencing</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-green-600 text-2xl mb-3">✅</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Complete Cleanup</h3>
              <p className="text-gray-600">Post removal, concrete footings, and debris disposal included</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-green-600 text-2xl mb-3">✅</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Eco-Friendly Disposal</h3>
              <p className="text-gray-600">Recycling and donation when possible</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-green-600 text-2xl mb-3">✅</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Local Expertise</h3>
              <p className="text-gray-600">Deep knowledge of HOA requirements and local regulations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Fence Types */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Comprehensive Fence Removal Services in Fairfax County VA</h2>
          </div>
          
          <div className="space-y-12">
            {/* Wood Fence Removal */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">🪵 Wood Fence Removal Services</h3>
                <p className="text-gray-600 mb-4">
                  Professional wood fence removal throughout Northern Virginia's finest communities. Wood fences are the most common fencing material in Fairfax County neighborhoods, and our team has perfected the art of safe, efficient wood fence removal.
                </p>
                
                <h4 className="font-bold text-gray-900 mb-2">Our Wood Fence Removal Process:</h4>
                <ul className="space-y-2 text-gray-600 mb-4">
                  <li>• Pre-removal inspection to identify structural concerns or utility lines</li>
                  <li>• Systematic panel removal to prevent landscape damage</li>
                  <li>• Post and concrete footing extraction using specialized equipment</li>
                  <li>• Complete site cleanup leaving your property pristine</li>
                  <li>• Eco-friendly disposal with recycling opportunities</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h4 className="font-bold text-gray-900 mb-3">Common Wood Fence Issues We Address:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>✓ Storm-damaged privacy fences</li>
                  <li>✓ Rotted cedar and pressure-treated lumber</li>
                  <li>✓ Warped and sagging fence panels</li>
                  <li>✓ Termite or insect-damaged wooden structures</li>
                  <li>✓ HOA-mandated fence replacements</li>
                </ul>
              </div>
            </div>

            {/* Chain Link Fence Removal */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="bg-gray-50 rounded-lg p-6 order-2 md:order-1">
                <h4 className="font-bold text-gray-900 mb-3">Chain Link Removal Expertise:</h4>
                <ul className="space-y-2 text-gray-600 mb-4">
                  <li>✓ Residential chain link removal for privacy upgrades</li>
                  <li>✓ Commercial chain link removal for property redevelopment</li>
                  <li>✓ Temporary fencing removal after construction projects</li>
                  <li>✓ Security fence removal and replacement coordination</li>
                  <li>✓ Tennis court and pool perimeter fencing removal</li>
                </ul>
                
                <h4 className="font-bold text-gray-900 mb-2">Our Advantages:</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Specialized tools for efficient wire cutting</li>
                  <li>• Concrete cutting equipment for embedded footings</li>
                  <li>• Metal recycling partnerships</li>
                  <li>• Same day service for urgent removal needs</li>
                </ul>
              </div>
              
              <div className="order-1 md:order-2">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">⛓️ Chain Link Fence Removal Fairfax VA</h3>
                <p className="text-gray-600 mb-4">
                  Complete chain link fence removal and disposal services. Chain link fences, while durable, eventually require removal due to rust, damage, or property improvements. Our experienced team handles all aspects of chain link fence removal throughout Fairfax County, Arlington, and surrounding areas, including the challenging task of removing deeply embedded posts and concrete footings.
                </p>
              </div>
            </div>

            {/* Vinyl and Composite Fence Removal */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">🏠 Vinyl and Composite Fence Removal</h3>
                <p className="text-gray-600 mb-4">
                  Expert removal of modern fencing materials. Vinyl and composite fences have become increasingly popular in Northern Virginia communities, but when removal becomes necessary, these materials require specialized handling. Our team understands the unique challenges of vinyl fence removal and employs techniques that maximize material recovery for recycling.
                </p>
                
                <h4 className="font-bold text-gray-900 mb-2">Vinyl/Composite Removal Services:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• PVC privacy fence panel and post removal</li>
                  <li>• Composite wood-alternative fencing systems</li>
                  <li>• Decorative vinyl fencing removal</li>
                  <li>• Pool and patio perimeter vinyl fencing</li>
                  <li>• HOA-compliant removal and disposal</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">🔧 Wrought Iron and Metal Fence Removal</h3>
                <p className="text-gray-600 mb-4">
                  Professional metal fencing removal throughout DC Metro. Ornate wrought iron and metal fencing adds elegance to properties but can become a liability when damaged or outdated.
                </p>
                
                <h4 className="font-bold text-gray-900 mb-2">Metal Fence Removal Capabilities:</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Historic wrought iron fence preservation and removal</li>
                  <li>• Aluminum decorative fencing systems</li>
                  <li>• Steel security fence removal</li>
                  <li>• Ornamental iron fence dismantling</li>
                  <li>• Pool safety metal fence removal</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Post and Footing Removal */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Complete Fence Line Clearing and Property Preparation</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">🔨 Post and Footing Removal Services</h3>
              <p className="text-gray-600 mb-6">
                Complete fence post extraction throughout Northern Virginia. Removing fence posts and concrete footings is often the most challenging aspect of fence removal. Wee Haul Junk Removal & Hauling utilizes professional-grade equipment to safely extract posts without damaging your landscape or underground utilities.
              </p>
              
              <h4 className="font-bold text-gray-900 mb-3">Post Removal Expertise:</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Deep concrete footing extraction using specialized equipment</li>
                <li>• Utility line protection with proper marking and careful excavation</li>
                <li>• Landscape preservation techniques to minimize yard damage</li>
                <li>• Grading and backfill services to restore original terrain</li>
                <li>• Root system protection during post removal near trees</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">🌱 Property Restoration and Cleanup</h3>
              <p className="text-gray-600 mb-6">
                Leave your property better than we found it. Our fence removal service doesn't end with hauling away the old fencing material. We take pride in restoring your property to its pre-fence condition, ready for new landscaping, construction, or fencing installation.
              </p>
              
              <h4 className="font-bold text-gray-900 mb-3">Post-Removal Services:</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Complete debris cleanup and site restoration</li>
                <li>• Soil grading and leveling where posts were removed</li>
                <li>• Grass seed application in disturbed areas</li>
                <li>• Mulch and landscape material spreading</li>
                <li>• Final inspection to ensure customer satisfaction</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Service Areas: Comprehensive Coverage Throughout Northern Virginia</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">🌟 Fairfax County Fence Removal</h3>
              <p className="text-gray-600 mb-3">Professional fence removal in Fairfax County's premier communities</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Vienna, VA - Historic neighborhoods and modern developments</li>
                <li>• McLean, VA - Luxury properties and estate fencing</li>
                <li>• Reston, VA - Planned community fence regulations</li>
                <li>• Herndon, VA - Residential and commercial fence removal</li>
                <li>• Great Falls, VA - Large property and estate fence clearing</li>
                <li>• Falls Church, VA - Urban fence removal and replacement</li>
                <li>• Springfield, VA - Suburban fence removal expertise</li>
                <li>• Burke, VA - Family neighborhood fence services</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">🏛️ Arlington County Fence Removal</h3>
              <p className="text-gray-600 mb-3">Expert fence removal services throughout Arlington County</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Arlington, VA - Downtown and residential areas</li>
                <li>• Crystal City, VA - Commercial and residential properties</li>
                <li>• Ballston, VA - Mixed-use development fence removal</li>
                <li>• Clarendon, VA - Historic and modern fence removal</li>
                <li>• Rosslyn, VA - High-density area fence services</li>
              </ul>
            </div>
            
            <div className="bg-purple-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">🏡 Prince William County</h3>
              <p className="text-gray-600 mb-3">Comprehensive fence removal throughout Prince William County</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Manassas, VA - Historic and suburban fence removal</li>
                <li>• Woodbridge, VA - Large residential community services</li>
                <li>• Dale City, VA - Established neighborhood fence services</li>
                <li>• Gainesville, VA - Rural and suburban fence clearing</li>
                <li>• Haymarket, VA - Property development fence removal</li>
              </ul>
            </div>
            
            <div className="bg-yellow-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">🏘️ Loudoun County</h3>
              <p className="text-gray-600 mb-3">Professional fencing removal in Loudoun County's fastest-growing areas</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Ashburn, VA - Modern community fence services</li>
                <li>• Sterling, VA - Established residential fence removal</li>
                <li>• Leesburg, VA - Historic and modern fence clearing</li>
                <li>• Purcellville, VA - Rural property fence removal</li>
                <li>• Hamilton, VA - Large property fence clearing</li>
              </ul>
            </div>
            
            <div className="bg-red-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">💎 Montgomery County, MD</h3>
              <p className="text-gray-600 mb-3">Expert fence removal throughout Montgomery County Maryland</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Potomac, MD - Luxury property fence removal</li>
                <li>• Bethesda, MD - Residential fence services</li>
                <li>• Chevy Chase, MD - Premium neighborhood fence removal</li>
                <li>• Rockville, MD - Commercial and residential fence clearing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Same Day Service */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Same Day and Next Day Fence Removal Services</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">⚡ Emergency Fence Removal Northern Virginia</h3>
              <p className="text-gray-600 mb-6">
                When you need fence removal fast, we deliver. Storm damage, property emergencies, or urgent renovation deadlines sometimes require immediate fence removal. Wee Haul Junk Removal & Hauling offers same day and next day fence removal services throughout the DC metro area.
              </p>
              
              <h4 className="font-bold text-gray-900 mb-3">Emergency Situations We Handle:</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Storm-damaged fences posing safety hazards</li>
                <li>• Insurance claim deadlines requiring rapid removal</li>
                <li>• Real estate closing preparations</li>
                <li>• Construction project timeline requirements</li>
                <li>• HOA violation urgent corrections</li>
                <li>• Utility access emergency clearance</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">📅 Scheduled Fence Removal Services</h3>
              <p className="text-gray-600 mb-6">
                Convenient scheduling to fit your timeline. For planned fence removal projects, we offer flexible scheduling options to accommodate your timeline and budget. Our team works efficiently to minimize disruption to your property and daily routine.
              </p>
              
              <h4 className="font-bold text-gray-900 mb-3">Scheduling Options:</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Same day service for urgent needs</li>
                <li>• Next day removal for quick turnaround</li>
                <li>• Weekend appointments for busy schedules</li>
                <li>• Bulk scheduling for multiple properties</li>
                <li>• Seasonal planning for optimal timing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing and Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Affordable and Transparent Fence Removal Pricing</h2>
              <p className="text-gray-600 mb-6">
                Most competitive rates in Northern Virginia. At Wee Haul Junk Removal & Hauling, we believe professional fence removal should be affordable for every property owner. Our transparent pricing structure eliminates surprises and ensures you receive exceptional value for expert service.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">Pricing Factors:</h3>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li>• Linear footage of fencing to be removed</li>
                <li>• Fence type and height considerations</li>
                <li>• Post and footing complexity</li>
                <li>• Site accessibility and terrain challenges</li>
                <li>• Disposal requirements and recycling opportunities</li>
                <li>• Timeline requirements for completion</li>
              </ul>
              
              <div className="bg-green-100 rounded-lg p-6">
                <h4 className="font-bold text-gray-900 mb-2">Free Estimates and Consultations</h4>
                <p className="text-gray-600">No-obligation assessments for all fence removal projects</p>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Your Fence Removal Process</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Free Consultation and Estimate</h4>
                    <p className="text-gray-600 text-sm">Contact us for your free, no-obligation fence removal consultation and detailed pricing.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Project Planning and Scheduling</h4>
                    <p className="text-gray-600 text-sm">We'll work with you to schedule your fence removal at a convenient time.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Professional Removal and Cleanup</h4>
                    <p className="text-gray-600 text-sm">Our skilled team handles all aspects from initial dismantling to final cleanup.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">4</div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Final Inspection and Satisfaction</h4>
                    <p className="text-gray-600 text-sm">We conduct a thorough final inspection to ensure your complete satisfaction.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Customer Success Stories: Fence Removal Throughout Northern Virginia</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="font-bold text-gray-900 mb-3">Residential Fence Removal Success</h4>
              <div className="flex mb-3">
                {[1,2,3,4,5].map((star) => (
                  <span key={star} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-600 italic mb-4">
                "Outstanding service from start to finish! Wee Haul removed our old wood fence in McLean and cleaned up everything perfectly. Same day service and very reasonable pricing. Highly recommend!"
              </p>
              <p className="text-sm font-bold text-gray-900">- Sarah M., McLean VA</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="font-bold text-gray-900 mb-3">Emergency Response</h4>
              <div className="flex mb-3">
                {[1,2,3,4,5].map((star) => (
                  <span key={star} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-600 italic mb-4">
                "Called them for emergency chain link removal after storm damage in Arlington. They responded within hours and had everything cleared safely. Professional team and fair pricing."
              </p>
              <p className="text-sm font-bold text-gray-900">- Mike T., Arlington VA</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="font-bold text-gray-900 mb-3">Commercial Project</h4>
              <div className="flex mb-3">
                {[1,2,3,4,5].map((star) => (
                  <span key={star} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-600 italic mb-4">
                "Needed extensive fence removal for our Fairfax County development project. Wee Haul handled everything efficiently and worked around our tight construction schedule. Will definitely use them again."
              </p>
              <p className="text-sm font-bold text-gray-900">- Johnson Construction, Fairfax VA</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-green-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Contact Wee Haul Junk Removal for Expert Fence Removal Services</h2>
          <p className="text-xl mb-8">Ready to remove that old fence? Contact Northern Virginia's fence removal experts today!</p>
          
          <div className="mb-8">
            <a 
              href="tel:5714892961" 
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-12 rounded-lg text-xl transition-colors inline-block"
            >
              📞 Call Now: (571) 489-2961
            </a>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-green-200 max-w-4xl mx-auto">
            <div>
              <h4 className="font-bold text-white mb-2">🌐 Website</h4>
              <p>weehauljunkdc.com</p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-2">📧 Email</h4>
              <p>info@weehaulnow.com</p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-2">📍 Service Areas</h4>
              <p>DC Metro Area</p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-2">🕐 Hours</h4>
              <p>7 Days a Week</p>
            </div>
          </div>
          
          <div className="mt-8 text-green-200">
            <p className="mb-2">✅ Same Day Service Available</p>
            <p className="mb-2">✅ Licensed, Insured, and Locally Owned</p>
            <p>✅ Professional fence removal services throughout Northern Virginia</p>
          </div>
        </div>
      </section>

      {/* Local Fence Removal Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Fence Removal Service",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Wee Haul Junk Removal - Fence Removal",
              "telephone": "(571) 489-2961",
              "email": "info@weehaulnow.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "2246 Pimmit Run Lane",
                "addressLocality": "Falls Church",
                "addressRegion": "VA",
                "postalCode": "22043"
              }
            },
            "areaServed": [
              {
                "@type": "City",
                "name": "McLean",
                "containedInPlace": "Fairfax County, Virginia"
              },
              {
                "@type": "City",
                "name": "Vienna",
                "containedInPlace": "Fairfax County, Virginia"
              },
              {
                "@type": "City",
                "name": "Great Falls",
                "containedInPlace": "Fairfax County, Virginia"
              },
              {
                "@type": "City",
                "name": "Reston",
                "containedInPlace": "Fairfax County, Virginia"
              },
              {
                "@type": "City",
                "name": "Arlington",
                "containedInPlace": "Arlington County, Virginia"
              }
            ],
            "description": "Professional fence removal services in Fairfax County VA. Wood fence removal, vinyl fence removal, chain link fence removal, and metal fence removal with same day service available.",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Fence Removal Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Wood Fence Removal",
                    "description": "Professional wood fence removal including post and footing extraction"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Chain Link Fence Removal",
                    "description": "Complete chain link fence removal with metal recycling"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Vinyl Fence Removal",
                    "description": "Expert vinyl and composite fence removal with proper disposal"
                  }
                }
              ]
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "76"
            }
          })
        }}
      />
    </div>
  )
}