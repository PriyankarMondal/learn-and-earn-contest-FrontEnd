import { ClipboardCheck, ArrowUpRight, Trophy } from 'lucide-react'

export function SubmissionsSidePanel() {
  return (
    <div className="flex flex-col gap-6">
      {/* Submissions Status */}
      <div className="rounded-xl border border-[#e2e8d5]/50 bg-[#f1f4e8] p-6 shadow-[inset_0_1px_rgba(255,255,255,0.8)]">
        <h3 className="mb-5 flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-widest text-gray-500">
          <ClipboardCheck className="h-4 w-4 text-[#82c600]" />
          Submissions Status
        </h3>

        <div className="space-y-3">
          <div className="rounded-xl bg-white p-4 shadow-sm border border-gray-100 flex items-start justify-between">
             <div>
               <h4 className="text-sm font-bold text-gray-900">Web UI Audit</h4>
               <p className="text-[9px] font-bold text-gray-400 uppercase mt-0.5 tracking-wider">Landing Page UX Contest</p>
               <div className="text-xs text-gray-500 mt-2">Oct 22, 2023</div>
             </div>
             <div className="flex flex-col items-end gap-2">
               <span className="text-emerald-600 font-bold text-sm">+₹50</span>
               <span className="bg-emerald-100 text-emerald-700 px-2.5 py-0.5 rounded text-[10px] font-bold border border-emerald-200 uppercase tracking-widest">Graded</span>
             </div>
          </div>

           <div className="rounded-xl bg-white p-4 shadow-sm border border-gray-100 flex items-start justify-between opacity-80">
             <div>
               <h4 className="text-sm font-bold text-gray-900">AI Strategy Report</h4>
               <p className="text-[9px] font-bold text-gray-400 uppercase mt-0.5 tracking-wider">AI Strategy Challenge</p>
               <div className="text-xs text-gray-500 mt-2">Oct 24, 2023</div>
             </div>
             <div className="flex flex-col items-end gap-2">
               <span className="text-gray-400 font-bold text-sm">-</span>
               <span className="bg-amber-100 text-amber-700 px-2.5 py-0.5 rounded text-[10px] font-bold border border-amber-200 uppercase tracking-widest">Pending</span>
             </div>
          </div>
        </div>
      </div>

      {/* Monthly Leaderboard */}
      <div className="rounded-xl border border-[#e2e8d5]/50 bg-[#f1f4e8] p-6 shadow-[inset_0_1px_rgba(255,255,255,0.8)]">
        <div className="flex justify-between items-start mb-6">
          <h3 className="flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-widest text-gray-500">
            <Trophy className="h-4 w-4 text-amber-500" />
            Monthly Leaderboard
          </h3>
          <span className="bg-[#e4ebce] text-[#5c8020] text-[9px] font-bold px-2 py-0.5 rounded uppercase">Oct 2023</span>
        </div>

        <div className="flex flex-col gap-4">
          {[
            { rank: '01', name: 'Sarah Jenkins', score: '₹2,840', avatar: 'SJ', highlight: false },
            { rank: '02', name: 'Marcus Vane', score: '₹2,100', avatar: 'MV', highlight: false },
            { rank: '03', name: 'Elena Ruiz', score: '₹1,950', avatar: 'ER', highlight: false },
            { rank: '04', name: 'Alex Rivera', score: '₹1,420', avatar: 'AR', highlight: true },
            { rank: '05', name: 'John Doe', score: '₹1,380', avatar: 'JD', highlight: false },
          ].map((user) => (
            <div key={user.rank} className={`flex items-center justify-between p-2 rounded-lg ${user.highlight ? 'bg-[#e4e9d3] ring-1 ring-[#c0d892]' : ''}`}>
              <div className="flex items-center gap-3">
                <span className={`text-xs font-bold ${user.rank === '01' ? 'text-amber-500' : 'text-gray-400'}`}>{user.rank}</span>
                <div className="h-6 w-6 rounded-full overflow-hidden bg-gray-200">
                  <img src={`https://ui-avatars.com/api/?name=${user.name}&background=${user.highlight ? '0d9488' : '1e293b'}&color=fff`} alt={user.name} />
                </div>
                <div>
                  <div className={`text-xs font-bold leading-none ${user.highlight ? 'text-[#446611]' : 'text-gray-900'}`}>
                    {user.name} {user.highlight && <span className="font-normal">(You)</span>}
                  </div>
                </div>
              </div>
              <div className="text-xs font-black text-gray-900">{user.score}</div>
            </div>
          ))}
        </div>

        <button className="w-full mt-4 text-[10px] font-extrabold uppercase tracking-widest text-[#5c8020] hover:text-[#446611] transition-colors py-2">
          View Full Leaderboard
        </button>
      </div>
    </div>
  )
}
