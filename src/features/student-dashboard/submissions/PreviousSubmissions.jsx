import { useState, useEffect } from 'react'
import { Brain, TrendingUp, Code2, ArrowRight, Eye, Loader2, Database, Globe, Layout, Megaphone } from 'lucide-react'
import { fetchMySubmissions } from '../../../api/student.api'
import { toast } from 'react-toastify'

const categoryIcons = {
  'MERN Stack': { icon: Database, bg: 'bg-lime-50 text-lime-500 border-lime-100' },
  'UI/UX Design': { icon: Palette, bg: 'bg-violet-50 text-violet-500 border-violet-100' },
  'Web Development': { icon: Globe, bg: 'bg-sky-50 text-sky-500 border-sky-100' },
  'Graphics Design': { icon: Layout, bg: 'bg-amber-50 text-amber-500 border-amber-100' },
  'Digital Marketing': { icon: Megaphone, bg: 'bg-cyan-50 text-cyan-500 border-cyan-100' },
  'Fullstack': { icon: Code2, bg: 'bg-indigo-50 text-indigo-500 border-indigo-100' }
}

import { Palette } from 'lucide-react' // Palette was missing in the top but used in map

export function PreviousSubmissions({ submissions = [], loading = false }) {
  if (loading) {
    return (
      <div className="flex items-center justify-center p-20">
        <Loader2 className="w-8 h-8 text-[#82C600] animate-spin" />
      </div>
    )
  }

  if (submissions.length === 0) {
    return (
      <div className="py-20 bg-white rounded-2xl border border-dashed border-gray-200 text-center mb-12">
        <p className="text-sm font-medium text-gray-400">You haven't submitted any contest entries yet.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
      {submissions.map((item) => {
        const config = categoryIcons[item.contest?.category] || { icon: Code2, bg: 'bg-gray-50 text-gray-500 border-gray-100' }
        const Icon = config.icon
        const isReviewed = item.status === 'reviewed'

        return (
          <div key={item._id} className="flex flex-col justify-between rounded-2xl bg-white p-6 shadow-sm border border-gray-100 h-full transition-all hover:shadow-md">
            <div>
              <div className="flex justify-between items-start mb-6">
                <div className={`flex h-10 w-10 items-center justify-center rounded-xl border ${config.bg}`}>
                  <Icon className="h-5 w-5" />
                </div>
                <span className={`px-2 py-1 rounded-md text-[8px] font-black uppercase tracking-widest shadow-sm ${
                  isReviewed ? 'bg-[#82C600] text-white' : 'bg-[#F9BD1C] text-amber-950'
                }`}>
                  {item.status === 'pending' ? 'SUBMITTED - PENDING' : 'GRADED'}
                </span>
              </div>

              <h3 className="text-lg font-bold text-gray-900 leading-snug mb-1 line-clamp-2 min-h-[3rem]">
                {item.contest?.title || 'Unknown Contest'}
              </h3>
              <div className="text-[11px] font-bold text-gray-400 mb-6">
                Prize Pool: <span className="text-[#82C600]">₹{item.contest?.prizeMoney || 0}</span>
              </div>
            </div>

            <div>
              <div className="bg-slate-50/50 rounded-xl p-4 border border-gray-50 flex gap-6 mb-6">
                <div className="flex-1">
                  <div className="text-[8px] font-extrabold uppercase tracking-widest text-gray-400 mb-1">SCORE</div>
                  <div className="text-sm font-black text-gray-900">{isReviewed ? `${item.score}/100` : '---'}</div>
                </div>
                <div className="flex-1">
                  <div className="text-[8px] font-extrabold uppercase tracking-widest text-gray-400 mb-1">SUBMITTED</div>
                  <div className="text-sm font-black text-gray-900">
                    {new Date(item.createdAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}
                  </div>
                </div>
              </div>

              <button className={`w-full flex items-center justify-center gap-2 rounded-xl py-3.5 text-[10px] font-black uppercase tracking-widest transition-all ${
                isReviewed ? 'bg-[#e4e9d3] hover:bg-[#d6e0b7] text-gray-700' : 'bg-[#F9BD1C] hover:bg-[#e6ae1a] text-amber-950 shadow-sm'
              }`}>
                {isReviewed ? 'View Results' : 'View Submission'}
                {isReviewed ? <Eye className="h-4 w-4" /> : <ArrowRight className="h-4 w-4" />}
              </button>
            </div>
          </div>
        )
      })}
    </div>
  )
}

