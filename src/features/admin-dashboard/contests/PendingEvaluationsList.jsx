import { Code, ExternalLink } from 'lucide-react'
import { useSearch } from '../../../context/SearchContext'

const pendingData = [
  {
    student: 'Arjun Mehra', id: '#4421',
    contest: 'Quantum Physics',
    date: 'Today, 2:45 PM',
    github: true, live: true,
    avatar: 'https://ui-avatars.com/api/?name=Arjun+Mehra&background=0284c7&color=fff'
  },
  {
    student: 'Aditi Rao', id: '#4419',
    contest: 'Classical Lit',
    date: 'Oct 24, 11:20 AM',
    github: true, live: true,
    avatar: 'https://ui-avatars.com/api/?name=Aditi+Rao&background=c2410c&color=fff'
  },
  {
    student: 'Siddharth Verma', id: '#4392',
    contest: 'Algorithmic Efficiency',
    date: 'Oct 23, 09:15 AM',
    github: true, live: true,
    avatar: 'https://ui-avatars.com/api/?name=Siddharth+Verma&background=0f766e&color=fff'
  }
]

export function PendingEvaluationsList() {
  const { searchQuery } = useSearch()

  const filteredData = pendingData.filter(row => {
    const student = row.student || ''
    const contest = row.contest || ''
    const query = (searchQuery || '').toLowerCase()
    return student.toLowerCase().includes(query) || contest.toLowerCase().includes(query)
  })

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-[#e2e8d5] p-6 mt-8">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="text-lg font-bold text-gray-900">Pending Evaluations</h3>
          <p className="text-[11px] font-medium text-gray-500 mt-1">Academic submissions requiring immediate attention</p>
        </div>
        <span className="bg-red-50 text-[#dc2626] text-[10px] font-extrabold px-3 py-1.5 rounded-full">
          {filteredData.length} Shown
        </span>
      </div>

      <div className="overflow-x-auto mb-6">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="pb-3 text-[9px] font-extrabold uppercase tracking-widest text-gray-400">Student</th>
              <th className="pb-3 text-[9px] font-extrabold uppercase tracking-widest text-gray-400">Contest</th>
              <th className="pb-3 text-[9px] font-extrabold uppercase tracking-widest text-gray-400">Submitted On</th>
              <th className="pb-3 text-[9px] font-extrabold uppercase tracking-widest text-gray-400">Submission Links</th>
              <th className="pb-3 pr-2 text-[9px] font-extrabold uppercase tracking-widest text-gray-400 text-right">Evaluate</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {filteredData.length === 0 ? (
              <tr>
                <td colSpan="5" className="py-8 text-center text-gray-500 font-bold text-sm">
                  No matching pending evaluations found.
                </td>
              </tr>
            ) : (
              filteredData.map((row, i) => (
                <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                  <td className="py-4">
                    <div className="flex items-center gap-3">
                      <img src={row.avatar} alt="Avatar" className="w-8 h-8 rounded-full border border-gray-100" />
                      <div>
                        <div className="text-xs font-bold text-gray-900">{row.student}</div>
                        <div className="text-[9px] font-bold text-gray-400">ID: {row.id}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 text-xs font-semibold text-gray-800">{row.contest}</td>
                  <td className="py-4">
                    <div className="text-xs font-semibold text-gray-500 whitespace-nowrap">{row.date.split(',')[0]},</div>
                    <div className="text-xs font-semibold text-gray-500">{row.date.split(',')[1]}</div>
                  </td>
                  <td className="py-4">
                    <div className="flex items-center gap-3">
                      <a href="#" className="flex items-center gap-1 text-[10px] font-bold text-[#82C600] hover:text-[#71ac00]">
                        <Code className="w-3 h-3" /> GitHub
                      </a>
                      <a href="#" className="flex items-center gap-1 text-[10px] font-bold text-amber-500 hover:text-amber-600">
                        <ExternalLink className="w-3 h-3" /> Live URL
                      </a>
                    </div>
                  </td>
                  <td className="py-4 text-right pr-2">
                    <button className="bg-[#82C600] hover:bg-[#71ac00] text-white text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-lg shadow-sm transition-colors">
                      Evaluate
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <button className="w-full bg-white border-2 border-[#e4ebce] text-[#71ac00] font-extrabold text-[11px] uppercase tracking-widest py-3 rounded-xl hover:bg-[#f4f8eb] transition-colors">
        View All Submissions
      </button>
    </div>
  )
}
