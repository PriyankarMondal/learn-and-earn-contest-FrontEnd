import { Award } from 'lucide-react'

export function TopSubmissionCard({ submission }) {
  if (!submission) return null;

  const isReviewed = submission.status === 'reviewed';

  return (
    <div className="relative mb-8 overflow-hidden rounded-2xl bg-gradient-to-br from-[#689f00] to-[#82C600] p-6 sm:p-8 text-white shadow-md">
      {/* Abstract Background Icon */}
      <div className="pointer-events-none absolute -right-4 top-1/2 -translate-y-1/2 opacity-20 hidden sm:block">
        <Award className="h-64 w-64" strokeWidth={1} />
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row gap-8 items-stretch">
        <div className="w-full lg:w-[320px] shrink-0 h-[200px] rounded-xl bg-gray-900 overflow-hidden relative shadow-lg flex items-center justify-center">
          <div className="absolute inset-0 bg-[#F9BD1C]/20 mix-blend-overlay"></div>
          <div className="h-32 w-32 rounded-full border border-white/10 flex items-center justify-center">
             <div className="h-full w-full rounded-full border border-white/5 rotate-45"></div>
             <div className="absolute h-full w-full rounded-full border border-white/5 -rotate-45"></div>
          </div>
          <Award className="absolute w-12 h-12 text-[#F9BD1C] opacity-50" />
        </div>

        <div className="flex-1 flex flex-col justify-center py-2">
          <div className="flex flex-wrap gap-2 mb-4">
            {isReviewed && submission.score >= 90 && (
              <span className="rounded bg-[#F9BD1C] px-3 py-1 text-[9px] font-black uppercase tracking-widest text-amber-950 shadow-sm">
                Top Performance
              </span>
            )}
            <span className="rounded bg-white/20 px-3 py-1 text-[9px] font-black uppercase tracking-widest text-white backdrop-blur-sm">
              {isReviewed ? 'Graded' : 'Pending Evaluation'}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2 uppercase">
            {submission.contest?.title || 'Contest Submission'}
          </h2>
          <p className="max-w-xl text-white/90 text-sm leading-relaxed mb-8 font-medium line-clamp-2 italic">
            "{submission.description || 'No description provided'}"
          </p>

          <div className="flex flex-wrap items-center gap-12 mb-8">
            <div>
              <div className="text-[10px] font-extrabold uppercase tracking-widest text-white/60 mb-1">Score</div>
              <div className="text-2xl font-black">{isReviewed ? `${submission.score}/100` : '---'}</div>
            </div>
            <div>
              <div className="text-[10px] font-extrabold uppercase tracking-widest text-white/60 mb-1">Status</div>
              <div className="text-2xl font-black uppercase text-[15px]">{submission.status}</div>
            </div>
            <div>
              <div className="text-[10px] font-extrabold uppercase tracking-widest text-white/60 mb-1">Earnings</div>
              <div className="text-2xl font-black">₹{isReviewed && submission.score > 80 ? 'Pending' : '0'}</div>
            </div>
          </div>

          <div>
            <button className="rounded-lg bg-[#F9BD1C] px-8 py-3.5 text-xs font-black uppercase tracking-widest text-amber-950 transition-colors hover:bg-[#e6ae1a] shadow-sm">
              {isReviewed ? 'View Results' : 'Review Details'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

