import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BrandLogo } from '../components/common/BrandLogo'
import registerBGImg from '../assets/registerBGimg.png'
import { Button } from '../components/ui/Button'
import { Input } from '../components/ui/Input'
import { loginUser } from '../api/auth.api'
import { toast } from 'react-toastify'


const EyeIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" /><circle cx="12" cy="12" r="3" /></svg>
)

const EyeOffIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49" /><path d="M14.084 14.158a3 3 0 0 1-4.242-4.242" /><path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143" /><path d="m2 2 20 20" /></svg>
)

const MailIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
)

const CapIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2.81-1.53V17h2V8.45L12 3z" /></svg>
)

const RibbonIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 15l-3.09 1.62.59-3.45L7 10.74l3.46-.5L12 7l1.54 3.24 3.46.5-2.5 2.43.59 3.45z" /><path d="M12 15v8l-4-2-4 2v-8" /></svg>
)

export function Login() {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [form, setForm] = useState({
    email: '',
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
    setIsLoading(true);

    try {
      const res = await loginUser(form);
      toast.success(res.message);
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userRole", res.user.role === "Admin" ? "admin" : "student");
      localStorage.setItem("userId", res.user.id);
      
      if (res.user.role === "Admin") {
        navigate('/admin')
      } else {
        navigate('/dashboard')
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={handleClose}
      />

      {/* Modal Container */}
      <div className="relative z-10 flex w-full max-w-4xl overflow-hidden rounded-2xl bg-white shadow-2xl transition-all animate-in fade-in zoom-in duration-300">
        <div className="flex w-full flex-col md:flex-row">
          
          {/* Left panel - Branding */}
          <aside className="relative hidden w-1/2 md:block">
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
                  Back to site
                </button>
              </div>

              <div>
                <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl text-left">
                  The Future of<br />
                  <span className="text-lime-300">Intellectual</span><br />
                  Excellence.
                </h2>
                <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/80 text-left">
                  Join a global network of scholars shaping the next generation through data-driven insight.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl bg-white/10 p-5 backdrop-blur border border-white/10">
                  <CapIcon className="text-lime-400" />
                  <div className="mt-4 text-2xl font-bold text-white">12k+</div>
                  <div className="mt-1 text-[10px] font-semibold uppercase tracking-widest text-white/80">Active Scholars</div>
                </div>
                <div className="rounded-xl bg-white/10 p-5 backdrop-blur border border-white/10">
                  <RibbonIcon className="text-lime-400" />
                  <div className="mt-4 text-2xl font-bold text-white">98%</div>
                  <div className="mt-1 text-[10px] font-semibold uppercase tracking-widest text-white/80">Placement Rate</div>
                </div>
              </div>
            </div>
          </aside>

          {/* Right panel - Form */}
          <main className="flex flex-1 flex-col justify-center px-8 py-10 md:px-12">
            <div className="text-right pb-4 md:hidden">
              <button onClick={handleClose} className="p-2 text-gray-400 hover:text-gray-600">✕</button>
            </div>
            
            <div className="w-full max-w-sm mx-auto">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 text-left">Welcome Back</h1>
              <p className="mt-2 text-sm text-gray-500 text-left">Please enter your credentials to access your dashboard.</p>

              <form onSubmit={handleSubmit} className="mt-10 space-y-5">
                <div className="text-left">
                  <label className="mb-2 block text-[11px] font-bold uppercase tracking-wider text-gray-700">Email Address</label>
                  <div className="relative">
                    <Input
                      type="email"
                      value={form.email}
                      onChange={updateField('email')}
                      placeholder="scholar@vanguard.edu"
                      disabled={isLoading}
                      className="w-full bg-slate-50 border-transparent pr-10 focus:border-lime-500 focus:bg-white"
                      required
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <MailIcon className="text-gray-300" />
                    </div>
                  </div>
                </div>

                <div className="text-left">
                  <div className="flex items-center justify-between mb-2">
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-700">Password</label>
                    <button type="button" className="text-[11px] font-bold uppercase tracking-wider text-lime-500 hover:text-lime-600 transition-colors">Forgot?</button>
                  </div>
                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      value={form.password}
                      onChange={updateField('password')}
                      placeholder="••••••••••••"
                      disabled={isLoading}
                      className="w-full bg-slate-50 border-transparent pr-10 focus:border-lime-500 focus:bg-white"
                      required
                    />
                    <button type="button" onClick={() => setShowPassword(!showPassword)} disabled={isLoading} className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400">
                      {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                    </button>
                  </div>
                </div>

                <Button 
                  variant="amber" 
                  type="submit" 
                  disabled={isLoading}
                  className="w-full rounded-lg py-3.5 font-bold uppercase tracking-widest text-[13px] disabled:opacity-50"
                >
                  {isLoading ? 'Authenticating...' : 'Login to Dashboard'}
                </Button>

                <div className="pt-6 text-center text-[13px] text-gray-600">
                  Not a member? <button type="button" onClick={() => navigate('/register')} className="font-bold text-lime-500 hover:underline">Register here</button>
                </div>
              </form>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
