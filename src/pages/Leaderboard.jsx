import { useNavigate } from 'react-router-dom'
import { Navbar } from '../components/layout/Navbar'
import { Footer } from '../components/layout/Footer'
import { DashboardLayout } from '../components/layout/DashboardLayout'
import { useUser } from '../context/UserContext'

export function Leaderboard() {
  const navigate = useNavigate()
  const { user } = useUser()

  // Show dashboard layout if user is logged in
  if (user) {
    return (
      <DashboardLayout>
        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Leaderboard</h1>
          <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
            <p className="text-gray-600 mb-4">View rankings and compete with other participants</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-gradient-to-br from-lime-50 to-lime-100 rounded-lg p-4 border border-lime-200">
                <div className="text-sm text-gray-600 mb-1">Your Rank</div>
                <div className="text-3xl font-bold text-lime-700">--</div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4 border border-blue-200">
                <div className="text-sm text-gray-600 mb-1">Total Participants</div>
                <div className="text-3xl font-bold text-blue-700">--</div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-4 border border-purple-200">
                <div className="text-sm text-gray-600 mb-1">Your Score</div>
                <div className="text-3xl font-bold text-purple-700">--</div>
              </div>
            </div>
            <p className="text-sm text-gray-500">Leaderboard data will be populated as contests progress.</p>
          </div>
        </div>
      </DashboardLayout>
    )
  }

  // Show public leaderboard for non-logged-in users
  return (
    <div className="flex h-screen flex-col overflow-hidden bg-white font-sans text-gray-800 antialiased">
      <Navbar />
      <main className="flex-1 overflow-y-auto">
        <section className="bg-white py-12 sm:py-16 lg:py-20">
          <div className="w-full px-4 sm:px-6">
            <h1 className="text-center text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
              Global Leaderboard
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-gray-600">
              See how you rank against other participants. Login to view your position and compete.
            </p>

            <div className="mx-auto mt-12 max-w-4xl">
              <div className="rounded-lg border border-gray-200 bg-gray-50 p-12 text-center">
                <div className="mb-4 text-4xl">🏆</div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Login to View Leaderboard</h2>
                <p className="text-gray-600 mb-6">
                  Join our contests and compete with thousands of participants worldwide.
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
