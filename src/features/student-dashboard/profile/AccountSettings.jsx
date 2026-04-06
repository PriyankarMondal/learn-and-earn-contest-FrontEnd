import { useState } from 'react'
import { Mail, Eye, ShieldCheck, Settings } from 'lucide-react'

export function AccountSettings() {
  const [settings, setSettings] = useState({
    emailNotifications: true,
    profileVisibility: true,
    twoFactor: false,
  })

  const toggleSetting = (key) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  return (
    <div className="mt-8 rounded-2xl border border-[#e2e8d5] bg-[#f0f6e6] p-8 shadow-sm">
      <h2 className="mb-6 flex items-center gap-2 text-lg font-bold text-gray-900">
        <Settings className="w-5 h-5 text-[#82c600]" />
        Account Settings
      </h2>

      <div className="flex flex-col gap-4">
        {/* Toggle Row 1 */}
        <div className="flex items-center justify-between rounded-xl bg-white p-5 shadow-sm border border-gray-100">
          <div className="flex items-center gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#f0f6e6] text-[#446611]">
              <Mail className="h-5 w-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-gray-900 leading-none mb-1">Email Notifications</div>
              <div className="text-[11px] font-medium text-gray-500">Get updates on your contest status</div>
            </div>
          </div>
          {/* Custom Toggle Switch */}
          <div
            onClick={() => toggleSetting('emailNotifications')}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors cursor-pointer ${
              settings.emailNotifications ? 'bg-[#4d7013]' : 'bg-gray-200'
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                settings.emailNotifications ? 'translate-x-6' : 'translate-x-1'
              }`}
            ></span>
          </div>
        </div>

        {/* Toggle Row 2 */}
        <div className="flex items-center justify-between rounded-xl bg-white p-5 shadow-sm border border-gray-100">
          <div className="flex items-center gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#f0f6e6] text-[#446611]">
              <Eye className="h-5 w-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-gray-900 leading-none mb-1">Profile Visibility</div>
              <div className="text-[11px] font-medium text-gray-500">Make your achievements public</div>
            </div>
          </div>
          <div
            onClick={() => toggleSetting('profileVisibility')}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors cursor-pointer ${
              settings.profileVisibility ? 'bg-[#4d7013]' : 'bg-gray-200'
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                settings.profileVisibility ? 'translate-x-6' : 'translate-x-1'
              }`}
            ></span>
          </div>
        </div>

        {/* Toggle Row 3 */}
        <div className="flex items-center justify-between rounded-xl bg-white p-5 shadow-sm border border-gray-100">
          <div className="flex items-center gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#f0f6e6] text-[#446611]">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-gray-900 leading-none mb-1">Two-Factor Authentication</div>
              <div className="text-[11px] font-medium text-gray-500">Enhance account security</div>
            </div>
          </div>
          <div
            onClick={() => toggleSetting('twoFactor')}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors cursor-pointer ${
              settings.twoFactor ? 'bg-[#4d7013]' : 'bg-gray-200'
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                settings.twoFactor ? 'translate-x-6' : 'translate-x-1'
              }`}
            ></span>
          </div>
        </div>
      </div>
    </div>
  )
}
