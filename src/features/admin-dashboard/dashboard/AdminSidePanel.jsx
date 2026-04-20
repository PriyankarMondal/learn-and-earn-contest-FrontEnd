import { useState, useEffect } from 'react'
import { Trophy, ClipboardEdit, CheckCircle, Loader2 } from 'lucide-react'
import { apiRequest } from '../../../api/fetch'

export function AdminSidePanel() {
  const [selectedPlace, setSelectedPlace] = useState(null)
  const [eliteStudents, setEliteStudents] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchElite = async () => {
      try {
        const data = await apiRequest('/student/v1/global-leaderboard')
        setEliteStudents(data.slice(0, 3)) // Show top 3
      } catch (err) {
        console.error('Failed to fetch elite leaderboard:', err)
      } finally {
        setLoading(false)
      }
    }
    fetchElite()
  }, [])

  return (
    <div className="flex flex-col gap-6">
      {/* Elite Leaderboard */}
      <div className="rounded-xl border border-gray-100/50 bg-[#f4f8eb] p-6 shadow-[inset_0_1px_rgba(255,255,255,0.8)] min-h-[200px]">
        <h3 className="mb-5 flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-widest text-[#d97706]">
          <Trophy className="h-4 w-4" />
          Elite Leaderboard
        </h3>

        {loading ? (
          <div className="flex items-center justify-center py-10">
            <Loader2 className="w-5 h-5 animate-spin text-amber-500" />
          </div>
        ) : eliteStudents.length === 0 ? (
          <p className="text-center text-xs font-bold text-gray-400 py-10 italic">No winners declared yet.</p>
        ) : (
          <div className="flex flex-col gap-2">
            {eliteStudents.map((s, idx) => (
              <div key={s._id} className={`flex items-center justify-between p-2.5 rounded-lg ${idx === 0 ? 'bg-[#e4e9d3] ring-1 ring-[#c0d892]' : ''}`}>
                <div className="flex items-center gap-3">
                  <span className={`text-xs font-black ${idx === 0 ? 'text-amber-500' : 'text-gray-400'}`}>0{idx + 1}</span>
                  <span className={`text-sm ${idx === 0 ? 'font-bold text-gray-900' : 'font-semibold text-gray-700'}`}>{s.name}</span>
                </div>
                <span className={`${idx === 0 ? 'bg-[#82C600] text-white' : 'text-gray-500'} text-[10px] font-bold px-2 py-0.5 rounded`}>{s.score}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Score Submission */}
      <div className="rounded-xl border border-gray-100/50 bg-[#eef4db] p-6 shadow-sm relative overflow-hidden">
         <div className="absolute right-[-10%] top-[-10%] w-[120px] h-[120px] opacity-[0.04] pointer-events-none">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
         </div>

        <h3 className="mb-1 flex items-center gap-2 text-[13px] font-extrabold text-[#446611]">
          <ClipboardEdit className="h-4 w-4" />
          Score Submission
        </h3>
        <p className="text-[9px] font-bold text-gray-500 uppercase tracking-widest mb-6">Evaluating: Arjun Mehra</p>

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
            <button
               onClick={() => setSelectedPlace(1)}
               className={`flex-1 transition-all border-2 py-2 rounded-lg shadow-sm text-[9px] font-black uppercase ${selectedPlace === 1 ? 'bg-amber-400 border-amber-500 text-white' : 'bg-white border-amber-400 text-amber-500'}`}
            >
               1st Place
            </button>
            <button
               onClick={() => setSelectedPlace(2)}
               className={`flex-1 transition-all border py-2 rounded-lg text-[9px] font-black uppercase ${selectedPlace === 2 ? 'bg-gray-400 border-gray-500 text-white' : 'bg-white border-gray-200 text-gray-400'}`}
            >
               2nd Place
            </button>
            <button
               onClick={() => setSelectedPlace(3)}
               className={`flex-1 transition-all border py-2 rounded-lg text-[9px] font-black uppercase ${selectedPlace === 3 ? 'bg-gray-400 border-gray-500 text-white' : 'bg-white border-gray-200 text-gray-400'}`}
            >
               3rd Place
            </button>
          </div>
        </div>

        <button className="w-full bg-[#82C600] flex justify-center items-center gap-2 text-white font-bold uppercase tracking-widest py-3.5 rounded-xl shadow-md hover:bg-[#71ac00] transition-colors text-xs relative overflow-hidden">
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

