import { useState, useEffect } from 'react'
import { Plus, Edit2, Eye, Clipboard, Trash2, Trophy, Loader2 } from 'lucide-react'
import { CreateContestModal } from './CreateContestModal'
import { useSearch } from '../../../context/SearchContext'
import { apiRequest } from '../../../api/fetch'
import { toast } from 'react-toastify'

export function ActiveContestsList() {
  const [contests, setContests] = useState([])
  const [loading, setLoading] = useState(true)
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)
  const { searchQuery } = useSearch()

  const loadContests = async () => {
    try {
      setLoading(true)
      // Use the student API to get the list (admins can access this too)
      const data = await apiRequest('/student/v1/contests')
      setContests(data)
    } catch (error) {
      console.error('Admin Contest Load Error:', error)
      toast.error('Failed to load live contests')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadContests()
  }, [])

  const filteredContests = contests.filter(contest => {
    const title = contest.title || ''
    const query = (searchQuery || '').toLowerCase()
    return title.toLowerCase().includes(query)
  })

  if (loading) {
    return (
      <div className="flex items-center justify-center p-20">
        <Loader2 className="w-8 h-8 text-[#82C600] animate-spin" />
      </div>
    )
  }

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
              <th className="py-4 text-[10px] font-extrabold uppercase tracking-widest text-gray-400">Category</th>
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
                  {searchQuery ? "No matches found." : "No active contests in the database."}
                </td>
              </tr>
            ) : (
              filteredContests.map((c, i) => (
                <tr key={c._id || i} className="group relative">
                  <td className="px-2" colSpan="7">
                    <div className="flex items-center justify-between bg-[#f4f8eb] rounded-xl p-4 transition-colors mb-2">
                      <div className="flex items-center gap-4 w-[25%] overflow-hidden">
                        <div className={`p-2 rounded-lg bg-lime-50 text-lime-600`}>
                          <Trophy className="w-4 h-4" />
                        </div>
                        <div className="font-bold text-gray-900 text-sm truncate">{c.title}</div>
                      </div>
                      
                      <div className="w-[12%]">
                         <span className={`px-2 py-0.5 rounded text-[9px] font-black tracking-widest bg-[#e4ebce] text-[#5c8020]`}>
                           {c.category?.toUpperCase() || 'GENERAL'}
                         </span>
                      </div>

                      <div className="text-xs font-semibold text-gray-600 w-[15%]">
                        {new Date(c.endDate).toLocaleDateString()}
                      </div>
                      
                      <div className="text-sm font-bold text-gray-900 w-[12%]">{c.participantsCount || 0}</div>
                      
                      <div className="text-sm font-bold text-gray-900 w-[12%]">{c.submissionsCount || 0}</div>
                      
                      <div className="flex items-center gap-2 w-[10%]">
                        <div className={`w-2 h-2 rounded-full ${c.status === 'running' ? 'bg-lime-500' : 'bg-gray-400'}`}></div>
                        <span className={`text-xs font-bold ${c.status === 'running' ? 'text-lime-600' : 'text-gray-500'}`}>
                          {c.status?.toUpperCase() || 'DRAFT'}
                        </span>
                      </div>

                      <div className="flex items-center justify-end gap-3 flex-1">
                        <button className="text-gray-400 hover:text-gray-700 transition-colors" title="Edit"><Edit2 className="w-4 h-4" /></button>
                        <button className="text-gray-400 hover:text-gray-700 transition-colors" title="View"><Eye className="w-4 h-4" /></button>
                        <button className="text-gray-400 hover:text-gray-700 transition-colors" title="Stats"><Clipboard className="w-4 h-4" /></button>
                        <button className="text-gray-400 hover:text-red-500 transition-colors" title="Delete"><Trash2 className="w-4 h-4" /></button>
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
        <CreateContestModal onClose={() => {
          setIsCreateModalOpen(false);
          loadContests(); // Refresh list after creation
        }} />
      )}
    </div>
  )
}
