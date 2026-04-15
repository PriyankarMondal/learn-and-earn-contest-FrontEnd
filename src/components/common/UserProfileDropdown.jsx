import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { User, LogOut, LayoutDashboard, Settings, ChevronDown } from 'lucide-react'
import { useUser } from '../../context/UserContext'

export function UserProfileDropdown({ theme = 'light' }) {
  const navigate = useNavigate()
  const { user, logout } = useUser()
  const [isOpen, setIsOpen] = useState(false)

  if (!user) return null

  const avatarUrl = user.avatar
    || `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}&background=446611&color=fff&bold=true`

  const handleLogout = () => {
    setIsOpen(false)
    logout()
    navigate('/logout')
  }

  const isDark = theme === 'dark'

  return (
    <div className="relative">
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 group p-1 pr-2 sm:pr-3 rounded-full transition-all border border-transparent
          ${isDark ? 'hover:bg-white/10' : 'hover:bg-slate-50 hover:border-gray-100'}`}
      >
        <div className={`h-8 w-8 sm:h-9 sm:w-9 rounded-full overflow-hidden border-2 shadow-sm
          ${isDark ? 'border-white/20' : 'border-lime-500'}`}
        >
          <img src={avatarUrl} alt={user.name} className="h-full w-full object-cover" />
        </div>
        <div className="hidden sm:block text-left shrink-0">
          <div className={`text-[10px] font-black leading-none truncate max-w-[100px]
            ${isDark ? 'text-white' : 'text-gray-900'}`}
          >
            {user.name}
          </div>
          <div className={`text-[8px] font-bold uppercase tracking-tighter mt-0.5
            ${isDark ? 'text-lime-400' : 'text-lime-600'}`}
          >
            {user.role}
          </div>
        </div>
        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}
          ${isDark ? 'text-white/50' : 'text-gray-400'}`}
        />
      </button>

      {/* Dropdown Panel */}
      {isOpen && (
        <>
          {/* Overlay to close on outside click */}
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />

          <div className="absolute right-0 mt-3 w-56 rounded-2xl bg-white border border-gray-100 shadow-2xl z-50 overflow-hidden py-2">
            {/* User Info Header */}
            <div className="px-4 py-3 border-b border-gray-50 mb-1">
              <div className="text-xs font-black text-gray-900">{user.name}</div>
              <div className="text-[9px] font-bold text-gray-400 uppercase tracking-widest truncate">{user.email}</div>
            </div>

            {/* Menu Items */}
            <Link
              to={user.role === 'Admin' ? '/admin' : '/dashboard'}
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 px-4 py-3 text-xs font-bold text-gray-700 hover:bg-slate-50 hover:text-lime-600 transition-colors"
            >
              <LayoutDashboard className="w-4 h-4" /> Dashboard
            </Link>

            <Link
              to={user.role === 'Admin' ? '/admin/profile' : '/profile'}
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 px-4 py-3 text-xs font-bold text-gray-700 hover:bg-slate-50 hover:text-lime-600 transition-colors"
            >
              <User className="w-4 h-4" /> My Profile
            </Link>

            <Link
              to={user.role === 'Admin' ? '/admin/profile' : '/profile'}
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 px-4 py-3 text-xs font-bold text-gray-700 hover:bg-slate-50 hover:text-lime-600 transition-colors"
            >
              <Settings className="w-4 h-4" /> Account Settings
            </Link>

            <div className="h-px bg-gray-50 my-1" />

            <button
              type="button"
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-4 py-3 text-xs font-bold text-red-500 hover:bg-red-50 transition-colors"
            >
              <LogOut className="w-4 h-4" /> Logout
            </button>
          </div>
        </>
      )}
    </div>
  )
}
