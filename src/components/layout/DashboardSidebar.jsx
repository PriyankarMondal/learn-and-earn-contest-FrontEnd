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
  PlusCircle
} from 'lucide-react'
import { BrandLogo } from '../common/BrandLogo'

export const studentSidebarLinks = [
  { label: 'Dashboard', icon: LayoutDashboard, href: '#/dashboard', active: true },
  { label: 'My Contests', icon: Trophy, href: '#/dashboard' },
  { label: 'Submissions', icon: FileText, href: '#/dashboard' },
  { label: 'Profile', icon: User, href: '#/dashboard' },
]

export const studentBottomLinks = [
  { label: 'New Submission', icon: PlusCircle, bg: 'bg-lime-500', text: 'text-white', href: '#/dashboard' },
  { label: 'Logout', icon: LogOut, text: 'text-red-500', href: '#/login' },
]

export const adminSidebarLinks = [
  { label: 'Dashboard', icon: LayoutDashboard, href: '#/admin', active: true },
  { label: 'Contests', icon: Trophy, href: '#/admin' },
  { label: 'Submissions', icon: FileText, href: '#/admin' },
  { label: 'Users', icon: Users, href: '#/admin' },
  { label: 'Leaderboard', icon: Trophy, href: '#/admin' },
]

export const adminBottomLinks = [
  { label: 'Settings', icon: Settings, href: '#/admin' },
  { label: 'Logout', icon: LogOut, text: 'text-gray-800', href: '#/login' },
]

export function DashboardSidebar({ links, bottomLinks, userRole = 'student' }) {
  return (
    <aside className="hidden w-[240px] shrink-0 flex-col justify-between border-r border-[#e2e8d5] bg-[#f0f6e6] px-4 py-8 md:flex max-h-screen sticky top-0">
      <div>
        <div className="mb-8 px-2">
           <BrandLogo className="h-8 w-auto" />
           {userRole === 'admin' && (
             <div className="mt-2 text-[8px] font-extrabold uppercase tracking-widest text-[#5c8020]">
               Admin Control
             </div>
           )}
        </div>

        {userRole === 'student' && (
          <div className="mb-8 rounded-xl bg-[#e4e9d3] p-4 border border-[#d6e0b7]">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-lime-500 text-white shadow-sm">
                <BookOpen className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-[11px] font-extrabold uppercase tracking-widest text-[#446611]">Digital Scholar</h4>
                <p className="text-[10px] font-medium leading-tight text-[#698a28]">Level 4 Analyst</p>
              </div>
            </div>
          </div>
        )}

        <nav className="flex flex-col gap-1.5">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`flex items-center gap-3 rounded-lg px-4 py-3 text-sm transition-colors ${
                link.active
                  ? 'bg-white shadow-sm text-[#446611] font-bold border border-[#e2e8d5]'
                  : 'text-gray-600 font-semibold hover:bg-[#e4ebce] hover:text-[#446611]'
              }`}
            >
              <link.icon className={`h-5 w-5 ${link.active ? 'text-[#82c600]' : 'text-gray-400'}`} />
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="flex flex-col gap-2 pt-8">
        {bottomLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className={`flex items-center gap-3 rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors ${link.bg || 'hover:bg-gray-100'} ${link.text || 'text-gray-600'}`}
          >
            <link.icon className="h-5 w-5 opacity-80" />
            {link.label}
          </a>
        ))}
      </div>
    </aside>
  )
}
