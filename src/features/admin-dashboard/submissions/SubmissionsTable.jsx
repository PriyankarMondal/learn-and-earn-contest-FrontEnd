import { Code, ExternalLink, Eye, ChevronLeft, ChevronRight } from 'lucide-react'

const tableData = [
  {
    name: 'Alex Thompson', email: 'alex.t@student.edu', avatar: 'https://ui-avatars.com/api/?name=Alex+Thompson&background=0284c7&color=fff',
    contest: 'Cloud Architecture', date: 'Oct 24, 2023',
    status: 'PENDING', statusColor: 'bg-red-50 text-red-600',
    type: 'evaluate'
  },
  {
    name: 'Sarah Jenkins', email: 's.jenkins@scholar.com', avatar: 'https://ui-avatars.com/api/?name=Sarah+Jenkins&background=c2410c&color=fff',
    contest: 'MERN Stack', date: 'Oct 23, 2023',
    status: 'WINNER', statusColor: 'bg-amber-50 text-amber-600 border border-amber-200',
    type: 'completed'
  },
  {
    name: 'Michael Chen', email: 'mchen@tech.edu', avatar: 'https://ui-avatars.com/api/?name=Michael+Chen&background=0f766e&color=fff',
    contest: 'UI/UX Foundations', date: 'Oct 22, 2023',
    status: 'EVALUATED', statusColor: 'bg-lime-100 text-lime-700',
    type: 'view'
  },
  {
    name: 'Elena Rodriguez', email: 'e.rod@univ.edu', avatar: 'https://ui-avatars.com/api/?name=Elena+Rodriguez&background=0284c7&color=fff',
    contest: 'Cloud Architecture', date: 'Oct 21, 2023',
    status: 'PENDING', statusColor: 'bg-red-50 text-red-600',
    type: 'evaluate'
  }
]

export function SubmissionsTable() {
  return (
    <div className="mb-10 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50/50 border-b border-gray-100">
              <th className="py-4 px-6 text-[10px] font-black uppercase tracking-widest text-gray-400">Student Name</th>
              <th className="py-4 px-4 text-[10px] font-black uppercase tracking-widest text-gray-400">Contest Name</th>
              <th className="py-4 px-4 text-[10px] font-black uppercase tracking-widest text-gray-400">Submitted Date</th>
              <th className="py-4 px-4 text-[10px] font-black uppercase tracking-widest text-gray-400">Links</th>
              <th className="py-4 px-4 text-[10px] font-black uppercase tracking-widest text-gray-400">Status</th>
              <th className="py-4 px-6 text-[10px] font-black uppercase tracking-widest text-gray-400 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {tableData.map((row, i) => (
              <tr key={i} className="hover:bg-gray-50/30 transition-colors">
                <td className="py-5 px-6">
                  <div className="flex items-center gap-3">
                    <img src={row.avatar} alt="Avatar" className="w-10 h-10 rounded-full border-2 border-white shadow-sm" />
                    <div>
                      <div className="text-sm font-bold text-gray-900 leading-tight">{row.name}</div>
                      <div className="text-[10px] font-bold text-gray-400">{row.email}</div>
                    </div>
                  </div>
                </td>
                <td className="py-5 px-4 text-xs font-bold text-gray-700">{row.contest}</td>
                <td className="py-5 px-4 text-xs font-semibold text-gray-500 whitespace-nowrap">{row.date}</td>
                <td className="py-5 px-4">
                  <div className="flex items-center gap-2">
                    <Code className="h-4 w-4 text-lime-600 hover:text-lime-700 cursor-pointer" />
                    <ExternalLink className="h-4 w-4 text-lime-600 hover:text-lime-700 cursor-pointer" />
                  </div>
                </td>
                <td className="py-5 px-4">
                  <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${row.statusColor}`}>
                    {row.status}
                  </span>
                </td>
                <td className="py-5 px-6 text-right">
                  <div className="flex items-center justify-end gap-3">
                    {row.type === 'evaluate' ? (
                       <button className="bg-amber-400 hover:bg-amber-500 text-white text-[9px] font-black uppercase tracking-widest px-4 py-2 rounded-lg shadow-sm transition-colors">
                         Evaluate
                       </button>
                    ) : row.type === 'completed' ? (
                      <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Completed</span>
                    ) : (
                      <button className="bg-amber-100 hover:bg-amber-200 text-amber-600 text-[9px] font-black uppercase tracking-widest px-4 py-2 rounded-lg shadow-sm transition-colors">
                        Evaluate
                      </button>
                    )}
                    <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
                      <Eye className="h-4 w-4 text-gray-400" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Style Footer */}
      <div className="bg-gray-50/50 px-6 py-4 flex items-center justify-between border-t border-gray-100">
        <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Showing 1-4 of 89 pending submissions</span>
        <div className="flex gap-2">
          <button className="p-1 rounded bg-white border border-gray-200 text-gray-400 hover:bg-gray-50 transition-colors">
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button className="p-1 rounded bg-white border border-gray-200 text-gray-400 hover:bg-gray-50 transition-colors">
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  )
}

