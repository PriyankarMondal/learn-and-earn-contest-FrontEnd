import { HashRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import { Navbar } from './components/layout/Navbar'
import { Hero } from './features/home/Hero'
import { HowItWorks } from './features/home/HowItWorks'
import { FeaturedContests } from './features/home/FeaturedContests'
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

function App() {
  return (
    <HashRouter>
      <Routes>
        {/* Landing Page & Auth Modals */}
        <Route path="/" element={<HomeLayout />} />
        <Route path="/login" element={<HomeLayout />} />
        <Route path="/register" element={<HomeLayout />} />
        <Route path="/logout" element={<Logout />} />

        {/* Admin Dashboard Routes */}
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/contests" element={<AdminContests />} />
        <Route path="/admin/submissions" element={<AdminSubmissions />} />
        <Route path="/admin/users" element={<AdminUsers />} />
        <Route path="/admin/leaderboard" element={<AdminLeaderboard />} />
        <Route path="/admin/profile" element={<AdminProfile />} />

        {/* Student Dashboard Routes */}
        <Route path="/dashboard" element={<StudentDashboard />} />
        <Route path="/all-contests" element={<AllContests />} />
        <Route path="/my-contests" element={<MyContests />} />
        <Route path="/submissions" element={<Submissions />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </HashRouter>
  )
}

export default App
