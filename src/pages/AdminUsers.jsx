import { Link } from 'react-router-dom'
import { DashboardLayout } from '../components/layout/DashboardLayout'
import { UsersHeader } from '../features/admin-dashboard/users/UsersHeader'
import { UsersStats } from '../features/admin-dashboard/users/UsersStats'
import { UsersFilters } from '../features/admin-dashboard/users/UsersFilters'
import { UsersTable } from '../features/admin-dashboard/users/UsersTable'

export function AdminUsers() {
  return (
    <DashboardLayout 
      userRole="admin"
      searchPlaceholder="Search academic records..."
      userName="Welcome, Admin"
      userSubtext="LEAD REGISTRAR"
      userAvatarUrl="https://img.freepik.com/free-photo/portrait-successful-mid-adult-doctor-with-crossed-arms_1262-12865.jpg"
      rightNav={
        <nav className="flex items-center gap-6 pt-1 mr-8">
           <Link to="/admin/users" className="text-[11px] font-black text-[#82C600] border-b-2 border-[#82C600] pb-2 px-1 uppercase tracking-widest">Overview</Link>
           <Link to="/admin/users" className="text-[11px] font-black text-gray-400 hover:text-gray-800 border-b-2 border-transparent pb-2 px-1 transition-colors uppercase tracking-widest">Reports</Link>
           <Link to="/admin/users" className="text-[11px] font-black text-gray-400 hover:text-gray-800 border-b-2 border-transparent pb-2 px-1 transition-colors uppercase tracking-widest">Support</Link>
        </nav>
      } 
    >
      <div className="flex flex-col min-h-full">
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
    </DashboardLayout>
  )
}

