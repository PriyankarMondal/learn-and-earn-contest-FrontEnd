import { useState, useEffect } from 'react'
import { Eye, Edit2, Slash, ChevronLeft, ChevronRight, Loader2, UserX, UserCheck } from 'lucide-react'
import { apiRequest } from '../../../api/fetch'

export function UsersTable() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [processingId, setProcessingId] = useState(null)

  useEffect(() => {
    fetchUsers()
  }, [])

  const fetchUsers = async () => {
    try {
      setLoading(true)
      const data = await apiRequest('/auth/v1/getAllUser')
      setUsers(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const handleToggleStatus = async (userId) => {
    try {
      setProcessingId(userId)
      await apiRequest('/admin/v1/toggle-user', 'POST', { userId })
      fetchUsers() // Refresh list
    } catch (err) {
      alert(err.message)
    } finally {
      setProcessingId(null)
    }
  }

  if (loading) {
    return (
      <div className="flex h-64 items-center justify-center rounded-2xl border border-gray-100 bg-white shadow-sm">
        <Loader2 className="h-8 w-8 animate-spin text-lime-600" />
      </div>
    )
  }

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
              <th className="py-4 px-4 text-[10px] font-black uppercase tracking-widest text-gray-400">Joined Date</th>
              <th className="py-4 px-6 text-[10px] font-black uppercase tracking-widest text-gray-400 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {users.map((user) => (
              <tr key={user._id} className="hover:bg-gray-50/30 transition-colors">
                <td className="py-5 px-6">
                  <div className="flex items-center gap-3">
                    <img 
                      src={`https://ui-avatars.com/api/?name=${user.name.split(' ').join('+')}&background=${user.role === 'Admin' ? '111827' : '82C600'}&color=fff`} 
                      alt="Avatar" 
                      className="w-10 h-10 rounded-full border-2 border-white shadow-sm" 
                    />
                    <div>
                      <div className="text-sm font-bold text-gray-900 leading-tight">{user.name}</div>
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">UID: {user.username}</div>
                    </div>
                  </div>
                </td>
                <td className="py-5 px-4 text-[13px] font-semibold text-gray-600">{user.email}</td>
                <td className="py-5 px-4 text-center">
                  <span className={`px-3 py-1 rounded text-[9px] font-black uppercase tracking-widest ${
                    user.role === 'Admin' ? 'bg-gray-800 text-white' : 'bg-lime-100 text-lime-700'
                  }`}>
                    {user.role}
                  </span>
                </td>
                <td className="py-5 px-4">
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${user.isVerified ? 'bg-lime-500' : 'bg-gray-300'}`}></div>
                    <span className="text-[13px] font-bold text-gray-700">{user.isVerified ? 'Active' : 'Inactive'}</span>
                  </div>
                </td>
                <td className="py-5 px-4 text-[13px] font-semibold text-gray-500">
                  {new Date(user.createdAt).toLocaleDateString()}
                </td>
                <td className="py-5 px-6 text-right">
                  <div className="flex items-center justify-end gap-3">
                    <button 
                      onClick={() => handleToggleStatus(user._id)}
                      disabled={processingId === user._id}
                      className={`p-2 rounded-lg transition-colors ${
                        user.isVerified ? 'hover:bg-red-50 text-gray-400 hover:text-red-500' : 'hover:bg-lime-50 text-gray-400 hover:text-lime-600'
                      }`}
                      title={user.isVerified ? 'Deactivate Account' : 'Activate Account'}
                    >
                      {processingId === user._id ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                      ) : user.isVerified ? (
                        <UserX className="h-4 w-4" />
                      ) : (
                        <UserCheck className="h-4 w-4" />
                      )}
                    </button>
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

      {users.length === 0 && (
         <div className="py-12 text-center text-gray-500 font-bold text-sm">
           No users found in the system.
         </div>
      )}

      {/* Pagination Footer (Static visual) */}
      <div className="bg-white px-6 py-4 flex items-center justify-between border-t border-gray-100">
        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            Total {users.length} registered users
        </span>
      </div>
    </div>
  )
}
