import { Medal } from 'lucide-react'

const eliteData = [
  { rank: '1ST RANK', name: 'Dr. Julianne Frye', prize: '₹2,900', medalColor: 'text-yellow-500', numColor: 'bg-yellow-500', cardBg: 'bg-[#f4f8eb]', outline: 'border-[#d6e0b7]' },
  { rank: '2ND RANK', name: 'Liam Davies', prize: '₹1,200', medalColor: 'text-gray-400', numColor: 'bg-gray-400', cardBg: 'bg-white', outline: 'border-gray-100' },
  { rank: '3RD RANK', name: 'Kenji Sato', prize: '₹600', medalColor: 'text-amber-600', numColor: 'bg-amber-600', cardBg: 'bg-white', outline: 'border-gray-100' },
]

export function EliteWinnersPanel() {
  return (
    <div className="bg-[#f0f6e6] rounded-2xl shadow-[inset_0_1px_rgba(255,255,255,0.8)] border border-[#e2e8d5] p-6 h-full flex flex-col">
      <div className="mb-6">
        <h3 className="flex items-center gap-2 text-[15px] font-extrabold text-gray-900 mb-1">
          <Medal className="w-5 h-5 text-amber-500" />
          Elite Winners
        </h3>
        <p className="text-[9px] font-black uppercase tracking-widest text-gray-500 mt-2">NEUROSCIENCE CHALLENGE &bull; FALL 2023</p>
      </div>

      <div className="flex flex-col gap-3 flex-1">
        {eliteData.map((winner, i) => (
          <div key={i} className={`flex items-center gap-4 p-4 rounded-xl shadow-sm border ${winner.outline} ${winner.cardBg}`}>
            <div className="relative">
              <Medal className={`w-8 h-8 ${winner.medalColor}`} />
              <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full flex justify-center items-center text-white text-[8px] font-black ${winner.numColor}`}>
                {i + 1}
              </div>
            </div>
            <div>
              <div className="text-[9px] font-extrabold uppercase tracking-widest text-gray-400 mb-0.5">{winner.rank}</div>
              <div className="text-[13px] font-bold text-gray-900">{winner.name}</div>
              <div className="text-sm font-black text-[#5c8020]">{winner.prize}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <a href="#/admin/leaderboard" className="text-[10px] font-extrabold uppercase tracking-widest text-[#82c600] hover:text-[#71ac00] flex items-center gap-1 transition-colors">
          View Full Leaderboard &rarr;
        </a>
      </div>
    </div>
  )
}
