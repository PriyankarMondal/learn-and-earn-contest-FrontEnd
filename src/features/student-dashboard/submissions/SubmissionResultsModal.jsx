import { X, Trophy, Award, Calendar, Link as LinkIcon, Globe } from 'lucide-react'
import { Button } from '../../../components/ui/Button'

export function SubmissionResultsModal({ submission, isOpen, onClose }) {
  if (!isOpen || !submission) return null

  const isReviewed = submission.status === 'reviewed'

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-[#689f00] to-[#82C600] text-white p-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-1">{submission.contest?.title || 'Submission'}</h2>
            <p className="text-sm text-white/80">
              {isReviewed ? 'Graded Submission' : 'Pending Evaluation'}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/20 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-8 text-left">
          {/* Status & Score Section */}
          <div className="mb-8 p-6 bg-gradient-to-br from-green-50 to-lime-50 rounded-2xl border border-green-100">
            <div className="grid grid-cols-3 gap-6">
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-2">Status</p>
                <p className="text-xl font-bold text-gray-900 uppercase">{submission.status}</p>
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-2">Score</p>
                <p className="text-3xl font-black text-[#82C600]">
                  {isReviewed ? `${submission.score}/100` : '---'}
                </p>
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-2">Performance</p>
                <p className="text-sm font-bold text-gray-900">
                  {isReviewed && submission.score >= 90 ? '⭐ Excellent' : isReviewed && submission.score >= 80 ? '✓ Good' : isReviewed ? 'Fair' : 'Pending'}
                </p>
              </div>
            </div>
          </div>

          {/* Submission Details */}
          <div className="mb-8">
            <h3 className="text-sm font-black uppercase tracking-widest text-gray-500 mb-4">Submission Details</h3>
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                <p className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-2">Description</p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {submission.description || 'No description provided'}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {submission.githubLink && (
                  <a
                    href={submission.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-gray-900 text-white rounded-xl border border-gray-800 hover:bg-black transition-colors flex items-center gap-3 group"
                  >
                    <LinkIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <div className="text-left">
                      <p className="text-[9px] font-black uppercase tracking-widest text-gray-400">GitHub</p>
                      <p className="text-sm font-bold truncate">View Repository</p>
                    </div>
                  </a>
                )}

                {submission.liveLink && (
                  <a
                    href={submission.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-[#82C600] text-white rounded-xl border border-[#82C600] hover:bg-[#71ac00] transition-colors flex items-center gap-3 group"
                  >
                    <Globe className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <div className="text-left">
                      <p className="text-[9px] font-black uppercase tracking-widest text-white/70">Live Demo</p>
                      <p className="text-sm font-bold truncate">Visit Live Site</p>
                    </div>
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Contest Info */}
          <div className="mb-8">
            <h3 className="text-sm font-black uppercase tracking-widest text-gray-500 mb-4">Contest Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-slate-50 rounded-xl border border-gray-100">
                <p className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-2">Category</p>
                <p className="text-sm font-bold text-gray-900">{submission.contest?.category || 'N/A'}</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-gray-100">
                <p className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-2">Prize Pool</p>
                <p className="text-sm font-bold text-[#82C600]">₹{submission.contest?.prizeMoney || 0}</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-gray-100">
                <p className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-2">Submitted On</p>
                <p className="text-sm font-bold text-gray-900">{new Date(submission.createdAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-gray-100">
                <p className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-2">Your Email</p>
                <p className="text-sm font-bold text-gray-900">{submission.email || 'N/A'}</p>
              </div>
            </div>
          </div>

          {/* Feedback Section (if reviewed) */}
          {isReviewed && (
            <div className="mb-8 p-6 bg-blue-50 rounded-2xl border border-blue-100">
              <div className="flex items-center gap-2 mb-3">
                <Award className="w-5 h-5 text-blue-600" />
                <h3 className="text-sm font-black uppercase tracking-widest text-gray-500">Evaluation Summary</h3>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
                {submission.score >= 90 ? 'Exceptional work! Your submission demonstrates excellent understanding and execution.' : 
                 submission.score >= 80 ? 'Great job! Your submission shows solid understanding with good execution.' : 
                 submission.score >= 70 ? 'Good effort! Your submission meets the requirements with room for improvement.' : 
                 'Your submission has been reviewed. Consider reviewing the feedback for future improvements.'}
              </p>
            </div>
          )}

          {/* Footer Buttons */}
          <div className="flex gap-3">
            <Button
              variant="outline"
              className="flex-1 py-4 text-xs font-black tracking-widest uppercase rounded-xl"
              onClick={onClose}
            >
              Close
            </Button>
            {submission.githubLink && (
              <a
                href={submission.githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="amber"
                  className="w-full py-4 text-xs font-black tracking-widest uppercase rounded-xl"
                >
                  View on GitHub
                </Button>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
