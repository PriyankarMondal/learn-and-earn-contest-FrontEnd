import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BrandLogo } from '../common/BrandLogo'
import { Button } from '../ui/Button'
import { Menu, X } from 'lucide-react'
import { UserProfileDropdown } from '../common/UserProfileDropdown'
import { useUser } from '../../context/UserContext'

const navLinks = [
  { label: 'Curriculum', href: '/#how-it-works', isAnchor: true },
  { label: 'Leaderboard', href: '/leaderboard' },
  { label: 'Rewards', href: '/rewards' },
]

export function Navbar() {
  const navigate = useNavigate()
  const { user } = useUser()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function handleNavClick(e, link) {
    setIsMenuOpen(false)
    
    // If it's an anchor link and we're already on the home page, scroll to that element
    if (link.isAnchor) {
      const elementId = link.href.replace('#', '').replace('/', '')
      const element = document.getElementById(elementId)
      if (element) {
        e.preventDefault()
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/90">
      <div className="flex w-full items-center justify-between px-4 py-3 sm:px-6">

        {/* Left: Logo & Hamburger */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 md:hidden"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
          <Link to="/" className="shrink-0 touch-manipulation" onClick={() => setIsMenuOpen(false)}>
            <BrandLogo className="h-10 w-auto sm:h-12 lg:h-14" />
          </Link>
        </div>

        {/* Center: Nav links (Desktop) */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) =>
            link.isAnchor ? (
              <a
                key={link.label}
                href={link.href}
                className="touch-manipulation whitespace-nowrap text-sm font-medium text-gray-700 hover:text-lime-600 transition-colors"
                onClick={(e) => handleNavClick(e, link)}
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="touch-manipulation whitespace-nowrap text-sm font-medium text-gray-700 hover:text-lime-600 transition-colors"
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* Right: Profile Dropdown OR Login/Register */}
        <div className="flex items-center gap-2 sm:gap-4">
          {user ? (
            <UserProfileDropdown />
          ) : (
            <>
              <Link to="/login" className="text-xs font-semibold text-gray-700 hover:text-lime-600 sm:text-sm">
                Login
              </Link>
              <Button
                variant="lime"
                className="px-3 py-1.5 text-xs sm:px-5 sm:py-2 sm:text-sm"
                onClick={() => { navigate('/register'); setIsMenuOpen(false) }}
              >
                Register
              </Button>
            </>
          )}
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMenuOpen && (
        <>
          <div
            className="fixed inset-0 top-[61px] z-40 bg-black/20 backdrop-blur-sm md:hidden"
            onClick={() => setIsMenuOpen(false)}
          />
          <nav className="absolute left-0 right-0 top-[61px] z-50 border-b border-gray-100 bg-white p-6 shadow-xl md:hidden">
            <div className="flex flex-col gap-5">
              {navLinks.map((link) =>
                link.isAnchor ? (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link)}
                    className="flex items-center text-base font-semibold text-gray-800 hover:text-lime-600"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.label}
                    to={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center text-base font-semibold text-gray-800 hover:text-lime-600"
                  >
                    {link.label}
                  </Link>
                )
              )}

              {/* Mobile: Login link OR Profile dropdown */}
              <div className="mt-2 border-t border-gray-100 pt-5">
                {user ? (
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-widest text-gray-400">Your Account</span>
                    <UserProfileDropdown />
                  </div>
                ) : (
                  <Link
                    to="/login"
                    onClick={() => setIsMenuOpen(false)}
                    className="text-base font-semibold text-gray-800"
                  >
                    Login
                  </Link>
                )}
              </div>
            </div>
          </nav>
        </>
      )}
    </header>
  )
}
