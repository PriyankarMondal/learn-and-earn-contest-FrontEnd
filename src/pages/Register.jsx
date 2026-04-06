import { useState } from 'react'
import { BrandLogo } from '../components/common/BrandLogo'
import registerBGImg from '../assets/registerBGimg.png'
import { Button } from '../components/ui/Button'
import { Input } from '../components/ui/Input'

const EyeIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" /><circle cx="12" cy="12" r="3" /></svg>
)

const EyeOffIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49" /><path d="M14.084 14.158a3 3 0 0 1-4.242-4.242" /><path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143" /><path d="m2 2 20 20" /></svg>
)

function GenderSelect({ value, onChange }) {
  return (
    <select
      value={value}
      onChange={onChange}
      className="min-w-0 w-full rounded-lg border-transparent bg-slate-50 px-4 py-3 text-sm text-gray-800 placeholder-gray-500 outline-none transition-colors focus:border-lime-500 focus:bg-white focus:ring-4 focus:ring-lime-500/10"
      aria-label="Select gender"
    >
      <option value="">Select gender</option>
      <option value="male">Male</option>
      <option value="female">Female</option>
      <option value="other">Other</option>
    </select>
  )
}

export function Register() {
  const [showPassword, setShowPassword] = useState(false)
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    gender: '',
    password: '',
  })

  function updateField(key) {
    return (e) => setForm((f) => ({ ...f, [key]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (form.email.startsWith('admin')) {
      window.location.hash = '#/admin'
    } else {
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
                <span className="text-amber-300">Intellectual</span>
                <br />
                Excellence.
              </h2>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/80 sm:text-base">
                Join a global network of scholars and administrators shaping the next generation
                of academic leadership.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-xl bg-white/10 p-4 backdrop-blur">
                <div className="text-amber-200">🏅</div>
                <div className="mt-2 text-2xl font-bold text-white">12k+</div>
                <div className="text-xs font-semibold uppercase tracking-wide text-white/80">
                  Active Scholars
                </div>
              </div>
              <div className="rounded-xl bg-white/10 p-4 backdrop-blur">
                <div className="text-amber-200">⭐</div>
                <div className="mt-2 text-2xl font-bold text-white">98%</div>
                <div className="text-xs font-semibold uppercase tracking-wide text-white/80">
                  Placement Rate
                </div>
              </div>
            </div>

            <div className="text-xs text-white/70">© 2024 Digital Scholar Academy.</div>
          </div>
        </aside>

        {/* Right form panel */}
        <main className="flex flex-1 items-center justify-center px-4 py-10 md:px-8">
          <div className="w-full max-w-md">
            <h1 className="text-3xl font-bold text-gray-900">Create an Account</h1>
            <p className="mt-2 text-gray-600">
              Enter your professional details to get started.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-4">
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-800">
                  Full Name
                </label>
                <Input
                  value={form.fullName}
                  onChange={updateField('fullName')}
                  placeholder="Enter your full name"
                  className="w-full bg-slate-50 border-transparent focus:border-lime-500 focus:bg-white"
                  required
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-800">
                  Email
                </label>
                <Input
                  type="email"
                  value={form.email}
                  onChange={updateField('email')}
                  placeholder="email@example.com"
                  className="w-full bg-slate-50 border-transparent focus:border-lime-500 focus:bg-white"
                  required
                />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-800">
                    Phone Number
                  </label>
                  <Input
                    type="tel"
                    value={form.phone}
                    onChange={updateField('phone')}
                    placeholder="+91 00000-00000"
                    className="w-full bg-slate-50 border-transparent focus:border-lime-500 focus:bg-white"
                    required
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-800">
                    Gender
                  </label>
                  <GenderSelect
                    value={form.gender}
                    onChange={(e) => setForm((f) => ({ ...f, gender: e.target.value }))}
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-800">
                  Password
                </label>
                <div className="relative">
                  <Input
                    type={showPassword ? "text" : "password"}
                    value={form.password}
                    onChange={updateField('password')}
                    placeholder="••••••••"
                    className="w-full bg-slate-50 border-transparent pr-10 focus:border-lime-500 focus:bg-white"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600 focus:outline-none"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                  </button>
                </div>
              </div>

              <Button
                variant="amber"
                type="submit"
                className="w-full rounded-xl py-3 font-bold uppercase tracking-wide text-gray-900"
              >
                Register Account
              </Button>

              <div className="pt-2 text-center text-sm text-gray-700">
                Already have an account?{' '}
                <a href="#/login" className="font-semibold text-lime-600 hover:underline">
                  Sign In
                </a>
              </div>

              <p className="text-xs leading-relaxed text-gray-500">
                By registering, you agree to our Terms of Service and Privacy Policy.
              </p>
            </form>
          </div>
        </main>
      </div>
    </div>
  )
}

