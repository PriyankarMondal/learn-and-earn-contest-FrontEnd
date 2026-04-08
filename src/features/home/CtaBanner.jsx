import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/ui/Button'

export function CtaBanner() {
  const navigate = useNavigate()
  const handleGetStarted = () => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'
    if (isLoggedIn) {
      navigate('/dashboard')
    } else {
      navigate('/login')
    }
  }

  return (
    <section className="px-3 pb-12 sm:px-4 sm:pb-16 md:px-6 lg:pb-20">
      <div className="mx-auto max-w-6xl rounded-2xl bg-lime-500 px-5 py-10 text-center sm:rounded-3xl sm:px-8 sm:py-14 md:px-12 md:py-16">
        <h2 className="text-2xl font-bold leading-tight text-white sm:text-3xl md:text-4xl">
          Ready to Start Your Journey?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-white/90 sm:mt-4 sm:text-base">
          Join thousands of scholars learning by building. New contests every month—pick your track
          and start today.
        </p>
        <Button
          variant="amberLg"
          className="mx-auto mt-6 w-full max-w-sm touch-manipulation rounded-xl sm:mt-8 sm:w-auto sm:max-w-none"
          onClick={handleGetStarted}
        >
          Get Started
        </Button>
      </div>
    </section>
  )
}
