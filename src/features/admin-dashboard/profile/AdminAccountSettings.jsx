import { Shield, Key, Bell, Lock } from 'lucide-react'

export function AdminAccountSettings() {
  return (
    <div className="mt-8 rounded-2xl border border-[#e2e8d5] bg-white p-8 shadow-sm text-left">
      <h2 className="mb-6 flex items-center gap-2 text-lg font-bold text-gray-900">
        <Shield className="w-5 h-5 text-amber-500" />
        Security & Access
      </h2>

      <div className="space-y-6">
        <div className="flex items-center justify-between group cursor-pointer border-b border-gray-50 pb-4">
          <div className="flex items-center gap-4">
            <div className="p-2 rounded-lg bg-slate-100 text-slate-500 group-hover:bg-lime-100 group-hover:text-lime-600 transition-colors">
              <Key className="w-4 h-4" />
            </div>
            <div>
              <div className="text-sm font-bold text-gray-900 group-hover:text-[#82C600]">Update Admin Password</div>
              <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-0.5">Recommended every 90 days</div>
            </div>
          </div>
          <button className="text-gray-400 hover:text-gray-900">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>

        <div className="flex items-center justify-between group cursor-pointer border-b border-gray-50 pb-4">
          <div className="flex items-center gap-4">
            <div className="p-2 rounded-lg bg-slate-100 text-slate-500 group-hover:bg-lime-100 group-hover:text-lime-600 transition-colors">
              <Lock className="w-4 h-4" />
            </div>
            <div>
              <div className="text-sm font-bold text-gray-900 group-hover:text-[#82C600]">Two-Factor Authentication</div>
              <div className="text-[10px] font-bold text-lime-500 uppercase tracking-widest mt-0.5">Currently Enabled</div>
            </div>
          </div>
          <button className="text-[9px] font-bold text-gray-400 uppercase tracking-widest hover:text-red-500">Configure</button>
        </div>

        <div className="flex items-center justify-between group cursor-pointer">
          <div className="flex items-center gap-4">
            <div className="p-2 rounded-lg bg-slate-100 text-slate-500 group-hover:bg-lime-100 group-hover:text-lime-600 transition-colors">
              <Bell className="w-4 h-4" />
            </div>
            <div>
              <div className="text-sm font-bold text-gray-900 group-hover:text-[#82C600]">System Notifications</div>
              <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-0.5">High Priority Alerts Only</div>
            </div>
          </div>
           <div className="relative inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full bg-lime-500 transition-colors">
             <span className="translate-x-4 inline-block h-3.5 w-3.5 transform rounded-full bg-white transition-transform" />
           </div>
        </div>
      </div>
    </div>
  )
}
