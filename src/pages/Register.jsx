import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BrandLogo } from '../components/common/BrandLogo'
import registerBGImg from '../assets/registerBGimg.png'
import { Button } from '../components/ui/Button'
import { Input } from '../components/ui/Input'
import { registerUser } from '../api/auth.api'
import { toast } from 'react-toastify'


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
      <option value="Male">Male</option>
      <option value="Female">Female</option>
      <option value="Other">Other</option>
    </select>
  )
}

export function Register() {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    number: '',
    gender: '',
    password: '',
  })

  function handleClose() {
    navigate('/')
  }

  function updateField(key) {
    return (e) => setForm((f) => ({ ...f, [key]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const res = await registerUser(form);
      toast.success(res.message || "Registration successful!");
      navigate('/login')
    } catch (error) {
      toast.error(error.message || "Registration failed. Please try again.");
    }
  }

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={handleClose}
      />

      {/* Modal Container */}
      <div className="relative z-10 flex w-full max-w-5xl overflow-hidden rounded-2xl bg-white shadow-2xl transition-all animate-in fade-in zoom-in duration-300 my-8">
        <div className="flex w-full flex-col md:flex-row">
          
          {/* Left panel - Branding */}
          <aside className="relative hidden w-[40%] md:block">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${registerBGImg})` }}
              aria-hidden
            />
            <div className="absolute inset-0 bg-gradient-to-b from-lime-900/70 via-lime-900/55 to-lime-900/70 md:bg-gradient-to-r" />

            <div className="relative z-10 flex h-full flex-col justify-start gap-10 p-10">
              <div className="flex items-center justify-between">
                <div className="w-fit rounded bg-white/90 p-2">
                  <BrandLogo className="h-8" />
                </div>
                <button 
                  onClick={handleClose}
                  className="rounded-full bg-white/10 px-4 py-2 text-xs font-bold text-white backdrop-blur hover:bg-white/20 transition-all border border-white/10"
                >
                  Back
                </button>
              </div>

              <div>
                <h2 className="text-3xl font-bold leading-tight text-white text-left">
                  The Future of<br />
                  <span className="text-amber-300">Intellectual</span><br />
                  Excellence.
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-white/80 text-left">
                  Join a global network of scholars shaping the next generation.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl bg-white/10 p-4 backdrop-blur border border-white/10">
                  <div className="text-amber-200 text-xl">🏅</div>
                  <div className="mt-2 text-2xl font-bold text-white text-left">12k+</div>
                  <div className="text-[10px] font-semibold uppercase tracking-widest text-white/80 leading-tight text-left">
                    Active Scholars
                  </div>
                </div>
                <div className="rounded-xl bg-white/10 p-4 backdrop-blur border border-white/10">
                  <div className="text-amber-200 text-xl">⭐</div>
                  <div className="mt-2 text-2xl font-bold text-white text-left">98%</div>
                  <div className="text-[10px] font-semibold uppercase tracking-widest text-white/80 leading-tight text-left">
                    Placement Rate
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Right panel - Form */}
          <main className="flex-1 flex flex-col justify-center px-6 py-10 md:px-12">
            <div className="text-right pb-4 md:hidden">
              <button onClick={handleClose} className="p-2 text-gray-400 hover:text-gray-600">✕</button>
            </div>
            
            <div className="w-full max-w-md mx-auto">
              <h1 className="text-3xl font-bold text-gray-900 text-left">Create Account</h1>
              <p className="mt-2 text-sm text-gray-600 text-left">Enter your details to join the community.</p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                <div className="text-left">
                  <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-gray-700">Full Name</label>
                  <Input
                    value={form.name}
                    onChange={updateField('name')}
                    placeholder="Enter your full name"
                    className="w-full bg-slate-50 border-transparent focus:border-lime-500 focus:bg-white"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="text-left">
                    <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-gray-700">Email</label>
                    <Input
                      type="email"
                      value={form.email}
                      onChange={updateField('email')}
                      placeholder="email@example.com"
                      className="w-full bg-slate-50 border-transparent focus:border-lime-500 focus:bg-white"
                      required
                    />
                  </div>
                  <div className="text-left">
                    <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-gray-700">Phone</label>
                    <Input
                      type="tel"
                      value={form.number}
                      onChange={updateField('number')}
                      placeholder="999-999-9999"
                      className="w-full bg-slate-50 border-transparent focus:border-lime-500 focus:bg-white"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="text-left">
                    <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-gray-700">Gender</label>
                    <GenderSelect
                      value={form.gender}
                      onChange={(e) => setForm((f) => ({ ...f, gender: e.target.value }))}
                    />
                  </div>
                  <div className="text-left">
                    <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-gray-700">Password</label>
                    <div className="relative">
                      <Input
                        type={showPassword ? "text" : "password"}
                        value={form.password}
                        onChange={updateField('password')}
                        placeholder="••••••••"
                        className="w-full bg-slate-50 border-transparent pr-10 focus:border-lime-500 focus:bg-white"
                        required
                      />
                      <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400">
                        {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                      </button>
                    </div>
                  </div>
                </div>

                <Button variant="amber" type="submit" className="w-full rounded-lg py-3 font-bold uppercase tracking-widest text-[13px] text-gray-900 mt-2">
                  Register Account
                </Button>

                <div className="pt-2 text-center text-sm text-gray-700">
                  Already have an account? <button type="button" onClick={() => navigate('/login')} className="font-bold text-lime-500 hover:underline">Sign In</button>
                </div>
              </form>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

