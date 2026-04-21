import { Bell, Search, Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { BrandLogo } from '../common/BrandLogo'
import { useSearch } from '../../context/SearchContext'
import { UserProfileDropdown } from '../common/UserProfileDropdown'
import { fetchUnreadNotificationCount } from '../../api/student.api'
import { NotificationPanel } from '../../features/student-dashboard/profile/NotificationPanel'

export function DashboardTopbar({ className = '', rightNav, userRole = 'student', searchPlaceholder, onMenuClick, isSidebarOpen, navLinks = [] }) {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isNotificationOpen, setIsNotificationOpen] = useState(false)
  const [unreadCount, setUnreadCount] = useState(0)
  const [refreshKey, setRefreshKey] = useState(0)
  const { searchQuery, setSearchQuery } = useSearch()
  const location = useLocation()

  const defaultPlaceholder = userRole === 'admin' ? "Command Search..." : "Explore contests, skills, or mentors..."

  // Load unread notification count on mount and when refreshing
  useEffect(() => {
    if (userRole === 'student') {
      loadUnreadCount()
    }
  }, [userRole, refreshKey])

  const loadUnreadCount = async () => {
    try {
      const data = await fetchUnreadNotificationCount()
      setUnreadCount(data.unreadCount || 0)
    } catch (error) {
      console.error('Failed to load unread count:', error)
    }
  }

  const handleNotificationRefresh = () => {
    setRefreshKey(prev => prev + 1)
    loadUnreadCount()
  }

  return (
    <header className={`flex h-20 shrink-0 items-center bg-[#f6f9f3] px-4 sm:px-6 lg:px-8 ${userRole === 'admin' ? '' : 'border-b border-[#e2e8d5]'} ${className}`}>
      <div className="mx-auto flex w-full items-center justify-between gap-3 sm:gap-4 lg:gap-6">

        {/* Left side: Hamburger (Mobile), Logo */}
        {!isSearchOpen && (
          <div className="flex items-center gap-2 sm:gap-4 shrink-0 overflow-hidden">
            {/* Hamburger Menu - Only show on Mobile (hidden on tablet and above) */}
            <button
              onClick={onMenuClick}
              className="lg:hidden rounded-lg p-2 text-gray-500 hover:bg-gray-100 transition-colors"
              aria-label="Toggle Navigation"
            >
              <Menu className="h-6 w-6" />
            </button>

            {/* Logo in Navbar - Hidden when searching on mobile */}
            {!isSearchOpen && (
              <Link to="/" className="flex shrink-0 items-center touch-manipulation">
                <BrandLogo className="h-10 w-auto sm:h-12 lg:h-14" />
              </Link>
            )}
          </div>
        )}

        {/* Global Search Bar - Permanent on Laptop/Tablet, Toggleable on Mobile */}
        <div className={`flex-1 transition-all duration-300 ${isSearchOpen ? 'flex' : 'hidden sm:flex'} items-center`}>
          <div className="relative w-full max-w-sm">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus={isSearchOpen}
              placeholder={searchPlaceholder || defaultPlaceholder}
              className="w-full rounded-full border border-transparent bg-[#e4e9d3] py-2 pl-11 pr-10 text-sm tracking-wide text-gray-800 placeholder-gray-500 outline-none transition-all focus:border-lime-500/30 focus:bg-white focus:ring-4 focus:ring-lime-500/10"
            />
            {(isSearchOpen || searchQuery) && (
              <button
                onClick={() => {
                  setSearchQuery('')
                  setIsSearchOpen(false)
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-gray-400 hover:bg-gray-200"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>

        {/* Center Navigation Links - Tablet and Laptop only */}
        {!isSearchOpen && navLinks.length > 0 && (
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href
              return (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all whitespace-nowrap ${
                    isActive
                      ? 'bg-white text-[#446611] shadow-sm border border-[#e2e8d5]'
                      : 'text-gray-600 hover:bg-[#e4ebce] hover:text-[#446611]'
                  }`}
                  onClick={() => setIsSearchOpen(false)}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>
        )}

        {/* Right side: Search Toggle (Mobile), Bell, and User */}
        {!isSearchOpen && (
          <div className="flex shrink-0 items-center justify-end gap-1 sm:gap-3 lg:gap-6">
            {/* Search Toggle for Mobile */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="flex sm:hidden items-center justify-center p-2 text-gray-500 hover:text-lime-600 transition-colors"
              aria-label="Open Search"
            >
              <Search className="h-5 w-5" />
            </button>

            {userRole === 'admin' && rightNav && (
              <div className="hidden lg:block mr-2">{rightNav}</div>
            )}

            {/* 🔔 NOTIFICATION BELL - ONLY FOR STUDENTS */}
            {userRole === 'student' && (
              <>
                <button 
                  onClick={() => setIsNotificationOpen(true)}
                  className="relative p-2 text-gray-500 hover:text-lime-600 transition-colors rounded-lg hover:bg-white/50" 
                  aria-label="Notifications"
                >
                  <Bell className="h-5 w-5" />
                  {unreadCount > 0 && (
                    <div className="absolute right-1 top-1 flex items-center justify-center">
                      <span className="absolute inline-flex h-5 w-5 animate-pulse rounded-full bg-red-500 opacity-75"></span>
                      <span className="relative inline-flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-xs font-bold text-white">
                        {unreadCount > 9 ? '9+' : unreadCount}
                      </span>
                    </div>
                  )}
                </button>

                {/* Notification Panel Slide-out */}
                <NotificationPanel 
                  isOpen={isNotificationOpen} 
                  onClose={() => setIsNotificationOpen(false)}
                  onRefresh={handleNotificationRefresh}
                />
              </>
            )}

            <div className="border-l border-gray-200 pl-2 sm:pl-4 lg:pl-6">
              <UserProfileDropdown />
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
