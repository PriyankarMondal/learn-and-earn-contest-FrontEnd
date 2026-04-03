import { Trophy, ClipboardEdit, CheckCircle } from 'lucide-react'

export function AdminSidePanel() {
  return (
    <div className="flex flex-col gap-6">
      {/* Elite Leaderboard */}
      <div className="rounded-xl border border-[#e2e8d5]/50 bg-[#f1f4e8] p-6 shadow-[inset_0_1px_rgba(255,255,255,0.8)]">
        <h3 className="mb-5 flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-widest text-[#d97706]">
          <Trophy className="h-4 w-4" />
          Elite Leaderboard
        </h3>

        <div className="mb-2 text-[10px] font-extrabold uppercase tracking-widest text-[#82c600]">
          Cloud Architecture 2024
        </div>
        <div className="flex flex-col gap-2 mb-6">
          <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#e4e9d3] ring-1 ring-[#c0d892]">
            <div className="flex items-center gap-3">
              <span className="text-xs font-black text-amber-500">01</span>
              <span className="text-sm font-bold text-gray-900">Alex Rivera</span>
            </div>
            <span className="bg-[#82c600] text-white text-[10px] font-bold px-2 py-0.5 rounded">$500</span>
          </div>
          <div className="flex items-center justify-between p-2.5 rounded-lg">
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold text-gray-400">02</span>
              <span className="text-sm font-semibold text-gray-700">Elena Ruiz</span>
            </div>
            <span className="text-gray-500 text-[10px] font-bold">$300</span>
          </div>
          <div className="flex items-center justify-between p-2.5 rounded-lg">
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold text-gray-400">03</span>
              <span className="text-sm font-semibold text-gray-700">Marcus Thorne</span>
            </div>
            <span className="text-gray-500 text-[10px] font-bold">$200</span>
          </div>
        </div>

        <div className="mb-2 text-[10px] font-extrabold uppercase tracking-widest text-[#82c600]">
          React Systems Design
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#e4e9d3] ring-1 ring-[#c0d892]">
            <div className="flex items-center gap-3">
              <span className="text-xs font-black text-amber-500">01</span>
              <span className="text-sm font-bold text-gray-900">Sarah Chen</span>
            </div>
            <span className="bg-[#82c600] text-white text-[10px] font-bold px-2 py-0.5 rounded">$750</span>
          </div>
          <div className="flex items-center justify-between p-2.5 rounded-lg">
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold text-gray-400">02</span>
              <span className="text-sm font-semibold text-gray-700">David Kim</span>
            </div>
            <span className="text-gray-500 text-[10px] font-bold">$450</span>
          </div>
        </div>
      </div>

      {/* Score Submission */}
      <div className="rounded-xl border border-[#d6e0b7] bg-[#e4ebce] p-6 shadow-sm relative overflow-hidden">
         <div className="absolute right-[-10%] top-[-10%] w-[120px] h-[120px] opacity-[0.04] pointer-events-none">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
         </div>

        <h3 className="mb-1 flex items-center gap-2 text-[13px] font-extrabold text-[#446611]">
          <ClipboardEdit className="h-4 w-4" />
          Score Submission
        </h3>
        <p className="text-[9px] font-bold text-gray-500 uppercase tracking-widest mb-6">Evaluating: Alex Rivera</p>

        <div className="space-y-4 mb-6">
          <div className="flex justify-between items-end border-b border-[#c8d4a3] pb-1">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#5c8020]">Quality</span>
            <span className="text-sm font-black text-[#446611]">8/10</span>
          </div>
          <div className="flex justify-between items-end border-b border-[#c8d4a3] pb-1">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#5c8020]">Creativity</span>
            <span className="text-sm font-black text-[#446611]">9/10</span>
          </div>
          <div className="flex justify-between items-end border-b border-[#c8d4a3] pb-1">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#5c8020]">Completion</span>
            <span className="text-sm font-black text-[#446611]">10/10</span>
          </div>
          <div className="flex justify-between items-end border-b border-[#c8d4a3] pb-1">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#5c8020]">Usability</span>
            <span className="text-sm font-black text-[#446611]">7/10</span>
          </div>
        </div>

        <div className="mb-6">
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#5c8020] block mb-2">Remarks</span>
          <p className="text-xs text-gray-600 bg-white/50 p-3 rounded-lg border border-[#d6e0b7] leading-relaxed">
            Exceptional backend structure. UI could be more intuitive but technically sound.
          </p>
        </div>

        <div className="mb-6">
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#5c8020] block mb-2">Declare As Winner</span>
          <div className="flex gap-2">
            <button className="flex-1 bg-white border-2 border-amber-400 text-amber-500 text-[9px] font-black uppercase py-2 rounded-lg shadow-sm">1st Place</button>
            <button className="flex-1 bg-white border border-gray-200 text-gray-400 text-[9px] font-black uppercase py-2 rounded-lg">2nd Place</button>
            <button className="flex-1 bg-white border border-gray-200 text-gray-400 text-[9px] font-black uppercase py-2 rounded-lg">3rd Place</button>
          </div>
        </div>

        <button className="w-full bg-[#82c600] flex justify-center items-center gap-2 text-white font-bold uppercase tracking-widest py-3.5 rounded-xl shadow-md hover:bg-[#71ac00] transition-colors text-xs relative overflow-hidden">
           <CheckCircle className="w-4 h-4" />
           Submit Evaluation
           <div className="absolute right-0 bottom-0 bg-[#5c8020] p-2 rounded-tl-xl">
             <ClipboardEdit className="w-4 h-4 text-white" />
           </div>
        </button>
      </div>
    </div>
  )
}
