import { DashboardLayout } from '../components/layout/DashboardLayout'
import { AdminProfileHeader } from '../features/admin-dashboard/profile/AdminProfileHeader'
import { AdminDetails } from '../features/admin-dashboard/profile/AdminDetails'
import { AdminAccountSettings } from '../features/admin-dashboard/profile/AdminAccountSettings'
import { Layout, Users, Activity } from 'lucide-react'

export function AdminProfile() {
  return (
    <DashboardLayout 
      userRole="admin"
      userName="Priyankar Mondal"
      userSubtext="SYSTEM ADMINISTRATOR"
    >
      <div className="flex flex-col xl:flex-row gap-8">
        {/* Main Content Column */}
        <div className="flex-1 min-w-0">
          <AdminProfileHeader />
          <AdminDetails />
          <AdminAccountSettings />
        </div>

        {/* Sidebar Column - Platform Overview */}
        <div className="w-full xl:w-[320px] shrink-0 text-left">
          <div className="rounded-2xl border border-[#e2e8d5] bg-white p-6 shadow-sm mb-6">
            <h3 className="flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-widest text-gray-500 mb-6">
              <Activity className="w-4 h-4 text-[#82C600]" />
              Platform Overview
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-lime-50 text-lime-600">
                    <Users className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-gray-600">Total Users</span>
                </div>
                <span className="text-sm font-black text-gray-900">12,482</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-amber-50 text-amber-600">
                    <Layout className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-gray-600">Active Contests</span>
                </div>
                <span className="text-sm font-black text-gray-900">42</span>
              </div>
            </div>
            
            <button className="w-full mt-8 py-3 rounded-xl border-2 border-slate-50 text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-gray-900 hover:border-gray-100 transition-all">
              System Logs
            </button>
          </div>

          <div className="rounded-2xl border border-[#e2e8d5] bg-gradient-to-br from-slate-900 to-slate-800 p-6 shadow-lg text-white">
            <h4 className="text-sm font-bold mb-2">Admin Notice</h4>
            <p className="text-[11px] leading-relaxed text-slate-300 font-medium">
              You are accessing the core administrative terminal. All actions are logged for security and forensic purposes.
            </p>
            <div className="mt-6 flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-lime-500"></div>
              <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">Session Secure</span>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
