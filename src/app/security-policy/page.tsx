import type { Metadata } from 'next'
import Header from '../../components/Header'

// Enable static generation for better SEO indexing
export const dynamic = 'force-static'
export const revalidate = 86400 // 24 hours

export const metadata: Metadata = {
  title: 'Security Policy - Government Compliance | Wee Haul Junk Removal',
  description: 'Comprehensive security policy for government and enterprise clients. Licensed, bonded, insured junk removal with security clearance.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://weehauljunkdc.com/security-policy',
  },
}

export default function SecurityPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Security Policy & Government Compliance</h1>
            
            <div className="bg-blue-50 p-6 rounded-2xl mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">🛡️ Government & Enterprise Ready</h2>
              <p className="text-gray-800 leading-relaxed">
                Wee Haul Junk Removal maintains the highest security standards for government facilities, 
                federal contractors, and enterprise clients throughout the Washington DC metro area.
              </p>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Website Security</h2>
                <ul className="space-y-2 text-gray-800">
                  <li>✅ <strong>HTTPS Enforced:</strong> All traffic encrypted with TLS 1.3</li>
                  <li>✅ <strong>HSTS Preload:</strong> HTTP Strict Transport Security enabled</li>
                  <li>✅ <strong>Security Headers:</strong> Content Security Policy, XSS Protection</li>
                  <li>✅ <strong>Regular Updates:</strong> Continuous security monitoring and patching</li>
                  <li>✅ <strong>Vercel Infrastructure:</strong> Enterprise-grade hosting platform</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Business Compliance</h2>
                <ul className="space-y-2 text-gray-800">
                  <li>✅ <strong>Licensed & Bonded:</strong> Fully licensed junk removal operations</li>
                  <li>✅ <strong>Comprehensive Insurance:</strong> Liability coverage for government facilities</li>
                  <li>✅ <strong>Background Checks:</strong> All team members vetted and certified</li>
                  <li>✅ <strong>Professional Standards:</strong> Uniformed, trained professionals</li>
                  <li>✅ <strong>Confidentiality:</strong> Strict privacy protocols for sensitive locations</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Government Services</h2>
                <ul className="space-y-2 text-gray-800">
                  <li>🏛️ <strong>Federal Facilities:</strong> Experienced with government security protocols</li>
                  <li>🔒 <strong>Secure Locations:</strong> Clearance procedures and documentation</li>
                  <li>📋 <strong>Compliance Documentation:</strong> All required permits and certifications</li>
                  <li>⚡ <strong>Emergency Response:</strong> 24/7 availability for urgent cleanouts</li>
                  <li>🚛 <strong>Specialized Equipment:</strong> Security-compliant vehicles and tools</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact for Government Services</h2>
                <div className="bg-gray-50 p-6 rounded-2xl">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Primary Contact</h3>
                      <p className="text-gray-800">📞 (571) 489-2961</p>
                      <p className="text-gray-800">📧 info@weehaulnow.com</p>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Service Hours</h3>
                      <p className="text-gray-800">🕐 7AM - 9PM Daily</p>
                      <p className="text-gray-800">🚨 Emergency Response Available</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Security Contact</h2>
                <p className="text-gray-800 mb-4">
                  For security-related inquiries, compliance questions, or to report security concerns:
                </p>
                <div className="bg-red-50 p-4 rounded-lg">
                  <p className="text-gray-800">📧 <strong>Security Email:</strong> info@weehaulnow.com</p>
                  <p className="text-gray-800">📞 <strong>Security Phone:</strong> (571) 489-2961</p>
                  <p className="text-gray-800">🔒 <strong>Encryption:</strong> https://weehauljunkdc.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}