import { Download } from 'lucide-react'

export function SubmissionsFooter() {
  return (
    <div className="mt-8 pb-12 text-center flex flex-col items-center justify-center">
      <p className="text-xs font-semibold text-gray-500 mb-2">
        Showing your academic progress across 4 contests in the Summer 2024 Semester.
      </p>
      <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#446611] transition-colors hover:text-[#82C600]">
        Download All Performance Reports (PDF)
        <Download className="h-3.5 w-3.5" />
      </button>
    </div>
  )
}

