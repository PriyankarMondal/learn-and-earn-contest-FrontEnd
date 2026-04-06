import { Plus, LayoutTemplate } from 'lucide-react'

const activeContestsData = [
  { name: 'Cloud Architecture 2024', desc: 'INTERNAL CERTIFICATION', diff: 'HARD', diffColor: 'text-red-500 bg-red-50', date: 'Dec 15, 2024', participants: '1,200', subs: '428', status: 'ACTIVE', statusColor: 'bg-lime-100 text-lime-700' },
  { name: 'Data Structures Bites', desc: 'WEEKLY CHALLENGE', diff: 'MEDIUM', diffColor: 'text-amber-500 bg-amber-50', date: 'Nov 30, 2024', participants: '2,500', subs: '1,102', status: 'CLOSED', statusColor: 'bg-gray-100 text-gray-500' },
  { name: 'Intro to Next Logic', desc: 'FOUNDATION SERIES', diff: 'EASY', diffColor: 'text-lime-500 bg-lime-50', date: 'Dec 05, 2024', participants: '4,800', subs: '3,240', status: 'ACTIVE', statusColor: 'bg-lime-100 text-lime-700' },
]

export function ContestManagementTable() {
  return (
    <div className="mb-10 bg-[#f4f8eb] rounded-xl shadow-sm border border-gray-100/50 p-6 overflow-hidden">
      <div className="flex justify-between items-center mb-6">
        <h3 className="flex items-center gap-2 text-[13px] font-extrabold uppercase tracking-widest text-gray-900">
           <LayoutTemplate className="w-4 h-4 text-[#82C600]" />
           Active Contest Management
        </h3>
        <button className="flex items-center gap-1.5 bg-[#82C600] text-white px-3 py-1.5 rounded-lg text-xs font-bold hover:bg-[#71ac00] transition-colors">
          <Plus className="w-3.5 h-3.5" />
          Create New Contest
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="py-3 text-[10px] font-extrabold uppercase tracking-widest text-gray-400">Contest Name</th>
              <th className="py-3 text-[10px] font-extrabold uppercase tracking-widest text-gray-400">Difficulty</th>
              <th className="py-3 text-[10px] font-extrabold uppercase tracking-widest text-gray-400">Deadline</th>
              <th className="py-3 text-[10px] font-extrabold uppercase tracking-widest text-gray-400 hidden lg:table-cell">Participants</th>
              <th className="py-3 text-[10px] font-extrabold uppercase tracking-widest text-gray-400 hidden sm:table-cell">Submissions</th>
              <th className="py-3 text-[10px] font-extrabold uppercase tracking-widest text-gray-400">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {activeContestsData.map((row, i) => (
              <tr key={i} className="hover:bg-gray-50/50 group transition-colors">
                <td className="py-4 pr-4">
                  <div className="font-bold text-gray-900 text-sm group-hover:text-[#446611] transition-colors">{row.name}</div>
                  <div className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mt-0.5">{row.desc}</div>
                </td>
                <td className="py-4">
                  <span className={`px-2 py-0.5 rounded text-[9px] font-extrabold tracking-widest ${row.diffColor}`}>
                    {row.diff}
                  </span>
                </td>
                <td className="py-4 text-xs font-semibold text-gray-600">{row.date}</td>
                <td className="py-4 text-sm font-bold text-gray-900 hidden lg:table-cell">{row.participants}</td>
                <td className="py-4 text-sm font-bold text-gray-900 hidden sm:table-cell">{row.subs}</td>
                <td className="py-4">
                  <span className={`px-2.5 py-1 rounded text-[9px] font-extrabold uppercase tracking-widest ${row.statusColor}`}>
                    {row.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}


