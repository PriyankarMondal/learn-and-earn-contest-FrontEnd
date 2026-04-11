import { useState } from 'react'
import { X, Trophy, Clock, CheckCircle2 } from 'lucide-react'
import { Button } from '../../../components/ui/Button'
import { ApplyForm } from './ApplyForm'
import { toast } from 'react-toastify'

export function ContestDetails({ contest, onClose }) {
  const [isApplyFormOpen, setIsApplyFormOpen] = useState(false)
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'

  if (!contest) return null

  const handleApplyClick = () => {
    if (!isLoggedIn) {
      toast.error('Please login to participate in this contest')
      return
    }
    setIsApplyFormOpen(true)
  }

  return (
    <>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-hidden">
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300"
          onClick={onClose}
        />

        {/* Modal Content container */}
        <div className="relative z-10 w-full max-w-2xl bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-in zoom-in fade-in duration-300 text-left">

          {/* Header */}
          <header className="p-6 sm:p-8 flex items-start justify-between bg-slate-50/50 border-b border-gray-100">
            <div className="flex gap-4 items-center">
              <div className={`p-3 rounded-2xl bg-lime-100/50`}>
                <Trophy className="w-6 h-6 text-lime-600" />
              </div>
              <div>
                <div className="text-[10px] font-black uppercase tracking-widest text-[#82C600] mb-1">
                  {contest.category || 'Contest'} Challenge
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

          {/* Scrollable Content Area */}
          <div className="flex-1 overflow-y-auto p-6 sm:p-8 custom-scrollbar">
            <div className="space-y-8 animate-in slide-in-from-left duration-300">
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-50 p-6 rounded-2xl border border-gray-100">
                  <div className="flex items-center gap-2 text-lime-600 mb-2">
                    <Trophy className="w-4 h-4" />
                    <span className="text-[10px] font-black uppercase tracking-wider">Prize Pool</span>
                  </div>
                  <div className="text-xl font-bold text-gray-900">₹{contest.prizeMoney || 0}</div>
                </div>
                <div className="bg-slate-50 p-6 rounded-2xl border border-gray-100">
                  <div className="flex items-center gap-2 text-amber-600 mb-2">
                    <Clock className="w-4 h-4" />
                    <span className="text-[10px] font-black uppercase tracking-wider">Deadline</span>
                  </div>
                  <div className="text-xl font-bold text-gray-900">{contest.endDate ? new Date(contest.endDate).toLocaleDateString() : 'TBD'}</div>
                </div>
              </div>

              {/* Requirement Sections */}
              <section>
                <div className="mb-4 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#82C600]" />
                  <h3 className="text-[11px] font-black text-gray-900 uppercase tracking-widest">
                    Description & Requirements
                  </h3>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed font-medium mb-6">
                  {contest.description}
                </p>
                <ul className="space-y-4 ml-1">
                  {(contest.requirements?.split('\n') || ['Responsive design for mobile and tablet', 'Clean and documented source code', 'Integration with provided mock APIs']).map((item, i) => (
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
                <p className="text-sm text-gray-500 leading-relaxed font-medium ml-1 text-left">
                  Entries will be judged based on 40% code quality, 30% user experience design, 20% innovation in features, and 10% documentation depth.
                </p>
              </section>
            </div>
          </div>

          {/* Footer Actions */}
          <footer className="p-6 sm:p-8 bg-slate-50/50 border-t border-gray-100 flex gap-4">
            <button
              className="flex-1 py-4 text-[11px] font-black uppercase tracking-widest rounded-2xl border-2 border-gray-100 text-gray-400 hover:text-gray-900 hover:bg-white transition-all shadow-sm"
              onClick={onClose}
            >
              DISMISS
            </button>

            <Button
              variant="amber"
              className="flex-1 py-4 text-[11px] font-black uppercase tracking-widest rounded-2xl shadow-md flex items-center justify-center gap-2"
              onClick={handleApplyClick}
            >
              APPLY NOW
            </Button>
          </footer>
        </div>
      </div>

      {/* Apply Form Modal */}
      {isApplyFormOpen && (
        <ApplyForm 
          contest={contest} 
          onClose={() => setIsApplyFormOpen(false)} 
        />
      )}
    </>
  )
}
