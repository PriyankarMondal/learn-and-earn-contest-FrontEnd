import { useState } from 'react'
import { BrandLogo } from '../components/common/BrandLogo'
import registerBGImg from '../assets/registerBGimg.png'
import { Button } from '../components/ui/Button'
import { Input } from '../components/ui/Input'

const MailIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
)

const LockIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="18" height="11" x="3" y="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
)

const CapIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2.81-1.53V17h2V8.45L12 3z" /></svg>
)

const RibbonIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 15l-3.09 1.62.59-3.45L7 10.74l3.46-.5L12 7l1.54 3.24 3.46.5-2.5 2.43.59 3.45z" /><path d="M12 15v8l-4-2-4 2v-8" /></svg>
)

export function Login() {
  const [form, setForm] = useState({
    email: '',
    password: '',
    remember: false,
  })

  function updateField(key) {
    return (e) => setForm((f) => ({ ...f, [key]: e.target.type === 'checkbox' ? e.target.checked : e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    // Handle login API Call
    if (form.email.startsWith('admin')) {
      localStorage.setItem('isLoggedIn', 'true')
      localStorage.setItem('userRole', 'admin')
      window.location.hash = '#/admin'
    } else {
      localStorage.setItem('isLoggedIn', 'true')
      localStorage.setItem('userRole', 'student')
      window.location.hash = '#/dashboard'
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="flex min-h-screen flex-col md:flex-row">
        {/* Left image panel */}
        <aside className="relative md:w-1/2">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${registerBGImg})` }}
            aria-hidden
          />
          <div className="absolute inset-0 bg-gradient-to-b from-lime-900/70 via-lime-900/55 to-lime-900/70 md:bg-gradient-to-r" />

          <div className="relative z-10 flex h-[320px] flex-col justify-between p-5 sm:p-10 md:h-auto md:p-10">
            <div>
              <div className="w-fit rounded bg-white/90 p-2">
                <BrandLogo className="h-9 sm:h-10" />
              </div>
              <h2 className="mt-10 text-3xl font-bold leading-tight text-white sm:text-4xl">
                The Future of
                <br />
                <span className="text-lime-300">Intellectual</span>
                <br />
                Excellence.
              </h2>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/80 sm:text-base">
                Join a global network of scholars and administrators shaping the next generation
                through data-driven insight and collaborative growth.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 mt-10">
              <div className="rounded-xl bg-white/10 p-5 backdrop-blur border border-white/10">
                <CapIcon className="text-lime-400" />
                <div className="mt-4 text-2xl font-bold text-white">12k+</div>
                <div className="mt-1 text-[10px] font-semibold uppercase tracking-widest text-white/80">
                  Active Scholars
                </div>
              </div>
              <div className="rounded-xl bg-white/10 p-5 backdrop-blur border border-white/10">
                <RibbonIcon className="text-lime-400" />
                <div className="mt-4 text-2xl font-bold text-white">98%</div>
                <div className="mt-1 text-[10px] font-semibold uppercase tracking-widest text-white/80">
                  Placement Rate
                </div>
              </div>
            </div>

            <div className="mt-10 text-[10px] text-white/50">© 2024 Digital Scholar Academy. All rights reserved. Built for institutional rigor.</div>
          </div>
        </aside>

        {/* Right form panel */}
        <main className="flex flex-1 items-center justify-center px-6 py-10 md:px-12">
          <div className="w-full max-w-sm">
            <h1 className="text-[32px] font-bold tracking-tight text-gray-900">Welcome Back</h1>
            <p className="mt-2 text-sm text-gray-500 leading-relaxed">
              Please enter your credentials to access the vanguard dashboard.
            </p>

            <form onSubmit={handleSubmit} className="mt-10 space-y-5">
              <div>
                <label className="mb-2 block text-[11px] font-bold uppercase tracking-wider text-gray-700">
                  Email Address
                </label>
                <div className="relative">
                  <Input
                    type="email"
                    value={form.email}
                    onChange={updateField('email')}
                    placeholder="scholar@vanguard.edu"
                    className="w-full bg-slate-50 border-transparent pr-10 focus:border-lime-500 focus:bg-white"
                    required
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <MailIcon className="text-gray-300" />
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-700">
                    Password
                  </label>
                  <a href="#/" className="text-[11px] font-bold uppercase tracking-wider text-lime-500 hover:text-lime-600">
                    Forgot Password?
                  </a>
                </div>
                <div className="relative">
                  <Input
                    type="password"
                    value={form.password}
                    onChange={updateField('password')}
                    placeholder="••••••••••••"
                    className="w-full bg-slate-50 border-transparent pr-10 focus:border-lime-500 focus:bg-white"
                    required
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <LockIcon className="text-gray-300" />
                  </div>
                </div>
              </div>

              <div className="flex items-center py-2">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  checked={form.remember}
                  onChange={updateField('remember')}
                  className="h-4 w-4 rounded border-gray-300 text-lime-600 focus:ring-lime-600"
                />
                <label htmlFor="remember-me" className="ml-3 block text-xs text-gray-600">
                  Keep me logged in for 30 days
                </label>
              </div>

              <Button
                variant="amber"
                type="submit"
                className="w-full rounded-lg py-3.5 font-bold uppercase tracking-widest text-[13px] text-gray-900 mt-2"
              >
                Login to Dashboard
              </Button>

              <div className="pt-6 text-center text-[13px] text-gray-600">
                Not a member?{' '}
                <a href="#/register" className="font-bold text-lime-500 hover:underline">
                  Register here
                </a>
              </div>
            </form>

            <div className="mt-20 flex justify-center gap-6">
              <a href="#/" className="text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-gray-600">Privacy Policy</a>
              <a href="#/" className="text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-gray-600">Terms of Service</a>
              <a href="#/" className="text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-gray-600">Support</a>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
