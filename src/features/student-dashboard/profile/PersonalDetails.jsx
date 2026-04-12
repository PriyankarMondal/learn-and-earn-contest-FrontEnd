import { useState, useEffect } from 'react'
import { User, Mail, Phone, Loader2 } from 'lucide-react'
import { apiRequest } from '../../../api/fetch'

export function PersonalDetails({ user, onUpdate }) {
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    number: user?.number || '',
    gender: user?.gender || 'Male'
  })
  const [isSaving, setIsSaving] = useState(false)

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSave = async () => {
    try {
      setIsSaving(true)
      await apiRequest('/auth/v1/update-profile', 'PUT', formData)
      alert('Profile updated successfully!')
      if (onUpdate) onUpdate()
    } catch (err) {
      alert(err.message)
    } finally {
      setIsSaving(false)
    }
  }

  return (
    <div className="rounded-2xl border border-[#e2e8d5] bg-[#f0f6e6] p-8 shadow-sm text-left">
      <h2 className="mb-6 flex items-center gap-2 text-lg font-bold text-gray-900">
        <User className="w-5 h-5 text-lime-500" />
        Personal Details
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
        <div>
          <label className="mb-2 block text-[10px] font-extrabold uppercase tracking-widest text-[#5c8020]">
            Full Name
          </label>
          <div className="rounded-xl border border-transparent bg-[#e4ebce] px-4 py-3 text-sm font-semibold text-gray-900 shadow-sm focus-within:border-[#82C600] focus-within:ring-1 focus-within:ring-[#82C600]">
            <input 
              type="text" 
              value={formData.name}
              onChange={(e) => handleChange('name', e.target.value)}
              className="w-full bg-transparent outline-none" 
            />
          </div>
        </div>

        <div>
          <label className="mb-2 block text-[10px] font-extrabold uppercase tracking-widest text-[#5c8020]">
            Institutional Email
          </label>
          <div className="rounded-xl border border-transparent bg-[#e4ebce] px-4 py-3 text-sm font-semibold text-gray-900 shadow-sm focus-within:border-[#82C600] focus-within:ring-1 focus-within:ring-[#82C600]">
            <input 
              type="email" 
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              className="w-full bg-transparent outline-none" 
            />
          </div>
        </div>

        <div>
          <label className="mb-2 block text-[10px] font-extrabold uppercase tracking-widest text-[#5c8020]">
            Phone Number
          </label>
          <div className="rounded-xl border border-transparent bg-[#e4ebce] px-4 py-3 text-sm font-semibold text-gray-900 shadow-sm focus-within:border-[#82C600] focus-within:ring-1 focus-within:ring-[#82C600]">
            <input 
              type="text" 
              value={formData.number}
              onChange={(e) => handleChange('number', e.target.value)}
              className="w-full bg-transparent outline-none" 
            />
          </div>
        </div>

        <div>
          <label className="mb-2 block text-[10px] font-extrabold uppercase tracking-widest text-[#5c8020]">
            Gender
          </label>
          <div className="relative rounded-xl border border-transparent bg-[#e4ebce] shadow-sm focus-within:border-[#82C600] focus-within:ring-1 focus-within:ring-[#82C600]">
            <select 
              value={formData.gender}
              onChange={(e) => handleChange('gender', e.target.value)}
              className="w-full appearance-none bg-transparent px-4 py-3 text-sm font-semibold text-gray-900 outline-none cursor-pointer"
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 flex justify-end">
        <button 
          onClick={handleSave}
          disabled={isSaving}
          className="rounded-xl bg-amber-400 px-8 py-3.5 text-[11px] font-black uppercase tracking-widest text-gray-900 shadow-sm transition-all hover:bg-amber-500 flex items-center gap-2 active:scale-95"
        >
          {isSaving && <Loader2 className="w-3 h-3 animate-spin" />}
          {isSaving ? 'Saving...' : 'Save Changes'}
        </button>
      </div>
    </div>
  )
}
