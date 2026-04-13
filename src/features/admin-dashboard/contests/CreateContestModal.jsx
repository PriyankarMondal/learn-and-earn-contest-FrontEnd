import { useState, useRef } from 'react'
import { X, Plus, Trash2, Trophy, Users, Target, Calendar, HelpCircle, Layers, ShieldCheck } from 'lucide-react'
import { Button } from '../../../components/ui/Button'
import { toast } from 'react-toastify'
import { createContest } from '../../../api/admin.api'

export function CreateContestModal({ onClose }) {
  const [formData, setFormData] = useState({
    title: '',
    category: 'ML/AI',
    startDate: '',
    contestType: 'single',
    // maxTeamSize: 2,
    prizeMoney: '',
    // deadline: '',
    endDate: '',
    description: '',
    requirements: [''],
    // criteria: ''
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
    if (!formData.title || !formData.prizeMoney || !formData.endDate || !formData.description || !formData.category) {
      toast.error('Please fill in all essential contest details')
      return
    }

    setIsSubmitting(true)
    try {
      // Data Cleaning & Formatting
      const submissionData = {
        ...formData,
        prizeMoney: Number(formData.prizeMoney.toString().replace(/,/g, '')),
        requirements: formData.requirements
          .filter(r => r.trim() !== '')
          .map(r => `• ${r}`)
          .join('\n')
      }

      await createContest(submissionData)
      
      toast.success('Contest published successfully!')
      onClose()
      
      // Optionally reload the page to refresh statistics and tables
      window.location.reload() 
    } catch (error) {
      console.error('Failed to create contest:', error)
      toast.error(error.message || 'Failed to establish challenge')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={handleBackdropClick}
      />

      {/* Modal Content */}
      <div className="relative z-10 w-full max-w-3xl bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col max-h-[95vh] animate-in zoom-in fade-in duration-300">
        
        {/* Header */}
        <header className="px-8 py-6 flex items-center justify-between border-b border-gray-100 bg-slate-50/50">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-2xl bg-[#82C600]/10 text-[#82C600]">
              <Plus className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-black text-gray-900 leading-tight">Create New Contest</h2>
              <p className="text-[10px] uppercase tracking-widest font-black text-[#5c8020]">Establish a new academic challenge</p>
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
          <div className="space-y-10">
            
            {/* 1. Basic Information */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Target className="w-5 h-5 text-gray-400" />
                <h3 className="text-[11px] font-black uppercase tracking-widest text-gray-900">Basic Information</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label className="block text-[10px] font-black uppercase tracking-widest text-[#5c8020] mb-2">Contest Title</label>
                  <input 
                    type="text" 
                    value={formData.title}
                    onChange={(e) => updateField('title', e.target.value)}
                    placeholder="e.g., Smart India Hackathon Challenge"
                    className="w-full px-5 py-3.5 bg-slate-50 border border-transparent rounded-xl focus:border-[#82C600] focus:bg-white outline-none transition-all text-sm font-bold"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-[#5c8020] mb-2">Category</label>
                  <select 
                    value={formData.category}
                    onChange={(e) => updateField('category', e.target.value)}
                    className="w-full px-5 py-3.5 bg-slate-50 border border-transparent rounded-xl focus:border-[#82C600] focus:bg-white outline-none transition-all text-sm font-bold"
                  >
                    <option>MERN Stack</option>
                    <option>UI/UX Design</option>
                    <option>Web Development</option>
                    <option>Graphics Design</option>
                    <option>ML/AI</option>
                    <option>BlockChain</option>
                    <option>Digital Marketing</option>
                  </select>
                </div>
                {/* <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-[#5c8020] mb-2">Difficulty</label>
                  <select 
                    value={formData.difficulty}
                    onChange={(e) => updateField('difficulty', e.target.value)}
                    className="w-full px-5 py-3.5 bg-slate-50 border border-transparent rounded-xl focus:border-[#82C600] focus:bg-white outline-none transition-all text-sm font-bold"
                  >
                    <option>Beginner</option>
                    <option>Intermediate</option>
                    <option>Expert</option>
                  </select>
                </div> */}

                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-[#5c8020] mb-2">Start Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-lime-600" />
                    <input 
                      type="date" 
                      value={formData.startDate}
                      onChange={(e) => updateField('startDate', e.target.value)}
                      className="w-full pl-11 pr-5 py-3.5 bg-slate-50 border border-transparent rounded-xl focus:border-[#82C600] focus:bg-white outline-none transition-all text-sm font-bold"
                    />
                  </div>
                </div>

              </div>
            </section>

            {/* 2. Participation Mode */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Users className="w-5 h-5 text-gray-400" />
                <h3 className="text-[11px] font-black uppercase tracking-widest text-gray-900">Participation Mode</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-wrap items-center gap-4 bg-slate-50 p-4 rounded-2xl border border-transparent">
                  <button 
                    type="button"
                    onClick={() => updateField('contestType', 'single')}
                    className={`flex-1 min-w-[100px] py-3 px-4 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${formData.contestType === 'single' ? 'bg-[#82C600] text-white shadow-md' : 'bg-white text-gray-400 hover:text-gray-600'}`}
                  >
                    Single User
                  </button>
                  <button 
                    type="button"
                    onClick={() => updateField('contestType', 'team')}
                    className={`flex-1 min-w-[100px] py-3 px-4 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${formData.contestType === 'team' ? 'bg-[#82C600] text-white shadow-md' : 'bg-white text-gray-400 hover:text-gray-600'}`}
                  >
                    Team Contest
                  </button>
                  <button 
                    type="button"
                    onClick={() => updateField('contestType', 'both')}
                    className={`flex-1 min-w-[100px] py-3 px-4 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${formData.contestType === 'both' ? 'bg-[#82C600] text-white shadow-md' : 'bg-white text-gray-400 hover:text-gray-600'}`}
                  >
                    Both
                  </button>
                </div>
                
                {/* <div className={`transition-all duration-300 ${formData.mode === 'Team' ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-[#5c8020] mb-2">Max Team Size</label>
                  <input 
                    type="number" 
                    min={2}
                    max={10}
                    value={formData.maxTeamSize}
                    onChange={(e) => updateField('maxTeamSize', parseInt(e.target.value))}
                    className="w-full px-5 py-3.5 bg-slate-50 border border-transparent rounded-xl focus:border-[#82C600] focus:bg-white outline-none transition-all text-sm font-bold"
                  />
                </div> */}
              </div>
            </section>

            {/* 3. Rewards & Timing */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Calendar className="w-5 h-5 text-gray-400" />
                <h3 className="text-[11px] font-black uppercase tracking-widest text-gray-900">Rewards & Timing</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-[#5c8020] mb-2">Prize Pool (₹)</label>
                  <div className="relative">
                    <Trophy className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-amber-500" />
                    <input 
                      type="text" 
                      value={formData.prizeMoney}
                      onChange={(e) => updateField('prizeMoney', e.target.value)}
                      placeholder="e.g., 5,000"
                      className="w-full pl-11 pr-5 py-3.5 bg-slate-50 border border-transparent rounded-xl focus:border-[#82C600] focus:bg-white outline-none transition-all text-sm font-bold"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-[#5c8020] mb-2">Submission Deadline</label>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-lime-600" />
                    <input 
                      type="date" 
                      value={formData.endDate}
                      onChange={(e) => updateField('endDate', e.target.value)}
                      className="w-full pl-11 pr-5 py-3.5 bg-slate-50 border border-transparent rounded-xl focus:border-[#82C600] focus:bg-white outline-none transition-all text-sm font-bold"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* 4. Description & Requirements */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Layers className="w-5 h-5 text-gray-400" />
                <h3 className="text-[11px] font-black uppercase tracking-widest text-gray-900">Contest Content</h3>
              </div>
              <div className="space-y-6">
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-[#5c8020] mb-2">Detailed Description</label>
                  <textarea 
                    rows={3}
                    value={formData.description}
                    onChange={(e) => updateField('description', e.target.value)}
                    placeholder="Clearly explain the objectives and scope of the challenge..."
                    className="w-full px-5 py-4 bg-slate-50 border border-transparent rounded-2xl focus:border-[#82C600] focus:bg-white outline-none transition-all text-sm font-bold resize-none leading-relaxed"
                  />
                </div>
                
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="block text-[10px] font-black uppercase tracking-widest text-[#5c8020]">Project Requirements</label>
                    <button 
                      type="button"
                      onClick={handleAddRequirement}
                      className="flex items-center gap-1 text-[9px] font-black text-[#82C600] uppercase hover:underline"
                    >
                      <Plus className="w-3 h-3" /> Add Requirement
                    </button>
                  </div>
                  <div className="space-y-3">
                    {formData.requirements.map((req, index) => (
                      <div key={index} className="flex gap-3">
                        <input 
                          type="text" 
                          value={req}
                          onChange={(e) => handleUpdateRequirement(index, e.target.value)}
                          placeholder="e.g., Build a responsive dashboard using MERN stack"
                          className="flex-1 px-5 py-3 bg-slate-50 border border-transparent rounded-xl focus:border-[#82C600] focus:bg-white outline-none transition-all text-xs font-bold"
                        />
                        <button 
                          type="button"
                          onClick={() => handleRemoveRequirement(index)}
                          className="p-2 text-gray-300 hover:text-red-500 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-[#5c8020] mb-2">Evaluation Criteria</label>
                  <textarea 
                    rows={2}
                    value={formData.criteria}
                    onChange={(e) => updateField('criteria', e.target.value)}
                    placeholder="Explain how submissions will be scored..."
                    className="w-full px-5 py-4 bg-slate-50 border border-transparent rounded-2xl focus:border-[#82C600] focus:bg-white outline-none transition-all text-sm font-bold resize-none leading-relaxed"
                  />
                </div> */}
              </div>
            </section>
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
            className="flex-1 py-4 text-[11px] font-black tracking-widest uppercase rounded-2xl shadow-md flex items-center justify-center gap-2"
            onClick={handleSubmit}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 border-2 border-slate-900/20 border-t-slate-900 rounded-full animate-spin" />
                <span>Publishing...</span>
              </div>
            ) : (
              <>
                <ShieldCheck className="w-4 h-4" />
                Publish Contest
              </>
            )}
          </Button>
        </footer>

      </div>
    </div>
  )
}
