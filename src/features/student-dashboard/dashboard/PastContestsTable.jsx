import { History } from 'lucide-react'

const pastContests = [
  { name: 'Smart Contract Audit v2', submitted: 'Sep 14, 2023', score: '88/100', earnings: '₹320.00', rank: '#12', status: 'COMPLETED' },
  { name: 'Sustainability Report Design', submitted: 'Aug 29, 2023', score: '95/100', earnings: '₹450.00', rank: '#03', status: 'COMPLETED' },
  { name: 'E-commerce API Integration', submitted: 'Aug 12, 2023', score: '72/100', earnings: '₹0.00', rank: '#145', status: 'FAILED' },
]

export function PastContestsTable() {
  return (
    <div>
      <div className="mb-4 flex items-end justify-between">
        <h2 className="text-lg font-bold text-gray-900 tracking-tight flex items-center gap-2">
          <History className="h-5 w-5 text-lime-500" />
          Past Contests & History
        </h2>
        <div className="text-[10px] font-extrabold uppercase tracking-widest text-[#5c8020] flex items-center gap-2">
          <button className="hover:bg-amber-100 p-1.5 rounded-md transition-colors text-amber-700 font-bold">&lt;</button>
          PAGE 1 OF 4
          <button className="hover:bg-amber-100 p-1.5 rounded-md transition-colors text-amber-700 font-bold">&gt;</button>
        </div>
      </div>

      <div className="rounded-xl border border-gray-100 bg-white shadow-sm overflow-hidden text-sm">
        <table className="w-full text-left">
          <thead className="bg-[#fbfcfa] text-[10px] font-extrabold uppercase tracking-widest text-gray-500 border-b border-gray-100">
            <tr>
              <th className="p-4 font-extrabold">Contest</th>
              <th className="p-4 font-extrabold">Submitted On</th>
              <th className="p-4 font-extrabold">Score</th>
              <th className="p-4 font-extrabold">Earnings</th>
              <th className="p-4 font-extrabold">Rank</th>
              <th className="p-4 font-extrabold">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {pastContests.map((row, idx) => (
              <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                <td className="p-4 font-bold text-gray-900">{row.name}</td>
                <td className="p-4 text-gray-500">{row.submitted}</td>
                <td className="p-4 font-bold text-gray-800">{row.score}</td>
                <td className="p-4 font-bold text-lime-600">{row.earnings !== '₹0.00' ? row.earnings : <span className="text-gray-400">{row.earnings}</span>}</td>
                <td className="p-4 font-bold text-gray-900">{row.rank}</td>
                <td className="p-4">
                  <span className={`px-2.5 py-1 rounded text-[9px] font-bold uppercase tracking-wider ${row.status === 'COMPLETED' ? 'bg-lime-100 text-lime-700' : 'bg-gray-100 text-gray-600'}`}>
                    {row.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

