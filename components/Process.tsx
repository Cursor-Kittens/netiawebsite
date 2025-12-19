export const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Add your business details",
      description: "Input your service areas, pricing, brands you service, and maintenance plans. Takes 5 minutes.",
      action: "Get started"
    },
    {
      number: "02", 
      title: "Add the widget to your website",
      description: "Copy and paste one code snippet into your website. We'll guide you through it.",
      action: "View setup"
    },
    {
      number: "03",
      title: "Start Booking Service Calls", 
      description: "Your AI starts working immediately—scheduling emergency repairs, maintenance visits, and installation consultations. No training required.",
      action: "See it in action"
    },
    {
      number: "04",
      title: "Watch Your Business Grow",
      description: "More booked service calls, fewer missed emergencies, happier customers with AC and heat when they need it most.",
      action: "View dashboard"
    }
  ]

  return (
    <section className="section-spacing bg-white" aria-labelledby="process-heading">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 id="process-heading" className="font-display text-3xl md:text-4xl font-semibold text-fg mb-4">
            From Setup to Success in 15 Minutes
          </h2>
          <p className="text-lg text-muted max-w-3xl mx-auto">
            Tell us about your HVAC business, add our widget to your website, and start booking service calls immediately. 
            Simple setup, powerful results—capture every emergency call and maintenance opportunity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8">
          {steps.map((step, index) => (
            <article key={index} className="flex h-full group">
              <div className="flex flex-col items-center flex-shrink-0 mr-4">
                {/* Step Number */}
                <div className="w-14 h-14 bg-primary-50 text-primary-600 rounded-full flex items-center justify-center font-display font-bold text-lg group-hover:bg-primary-100 transition-all duration-300 shadow-sm group-hover:shadow-md">
                  {step.number}
                </div>
              </div>
              <div className="flex flex-col flex-1">
                <h3 className="font-display text-xl font-semibold text-fg leading-tight mb-3">
                  {step.title}
                </h3>
                
                {/* Description */}
                <p className="text-muted leading-relaxed flex-grow mb-3">
                  {step.description}
                </p>
                
                {/* Action Link - aligned at bottom */}
                <a 
                  href="#learn-more"
                  className="inline-flex items-center text-primary-500 hover:text-primary-600 font-medium transition-colors group/link"
                  aria-label={`${step.action} for ${step.title}`}
                >
                  {step.action}
                  <svg 
                    className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M9 5l7 7-7 7" 
                    />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}



