import { Eye, Edit2, Slash, ChevronLeft, ChevronRight } from 'lucide-react'

const tableData = [
  {
    name: 'Elena Rodriguez', email: 'e.rodriguez@scholar.edu', id: 'SCH-88219',
    avatar: 'https://ui-avatars.com/api/?name=Elena+Rodriguez&background=0284c7&color=fff',
    role: 'STUDENT', roleBg: 'bg-lime-100 text-lime-700',
    status: 'Active', statusColor: 'bg-lime-500',
    lastSession: '2 mins ago'
  },
  {
    name: 'Marcus Thorne', email: 'm.thorne@scholar.edu', id: 'ADM-00412',
    avatar: 'https://ui-avatars.com/api/?name=Marcus+Thorne&background=0284c7&color=fff',
    role: 'ADMIN', roleBg: 'bg-gray-800 text-white',
    status: 'Active', statusColor: 'bg-lime-500',
    lastSession: 'Yesterday'
  },
  {
    name: 'Arjun Singh', email: 'a.singh@scholar.edu', id: 'SCH-99012',
    avatar: 'https://ui-avatars.com/api/?name=Arjun+Singh&background=0284c7&color=fff',
    role: 'STUDENT', roleBg: 'bg-lime-100 text-lime-700',
    status: 'Inactive', statusColor: 'bg-gray-400',
    lastSession: '3 weeks ago'
  },
  {
    name: 'Lana Volkov', email: 'l.volkov@scholar.edu', id: 'Registration Pending',
    avatar: 'https://ui-avatars.com/api/?name=Lana+Volkov&background=0284c7&color=fff',
    role: 'STUDENT', roleBg: 'bg-lime-100 text-lime-700',
    status: 'Pending', statusColor: 'bg-amber-400',
    lastSession: 'Never',
    isPending: true
  }
]

export function UsersTable() {
  return (
    <div className="mb-10 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50/50 border-b border-gray-100">
              <th className="py-4 px-6 text-[10px] font-black uppercase tracking-widest text-gray-400">Full Name</th>
              <th className="py-4 px-4 text-[10px] font-black uppercase tracking-widest text-gray-400">Access Email</th>
              <th className="py-4 px-4 text-[10px] font-black uppercase tracking-widest text-gray-400 text-center">Role</th>
              <th className="py-4 px-4 text-[10px] font-black uppercase tracking-widest text-gray-400">Status</th>
              <th className="py-4 px-4 text-[10px] font-black uppercase tracking-widest text-gray-400">Last Session</th>
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
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">ID: {row.id}</div>
                    </div>
                  </div>
                </td>
                <td className="py-5 px-4 text-[13px] font-semibold text-gray-600">{row.email}</td>
                <td className="py-5 px-4 text-center">
                  <span className={`px-3 py-1 rounded text-[9px] font-black uppercase tracking-widest ${row.roleBg}`}>
                    {row.role}
                  </span>
                </td>
                <td className="py-5 px-4">
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${row.statusColor}`}></div>
                    <span className="text-[13px] font-bold text-gray-700">{row.status}</span>
                  </div>
                </td>
                <td className="py-5 px-4 text-[13px] font-semibold text-gray-500">{row.lastSession}</td>
                <td className="py-5 px-6 text-right">
                  <div className="flex items-center justify-end gap-3">
                    {row.isPending ? (
                      <button className="bg-amber-400 hover:bg-amber-500 text-white text-[9px] font-black uppercase tracking-widest px-4 py-2 rounded-lg shadow-sm transition-colors mr-2">
                        Verify Now
                      </button>
                    ) : null}
                    <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
                      <Eye className="h-4 w-4 text-gray-400" />
                    </button>
                    <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
                      <Edit2 className="h-4 w-4 text-gray-400" />
                    </button>
                    <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
                      <Slash className={`h-4 w-4 ${row.status === 'Inactive' ? 'text-red-400' : 'text-gray-400'}`} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Footer */}
      <div className="bg-white px-6 py-4 flex items-center justify-between border-t border-gray-100">
        <div className="flex items-center gap-3">
           <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200 text-gray-400"><ChevronLeft className="w-4 h-4" /></button>
           <button className="px-3.5 py-1.5 rounded-lg bg-[#82C600] text-white text-xs font-bold shadow-sm">1</button>
           <button className="px-3.5 py-1.5 rounded-lg hover:bg-gray-100 text-gray-600 text-xs font-bold transition-colors">2</button>
           <button className="px-3.5 py-1.5 rounded-lg hover:bg-gray-100 text-gray-600 text-xs font-bold transition-colors">3</button>
           <span className="text-gray-400 px-2">...</span>
           <button className="px-3.5 py-1.5 rounded-lg hover:bg-gray-100 text-gray-600 text-xs font-bold transition-colors">25</button>
           <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200 text-gray-400"><ChevronRight className="w-4 h-4" /></button>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Show</span>
          <div className="flex items-center gap-2 bg-gray-100 px-3 py-1.5 rounded-lg border border-gray-200">
            <span className="text-xs font-bold text-gray-800 tracking-tight">10</span>
          </div>
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">per page</span>
        </div>
      </div>
    </div>
  )
}

