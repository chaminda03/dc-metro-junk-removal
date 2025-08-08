'use client'

import { useState } from 'react'
import emailjs from '@emailjs/browser'

interface ContactFormProps {
  isOpen: boolean
  onClose: () => void
}

export default function ContactForm({ isOpen, onClose }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    description: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage('')

    try {
      // Send email using EmailJS
      const result = await emailjs.send(
        'service_otz7arl', // Your EmailJS Service ID
        'template_h9dm1td', // Your EmailJS Template ID
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.description || 'No description provided',
          website: 'weehauljunkdc.com'
        },
        'OYseYsN7veIs6tN_K' // Your EmailJS Public Key
      )

      if (result.status === 200) {
        setSubmitMessage('Thank you! Your quote request has been submitted. We\'ll contact you within 24 hours.')
        setFormData({ name: '', email: '', phone: '', description: '' })
        return
      }

      // Fallback to API route if EmailJS not configured
      const endpoints = ['/api/contact', '/api/contact/', '/api/contact/index']
      let response: Response | null = null

      for (const endpoint of endpoints) {
        try {
          response = await fetch(endpoint, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          })
          
          if (response.ok) {
            break // Success, exit loop
          }
          
          if (response.status !== 404 && response.status !== 405) {
            // Not a routing issue, break and handle error
            break
          }
        } catch (err) {
          continue // Try next endpoint
        }
      }

      if (response && response.ok) {
        setSubmitMessage('Thank you! Your quote request has been submitted. We\'ll contact you within 24 hours.')
        setFormData({ name: '', email: '', phone: '', description: '' })
      } else {
        const errorData = response ? await response.text().catch(() => 'Unknown error') : 'No response'
        console.error('Form submission error:', response?.status, errorData)
        setSubmitMessage('Sorry, there was an error submitting your request. Please call us at (571) 489-2961.')
      }
    } catch (error) {
      console.error('Network error:', error)
      setSubmitMessage('Sorry, there was an error submitting your request. Please call us at (571) 489-2961.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-6 rounded-t-2xl">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Get Your Free Quote</h2>
            <button 
              onClick={onClose}
              className="text-white hover:text-gray-200 text-2xl font-bold"
            >
              ×
            </button>
          </div>
          <p className="text-orange-100 mt-2">Professional junk removal service in Northern Virginia</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6">
          <div className="space-y-4">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                placeholder="Enter your full name"
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                placeholder="Enter your email address"
              />
            </div>

            {/* Phone Field */}
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                placeholder="(571) 123-4567"
              />
            </div>

            {/* Description Field */}
            <div>
              <label htmlFor="description" className="block text-sm font-semibold text-gray-700 mb-2">
                Project Description <span className="text-gray-500">(Optional)</span>
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all resize-none"
                placeholder="Tell us about your junk removal needs (furniture, appliances, cleanout type, etc.)"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-6">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Submitting...
                </span>
              ) : (
                '📞 Send My Quote Request'
              )}
            </button>
          </div>

          {/* Submit Message */}
          {submitMessage && (
            <div className={`mt-4 p-4 rounded-lg ${
              submitMessage.includes('Thank you') 
                ? 'bg-green-50 text-green-800 border border-green-200' 
                : 'bg-red-50 text-red-800 border border-red-200'
            }`}>
              <p className="text-sm">{submitMessage}</p>
            </div>
          )}

          {/* Contact Info */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="text-center">
              <p className="text-gray-600 mb-2">Prefer to call directly?</p>
              <a 
                href="tel:5714892961" 
                className="text-orange-600 font-bold text-lg hover:text-orange-700 transition-colors"
              >
                📞 (571) 489-2961
              </a>
              <p className="text-sm text-gray-500 mt-2">7AM - 9PM, 7 Days a Week</p>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}