import { HashRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import { Navbar } from './components/layout/Navbar'
import { ProtectedRoute } from './components/ProtectedRoute'
import { Hero } from './features/home/Hero'
import { HowItWorks } from './features/home/HowItWorks'
import { FeaturedContests } from './features/home/FeaturedContests'
import { MarqueeBanner } from './features/home/MarqueeBanner'
import { Testimonials } from './features/home/Testimonials'
import { CtaBanner } from './features/home/CtaBanner'
import { Footer } from './components/layout/Footer'
import { Register } from './pages/Register'
import { Login } from './pages/Login'
import { AdminDashboard } from './pages/AdminDashboard'
import { AdminContests } from './features/admin-dashboard/contests/AdminContests'
import { AdminSubmissions } from './pages/AdminSubmissions'
import { AdminUsers } from './pages/AdminUsers'
import { AdminLeaderboard } from './pages/AdminLeaderboard'
import { StudentDashboard } from './pages/StudentDashboard'
import { MyContests } from './pages/MyContests'
import { Submissions } from './pages/Submissions'
import { Profile } from './pages/Profile'
import { AllContests } from './pages/AllContests'
import { AdminProfile } from './pages/AdminProfile'
import { Logout } from './pages/Logout'
import { Leaderboard } from './pages/Leaderboard'
import { Rewards } from './pages/Rewards'

// --- Layouts ---

function HomeLayout() {
  const location = useLocation()

  // Logic to show modals over home page
  const isLoginModal = location.pathname === '/login'
  const isRegisterModal = location.pathname === '/register'

  return (
    <div className="flex h-screen flex-col overflow-hidden bg-white font-sans text-gray-800 antialiased">
      <Navbar />
      <main className="flex-1 overflow-y-auto">
        <Hero />
        <HowItWorks />
        <MarqueeBanner />
        <FeaturedContests />
        <Testimonials />
        <CtaBanner />
        <Footer />
      </main>

      {/* Auth Modals rendered as overlays */}
      {isLoginModal && <Login />}
      {isRegisterModal && <Register />}
    </div>
  )
}

// --- Main App ---

import { SearchProvider } from './context/SearchContext'
import { ParticipationRefreshProvider } from './context/ParticipationRefreshContext'

function App() {
  return (
    <HashRouter>
      <ParticipationRefreshProvider>
        <SearchProvider>
        <Routes>
          {/* Landing Page & Auth Modals */}
          <Route path="/" element={<HomeLayout />} />
          <Route path="/login" element={<HomeLayout />} />
          <Route path="/register" element={<HomeLayout />} />
          <Route path="/logout" element={<Logout />} />

          {/* Public Pages - Accessible to all */}
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/rewards" element={<Rewards />} />

          {/* Admin Dashboard Routes - Protected */}
          <Route 
            path="/admin" 
            element={<ProtectedRoute requiredRole="Admin"><AdminDashboard /></ProtectedRoute>} 
          />
          <Route 
            path="/admin/contests" 
            element={<ProtectedRoute requiredRole="Admin"><AdminContests /></ProtectedRoute>} 
          />
          <Route 
            path="/admin/submissions" 
            element={<ProtectedRoute requiredRole="Admin"><AdminSubmissions /></ProtectedRoute>} 
          />
          <Route 
            path="/admin/users" 
            element={<ProtectedRoute requiredRole="Admin"><AdminUsers /></ProtectedRoute>} 
          />
          <Route 
            path="/admin/leaderboard" 
            element={<ProtectedRoute requiredRole="Admin"><AdminLeaderboard /></ProtectedRoute>} 
          />
          <Route 
            path="/admin/profile" 
            element={<ProtectedRoute requiredRole="Admin"><AdminProfile /></ProtectedRoute>} 
          />

          {/* Student Dashboard Routes - Protected */}
          <Route 
            path="/dashboard" 
            element={<ProtectedRoute requiredRole="Student"><StudentDashboard /></ProtectedRoute>} 
          />
          <Route 
            path="/all-contests" 
            element={<ProtectedRoute requiredRole="Student"><AllContests /></ProtectedRoute>} 
          />
          <Route 
            path="/my-contests" 
            element={<ProtectedRoute requiredRole="Student"><MyContests /></ProtectedRoute>} 
          />
          <Route 
            path="/submissions" 
            element={<ProtectedRoute requiredRole="Student"><Submissions /></ProtectedRoute>} 
          />
          <Route 
            path="/profile" 
            element={<ProtectedRoute requiredRole="Student"><Profile /></ProtectedRoute>} 
          />
        </Routes>
      </SearchProvider>
      </ParticipationRefreshProvider>
    </HashRouter>
  )
}

export default App
