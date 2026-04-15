const steps = [
  {
    title: '1. Register',
    text: 'Create your free account and pick the contest track that fits your goals.',
    icon: (
      <svg className="h-7 w-7 text-lime-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      </svg>
    ),
  },
  {
    title: '2. Compete',
    text: 'Submit projects on time, get scored on quality, creativity, and technical depth.',
    icon: (
      <svg className="h-7 w-7 text-lime-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 3h14v4c0 2.5-2 4.5-5 4.5S9 9.5 9 7V3zM9 3v1M15 3v1M9 21h6M12 17v4"
        />
      </svg>
    ),
  },
  {
    title: '3. Win rewards',
    text: 'Climb the leaderboard and claim cash prizes, swag, and certificates.',
    icon: (
      <svg className="h-7 w-7 text-lime-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
        />
      </svg>
    ),
  },
]

export function HowItWorks() {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20" id="how-it-works">
      <div className="w-full px-4 sm:px-6">
        <h2 className="text-center text-2xl font-bold text-gray-900 sm:text-3xl lg:text-4xl">
          How It Works
        </h2>
        <div className="mx-auto mt-3 h-1 w-14 rounded-full bg-lime-500 sm:w-16" />

        <div className="mt-10 grid max-w-2xl grid-cols-1 gap-8 sm:mx-auto sm:max-w-none sm:grid-cols-2 sm:gap-10 lg:grid-cols-3">
          {steps.map((step) => (
            <div key={step.title} className="text-center sm:text-left lg:text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-lime-100 sm:h-16 sm:w-16 lg:mx-auto">
                {step.icon}
              </div>
              <h3 className="mt-4 text-base font-bold text-gray-900 sm:text-lg">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600 sm:text-base">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
