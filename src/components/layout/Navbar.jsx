import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BrandLogo } from '../common/BrandLogo'
import { Button } from '../ui/Button'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Curriculum', href: '#curriculum', isAnchor: true },
  { label: 'Leaderboard', href: '/dashboard' },
  { label: 'Rewards', href: '/dashboard' },
]

export function Navbar() {
  const navigate = useNavigate()
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem('isLoggedIn') === 'true')
  }, [])

  function handleLogout() {
    navigate('/logout')
  }

  function handleNavClick(e, link) {
    setIsMenuOpen(false)
    
    // For specific dashboard links that require login
    if (link.label === 'Leaderboard' || link.label === 'Rewards') {
      const isLoggedInRef = localStorage.getItem('isLoggedIn') === 'true'
      if (!isLoggedInRef) {
        e.preventDefault()
        navigate('/login')
      }
    }
  }

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/90">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        {/* Left: Logo & Hamburger button for mobile */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 md:hidden"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
          <Link to="/" className="shrink-0 touch-manipulation" onClick={() => setIsMenuOpen(false)}>
            <BrandLogo className="h-7 max-h-9 w-auto sm:h-9" />
          </Link>
        </div>

        {/* Center: Links (Desktop only) */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            link.isAnchor ? (
              <a
                key={link.href}
                href={link.href}
                className="touch-manipulation whitespace-nowrap text-sm font-medium text-gray-700 hover:text-lime-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                to={link.href}
                onClick={(e) => handleNavClick(e, link)}
                className="touch-manipulation whitespace-nowrap text-sm font-medium text-gray-700 hover:text-lime-600 transition-colors"
              >
                {link.label}
              </Link>
            )
          ))}
        </nav>

        {/* Right: Auth Buttons */}
        <div className="flex items-center gap-2 sm:gap-4">
          {!isLoggedIn ? (
            <>
              <Link
                to="/login"
                className="text-xs font-semibold text-gray-700 hover:text-lime-600 sm:text-sm"
              >
                Login
              </Link>
              <Button
                variant="lime"
                className="px-3 py-1.5 text-xs sm:px-5 sm:py-2 sm:text-sm"
                onClick={() => {
                  navigate('/register')
                  setIsMenuOpen(false)
                }}
              >
                Register
              </Button>
            </>
          ) : (
            <>
              <Link
                to="/dashboard"
                className="text-xs font-semibold text-gray-700 hover:text-lime-600 sm:text-sm"
              >
                Dashboard
              </Link>
              <Button
                variant="outline"
                className="px-3 py-1.5 text-xs sm:px-5 sm:py-2 sm:text-sm"
                onClick={handleLogout}
              >
                Logout
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
              {navLinks.map((link) => (
                link.isAnchor ? (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center text-base font-semibold text-gray-800 hover:text-lime-600"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={(e) => handleNavClick(e, link)}
                    className="flex items-center text-base font-semibold text-gray-800 hover:text-lime-600"
                  >
                    {link.label}
                  </Link>
                )
              ))}
              {!isLoggedIn && (
                <Link
                  to="/login"
                  onClick={() => setIsMenuOpen(false)}
                  className="mt-2 border-t border-gray-100 pt-5 text-base font-semibold text-gray-800"
                >
                  Login
                </Link>
              )}
              {isLoggedIn && (
                <Link
                  to="/dashboard"
                  onClick={() => setIsMenuOpen(false)}
                  className="mt-2 border-t border-gray-100 pt-5 text-base font-semibold text-gray-800"
                >
                  Go to Dashboard
                </Link>
              )}
            </div>
          </nav>
        </>
      )}
    </header>
  )
}
