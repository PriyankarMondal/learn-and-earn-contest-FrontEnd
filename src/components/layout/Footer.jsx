import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BrandLogo } from '../common/BrandLogo'
import { Button } from '../ui/Button'
import { Input } from '../ui/Input'

const aboutLinks = [
  { label: 'Our Story', href: '#' },
  { label: 'Curriculum', href: '#curriculum' },
  { label: 'Leaderboard', href: '#leaderboard' },
  { label: 'Careers', href: '#' },
]

const supportLinks = [
  { label: 'Contact Us', href: '#' },
  { label: 'Terms of Service', href: '#' },
  { label: 'Privacy Policy', href: '#' },
  { label: 'FAQ', href: '#' },
]

export function Footer() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')

  function handleNewsletterSubmit(e) {
    e.preventDefault()
    if (email.trim()) {
      setEmail('')
    }
  }

  function handleNavClick(e, link) {
    if (link.label === 'Leaderboard' || link.label === 'Rewards') {
      e.preventDefault()
      const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'
      if (isLoggedIn) {
        navigate('/dashboard')
      } else {
        navigate('/login')
      }
    }
  }

  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#" className="inline-block touch-manipulation">
              <BrandLogo className="h-10 sm:h-14" />
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-gray-600">
              We help learners grow through real contests, mentorship, and prizes that reward
              curiosity and craft.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href="#"
                className="flex h-10 w-10 touch-manipulation items-center justify-center rounded-full bg-gray-200 text-gray-600 hover:bg-lime-100 hover:text-lime-700"
                aria-label="Twitter"
              >
                𝕏
              </a>
              <a
                href="#"
                className="flex h-10 w-10 touch-manipulation items-center justify-center rounded-full bg-gray-200 text-gray-600 hover:bg-lime-100 hover:text-lime-700"
                aria-label="LinkedIn"
              >
                in
              </a>
              <a
                href="#"
                className="flex h-10 w-10 touch-manipulation items-center justify-center rounded-full bg-gray-200 text-gray-600 hover:bg-lime-100 hover:text-lime-700"
                aria-label="YouTube"
              >
                ▶
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-900">About</h3>
            <ul className="mt-4 space-y-2">
              {aboutLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link)}
                    className="text-sm text-gray-600 hover:text-lime-600 touch-manipulation"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-900">Support</h3>
            <ul className="mt-4 space-y-2">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-lime-600 touch-manipulation"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-900">Stay updated</h3>
            <p className="mt-4 text-sm text-gray-600">
              Join our newsletter for the latest contest alerts.
            </p>
            <form
              onSubmit={handleNewsletterSubmit}
              className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-stretch sm:gap-2"
            >
              <Input
                type="email"
                name="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-label="Email for newsletter"
                className="min-h-11 sm:min-h-0"
              />
              <Button
                type="submit"
                variant="limeIcon"
                className="h-11 shrink-0 self-start rounded-lg sm:h-auto sm:self-stretch"
                aria-label="Subscribe"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Button>
            </form>
          </div>
        </div>

        <p className="mt-10 border-t border-gray-200 pt-6 text-center text-[11px] leading-relaxed text-gray-500 sm:mt-12 sm:pt-8 sm:text-xs">
          © 2026 DESUN ACADEMY. EMPOWERING THE NEXT GENERATION
        </p>
      </div>
    </footer>
  )
}
