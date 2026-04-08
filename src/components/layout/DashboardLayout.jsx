import { useState, useEffect } from 'react'
import { DashboardSidebar, studentSidebarLinks, studentBottomLinks, adminSidebarLinks, adminBottomLinks } from './DashboardSidebar'
import { DashboardTopbar } from './DashboardTopbar'

export function DashboardLayout({ children, userRole = 'student', links: customLinks, bottomLinks: customBottomLinks, ...props }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const defaultLinks = userRole === 'admin' ? adminSidebarLinks : studentSidebarLinks
  const defaultBottomLinks = userRole === 'admin' ? adminBottomLinks : studentBottomLinks

  const links = customLinks || defaultLinks
  const bottomLinks = customBottomLinks || defaultBottomLinks

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)
  const closeSidebar = () => setIsSidebarOpen(false)

  // Close sidebar when clicking a link (optional but recommended for mobile)
  useEffect(() => {
    const handleHashChange = () => setIsSidebarOpen(false)
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  return (
    <div className="flex h-screen overflow-hidden bg-[#f6f9f3] font-sans text-gray-800">
      {/* Sidebar Component */}
      <DashboardSidebar 
        links={links} 
        bottomLinks={bottomLinks} 
        userRole={userRole} 
        isOpen={isSidebarOpen} 
        onClose={closeSidebar} 
      />

      {/* Backdrop for all screen sizes */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity"
          onClick={closeSidebar}
        />
      )}

      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <DashboardTopbar 
          userRole={userRole} 
          onMenuClick={toggleSidebar}
          isSidebarOpen={isSidebarOpen}
          className="sticky top-0 z-20"
          {...props}
        />

        <div className="flex-1 overflow-y-auto overflow-x-hidden p-4 sm:p-6 lg:p-8">
          <div className="mx-auto w-full max-w-6xl">
            {children}
          </div>
        </div>
      </main>
    </div>
  )
}
