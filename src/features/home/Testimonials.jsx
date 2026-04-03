const stories = [
  {
    quote:
      'Desun contests pushed me from tutorials to shipping real MERN apps. The feedback on my submissions was clear and actionable.',
    name: 'Ananya Sharma',
    role: 'Full-stack intern',
  },
  {
    quote:
      'I loved the leaderboard energy and the fair judging. Winning my first prize here opened doors for freelance work.',
    name: 'Rahul Verma',
    role: 'Software developer',
  },
]

export function Testimonials() {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20" id="rewards">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-center text-[10px] font-semibold uppercase tracking-widest text-lime-600 sm:text-xs">
          Success stories
        </p>
        <h2 className="mt-2 text-center text-2xl font-bold text-gray-900 sm:text-3xl lg:text-4xl">
          Voices of the Academy
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:mt-12 md:grid-cols-2 md:gap-8">
          {stories.map((item) => (
            <blockquote
              key={item.name}
              className="relative rounded-2xl bg-lime-50/80 p-5 pt-10 ring-1 ring-lime-100 sm:p-8 sm:pt-12"
            >
              <span
                className="absolute left-4 top-3 font-serif text-5xl leading-none text-lime-500/40 sm:left-6 sm:top-4 sm:text-6xl"
                aria-hidden
              >
                &ldquo;
              </span>
              <p className="text-sm italic leading-relaxed text-gray-700 sm:text-base">{item.quote}</p>
              <footer className="mt-5 flex items-center gap-3 sm:mt-6">
                <span className="h-9 w-9 shrink-0 rounded-full bg-lime-500 sm:h-10 sm:w-10" aria-hidden />
                <div>
                  <cite className="not-italic text-sm font-bold text-gray-900">{item.name}</cite>
                  <p className="text-xs text-gray-500">{item.role}</p>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
