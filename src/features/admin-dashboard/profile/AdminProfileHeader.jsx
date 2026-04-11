import { Pencil, ShieldCheck } from 'lucide-react'

export function AdminProfileHeader() {
  return (
    <div className="relative mb-8 overflow-hidden rounded-2xl bg-[#f0f6e6] p-6 shadow-sm border border-[#e2e8d5]">
      {/* Abstract Background Design right side */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-96 w-96 rounded-full bg-[#e4e9d3]/40"></div>

      <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
        {/* Profile Picture Block */}
        <div className="relative">
          <div className="h-28 w-28 overflow-hidden rounded-2xl border-4 border-white shadow-sm bg-slate-900">
            <img 
              src="https://ui-avatars.com/api/?name=Priyankar+Mondal&background=111827&color=fff&size=200" 
              alt="Priyankar Mondal"
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
            <ShieldCheck className="w-3 h-3" />
            System Administrator
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-1">
            Priyankar Mondal
          </h1>
          <p className="text-sm font-medium text-gray-600">
            Lead Administrator & Developer Relations
          </p>
        </div>

        {/* Statistics Right Block */}
        <div className="flex flex-col items-center md:items-end justify-center self-stretch border-t md:border-t-0 md:border-l border-[#d6e0b7] pt-4 md:pt-0 md:pl-8 mt-4 md:mt-0 min-w-[200px]">
          <div className="text-[10px] font-extrabold uppercase tracking-widest text-gray-500 mb-1">
            Platform Status
          </div>
          <div className="text-xl font-black text-[#82C600] mb-1 uppercase tracking-tighter">
             All Systems Go
          </div>
          <div className="flex items-center gap-1.5 text-[9px] font-bold text-gray-500 uppercase tracking-widest">
            <div className="w-2 h-2 rounded-full bg-[#82C600] animate-pulse"></div>
            Uptime: 99.99%
          </div>
        </div>
      </div>
    </div>
  )
}
