import { useState } from 'react'
import { Plus, Edit2, Eye, Clipboard, Trash2, FlaskConical, Link2, Code2 } from 'lucide-react'
import { CreateContestModal } from './CreateContestModal'
import { useSearch } from '../../../context/SearchContext'

const activeContestsData = [
  { 
    name: 'Quantum Physics Olympiad', 
    icon: FlaskConical, iconColor: 'text-lime-600 bg-lime-50',
    diff: 'EXPERT', diffColor: 'text-red-600 bg-red-50', 
    date: 'Oct 30, 2023', 
    participants: '1,240', 
    subs: '856', 
    status: 'Active', statusColor: 'bg-lime-500' 
  },
  { 
    name: 'Classical Literature Essay', 
    icon: Link2, iconColor: 'text-amber-500 bg-amber-50',
    diff: 'INTERMEDIATE', diffColor: 'text-[#5c8020] bg-[#e4ebce]', 
    date: 'Nov 05, 2023', 
    participants: '3,892', 
    subs: '1,120', 
    status: 'Active', statusColor: 'bg-lime-500' 
  },
  { 
    name: 'Algorithmic Efficiency Cup', 
    icon: Code2, iconColor: 'text-gray-500 bg-gray-100',
    diff: 'EXPERT', diffColor: 'text-red-600 bg-red-50', 
    date: 'Oct 28, 2023', 
    participants: '856', 
    subs: '412', 
    status: 'Draft', statusColor: 'bg-gray-400' 
  },
]

export function ActiveContestsList() {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)
  const { searchQuery } = useSearch()

  const filteredContests = activeContestsData.filter(contest => {
    const name = contest.name || ''
    const query = (searchQuery || '').toLowerCase()
    return name.toLowerCase().includes(query)
  })

  return (
    <div className="mb-8">
      <div className="flex justify-between items-end mb-6">
        <div>
          <h3 className="text-xl font-bold text-gray-900 tracking-tight">Active Contest Management</h3>
          <p className="text-sm font-medium text-gray-500 mt-1">Review and manage ongoing academic challenges</p>
        </div>
        <button 
          onClick={() => setIsCreateModalOpen(true)}
          className="flex items-center gap-2 bg-[#82C600] text-white px-5 py-2.5 rounded-lg text-sm font-bold shadow-sm hover:bg-[#71ac00] transition-colors active:scale-95"
        >
          <Plus className="w-4 h-4" />
          Create New Contest
        </button>
      </div>

      <div className="bg-[#fcfdfa] border border-gray-100/50 rounded-2xl shadow-sm overflow-hidden p-2">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="py-4 px-4 text-[10px] font-extrabold uppercase tracking-widest text-gray-400">Contest Name</th>
              <th className="py-4 text-[10px] font-extrabold uppercase tracking-widest text-gray-400">Difficulty</th>
              <th className="py-4 text-[10px] font-extrabold uppercase tracking-widest text-gray-400">Deadline</th>
              <th className="py-4 text-[10px] font-extrabold uppercase tracking-widest text-gray-400">Participants</th>
              <th className="py-4 text-[10px] font-extrabold uppercase tracking-widest text-gray-400">Submissions</th>
              <th className="py-4 text-[10px] font-extrabold uppercase tracking-widest text-gray-400">Status</th>
              <th className="py-4 pr-4 pl-2 text-[10px] font-extrabold uppercase tracking-widest text-gray-400 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="space-y-2 relative">
            {filteredContests.length === 0 ? (
              <tr>
                <td colSpan="7" className="py-8 text-center text-gray-500 font-bold text-sm">
                  {searchQuery ? "No matches found." : "No active contests."}
                </td>
              </tr>
            ) : (
              filteredContests.map((row, i) => (
                <tr key={i} className="group relative">
                  <td className="px-2" colSpan="7">
                    <div className="flex items-center justify-between bg-[#f4f8eb] rounded-xl p-4 transition-colors mb-2">
                      <div className="flex items-center gap-4 w-[25%]">
                        <div className={`p-2 rounded-lg ${row.iconColor}`}>
                          <row.icon className="w-4 h-4" />
                        </div>
                        <div className="font-bold text-gray-900 text-sm whitespace-nowrap">{row.name}</div>
                      </div>
                      
                      <div className="w-[12%]">
                         <span className={`px-2 py-0.5 rounded text-[9px] font-black tracking-widest ${row.diffColor}`}>{row.diff}</span>
                      </div>

                      <div className="text-xs font-semibold text-gray-600 w-[15%]">{row.date}</div>
                      
                      <div className="text-sm font-bold text-gray-900 w-[12%]">{row.participants}</div>
                      
                      <div className="text-sm font-bold text-gray-900 w-[12%]">{row.subs}</div>
                      
                      <div className="flex items-center gap-2 w-[10%]">
                        <div className={`w-2 h-2 rounded-full ${row.statusColor}`}></div>
                        <span className={`text-xs font-bold ${row.status === 'Active' ? 'text-lime-600' : 'text-gray-500'}`}>{row.status}</span>
                      </div>

                      <div className="flex items-center justify-end gap-3 flex-1">
                        <button className="text-gray-400 hover:text-gray-700 transition-colors"><Edit2 className="w-4 h-4" /></button>
                        <button className="text-gray-400 hover:text-gray-700 transition-colors"><Eye className="w-4 h-4" /></button>
                        <button className="text-gray-400 hover:text-gray-700 transition-colors"><Clipboard className="w-4 h-4" /></button>
                        <button className="text-gray-400 hover:text-red-500 transition-colors"><Trash2 className="w-4 h-4" /></button>
                      </div>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Create Contest Modal */}
      {isCreateModalOpen && (
        <CreateContestModal onClose={() => setIsCreateModalOpen(false)} />
      )}
    </div>
  )
}
