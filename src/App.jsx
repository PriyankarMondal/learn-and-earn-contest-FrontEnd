import { useEffect, useState } from 'react'
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

function App() {
  const [activeRoute, setActiveRoute] = useState(() => {
    const hash = window.location.hash
    if (hash === '#/register') return 'register'
    if (hash === '#/login') return 'login'
    if (hash === '#/admin/contests') return 'adminContests'
    if (hash === '#/admin/submissions') return 'adminSubmissions'
    if (hash === '#/admin/users') return 'adminUsers'
    if (hash === '#/admin/leaderboard') return 'adminLeaderboard'
    if (hash.startsWith('#/admin')) return 'admin'
    if (hash === '#/dashboard') return 'dashboard'
    if (hash === '#/my-contests') return 'myContests'
    if (hash === '#/submissions') return 'submissions'
    if (hash === '#/profile') return 'profile'
    return 'home'
  })

  useEffect(() => {
    function onHashChange() {
      const hash = window.location.hash
      if (hash === '#/register') setActiveRoute('register')
      else if (hash === '#/login') setActiveRoute('login')
      else if (hash === '#/admin/contests') setActiveRoute('adminContests')
      else if (hash === '#/admin/submissions') setActiveRoute('adminSubmissions')
      else if (hash === '#/admin/users') setActiveRoute('adminUsers')
      else if (hash === '#/admin/leaderboard') setActiveRoute('adminLeaderboard')
      else if (hash.startsWith('#/admin')) setActiveRoute('admin')
      else if (hash === '#/dashboard') setActiveRoute('dashboard')
      else if (hash === '#/my-contests') setActiveRoute('myContests')
      else if (hash === '#/submissions') setActiveRoute('submissions')
      else if (hash === '#/profile') setActiveRoute('profile')
      else setActiveRoute('home')
    }

    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  if (activeRoute === 'register') {
    return <Register />
  }

  if (activeRoute === 'login') {
    return <Login />
  }

  if (activeRoute === 'adminLeaderboard') {
    return <AdminLeaderboard />
  }

  if (activeRoute === 'adminUsers') {
    return <AdminUsers />
  }

  if (activeRoute === 'adminSubmissions') {
    return <AdminSubmissions />
  }

  if (activeRoute === 'adminContests') {
    return <AdminContests />
  }

  if (activeRoute === 'admin') {
    return <AdminDashboard />
  }

  if (activeRoute === 'dashboard') {
    return <StudentDashboard />
  }

  if (activeRoute === 'myContests') {
    return <MyContests />
  }

  if (activeRoute === 'submissions') {
    return <Submissions />
  }

  if (activeRoute === 'profile') {
    return <Profile />
  }

  return (
    <div className="min-h-screen min-w-0 bg-white font-sans text-gray-800 antialiased">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <FeaturedContests />
        <Testimonials />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  )
}

export default App
