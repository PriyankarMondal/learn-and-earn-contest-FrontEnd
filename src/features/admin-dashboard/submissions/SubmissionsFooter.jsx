import { Star } from 'lucide-react'

export function SubmissionsFooter() {
  return (
    <div className="mt-12 flex flex-col xl:flex-row gap-8">
      {/* Excellence Banner */}
      <div className="flex-1 relative rounded-3xl bg-gradient-to-br from-[#4d6b00] to-[#2c3d00] p-10 overflow-hidden shadow-lg border border-[#3e5600]">
        <div className="relative z-10 max-w-2xl">
          <h3 className="text-3xl font-black text-white tracking-tight mb-4 leading-tight italic">Desun Academy Excellence</h3>
          <p className="text-sm font-semibold text-lime-100/80 leading-relaxed mb-6">
            Our student submission rate has increased by 18% this semester. Efficient evaluation ensures scholarship grants are processed within 48 hours of submission.
          </p>
        </div>
        
        {/* Decorative Watermark */}
        <div className="absolute right-[-20px] bottom-[-20px] opacity-[0.08] pointer-events-none transform rotate-12">
          <Star className="w-[320px] h-[320px] text-white" fill="currentColor" />
        </div>
      </div>

      {/* Scholarship Quota Card */}
      <div className="w-full xl:w-[320px] shrink-0 rounded-3xl bg-[#fac430] p-8 shadow-lg border border-[#e2b028] flex flex-col justify-between">
        <div>
          <h4 className="text-lg font-black text-gray-900 tracking-tight leading-tight">Scholarship Quota</h4>
          <p className="text-xs font-bold text-gray-800/60 mt-2">30 slots remaining for this cycle.</p>
        </div>

        <button className="w-full mt-6 bg-gray-900 text-white text-[10px] font-black uppercase tracking-widest py-3.5 rounded-xl hover:bg-black transition-colors shadow-sm">
          Manage Slots
        </button>
      </div>
    </div>
  )
}
