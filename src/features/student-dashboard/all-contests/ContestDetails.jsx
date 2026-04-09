import { useState, useEffect } from 'react'
import { X, Trophy, Clock, CheckCircle2, Link as LinkIcon, FileText, Send } from 'lucide-react'
import { Button } from '../../../components/ui/Button'
import { toast } from 'react-toastify'

export function ContestDetails({ contest, onClose, initialView = 'details', showTabs = true }) {
  const [view, setView] = useState(initialView)
  const [formData, setFormData] = useState({ projectLink: '', description: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'

  if (!contest) return null

  // Ensure guest users stay on details tab if they land on participate via manual URL/params
  useEffect(() => {
    if (view === 'participate' && !isLoggedIn) {
      setView('details')
    }
  }, [view, isLoggedIn])

  const handleApplyClick = () => {
    if (!isLoggedIn) {
      toast.error('Please login to participate in this contest')
      return
    }
    setView('participate')
  }

  const handleSubmit = (e) => {
    if (e) e.preventDefault()

    if (!formData.projectLink || !formData.description) {
      toast.error('Please fill in all required fields')
      return
    }

    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      toast.success('Project submitted successfully!')
      onClose()
    }, 1500)
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={onClose}
      />

      {/* Modal Content container */}
      <div className="relative z-10 w-full max-w-2xl bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-in zoom-in fade-in duration-300">

        {/* Header */}
        <header className="p-6 sm:p-8 flex items-start justify-between bg-slate-50/50 border-b border-gray-100 text-left">
          <div className="flex gap-4 items-center">
            <div className={`p-3 rounded-2xl ${contest.iconBg || 'bg-lime-100/50'}`}>
              {contest.icon && typeof contest.icon !== 'string' ? <contest.icon className="w-6 h-6" /> : <div className="text-2xl">{contest.icon || '🏆'}</div>}
            </div>
            <div>
              <div className="text-[10px] font-black uppercase tracking-widest text-[#82C600] mb-1">
                {contest.tag || 'Contest'} Challenge
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-gray-900 leading-tight">
                {contest.title}
              </h2>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-400 hover:text-gray-900"
          >
            <X className="w-6 h-6" />
          </button>
        </header>

        {/* Tab Navigation (Conditional) */}
        {showTabs && (
          <div className="flex border-b border-gray-100">
            <button
              onClick={() => setView('details')}
              className={`flex-1 py-4 text-[11px] font-black uppercase tracking-widest transition-all ${view === 'details' ? 'text-[#82C600] border-b-2 border-[#82C600] bg-lime-50/20' : 'text-gray-400 hover:text-gray-600'}`}
            >
              Contest Overview
            </button>
            <button
              onClick={handleApplyClick}
              className={`flex-1 py-4 text-[11px] font-black uppercase tracking-widest transition-all ${view === 'participate' ? 'text-[#82C600] border-b-2 border-[#82C600] bg-lime-50/20' : 'text-gray-400 hover:text-gray-600'}`}
            >
              Submit Entry
            </button>
          </div>
        )}

        {/* Scrollable Content Area */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 custom-scrollbar text-left">
          {view === 'details' ? (
            <div className="space-y-8 animate-in slide-in-from-left duration-300">
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-50 p-6 rounded-2xl border border-gray-100">
                  <div className="flex items-center gap-2 text-lime-600 mb-2">
                    <Trophy className="w-4 h-4" />
                    <span className="text-[10px] font-black uppercase tracking-wider">Prize Pool</span>
                  </div>
                  <div className="text-xl font-bold text-gray-900">{contest.prize}</div>
                </div>
                <div className="bg-slate-50 p-6 rounded-2xl border border-gray-100">
                  <div className="flex items-center gap-2 text-amber-600 mb-2">
                    <Clock className="w-4 h-4" />
                    <span className="text-[10px] font-black uppercase tracking-wider">Time Left</span>
                  </div>
                  <div className="text-xl font-bold text-gray-900">{contest.ends.replace('Ends in ', '')}</div>
                </div>
              </div>

              {/* Requirement Sections */}
              <section>
                <div className="mb-4 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#82C600]" />
                  <h3 className="text-[11px] font-black text-gray-900 uppercase tracking-widest">
                    Project Requirements
                  </h3>
                </div>
                <ul className="space-y-4 ml-1">
                  {['Responsive design for mobile and tablet', 'Clean and documented source code', 'Integration with provided mock APIs', 'Performance optimization scored above 90'].map((item, i) => (
                    <li key={i} className="flex gap-3 text-sm text-gray-700 font-medium items-center">
                      <div className="bg-lime-100 rounded-full p-0.5">
                        <CheckCircle2 className="w-4 h-4 text-lime-600 shrink-0" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <div className="mb-4 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#82C600]" />
                  <h3 className="text-[11px] font-black text-gray-900 uppercase tracking-widest">
                    Evaluation Criteria
                  </h3>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed font-medium ml-1">
                  Entries will be judged based on 40% code quality, 30% user experience design, 20% innovation in features, and 10% documentation depth.
                </p>
              </section>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 animate-in slide-in-from-right duration-300">
              <div>
                <label className="block text-[11px] font-black uppercase tracking-widest text-gray-500 mb-2">Project Repository Link</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                    <LinkIcon className="w-4 h-4" />
                  </div>
                  <input
                    type="url"
                    required
                    value={formData.projectLink}
                    onChange={(e) => setFormData({ ...formData, projectLink: e.target.value })}
                    placeholder="https://github.com/username/project"
                    className="w-full pl-11 pr-4 py-4 bg-slate-50 border border-gray-100 rounded-2xl outline-none focus:border-lime-500 focus:bg-white transition-all text-sm font-medium"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-black uppercase tracking-widest text-gray-500 mb-2">Technical Description</label>
                <div className="relative">
                  <div className="absolute top-4 left-4 text-gray-400">
                    <FileText className="w-4 h-4" />
                  </div>
                  <textarea
                    required
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    rows={4}
                    placeholder="Briefly describe your tech stack and key features..."
                    className="w-full pl-11 pr-4 py-4 bg-slate-50 border border-gray-100 rounded-2xl outline-none focus:border-lime-500 focus:bg-white transition-all text-sm font-medium resize-none"
                  />
                </div>
              </div>

              <div className="bg-lime-50 p-4 rounded-2xl border border-lime-100 text-[11px] font-bold text-lime-700 leading-relaxed">
                Note: By submitting, you agree that this is your original work and follows the contest rules. Multiple submissions are not allowed.
              </div>
            </form>
          )}
        </div>

        {/* Footer Actions */}
        <footer className="p-6 sm:p-8 bg-slate-50/50 border-t border-gray-100 flex gap-4">
          <Button
            variant="outline"
            className="flex-1 py-4 text-[11px] font-black uppercase tracking-widest rounded-2xl border-2 hover:bg-white"
            onClick={onClose}
          >
            DISMISS
          </Button>

          <Button
            variant="amber"
            className="flex-1 py-4 text-[11px] font-black uppercase tracking-widest rounded-2xl flex items-center justify-center gap-2"
            onClick={view === 'details' ? handleApplyClick : handleSubmit}
            disabled={isSubmitting}
          >
            {view === 'details' ? (
              'APPLY NOW'
            ) : (
              <>
                {isSubmitting ? 'SUBMITTING...' : 'CONFIRM SUBMISSION'}
                {!isSubmitting && <Send className="w-4 h-4" />}
              </>
            )}
          </Button>
        </footer>
      </div>
    </div>
  )
}
