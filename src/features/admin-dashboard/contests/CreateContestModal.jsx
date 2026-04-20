import { useState } from 'react'
import { X, Plus, Trash2, Trophy, Users, Target, Calendar, Layers, ShieldCheck, Sparkles, Activity } from 'lucide-react'
import { Button } from '../../../components/ui/Button'
import { toast } from 'react-toastify'
import { createContest } from '../../../api/admin.api'

export function CreateContestModal({ onClose }) {
  const [formData, setFormData] = useState({
    title: '',
    category: 'ML/AI',
    startDate: '',
    contestType: 'team',
    teamSize: 1,
    prizeMoney: '',
    endDate: '',
    description: '',
    requirements: [''],
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Close modal when clicking on backdrop
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose()
  }

  const updateField = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleAddRequirement = () => {
    setFormData(prev => ({ ...prev, requirements: [...prev.requirements, ''] }))
  }

  const handleRemoveRequirement = (index) => {
    if (formData.requirements.length === 1) return
    const newReqs = formData.requirements.filter((_, i) => i !== index)
    setFormData(prev => ({ ...prev, requirements: newReqs }))
  }

  const handleUpdateRequirement = (index, value) => {
    const newReqs = [...formData.requirements]
    newReqs[index] = value
    setFormData(prev => ({ ...prev, requirements: newReqs }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Basic validation
    if (!formData.title || !formData.startDate || !formData.endDate || !formData.description || !formData.category) {
      toast.error('Please fill in symbols of the challenge (title, dates, category, and description)')
      return
    }

    if (new Date(formData.startDate) >= new Date(formData.endDate)) {
      toast.error('End date must be after start date')
      return
    }

    // Sanitize prize money
    const prizeValue = formData.prizeMoney?.toString().replace(/[^0-9]/g, '') || '0'

    setIsSubmitting(true)
    try {
      const payload = {
        ...formData,
        prizeMoney: Number(prizeValue),
        requirements: formData.requirements
          .filter(r => r.trim() !== '')
          .map(r => `• ${r}`)
          .join('\n')
      }

      await createContest(payload)
      
      toast.success('Contest published successfully!')
      onClose()
      window.location.reload() 
    } catch (error) {
      console.error('Failed to create contest:', error)
      toast.error(error.message || 'Failed to establish challenge')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-hidden text-left bg-black/40 backdrop-blur-[2px]">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 transition-opacity duration-500"
        onClick={handleBackdropClick}
      />

      {/* Modal Content */}
      <div className="relative z-10 w-full max-w-3xl bg-[#fcfdfe] rounded-[2.5rem] shadow-[0_32px_80px_rgba(0,0,0,0.12)] overflow-hidden flex flex-col max-h-[92vh] border border-white">
        
        {/* ✨ PREMIUM HEADER ✨ */}
        <header className="px-10 py-8 relative overflow-hidden bg-gradient-to-br from-[#82C600] to-[#5c8a00] group">
          {/* Animated Background Orbs */}
          <div className="absolute top-[-20%] right-[-10%] w-64 h-64 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-all duration-700" />
          <div className="absolute bottom-[-20%] left-[-5%] w-48 h-48 bg-black/10 rounded-full blur-2xl" />
          
          <div className="relative flex items-center justify-between z-10">
            <div className="flex items-center gap-5">
              <div className="p-4 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 shadow-inner">
                <Sparkles className="w-8 h-8 text-white animate-pulse" />
              </div>
              <div className="text-left">
                <h2 className="text-2xl font-[900] text-white tracking-tight leading-none mb-1">Establish Contest</h2>
                <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-white rounded-full animate-bounce" />
                    <p className="text-[10px] uppercase tracking-[0.2em] font-black text-white/80">Premium Challenge Architect</p>
                </div>
              </div>
            </div>
            <button 
              onClick={onClose}
              className="p-3 bg-black/10 hover:bg-black/20 rounded-2xl transition-all text-white backdrop-blur-md border border-white/10 group/close"
            >
              <X className="w-6 h-6 group-hover/close:rotate-90 transition-transform duration-300" />
            </button>
          </div>
        </header>

        {/* Form Content */}
        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-10 custom-scrollbar bg-[radial-gradient(circle_at_top_right,rgba(130,198,0,0.02),transparent_40%)]">
          <div className="space-y-12">
            
            {/* 🎯 SECTION 1: GLOBAL BRANDING */}
            <section className="animate-in slide-in-from-bottom-4 duration-500">
              <div className="flex items-center gap-3 mb-8 border-l-4 border-[#82C600] pl-4">
                <Target className="w-5 h-5 text-[#82C600]" />
                <h3 className="text-[12px] font-black uppercase tracking-[0.15em] text-slate-800">Core Identity</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="md:col-span-2 group">
                  <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2.5 transition-colors group-focus-within:text-[#82C600]">Contest Designation</label>
                  <div className="relative">
                    <input 
                      type="text" 
                      value={formData.title}
                      onChange={(e) => updateField('title', e.target.value)}
                      placeholder="e.g., Global Innovation Sprint 2026"
                      className="w-full px-6 py-4 bg-white border-2 border-slate-100 rounded-2xl focus:border-[#82C600] focus:ring-4 focus:ring-[#82C600]/5 outline-none transition-all text-base font-bold text-slate-800 placeholder:text-slate-300 shadow-sm"
                    />
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-focus-within:opacity-100 transition-opacity">
                        <Activity className="w-4 h-4 text-[#82C600]" />
                    </div>
                  </div>
                </div>

                <div className="space-y-2.5">
                  <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400">Industry Vertical</label>
                  <select 
                    value={formData.category}
                    onChange={(e) => updateField('category', e.target.value)}
                    className="w-full px-6 py-4 bg-white border-2 border-slate-100 rounded-2xl focus:border-[#82C600] focus:ring-4 focus:ring-[#82C600]/5 outline-none transition-all text-sm font-black text-slate-700 shadow-sm cursor-pointer appearance-none"
                    style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'%2382C600\' stroke-width=\'3\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' d=\'M19.5 8.25l-7.5 7.5-7.5-7.5\' /%3E%3C/svg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1.5rem center', backgroundSize: '1rem' }}
                  >
                    <option>MERN Stack</option>
                    <option>UI/UX Design</option>
                    <option>Web Development</option>
                    <option>Graphics Design</option>
                    <option>ML/AI</option>
                    <option>BlockChain</option>
                    <option>Digital Marketing</option>
                    <option>Fullstack</option>
                  </select>
                </div>

                <div className="space-y-2.5">
                  <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400">Launch Timeline</label>
                  <div className="relative group/input">
                    <Calendar className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-[#82C600] pointer-events-none" />
                    <input 
                      type="date" 
                      value={formData.startDate}
                      onChange={(e) => updateField('startDate', e.target.value)}
                      className="w-full pl-14 pr-6 py-4 bg-white border-2 border-slate-100 rounded-2xl focus:border-[#82C600] focus:ring-4 focus:ring-[#82C600]/5 outline-none transition-all text-sm font-black text-slate-700 shadow-sm"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* 👥 SECTION 2: ARCHITECTURE */}
            <section className="animate-in slide-in-from-bottom-4 duration-500 delay-100">
              <div className="flex items-center gap-3 mb-8 border-l-4 border-amber-400 pl-4">
                <Users className="w-5 h-5 text-amber-500" />
                <h3 className="text-[12px] font-black uppercase tracking-[0.15em] text-slate-800">Team Structure</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
                <div className="flex flex-col gap-3">
                   <div className="flex items-center justify-between">
                     <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Participation Model</label>
                   </div>
                   <div className="relative p-1 bg-slate-100 rounded-[1.25rem] flex group">
                      <div className="flex-1 py-3.5 px-6 rounded-2xl text-[11px] font-black uppercase tracking-widest bg-white text-[#82C600] shadow-sm flex items-center justify-center gap-2 border border-slate-200/50 transition-all">
                        <Users className="w-3 h-3" />
                        Exclusive Team Submission
                      </div>
                      <div className="absolute -top-3 -right-2 bg-amber-400 text-white text-[8px] font-black px-2 py-0.5 rounded-full uppercase tracking-tighter shadow-sm animate-bounce">Mandatory</div>
                   </div>
                </div>
                
                <div className="space-y-2.5">
                  <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400">Roster Capacity</label>
                  <div className="relative flex items-center bg-white border-2 border-slate-100 rounded-2xl p-1 shadow-sm group-focus-within:border-[#82C600] transition-all">
                    <button 
                      type="button"
                      onClick={() => updateField('teamSize', Math.max(1, formData.teamSize - 1))}
                      className="p-3 hover:bg-slate-50 text-slate-400 hover:text-red-500 rounded-xl transition-all font-black text-lg select-none"
                    >
                      <Plus className="w-5 h-5 rotate-45" />
                    </button>
                    
                    <div className="flex-1 text-center flex flex-col items-center">
                        <span className="text-sm font-black text-slate-700">{formData.teamSize}</span>
                        <span className="text-[8px] font-black uppercase tracking-tighter text-[#82C600]">Members</span>
                    </div>

                    <button 
                      type="button"
                      onClick={() => updateField('teamSize', formData.teamSize + 1)}
                      className="p-3 hover:bg-slate-50 text-slate-400 hover:text-[#82C600] rounded-xl transition-all font-black text-lg select-none"
                    >
                      <Plus className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* 🏆 SECTION 3: REWARDS */}
            <section className="animate-in slide-in-from-bottom-4 duration-500 delay-200">
              <div className="flex items-center gap-3 mb-8 border-l-4 border-indigo-400 pl-4">
                <Trophy className="w-5 h-5 text-indigo-500" />
                <h3 className="text-[12px] font-black uppercase tracking-[0.15em] text-slate-800">Reward Protocol</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="group">
                  <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2.5 transition-colors group-focus-within:text-amber-500">Total Bounty (INR)</label>
                  <div className="relative">
                    <Trophy className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-amber-500/60 pointer-events-none group-focus-within:text-amber-500 transition-colors" />
                    <input 
                      type="text" 
                      value={formData.prizeMoney}
                      onChange={(e) => updateField('prizeMoney', e.target.value)}
                      placeholder="e.g., 50,000"
                      className="w-full pl-14 pr-6 py-4 bg-white border-2 border-slate-100 rounded-2xl focus:border-amber-400 focus:ring-4 focus:ring-amber-400/5 outline-none transition-all text-sm font-black text-slate-700 shadow-sm"
                    />
                  </div>
                </div>
                <div className="group">
                  <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2.5 transition-colors group-focus-within:text-red-400">Hard Deadline</label>
                  <div className="relative">
                    <Calendar className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-red-500/60 pointer-events-none group-focus-within:text-red-500 transition-colors" />
                    <input 
                      type="date" 
                      value={formData.endDate}
                      onChange={(e) => updateField('endDate', e.target.value)}
                      className="w-full pl-14 pr-6 py-4 bg-white border-2 border-slate-100 rounded-2xl focus:border-red-400 focus:ring-4 focus:ring-red-400/5 outline-none transition-all text-sm font-black text-slate-700 shadow-sm"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* 📜 SECTION 4: INTELLECTUAL BRIEF */}
            <section className="animate-in slide-in-from-bottom-4 duration-500 delay-300">
              <div className="flex items-center gap-3 mb-8 border-l-4 border-slate-900 pl-4">
                <Layers className="w-5 h-5 text-slate-900" />
                <h3 className="text-[12px] font-black uppercase tracking-[0.15em] text-slate-800">Operational Logic</h3>
              </div>
              <div className="space-y-8">
                <div className="group">
                  <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2.5 transition-colors group-focus-within:text-slate-900">Briefing & Scope</label>
                  <textarea 
                    rows={4}
                    value={formData.description}
                    onChange={(e) => updateField('description', e.target.value)}
                    placeholder="Articulate the challenge parameters and high-level goals..."
                    className="w-full px-6 py-5 bg-white border-2 border-slate-100 rounded-3xl focus:border-slate-900 focus:ring-4 focus:ring-slate-900/5 outline-none transition-all text-sm font-bold text-slate-700 placeholder:text-slate-200 resize-none leading-relaxed shadow-sm"
                  />
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Technical Requirements</label>
                    <button 
                      type="button"
                      onClick={handleAddRequirement}
                      className="group/add flex items-center gap-2 px-4 py-2 rounded-full bg-[#82C600]/5 text-[#82C600] hover:bg-[#82C600] hover:text-white transition-all duration-300"
                    >
                      <Plus className="w-3.5 h-3.5 group-hover/add:rotate-90 transition-transform" /> 
                      <span className="text-[9px] font-[900] uppercase tracking-wider">Expand Scope</span>
                    </button>
                  </div>
                  <div className="space-y-4">
                    {formData.requirements.map((req, index) => (
                      <div key={index} className="flex gap-3 group/item animate-in fade-in slide-in-from-left-2 duration-300">
                        <div className="relative flex-1">
                            <div className="absolute left-5 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-[#82C600]/30 rounded-full group-hover/item:bg-[#82C600] transition-colors" />
                            <input 
                            type="text" 
                            value={req}
                            onChange={(e) => handleUpdateRequirement(index, e.target.value)}
                            placeholder="Define a prerequisite..."
                            className="w-full pl-10 pr-6 py-4 bg-slate-50 border border-transparent rounded-2xl focus:bg-white focus:border-[#82C600] outline-none transition-all text-xs font-black text-slate-600 shadow-inner group-hover/item:shadow-sm"
                            />
                        </div>
                        <button 
                          type="button"
                          onClick={() => handleRemoveRequirement(index)}
                          className="p-3 text-slate-300 hover:text-red-500 hover:bg-red-50 rounded-2xl transition-all h-fit self-center"
                        >
                          <Trash2 className="w-4.5 h-4.5" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </form>

        {/* ✨ PREMIUM FOOTER ✨ */}
        <footer className="px-10 py-8 bg-white border-t border-slate-100 flex gap-6">
          <button 
            type="button"
            className="flex-1 py-5 text-[11px] font-black tracking-[0.2em] uppercase rounded-2xl border-2 border-slate-100 text-slate-400 hover:border-slate-200 hover:text-slate-600 hover:bg-slate-50 transition-all duration-300 shadow-sm shadow-black/5"
            onClick={onClose}
          >
            Decline
          </button>
          <button 
            type="button"
            className="flex-[1.5] py-5 text-[11px] font-black tracking-[0.2em] uppercase rounded-2xl bg-slate-900 text-white hover:bg-black transition-all duration-300 shadow-[0_12px_24px_rgba(0,0,0,0.15)] flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98]"
            onClick={handleSubmit}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 border-3 border-white/20 border-t-white rounded-full animate-spin" />
                <span>Processing...</span>
              </div>
            ) : (
              <>
                <ShieldCheck className="w-4.5 h-4.5 text-[#82C600]" />
                Authorize Publication
              </>
            )}
          </button>
        </footer>

      </div>
    </div>
  )
}
