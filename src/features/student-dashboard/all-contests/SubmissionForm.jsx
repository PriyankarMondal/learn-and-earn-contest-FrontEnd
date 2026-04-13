import { useState } from 'react'
import { X, Send, Globe, Code, FileText, User, Mail, ShieldCheck } from 'lucide-react'
import { Button } from '../../../components/ui/Button'
import { apiRequest } from '../../../api/fetch'
import { toast } from 'react-toastify'

export function SubmissionForm({ contest, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    githubLink: '',
    liveLink: '',
    description: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose()
  }

  const updateField = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.githubLink || !formData.liveLink || !formData.description) {
      toast.error('Please fill in Name, Email, GitHub link, Live link, and Description')
      return
    }

    setIsSubmitting(true)
    
    try {
      await apiRequest('/student/v1/submit', 'POST', {
        contestId: contest._id || contest.id,
        ...formData
      })
      toast.success('Contest entry submitted successfully!')
      onClose()
    } catch (error) {
      toast.error(error.message || 'Submission failed')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-6 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={handleBackdropClick}
      />

      {/* Modal Content */}
      <div className="relative z-10 w-full max-w-xl bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-in zoom-in fade-in duration-300 text-left">
        
        {/* Header */}
        <header className="px-8 py-6 flex items-center justify-between border-b border-gray-100 bg-slate-50/50">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-2xl bg-[#F9BD1C]/10 text-[#F9BD1C]">
              <Send className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-black text-gray-900 leading-tight">Submit Entry</h2>
              <p className="text-[10px] uppercase tracking-widest font-black text-[#5c8020]">Finalize your work for: {contest?.title || 'Contest'}</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-white rounded-full transition-all text-gray-400 hover:text-gray-900 shadow-sm"
          >
            <X className="w-6 h-6" />
          </button>
        </header>

        {/* Form Content */}
        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-8 custom-scrollbar text-left">
          <div className="space-y-8">
            
            {/* 1. Identification Section */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <User className="w-5 h-5 text-gray-400" />
                <h3 className="text-[11px] font-black uppercase tracking-widest text-gray-900">Identification</h3>
              </div>
              <div className="space-y-5">
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-[#5c8020] mb-2">Your Full Name</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300" />
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => updateField('name', e.target.value)}
                      placeholder="e.g., Priyankar Mondal"
                      className="w-full pl-11 pr-5 py-3.5 bg-slate-50 border border-transparent rounded-xl focus:border-[#F9BD1C] focus:bg-white outline-none transition-all text-sm font-bold"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-[#5c8020] mb-2">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300" />
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => updateField('email', e.target.value)}
                      placeholder="p.mondal@academy.edu.in"
                      className="w-full pl-11 pr-5 py-3.5 bg-slate-50 border border-transparent rounded-xl focus:border-[#F9BD1C] focus:bg-white outline-none transition-all text-sm font-bold"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* 2. Project Deliverables */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Code className="w-5 h-5 text-gray-400" />
                <h3 className="text-[11px] font-black uppercase tracking-widest text-gray-900">Deliverables</h3>
              </div>
              <div className="space-y-5">
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-[#5c8020] mb-2">GitHub Repository URL</label>
                  <div className="relative">
                    <Code className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300" />
                    <input 
                      type="url" 
                      required
                      value={formData.githubLink}
                      onChange={(e) => updateField('githubLink', e.target.value)}
                      placeholder="https://github.com/your-username/repo-name"
                      className="w-full pl-11 pr-5 py-3.5 bg-slate-50 border border-transparent rounded-xl focus:border-[#F9BD1C] focus:bg-white outline-none transition-all text-sm font-bold"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-[#5c8020] mb-2">Live Demo URL</label>
                  <div className="relative">
                    <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300" />
                    <input 
                      type="url" 
                      required
                      value={formData.liveLink}
                      onChange={(e) => updateField('liveLink', e.target.value)}
                      placeholder="https://your-project.vercel.app"
                      className="w-full pl-11 pr-5 py-3.5 bg-slate-50 border border-transparent rounded-xl focus:border-[#F9BD1C] focus:bg-white outline-none transition-all text-sm font-bold"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* 2. Project Description */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <FileText className="w-5 h-5 text-gray-400" />
                <h3 className="text-[11px] font-black uppercase tracking-widest text-gray-900">Project Overview</h3>
              </div>
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-[#5c8020] mb-2">Detailed Description</label>
                <div className="relative">
                  <textarea 
                    required
                    rows={4}
                    value={formData.description}
                    onChange={(e) => updateField('description', e.target.value)}
                    placeholder="Describe your solution, technologies used, and any specific features..."
                    className="w-full px-5 py-4 bg-slate-50 border border-transparent rounded-2xl focus:border-[#F9BD1C] focus:bg-white outline-none transition-all text-sm font-bold min-h-[120px] resize-none"
                  />
                </div>
              </div>
            </section>

            {/* Confirmation Note */}
            <div className="bg-amber-50 p-5 rounded-2xl border border-amber-100 flex items-start gap-4">
              <ShieldCheck className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <p className="text-[11px] font-bold text-amber-700 leading-relaxed">
                By submitting this work, you certify that all content is original and developed according to the contest guidelines. You cannot modify your entry after submission.
              </p>
            </div>
          </div>
        </form>

        {/* Footer */}
        <footer className="px-8 py-6 bg-slate-50/50 border-t border-gray-100 flex gap-4">
          <Button 
            variant="outline" 
            className="flex-1 py-4 text-[11px] font-black tracking-widest uppercase rounded-2xl shadow-sm hover:bg-white"
            onClick={onClose}
          >
            Cancel
          </Button>
          <Button 
            variant="amber" 
            className="flex-1 py-4 text-[11px] font-black uppercase tracking-widest rounded-2xl shadow-md flex items-center justify-center gap-2"
            onClick={handleSubmit}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Finalizing...' : (
              <>
                Confirm Submission
                <Send className="w-4 h-4" />
              </>
            )}
          </Button>
        </footer>

      </div>
    </div>
  )
}
