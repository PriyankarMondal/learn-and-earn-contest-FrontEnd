import { AlertCircle, Code, ExternalLink, ScrollText } from 'lucide-react'

const evaluationsData = [
  { contest: 'Cloud Architecture 2024', student: 'Alex Rivera', avatar: 'AR', bg: 'bg-lime-500', date: 'Dec 10, 2024', repo: true, live: true },
  { contest: 'Data Structures Bites', student: 'Elena Ruiz', avatar: 'ER', bg: 'bg-amber-500', date: 'Dec 11, 2024', repo: true, live: false },
  { contest: 'React Systems Design', student: 'Sarah Chen', avatar: 'SC', bg: 'bg-emerald-500', date: 'Dec 12, 2024', repo: true, live: true },
  { contest: 'Intro to Next Logic', student: 'Marcus Thorne', avatar: 'MT', bg: 'bg-slate-500', date: 'Dec 12, 2024', repo: true, live: true },
]

export function PendingEvaluations() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 overflow-hidden">
      <div className="flex justify-between items-center mb-6">
        <h3 className="flex items-center gap-2 text-[13px] font-extrabold uppercase tracking-widest text-gray-900">
           <AlertCircle className="w-4 h-4 text-red-500" />
           Pending Evaluations (89)
        </h3>
        <span className="bg-red-500 text-white text-[9px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-full">
          89 Pending
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="py-3 text-[10px] font-extrabold uppercase tracking-widest text-gray-400">Contest Name</th>
              <th className="py-3 text-[10px] font-extrabold uppercase tracking-widest text-gray-400">Student Name</th>
              <th className="py-3 text-[10px] font-extrabold uppercase tracking-widest text-gray-400">Submitted On</th>
              <th className="py-3 text-[10px] font-extrabold uppercase tracking-widest text-gray-400">Github Link</th>
              <th className="py-3 text-[10px] font-extrabold uppercase tracking-widest text-gray-400">Live URL</th>
              <th className="py-3 text-[10px] font-extrabold uppercase tracking-widest text-gray-400 text-center">Evaluate</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {evaluationsData.map((row, i) => (
              <tr key={i} className="hover:bg-gray-50/50 group transition-colors">
                <td className="py-4 pr-4">
                  <div className="font-bold text-gray-900 text-sm">{row.contest}</div>
                </td>
                <td className="py-4">
                  <div className="flex items-center gap-2">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[9px] font-bold text-white ${row.bg}`}>
                      {row.avatar}
                    </div>
                    <span className="text-sm font-semibold text-gray-800">{row.student}</span>
                  </div>
                </td>
                <td className="py-4 text-xs font-semibold text-gray-500">{row.date}</td>
                <td className="py-4">
                   <button className="flex items-center gap-1.5 text-xs font-bold text-emerald-600 hover:text-emerald-700 bg-emerald-50 px-2 py-1 rounded">
                     <Code className="w-3.5 h-3.5" /> Repo
                   </button>
                </td>
                <td className="py-4">
                   {row.live ? (
                     <button className="flex items-center gap-1.5 text-xs font-bold text-lime-600 hover:text-lime-700 bg-lime-50 px-2 py-1 rounded">
                       <ExternalLink className="w-3.5 h-3.5" /> Live
                     </button>
                   ) : (
                     <span className="text-[9px] font-extrabold uppercase tracking-widest text-gray-300">No Link</span>
                   )}
                </td>
                <td className="py-4 text-center">
                  <button className="h-8 w-8 inline-flex items-center justify-center rounded-lg bg-gray-100 text-gray-400 hover:bg-[#82c600] hover:text-white transition-colors">
                    <ScrollText className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
