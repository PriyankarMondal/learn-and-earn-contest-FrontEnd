import { Pencil, MapPin } from 'lucide-react'

export function ProfileHeader({ user }) {
  const avatarName = user?.name ? user.name.split(' ').join('+') : 'Priyankar+Mondal'
  
  return (
    <div className="relative mb-8 overflow-hidden rounded-2xl bg-[#f0f6e6] p-6 shadow-sm border border-[#e2e8d5]">
      {/* Abstract Background Design right side */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-96 w-96 rounded-full bg-[#e4e9d3]/40"></div>

      <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
        {/* Profile Picture Block */}
        <div className="relative">
          <div className="h-28 w-28 overflow-hidden rounded-2xl border-4 border-white shadow-sm bg-lime-100">
            <img 
              src={`https://ui-avatars.com/api/?name=${avatarName}&background=446611&color=fff&size=200`} 
              alt={user?.name || "User Avatar"}
              className="h-full w-full object-cover"
            />
          </div>
          <button className="absolute -bottom-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-[#82C600] text-white shadow hover:bg-[#71ac00] transition-colors">
            <Pencil className="h-3.5 w-3.5" strokeWidth={3} />
          </button>
        </div>

        {/* Name and Tags */}
        <div className="flex-1 text-center md:text-left text-left">
          <div className="inline-flex items-center gap-1.5 rounded bg-[#82C600]/10 px-2.5 py-1 text-[9px] font-black uppercase tracking-widest text-[#5c8020] mb-3">
             {user?.role || 'Student'}
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-1">
            {user?.name || "Priyankar Mondal"}
          </h1>
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm font-medium text-gray-600">
            <div className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-[#82C600]" />
              Kolkata, West Bengal
            </div>
            <div className="h-1 w-1 rounded-full bg-gray-300 hidden sm:block"></div>
            <div className="font-bold text-[#82C600]">DESUN ACADEMY</div>
          </div>
        </div>

        {/* Statistics Right Block */}
        <div className="flex flex-col items-center md:items-end justify-center self-stretch border-t md:border-t-0 md:border-l border-[#d6e0b7] pt-4 md:pt-0 md:pl-8 mt-4 md:mt-0 min-w-[200px]">
          <div className="text-[10px] font-extrabold uppercase tracking-widest text-gray-500 mb-1">
            Profile Status
          </div>
          <div className="text-xl font-black text-[#5c8020] mb-1 uppercase tracking-tighter">
            {user?.isVerified ? 'Verified Account' : 'Pending Verification'}
          </div>
          <div className="flex items-center gap-1.5 text-[9px] font-bold text-gray-500 uppercase tracking-widest">
            Member Since {new Date(user?.createdAt || Date.now()).getFullYear()}
          </div>
        </div>
      </div>
    </div>
  )
}
