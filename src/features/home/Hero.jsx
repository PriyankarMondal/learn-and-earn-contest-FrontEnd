import { useEffect, useState } from 'react'
import { Button } from '../../components/ui/Button'
import heroImg1 from '../../assets/heroImg1.avif'
import heroImg2 from '../../assets/heroImg2.avif'
import heroImg3 from '../../assets/heroImg3.avif'

const slides = [
  {
    image: heroImg1,
    imageLabel: 'Developers working with code',
    badge: 'New contest',
    title: 'New MERN',
    highlight: 'Contest',
    text: 'Build real-world full-stack apps, compete with peers, and win from our prize pool. Learn MERN with structured challenges and mentor support.',
  },
  {
    image: heroImg2,
    imageLabel: 'Designer at work',
    badge: 'Design track',
    title: 'UI/UX',
    highlight: 'Challenge',
    text: 'Ship polished interfaces, design systems, and prototypes. Get feedback from industry judges and grow your portfolio.',
  },
  {
    image: heroImg3,
    imageLabel: 'Laptop with code on screen',
    badge: 'Coming soon',
    title: 'Open',
    highlight: 'Hackathon',
    text: 'Team up for a weekend build sprint. APIs, creativity, and speed—climb the leaderboard and take home prizes.',
  },
]

const AUTO_MS = 6000

export function Hero() {
  const [active, setActive] = useState(0)
  const count = slides.length

  useEffect(() => {
    const id = setInterval(() => {
      setActive((i) => (i + 1) % count)
    }, AUTO_MS)
    return () => clearInterval(id)
  }, [count])

  const handleApplyNow = () => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'
    if (isLoggedIn) {
      window.location.hash = '#/dashboard'
    } else {
      window.location.hash = '#/login'
    }
  }

  return (
    <section className="px-3 pt-2 sm:px-4 sm:pt-4 md:px-6">
      <div className="relative mx-auto w-full min-w-0 max-w-6xl overflow-hidden rounded-xl min-h-[420px] sm:min-h-[480px] sm:rounded-2xl md:min-h-[520px] lg:min-h-[580px]">
        <div className="absolute inset-0 overflow-hidden rounded-xl sm:rounded-2xl">
          <div
            className="flex h-full w-full min-w-0 transition-transform duration-700 ease-out"
            style={{
              width: `${count * 100}%`,
              transform: `translateX(-${(active * 100) / count}%)`,
            }}
          >
            {slides.map((slide) => (
              <div
                key={slide.title + slide.highlight}
                className="relative h-full min-h-[420px] shrink-0 sm:min-h-[480px] md:min-h-[520px] lg:min-h-[580px]"
                style={{ width: `${100 / count}%` }}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${slide.image})` }}
                  role="img"
                  aria-label={slide.imageLabel}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-white/98 via-white/90 to-white/75 sm:bg-gradient-to-r sm:from-white/95 sm:via-white/85 sm:to-white/40" />
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10 flex flex-col justify-center px-4 py-10 sm:px-6 sm:py-14 lg:min-h-[580px] lg:py-24">
          <div className="transition-opacity duration-500" key={active}>
            <span className="mb-3 inline-block w-fit rounded bg-amber-400 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-white sm:mb-4 sm:px-3 sm:text-[10px]">
              {slides[active].badge}
            </span>

            <h1 className="max-w-xl text-3xl font-bold leading-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl">
              {slides[active].title}{' '}
              <span className="text-lime-500">{slides[active].highlight}</span>
            </h1>

            <p className="mt-3 max-w-lg text-sm leading-relaxed text-gray-600 sm:mt-4 sm:text-base sm:leading-relaxed lg:text-lg">
              {slides[active].text}
            </p>
          </div>

          <div className="mt-6 flex w-full max-w-md flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-4">
            <Button
              variant="amber"
              className="w-full touch-manipulation px-6 py-3 sm:w-auto"
              onClick={handleApplyNow}
            >
              Apply Now
            </Button>
            <Button variant="outline" className="w-full touch-manipulation px-6 py-3 sm:w-auto">
              Learn More
            </Button>
          </div>

          <div className="mt-8 flex gap-2 sm:mt-12" role="tablist" aria-label="Hero slides">
            {slides.map((_, index) => (
              <button
                key={index}
                type="button"
                role="tab"
                aria-selected={index === active}
                aria-label={`Go to slide ${index + 1}`}
                onClick={() => setActive(index)}
                className={`h-2.5 min-h-[10px] w-2.5 min-w-[10px] touch-manipulation rounded-full transition-all ${
                  index === active ? 'w-8 bg-lime-500' : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
