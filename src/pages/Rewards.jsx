import { useNavigate } from 'react-router-dom'
import { Navbar } from '../components/layout/Navbar'
import { Footer } from '../components/layout/Footer'
import { DashboardLayout } from '../components/layout/DashboardLayout'
import { useUser } from '../context/UserContext'

export function Rewards() {
  const navigate = useNavigate()
  const { user } = useUser()

  const rewardTiers = [
    { rank: '🥇 1st Place', prize: '₹5,000+', description: 'Grand Prize Winner' },
    { rank: '🥈 2nd Place', prize: '₹3,000+', description: 'Runner Up' },
    { rank: '🥉 3rd Place', prize: '₹1,000+', description: 'Third Prize' },
    { rank: '⭐ Top 10', prize: 'Certificates', description: 'Achievement Recognition' },
  ]

  // Show rewards dashboard if user is logged in
  if (user) {
    return (
      <DashboardLayout>
        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Rewards & Earnings</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
              <div className="text-sm text-gray-600 mb-1">Total Earnings</div>
              <div className="text-2xl font-bold text-lime-700">₹0</div>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
              <div className="text-sm text-gray-600 mb-1">Pending Rewards</div>
              <div className="text-2xl font-bold text-blue-700">₹0</div>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
              <div className="text-sm text-gray-600 mb-1">Contests Won</div>
              <div className="text-2xl font-bold text-purple-700">0</div>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
              <div className="text-sm text-gray-600 mb-1">Achievements</div>
              <div className="text-2xl font-bold text-orange-700">0</div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Reward Tiers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {rewardTiers.map((tier, idx) => (
                <div key={idx} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="text-lg font-bold text-gray-900">{tier.rank}</div>
                  <div className="text-sm text-gray-600 mb-2">{tier.description}</div>
                  <div className="text-xl font-bold text-lime-600">{tier.prize}</div>
                </div>
              ))}
            </div>
          </div>

          <p className="text-sm text-gray-500 mt-4">Participate in contests to earn rewards and climb the leaderboard!</p>
        </div>
      </DashboardLayout>
    )
  }

  // Show public rewards page for non-logged-in users
  return (
    <div className="flex h-screen flex-col overflow-hidden bg-white font-sans text-gray-800 antialiased">
      <Navbar />
      <main className="flex-1 overflow-y-auto">
        <section className="bg-white py-12 sm:py-16 lg:py-20">
          <div className="w-full px-4 sm:px-6">
            <h1 className="text-center text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
              Rewards & Earnings
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-gray-600">
              Win exciting prizes and earn money by participating in contests.
            </p>

            {/* Reward Tiers */}
            <div className="mx-auto mt-12 max-w-4xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Prize Structure</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {rewardTiers.map((tier, idx) => (
                  <div key={idx} className="bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-all">
                    <div className="text-2xl mb-2">{tier.rank}</div>
                    <div className="text-sm text-gray-600 mb-2">{tier.description}</div>
                    <div className="text-3xl font-bold text-lime-600">{tier.prize}</div>
                  </div>
                ))}
              </div>

              <div className="bg-lime-50 border border-lime-200 rounded-lg p-8 text-center">
                <div className="mb-4 text-4xl">🎁</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Ready to Earn?</h3>
                <p className="text-gray-700 mb-6">
                  Register now and start competing in contests to win amazing prizes!
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    onClick={() => navigate('/login')}
                    className="px-6 py-3 bg-lime-500 text-white font-bold rounded-lg hover:bg-lime-600 transition-colors"
                  >
                    Login
                  </button>
                  <button
                    onClick={() => navigate('/register')}
                    className="px-6 py-3 bg-gray-300 text-gray-900 font-bold rounded-lg hover:bg-gray-400 transition-colors"
                  >
                    Register
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
