import { Lightbulb } from 'lucide-react'

export function EurekaMoment() {
  return (
    <div className="mt-6 rounded-2xl bg-[#fcdbb4] p-6 shadow-sm border border-[#f3cca0] flex gap-4 items-start">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#2d1b06] text-[#f9bd1c] shadow-sm">
        <Lightbulb className="h-5 w-5" />
      </div>
      <div>
        <h4 className="text-sm font-bold text-[#452b0a] mb-1">Eureka Moment!</h4>
        <p className="text-xs font-medium text-[#7a5322] leading-relaxed">
          You are 550 points away from Scholar Level 5. Keep pushing!
        </p>
      </div>
    </div>
  )
}
