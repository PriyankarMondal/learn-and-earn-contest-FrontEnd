export function PersonalDetails() {
  return (
    <div className="rounded-2xl border border-[#e2e8d5] bg-[#f0f6e6] p-8 shadow-sm">
      <h2 className="mb-6 flex items-center gap-2 text-lg font-bold text-gray-900">
        <svg className="w-5 h-5 text-lime-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
        </svg>
        Personal Details
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
        <div>
          <label className="mb-2 block text-[10px] font-extrabold uppercase tracking-widest text-[#5c8020]">
            Full Name
          </label>
          <div className="rounded-xl border border-transparent bg-[#e4ebce] px-4 py-3 text-sm font-semibold text-gray-900 shadow-sm focus-within:border-[#82C600] focus-within:ring-1 focus-within:ring-[#82C600]">
            <input type="text" defaultValue="Alex Sterling" className="w-full bg-transparent outline-none" />
          </div>
        </div>

        <div>
          <label className="mb-2 block text-[10px] font-extrabold uppercase tracking-widest text-[#5c8020]">
            Institutional Email
          </label>
          <div className="rounded-xl border border-transparent bg-[#e4ebce] px-4 py-3 text-sm font-semibold text-gray-900 shadow-sm focus-within:border-[#82C600] focus-within:ring-1 focus-within:ring-[#82C600]">
            <input type="email" defaultValue="a.sterling@academy.edu" className="w-full bg-transparent outline-none" />
          </div>
        </div>

        <div>
          <label className="mb-2 block text-[10px] font-extrabold uppercase tracking-widest text-[#5c8020]">
            Phone Number
          </label>
          <div className="rounded-xl border border-transparent bg-[#e4ebce] px-4 py-3 text-sm font-semibold text-gray-900 shadow-sm focus-within:border-[#82C600] focus-within:ring-1 focus-within:ring-[#82C600]">
            <input type="text" defaultValue="+1 (555) 000-0000" className="w-full bg-transparent outline-none text-gray-500" />
          </div>
        </div>

        <div>
          <label className="mb-2 block text-[10px] font-extrabold uppercase tracking-widest text-[#5c8020]">
            Gender
          </label>
          <div className="relative rounded-xl border border-transparent bg-[#e4ebce] shadow-sm focus-within:border-[#82C600] focus-within:ring-1 focus-within:ring-[#82C600]">
            <select className="w-full appearance-none bg-transparent px-4 py-3 text-sm font-semibold text-gray-900 outline-none">
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 flex justify-end">
        <button className="rounded-xl bg-amber-400 px-8 py-3.5 text-[11px] font-black uppercase tracking-widest text-gray-900 shadow-sm transition-colors hover:bg-amber-500">
          Save Changes
        </button>
      </div>
    </div>
  )
}

