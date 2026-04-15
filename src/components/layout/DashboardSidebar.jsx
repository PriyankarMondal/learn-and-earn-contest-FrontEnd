import {
  CreditCard,
  LayoutDashboard,
  LogOut,
  Settings,
  Trophy,
  Users,
  BookOpen,
  FileText,
  User,
  PlusCircle,
  X
} from 'lucide-react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { BrandLogo } from '../common/BrandLogo'

export const studentSidebarLinks = [
  { label: 'Dashboard', icon: LayoutDashboard, href: '/dashboard' },
  { label: 'Explore Contests', icon: Trophy, href: '/all-contests' },
  { label: 'My Contests', icon: BookOpen, href: '/my-contests' },
  { label: 'Submissions', icon: FileText, href: '/submissions' },
  { label: 'Profile', icon: User, href: '/profile' },
]

export const studentBottomLinks = [
  { label: 'New Submission', icon: PlusCircle, bg: 'bg-amber-400', text: 'text-gray-900', href: '/dashboard' },
  { label: 'Logout', icon: LogOut, text: 'text-red-500', href: '/logout' },
]

export const adminSidebarLinks = [
  { label: 'Dashboard', icon: LayoutDashboard, href: '/admin' },
  { label: 'Contests', icon: Trophy, href: '/admin/contests' },
  { label: 'Submissions', icon: FileText, href: '/admin/submissions' },
  { label: 'Users', icon: Users, href: '/admin/users' },
  { label: 'Leaderboard', icon: Trophy, href: '/admin/leaderboard' },
  { label: 'Profile', icon: User, href: '/admin/profile' },
]

export const adminBottomLinks = [
  { label: 'Settings', icon: Settings, href: '/admin/settings' },
  { label: 'Logout', icon: LogOut, text: 'text-gray-800', href: '/logout' },
]

export function DashboardSidebar({ links, bottomLinks, userRole = 'student', isOpen = false, onClose }) {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;

  const handleAction = (label) => {
    if (label === 'Logout') {
      navigate('/logout')
    }
  }

  return (
    <aside className={`fixed inset-y-0 left-0 z-50 flex w-[260px] transform flex-col justify-between bg-[#f0f6e6] px-4 py-8 transition-transform duration-300 ease-in-out lg:hidden ${isOpen ? 'translate-x-0' : '-translate-x-full'
      } ${userRole === 'admin' ? '' : 'border-r border-[#e2e8d5]'}`}>
      <div>
        <div className="mb-8 flex items-center justify-between px-2">
          <div>
            <BrandLogo className="h-8 w-auto" />
            {userRole === 'admin' && (
              <div className="mt-2 text-[8px] font-extrabold uppercase tracking-widest text-[#5c8020]">
                Admin Control
              </div>
            )}
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-gray-400 hover:bg-gray-100"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <nav className="flex flex-col gap-1.5">
          {links.map((link) => {
            const isActive = link.href === currentPath;
            return (
              <Link
                key={link.label}
                to={link.href}
                onClick={onClose}
                className={`flex items-center gap-3 rounded-lg px-4 py-3 text-sm transition-colors ${isActive
                  ? userRole === 'admin'
                    ? 'bg-[#e4ebce] text-[#71ac00] font-bold border border-transparent'
                    : 'bg-white shadow-sm text-[#446611] font-bold border border-[#e2e8d5]'
                  : 'text-gray-600 font-semibold hover:bg-[#e4ebce] hover:text-[#446611] border border-transparent'
                  }`}
              >
                <link.icon className={`h-5 w-5 ${isActive ? 'text-[#82C600]' : 'text-gray-400'}`} />
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="flex flex-col gap-2 pt-8">
        {bottomLinks.map((link) => {
          const isButton = !!link.onClick;
          const Component = isButton ? 'button' : Link;
          const componentProps = isButton ? { type: 'button', onClick: link.onClick } : { to: link.href, onClick: () => handleAction(link.label) };

          return (
            <Component
              key={link.label}
              {...componentProps}
              className={`flex w-full items-center gap-3 rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors ${link.bg || 'hover:bg-gray-100'} ${link.text || 'text-gray-600'}`}
            >
              <link.icon className="h-5 w-5 opacity-80" />
              {link.label}
            </Component>
          );
        })}
      </div>
    </aside>
  )
}

