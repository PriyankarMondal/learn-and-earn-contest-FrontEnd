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

  // Close sidebar on window resize if it's open
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsSidebarOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Close sidebar when clicking a link (optional but recommended for mobile)
  useEffect(() => {
    const handleHashChange = () => setIsSidebarOpen(false)
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  return (
    <div className="flex min-h-screen bg-[#f6f9f3] font-sans text-gray-800">
      {/* Sidebar Component */}
      <DashboardSidebar 
        links={links} 
        bottomLinks={bottomLinks} 
        userRole={userRole} 
        isOpen={isSidebarOpen} 
        onClose={closeSidebar} 
      />

      {/* Backdrop for mobile */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity md:hidden"
          onClick={closeSidebar}
        />
      )}

      <main className="flex-1 flex flex-col min-w-0">
        <DashboardTopbar 
          userRole={userRole} 
          onMenuClick={toggleSidebar}
          {...props}
        />

        <div className="flex-1 overflow-auto p-4 sm:p-6 lg:p-8">
          <div className="mx-auto w-full max-w-[1600px]">
            {children}
          </div>
        </div>
      </main>
    </div>
  )
}
