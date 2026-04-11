import { User, Mail, Phone, MapPin } from 'lucide-react'

export function AdminDetails() {
  return (
    <div className="rounded-2xl border border-[#e2e8d5] bg-[#f0f6e6] p-8 shadow-sm text-left font-sans">
      <h2 className="mb-6 flex items-center gap-2 text-lg font-bold text-gray-900 justify-start">
        <User className="w-5 h-5 text-lime-500" />
        Administrator Background
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
        <div>
          <label className="mb-2 block text-[10px] font-extrabold uppercase tracking-widest text-[#5c8020]">
            Full Name
          </label>
          <div className="rounded-xl border border-transparent bg-[#e4ebce] px-4 py-3 text-sm font-semibold text-gray-900 shadow-sm focus-within:border-[#82C600] focus-within:ring-1 focus-within:ring-[#82C600]">
            <input type="text" defaultValue="Priyankar Mondal" className="w-full bg-transparent outline-none" />
          </div>
        </div>

        <div>
          <label className="mb-2 block text-[10px] font-extrabold uppercase tracking-widest text-[#5c8020]">
            Work Email
          </label>
          <div className="rounded-xl border border-transparent bg-[#e4ebce] px-4 py-3 text-sm font-semibold text-gray-900 shadow-sm focus-within:border-[#82C600] focus-within:ring-1 focus-within:ring-[#82C600]">
            <input type="email" defaultValue="p.mondal@desun.in" className="w-full bg-transparent outline-none text-left" />
          </div>
        </div>

        <div>
          <label className="mb-2 block text-[10px] font-extrabold uppercase tracking-widest text-[#5c8020]">
            Official Contact
          </label>
          <div className="rounded-xl border border-transparent bg-[#e4ebce] px-4 py-3 text-sm font-semibold text-gray-900 shadow-sm focus-within:border-[#82C600] focus-within:ring-1 focus-within:ring-[#82C600]">
            <input type="text" defaultValue="+91 98765 43210" className="w-full bg-transparent outline-none text-gray-500" />
          </div>
        </div>

        <div>
          <label className="mb-2 block text-[10px] font-extrabold uppercase tracking-widest text-[#5c8020]">
            Primary Office
          </label>
          <div className="rounded-xl border border-transparent bg-[#e4ebce] px-4 py-3 text-sm font-semibold text-gray-900 shadow-sm focus-within:border-[#82C600] focus-within:ring-1 focus-within:ring-[#82C600]">
            <input type="text" defaultValue="Kolkata Headquarters, WB" className="w-full bg-transparent outline-none" />
          </div>
        </div>
      </div>

      <div className="mt-8 flex justify-end">
        <button className="rounded-xl bg-amber-400 px-8 py-3.5 text-[11px] font-black uppercase tracking-widest text-gray-900 shadow-sm transition-colors hover:bg-amber-500 active:scale-95">
          Update Records
        </button>
      </div>
    </div>
  )
}
