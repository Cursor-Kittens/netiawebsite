"use client"

import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { FloatingBalls } from "@/components/FloatingBalls"

export default function Pricing() {
  const handleGetStarted = () => {
    // Redirect to starter signup for AI ChatBot
    window.location.href = '/signup/starter'
  }

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Floating elements */}
      <FloatingBalls />
      
      <Header />
      <main className="py-24">
        <div className="container mx-auto px-4 relative">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="font-display text-4xl md:text-5xl font-semibold text-fg mb-4">
              Stop Losing Service Calls After Hours
            </h1>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Every missed call at 2 AM costs you $500+ in HVAC repairs. Our AI never sleeps, never misses a call, and never loses an emergency service opportunity.
            </p>
          </div>

          {/* Pricing Card - Centered */}
          <div className="max-w-md mx-auto">
            
            {/* ChatBot Card */}
            <div className="bg-gradient-to-br from-blue-100 to-blue-50 border-2 border-blue-300 rounded-lg p-8 shadow-lg flex flex-col h-full hover-lift transition-all duration-500 group">
              <div className="mb-6">
                <div className="text-blue-700 font-semibold text-sm uppercase tracking-wide mb-2">AI ChatBot</div>
                <h3 className="font-display text-2xl font-semibold text-fg mb-2">
                  24/7 HVAC Assistant
                </h3>
                <div className="text-4xl font-bold text-blue-700 mt-4">
                  $79<span className="text-lg font-normal text-muted">/month</span>
                </div>
                <p className="text-sm text-muted mt-2">
                  Turn website visitors into booked HVAC service calls instantly
                </p>
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-start text-muted">
                  <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Captures Emergency Calls 24/7</strong></span>
                </li>
                <li className="flex items-start text-muted">
                  <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Powered by OpenAI</strong></span>
                </li>
                <li className="flex items-start text-muted">
                  <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Books Service Appointments</strong></span>
                </li>
                <li className="flex items-start text-muted">
                  <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Answers HVAC Questions</strong></span>
                </li>
                <li className="flex items-start text-muted">
                  <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span><strong>5-Minute Setup</strong></span>
                </li>
              </ul>
              <button
                onClick={handleGetStarted}
                className="block w-full px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors mt-auto text-center hover-lift btn-enhanced"
              >
                Start 7 day free trial
              </button>
            </div>
          </div>

          {/* Value Props */}
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">$0</div>
                <div className="text-sm text-muted">Setup Fee</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">7 Days</div>
                <div className="text-sm text-muted">Free Trial</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">∞</div>
                <div className="text-sm text-muted">Conversations</div>
              </div>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  )
}
