import type { Metadata } from 'next'
import Header from '../../components/Header'

export const metadata: Metadata = {
  title: 'Junk Removal Blog - Expert Tips & Local Insights | Wee Haul',
  description: 'Expert junk removal tips, guides, and local insights for Northern Virginia. Learn from professionals about furniture removal, appliance disposal, and property cleanouts in Fairfax, Loudoun, Prince William & Arlington.',
  keywords: 'junk removal blog, Northern Virginia junk removal tips, property cleanout guides, furniture removal advice, appliance disposal, Fairfax County junk removal, Loudoun County cleanouts',
  alternates: {
    canonical: 'https://weehaulnow.com/blog',
  },
}

export default function BlogPage() {
  const blogPosts = [
    {
      title: 'Complete Guide to Fence Removal in Northern Virginia: Fairfax, Loudoun & Prince William Counties',
      slug: 'fence-removal-guide-northern-virginia-fairfax-loudoun-prince-william',
      excerpt: 'Everything you need to know about professional fence removal services in the DC metro area. From permits to disposal, we cover it all.',
      date: '2025-01-08',
      category: 'Fence Removal',
      readTime: '8 min read',
      featured: true
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-gray-900 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Junk Removal <span className="text-orange-400">Expert</span> Blog
            </h1>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 leading-relaxed">
              Professional insights, local tips, and expert guidance for all your junk removal needs in Northern Virginia
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Featured Article</h2>
            
            {blogPosts.filter(post => post.featured).map((post) => (
              <div key={post.slug} className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="bg-gradient-to-br from-orange-100 to-orange-200 p-12 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl mb-6">🚧</div>
                      <div className="text-2xl font-bold text-gray-800 mb-2">{post.category}</div>
                      <div className="text-gray-600">Professional Service Guide</div>
                    </div>
                  </div>
                  <div className="p-12">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-semibold">
                        {post.category}
                      </span>
                      <span className="text-gray-500 text-sm">{post.readTime}</span>
                      <span className="text-gray-500 text-sm">{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                      {post.excerpt}
                    </p>
                    <a 
                      href={`/blog/${post.slug}`}
                      className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105"
                    >
                      Read Full Article →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Explore Topics</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-4xl mb-4">🚧</div>
                <h3 className="text-xl font-bold mb-2">Fence Removal</h3>
                <p className="text-gray-600">Expert guides on fence removal, permits, and disposal</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-4xl mb-4">🛋️</div>
                <h3 className="text-xl font-bold mb-2">Furniture Removal</h3>
                <p className="text-gray-600">Tips for removing large furniture safely and efficiently</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-4xl mb-4">🏠</div>
                <h3 className="text-xl font-bold mb-2">Property Cleanouts</h3>
                <p className="text-gray-600">Complete guides for garage, basement, and estate cleanouts</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Need Professional Junk Removal?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our expert team is ready to help with any junk removal project in Northern Virginia
          </p>
          <a 
            href="tel:5714892961"
            className="inline-block bg-white text-orange-600 font-bold py-4 px-12 rounded-2xl text-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl"
          >
            📞 Call (571) 489-2961
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2025 Wee Haul Junk Removal. All rights reserved.</p>
          <p className="mt-2">Expert junk removal insights for Fairfax, Loudoun, Prince William & Arlington Counties</p>
        </div>
      </footer>
    </div>
  )
}