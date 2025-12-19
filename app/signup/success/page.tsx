'use client'

import { useEffect, useState } from 'react'
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"

export default function SignupSuccess() {
  const [isProcessing, setIsProcessing] = useState(true)

  useEffect(() => {
    // Get stored tokens and account info from sessionStorage
    const tempTokens = sessionStorage.getItem('temp_tokens')
    const tempEmail = sessionStorage.getItem('temp_account_email')

    if (tempTokens && tempEmail) {
      const tokens = JSON.parse(tempTokens)
      
      // Store tokens permanently in localStorage
      localStorage.setItem('netia_customer_token', tokens.token)
      localStorage.setItem('netia_customer_renew_token', tokens.renew_token)
      localStorage.setItem('netia_customer_logged_in', 'true')
      localStorage.setItem('netia_customer_email', tempEmail)

      // Clear temporary storage
      sessionStorage.removeItem('temp_tokens')
      sessionStorage.removeItem('temp_account_email')
      sessionStorage.removeItem('temp_account_id')
    }

    setIsProcessing(false)
    
    // Redirect to app.netia.ai for login
    setTimeout(() => {
      window.location.href = 'https://app.netia.ai/login'
    }, 2000)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto text-center">
            {isProcessing ? (
              <>
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500 mx-auto mb-4"></div>
                <h1 className="font-display text-2xl font-semibold text-fg mb-2">
                  Setting up your account...
                </h1>
              </>
            ) : (
              <>
                <div className="mb-6">
                  <svg className="w-16 h-16 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h1 className="font-display text-2xl font-semibold text-fg mb-2">
                  Account Created Successfully!
                </h1>
                <p className="text-muted mb-6">
                  Your free trial has started. Redirecting to login...
                </p>
              </>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

