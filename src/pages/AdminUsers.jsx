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
      userName="Priyankar Mondal"
      userSubtext="SYSTEM ADMINISTRATOR"
      userAvatarUrl={`https://ui-avatars.com/api/?name=Priyankar+Mondal&background=446611&color=fff`}
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

