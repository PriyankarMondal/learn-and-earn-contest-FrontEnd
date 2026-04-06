import { Bell, Search } from 'lucide-react'

export function DashboardTopbar({ rightNav, userRole = 'student', searchPlaceholder, userName, userSubtext, userAvatarUrl }) {
  const defaultPlaceholder = userRole === 'admin' ? "Command Search..." : "Explore contests, skills, or mentors..."
  const displayTitle = userName || (userRole === 'admin' ? 'Admin Panel' : 'Alex Rivera')
  const displaySubtext = userSubtext || (userRole === 'admin' ? 'Super Admin' : 'Scholar ID: 834Q')
  const avatarName = userName ? userName.split(' ').join('+') : (userRole === 'admin' ? 'Admin' : 'Alex+Rivera')
  const displayAvatar = userAvatarUrl || `https://ui-avatars.com/api/?name=${avatarName}&background=446611&color=fff`
  
  return (
    <header className={`flex h-20 shrink-0 items-center justify-between bg-[#f6f9f3] px-8 ${userRole === 'admin' ? '' : 'border-b border-[#e2e8d5]'}`}>
      <div className="flex flex-1 items-center gap-8">
        <div className="relative w-full max-w-lg">
          <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder={searchPlaceholder || defaultPlaceholder}
            className="w-full rounded-full border border-transparent bg-[#e4e9d3] py-2.5 pl-11 pr-4 text-sm tracking-wide text-gray-800 placeholder-gray-500 outline-none transition-colors focus:border-lime-500/30 focus:bg-white focus:ring-4 focus:ring-lime-500/10"
          />
        </div>
      </div>

      <div className="flex shrink-0 items-center justify-end gap-6 ml-4">
        {userRole === 'admin' && rightNav && (
          <div className="hidden lg:block mr-2">{rightNav}</div>
        )}
        <button className="relative text-gray-500 hover:text-lime-600 transition-colors">
          <Bell className="h-5 w-5" />
          <span className="absolute right-0 top-0 h-2 w-2 rounded-full bg-red-500 ring-2 ring-[#f6f9f3]"></span>
        </button>

        <div className="flex cursor-pointer items-center gap-3 border-l border-gray-200 pl-6 group">
          <div className="text-right">
            <div className="text-sm font-bold text-gray-900 group-hover:text-[#446611]">
              {displayTitle}
            </div>
            <div className="text-[9px] font-extrabold uppercase tracking-widest text-[#5c8020] mt-0.5">
              {displaySubtext}
            </div>
          </div>
          <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-lime-300 bg-lime-100">
            <img
              src={displayAvatar}
              alt="Avatar"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  )
}
