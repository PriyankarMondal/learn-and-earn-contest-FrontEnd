import { CheckCircle2, Star } from 'lucide-react'

export function RecentActivity() {
  return (
    <div className="mb-10">
      <h3 className="mb-4 flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-widest text-gray-500">
        <Star className="h-4 w-4 text-lime-500" />
        Recent Activity
      </h3>
      
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm border border-gray-100">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-lime-100 text-lime-600">
            <CheckCircle2 className="h-4 w-4" />
          </div>
          <p className="text-sm text-gray-600 flex-1">
            Your submission for <strong>Neural Architecture</strong> was received on Dec 10.
          </p>
          <span className="text-[10px] uppercase font-bold text-gray-400">Just now</span>
        </div>

        <div className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm border border-gray-100">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-600">
            <Star className="h-4 w-4" />
          </div>
          <p className="text-sm text-gray-600 flex-1">
            Feedback for <strong>Smart Contract Audit</strong> is now available.
          </p>
          <span className="text-[10px] uppercase font-bold text-gray-400">2h ago</span>
        </div>
      </div>
    </div>
  )
}
