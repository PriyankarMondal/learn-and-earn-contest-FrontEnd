import { useState } from 'react'
import { X, Users, User, Mail, Plus, Trash2, ShieldCheck, CheckCircle2 } from 'lucide-react'
import { Button } from '../../../components/ui/Button'
import { joinContest } from '../../../api/student.api'
import { toast } from 'react-toastify'

export function ApplyForm({ contest, onClose }) {
  const [participationType] = useState('team')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    teamName: '',
    members: [] // { name: '', email: '' }
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose()
  }

  const updateField = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const addMember = () => {
    // 🔥 ENFORCE TEAM SIZE LIMIT
    // total members = 1 (leader) + members.length
    const currentTotal = 1 + formData.members.length
    const limit = contest.teamSize || 1

    if (currentTotal >= limit) {
      toast.error(`This contest only allows up to ${limit} member${limit > 1 ? 's' : ''} per team.`)
      return
    }

    setFormData(prev => ({
      ...prev,
      members: [...prev.members, { name: '', email: '' }]
    }))
  }

  const updateMember = (index, field, value) => {
    const newMembers = [...formData.members]
    newMembers[index][field] = value
    setFormData(prev => ({ ...prev, members: newMembers }))
  }

  const removeMember = (index) => {
    setFormData(prev => ({
      ...prev,
      members: prev.members.filter((_, i) => i !== index)
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!formData.name || !formData.email) {
      toast.error('Basic information is required')
      return
    }

    if (participationType === 'team' && (contest.teamSize || 1) > 1 && !formData.teamName) {
      toast.error('Team name is required for team participation')
      return
    }

    setIsSubmitting(true)

    try {
      await joinContest({
        contestId: contest._id,
        teamName: formData.teamName,
        teamMembers: formData.members
      })
      
      toast.success('Successfully joined the contest!')
      onClose()
    } catch (error) {
      toast.error(error.message || 'Failed to join contest')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-6 overflow-hidden">
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
            <div className="p-3 rounded-2xl bg-[#82C600]/10 text-[#82C600]">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-black text-gray-900 leading-tight">Apply for Contest</h2>
              <p className="text-[10px] uppercase tracking-widest font-black text-[#5c8020]">Confirm your participation details</p>
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
        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-8 custom-scrollbar text-left font-sans">
          <div className="space-y-8">
            
            {/* Participation Mode Note */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-5 h-5 text-gray-400" />
                <h3 className="text-[11px] font-black uppercase tracking-widest text-gray-900">Participation Mode</h3>
              </div>
              <div className="bg-[#82C600]/5 border border-[#82C600]/20 p-4 rounded-2xl">
                <p className="text-xs font-bold text-[#5c8020] flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4" />
                  Team Participation ({contest.teamSize || 1} Member{contest.teamSize > 1 ? 's' : ''} Max)
                </p>
              </div>
            </section>

            {/* Individual Info */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <User className="w-5 h-5 text-gray-400" />
                <h3 className="text-[11px] font-black uppercase tracking-widest text-gray-900">
                  {participationType === 'team' ? 'Team Leader Info' : 'Personal Information'}
                </h3>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-[#5c8020] mb-2">Full Name</label>
                  <div className="relative text-left">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300" />
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => updateField('name', e.target.value)}
                      placeholder="e.g., Priyankar Mondal"
                      className="w-full pl-11 pr-5 py-3.5 bg-slate-50 border border-transparent rounded-xl focus:border-[#82C600] focus:bg-white outline-none transition-all text-sm font-bold"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-[#5c8020] mb-2">Email Address</label>
                  <div className="relative text-left">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300" />
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => updateField('email', e.target.value)}
                      placeholder="p.mondal@academy.edu.in"
                      className="w-full pl-11 pr-5 py-3.5 bg-slate-50 border border-transparent rounded-xl focus:border-[#82C600] focus:bg-white outline-none transition-all text-sm font-bold"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Team Specific Info */}
            {participationType === 'team' && (contest.teamSize || 1) > 1 && (
              <section className="animate-in slide-in-from-top duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <Users className="w-5 h-5 text-gray-400" />
                  <h3 className="text-[11px] font-black uppercase tracking-widest text-gray-900">Team Details</h3>
                </div>
                <div className="space-y-6">
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest text-[#5c8020] mb-2">Team Name</label>
                    <input 
                      type="text" 
                      required
                      value={formData.teamName}
                      onChange={(e) => updateField('teamName', e.target.value)}
                      placeholder="e.g., Team Kolkata Innovators"
                      className="w-full px-5 py-3.5 bg-slate-50 border border-transparent rounded-xl focus:border-[#82C600] focus:bg-white outline-none transition-all text-sm font-bold"
                    />
                  </div>
                  
                  <div>
                    <div className="flex items-center justify-between mb-3 text-left">
                      <label className="block text-[10px] font-black uppercase tracking-widest text-[#5c8020]">Team Members</label>
                      <button 
                        type="button"
                        onClick={addMember}
                        className="flex items-center gap-1 text-[9px] font-black text-[#82C600] uppercase hover:underline"
                      >
                        <Plus className="w-3 h-3" /> Add Member
                      </button>
                    </div>
                    <div className="space-y-3">
                      {formData.members.map((member, idx) => (
                        <div key={idx} className="flex gap-2 items-center bg-slate-50 p-3 rounded-2xl border border-gray-100 group">
                          <input 
                            type="text" 
                            value={member.name}
                            onChange={(e) => updateMember(idx, 'name', e.target.value)}
                            placeholder="Name"
                            className="w-1/2 px-3 py-2 bg-white border border-transparent rounded-lg focus:border-[#82C600] outline-none text-[11px] font-bold"
                          />
                          <input 
                            type="email" 
                            value={member.email}
                            onChange={(e) => updateMember(idx, 'email', e.target.value)}
                            placeholder="Email"
                            className="flex-1 px-3 py-2 bg-white border border-transparent rounded-lg focus:border-[#82C600] outline-none text-[11px] font-bold"
                          />
                          <button 
                            type="button"
                            onClick={() => removeMember(idx)}
                            className="p-1 text-gray-300 hover:text-red-500 transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                      {formData.members.length === 0 && (
                        <p className="text-[10px] font-bold text-gray-400 italic">No additional members added yet.</p>
                      )}
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* Note */}
            <div className="bg-amber-50 p-5 rounded-2xl border border-amber-100 flex items-start gap-4">
              <ShieldCheck className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <p className="text-[11px] font-bold text-amber-700 leading-relaxed text-left">
                By applying, you agree to the contest rules and guidelines. Make sure all member details are correct.
              </p>
            </div>
          </div>
        </form>

        {/* Footer */}
        <footer className="px-8 py-6 bg-slate-50/50 border-t border-gray-100 flex gap-4">
          <Button 
            variant="outline" 
            className="flex-1 py-4 text-[11px] font-black tracking-widest uppercase rounded-2xl shadow-sm hover:border-gray-300"
            onClick={onClose}
          >
            Cancel
          </Button>
          <Button 
            variant="amber" 
            className="flex-1 py-4 text-[11px] font-black tracking-widest uppercase rounded-2xl shadow-md flex items-center justify-center gap-2"
            onClick={handleSubmit}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Processing...' : (
              <>
                Confirm Application
                <Plus className="w-4 h-4" />
              </>
            )}
          </Button>
        </footer>

      </div>
    </div>
  )
}
