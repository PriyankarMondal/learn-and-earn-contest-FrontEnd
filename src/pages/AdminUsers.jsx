import { DashboardSidebar, adminSidebarLinks, adminBottomLinks } from '../components/layout/DashboardSidebar'
import { DashboardTopbar } from '../components/layout/DashboardTopbar'
import { UsersHeader } from '../features/admin-dashboard/users/UsersHeader'
import { UsersStats } from '../features/admin-dashboard/users/UsersStats'
import { UsersFilters } from '../features/admin-dashboard/users/UsersFilters'
import { UsersTable } from '../features/admin-dashboard/users/UsersTable'

export function AdminUsers() {
  return (
    <div className="flex min-h-screen bg-[#f6f9f3] font-sans text-gray-800">
      <DashboardSidebar links={adminSidebarLinks} bottomLinks={adminBottomLinks} userRole="admin" />

      <main className="flex-1 flex flex-col min-w-0">
        <DashboardTopbar 
          userRole="admin"
          searchPlaceholder="Search academic records..."
          userName="Welcome, Admin"
          userSubtext="LEAD REGISTRAR"
          userAvatarUrl="https://img.freepik.com/free-photo/portrait-successful-mid-adult-doctor-with-crossed-arms_1262-12865.jpg"
          rightNav={
            <nav className="flex items-center gap-6 pt-1 mr-8">
               <a href="#/admin/users" className="text-[11px] font-black text-[#82c600] border-b-2 border-[#82c600] pb-2 px-1 uppercase tracking-widest">Overview</a>
               <a href="#/admin/users" className="text-[11px] font-black text-gray-400 hover:text-gray-800 border-b-2 border-transparent pb-2 px-1 transition-colors uppercase tracking-widest">Reports</a>
               <a href="#/admin/users" className="text-[11px] font-black text-gray-400 hover:text-gray-800 border-b-2 border-transparent pb-2 px-1 transition-colors uppercase tracking-widest">Support</a>
            </nav>
          } 
        />

        <div className="flex-1 overflow-auto p-4 sm:p-6 lg:p-8">
          <div className="mx-auto w-full max-w-[1600px] flex flex-col min-h-full">
            <div className="flex-1">
              <UsersHeader />
              <UsersStats />
              <UsersFilters />
              <UsersTable />
            </div>

            <footer className="mt-auto pt-12 border-t border-gray-100 flex justify-between items-center opacity-40 grayscale">
              <div className="text-[10px] font-black text-gray-900 uppercase tracking-[0.2em]">Desun Academy Admin Portal</div>
              <div className="text-[9px] font-bold text-gray-500 uppercase tracking-widest">v4.2.0-stable</div>
            </footer>
          </div>
        </div>
      </main>
    </div>
  )
}
