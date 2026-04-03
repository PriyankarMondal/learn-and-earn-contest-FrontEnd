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
import { StudentDashboard } from './pages/StudentDashboard' // Force re-eval

function App() {
  const [activeRoute, setActiveRoute] = useState(() => {
    const hash = window.location.hash
    if (hash === '#/register') return 'register'
    if (hash === '#/login') return 'login'
    if (hash === '#/admin') return 'admin'
    if (hash === '#/dashboard') return 'dashboard'
    return 'home'
  })

  useEffect(() => {
    function onHashChange() {
      const hash = window.location.hash
      if (hash === '#/register') setActiveRoute('register')
      else if (hash === '#/login') setActiveRoute('login')
      else if (hash === '#/admin') setActiveRoute('admin')
      else if (hash === '#/dashboard') setActiveRoute('dashboard')
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

  if (activeRoute === 'admin') {
    return <AdminDashboard />
  }

  if (activeRoute === 'dashboard') {
    return <StudentDashboard />
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
