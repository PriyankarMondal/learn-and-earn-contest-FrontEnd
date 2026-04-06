import { useEffect, useState } from 'react'
import { BrandLogo } from '../common/BrandLogo'
import { Button } from '../ui/Button'

const navLinks = [
  { label: 'Curriculum', href: '#curriculum' },
  { label: 'Leaderboard', href: '#leaderboard' },
  { label: 'Rewards', href: '#rewards' },
]

export function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem('isLoggedIn') === 'true')
  }, [])

  function handleLogout() {
    localStorage.removeItem('isLoggedIn')
    localStorage.removeItem('userRole')
    setIsLoggedIn(false)
    window.location.hash = '#'
    window.location.reload() // Reload to ensure all components update
  }

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/90">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-3 sm:px-6 md:flex-row md:items-center md:justify-between md:gap-6">
        {/* Mobile: logo + auth on one row | Desktop: logo only in this group */}
        <div className="flex w-full items-center justify-between md:w-auto md:justify-start">
          <a href="#" className="shrink-0 touch-manipulation">
            <BrandLogo className="h-7 max-h-9 w-auto sm:h-11 sm:max-h-none" />
          </a>
          <div className="flex shrink-0 items-center gap-2 sm:gap-3 md:hidden">
            {!isLoggedIn ? (
              <>
                <a
                  href="#/login"
                  className="text-xs font-medium text-gray-700 hover:text-lime-600 sm:text-sm"
                >
                  Login
                </a>
                <Button
                  variant="lime"
                  className="px-3 py-1.5 text-xs sm:px-5 sm:py-2 sm:text-sm"
                  onClick={() => {
                    window.location.hash = '#/register'
                  }}
                >
                  Register
                </Button>
              </>
            ) : (
              <Button
                variant="outline"
                className="px-3 py-1.5 text-xs sm:px-5 sm:py-2 sm:text-sm"
                onClick={handleLogout}
              >
                Logout
              </Button>
            )}
          </div>
        </div>

        {/* Center links */}
        <nav
          className="flex min-w-0 flex-1 flex-wrap items-center justify-center gap-x-3 gap-y-2 sm:gap-x-6 md:gap-x-8 lg:gap-x-10"
          aria-label="Main"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="touch-manipulation whitespace-nowrap text-xs font-medium text-gray-700 hover:text-lime-600 sm:text-sm"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop / tablet auth */}
        <div className="hidden shrink-0 items-center gap-3 sm:gap-4 md:flex">
          {!isLoggedIn ? (
            <>
              <a href="#/login" className="text-sm font-medium text-gray-700 hover:text-lime-600">
                Login
              </a>
              <Button
                variant="lime"
                className="px-4 py-2 text-sm sm:px-5"
                onClick={() => {
                  window.location.hash = '#/register'
                }}
              >
                Register
              </Button>
            </>
          ) : (
            <>
              <a
                href="#/dashboard"
                className="text-sm font-medium text-gray-700 hover:text-lime-600"
              >
                Dashboard
              </a>
              <Button
                variant="outline"
                className="px-4 py-2 text-sm sm:px-5"
                onClick={handleLogout}
              >
                Logout
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  )
}
