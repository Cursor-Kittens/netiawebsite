'use client'

import { useState, useEffect, useRef, useMemo } from 'react'

interface Message {
  id: number
  text: string
  isUser: boolean
  delay: number
}

export const AnimatedChat = () => {
  const [messages, setMessages] = useState<Message[]>([])
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0)
  const [isComplete, setIsComplete] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const chatMessages: Omit<Message, 'id'>[] = useMemo(() => [
    { text: "Hi! My AC just stopped working and it's really hot. How soon can someone come out?", isUser: true, delay: 750 },
    { text: "I'm sorry to hear that! We have same-day emergency service available. Our next opening is today at 3:00 PM or 5:30 PM. Which works better for you?", isUser: false, delay: 1500 },
    { text: "3 PM works! What's the service call fee?", isUser: true, delay: 1500 },
    { text: "Our emergency service call is $89, which includes the diagnostic. If you proceed with the repair, that fee is waived and applied to the total cost.", isUser: false, delay: 1500 },
    { text: "That's fair. What brands do you work on? I have a Carrier unit", isUser: true, delay: 1500 },
    { text: "We service all major brands including Carrier, Trane, Lennox, Rheem, and Goodman. Our techs are factory-trained and we stock common parts for faster repairs.", isUser: false, delay: 1500 },
    { text: "Great! Do you also do maintenance plans?", isUser: true, delay: 1500 },
    { text: "Yes! Our maintenance plan is $179/year and includes 2 tune-ups (spring AC, fall heating), priority scheduling, and 15% off all repairs. It helps prevent breakdowns like this!", isUser: false, delay: 1500 },
    { text: "Sounds good. Let's book that 3 PM appointment!", isUser: true, delay: 1500 },
    { text: "Perfect! I'll get you scheduled for 3:00 PM today. Here's our booking calendar to confirm:", isUser: false, delay: 1500 }
  ], [])

  // Auto-scroll to bottom when new messages arrive
  const scrollToBottom = () => {
    if (scrollContainerRef.current) {
      setTimeout(() => {
        if (scrollContainerRef.current) {
          scrollContainerRef.current.scrollTo({
            top: scrollContainerRef.current.scrollHeight,
            behavior: 'smooth'
          })
        }
      }, 300) // Increased delay for smoother scroll
    }
  }

  useEffect(() => {
    // Delay to let the message render and animate first
    const timer = setTimeout(() => {
      scrollToBottom()
    }, 200)
    return () => clearTimeout(timer)
  }, [messages])

  useEffect(() => {
    if (currentMessageIndex < chatMessages.length) {
      const message = chatMessages[currentMessageIndex]
      // Add typing delay before showing the message
      const typingDelay = currentMessageIndex === 0 ? 100 : 800 // First message: 100ms, others: 800ms
      const timer = setTimeout(() => {
        setMessages(prev => [...prev, { ...message, id: currentMessageIndex }])
        setCurrentMessageIndex(prev => prev + 1)
      }, typingDelay + message.delay)

      return () => clearTimeout(timer)
    } else {
      setIsComplete(true)
    }
  }, [currentMessageIndex, chatMessages])

  const resetChat = () => {
    setMessages([])
    setCurrentMessageIndex(0)
    setIsComplete(false)
  }

  return (
    <div className="bg-surface border border-border rounded-lg p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-display text-xl font-semibold text-fg">
          Live Chat Demo
        </h3>
        {isComplete && (
          <button
            onClick={resetChat}
            className="px-3 py-1 text-xs bg-primary-500 text-white rounded-full hover:bg-primary-600 transition-colors"
          >
            Restart Demo
          </button>
        )}
      </div>
      
      {/* Chat Messages */}
      <div ref={scrollContainerRef} className="space-y-4 mb-6 h-80 overflow-y-auto">
        {messages.map((message, index) => (
          <div
            key={message.id}
            className={`flex ${message.isUser ? 'justify-end' : 'justify-start'} animate-fade-in-up`}
            style={{ 
              animationDelay: `${index * 0.2}s`
            }}
          >
            {!message.isUser && (
              <div className="w-6 h-6 bg-blue-600 rounded-full flex-shrink-0 mr-2"></div>
            )}
            <div
              className={`rounded-2xl px-4 py-2 max-w-xs ${
                message.isUser
                  ? 'bg-gray-100 text-gray-800 rounded-br-md'
                  : 'bg-blue-600 text-white rounded-bl-md'
              }`}
            >
              <p className="text-sm">{message.text}</p>
              {!message.isUser && message.text.includes("scheduling calendar") && (
                <div className="mt-2 bg-white/20 rounded-lg px-3 py-2">
                  <p className="text-xs text-white">📅 View Available Times & Book</p>
                </div>
              )}
            </div>
          </div>
        ))}
        
        {/* Typing indicator - show for both user and AI when waiting for next message */}
        {currentMessageIndex < chatMessages.length && (
          <div className={`flex space-x-2 transition-all duration-300 ease-out ${chatMessages[currentMessageIndex]?.isUser ? 'justify-end' : 'justify-start'}`}>
            {!chatMessages[currentMessageIndex]?.isUser && (
              <div className="w-6 h-6 bg-blue-600 rounded-full flex-shrink-0"></div>
            )}
            <div className={`bg-blue-600 rounded-2xl px-4 py-2 ${chatMessages[currentMessageIndex]?.isUser ? 'rounded-br-md' : 'rounded-bl-md'}`}>
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse" style={{animationDuration: '1.4s'}}></div>
                <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse" style={{animationDelay: '0.2s', animationDuration: '1.4s'}}></div>
                <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse" style={{animationDelay: '0.4s', animationDuration: '1.4s'}}></div>
              </div>
            </div>
            {chatMessages[currentMessageIndex]?.isUser && (
              <div className="w-6 h-6 bg-gray-400 rounded-full flex-shrink-0"></div>
            )}
          </div>
        )}
        
        {/* Scroll anchor */}
        <div ref={messagesEndRef} />
      </div>
      
      {/* Demo Input */}
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Try asking about emergency service, pricing, or maintenance..."
          className="flex-1 px-4 py-2 border border-border rounded-lg text-xs bg-white"
          disabled
        />
        <button className="px-4 py-2 bg-primary-500 text-white rounded-lg text-sm hover:bg-primary-600 transition-colors" disabled>
          Send
        </button>
      </div>
      <p className="text-xs text-muted mt-6 text-center">Demo mode - chat is simulated</p>
    </div>
  )
}
