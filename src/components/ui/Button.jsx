/**
 * Simple button with a few style variants for the landing page.
 */
const variantClasses = {
  amber:
    'bg-amber-400 text-gray-900 hover:bg-amber-500 focus-visible:ring-amber-300',
  amberLg:
    'bg-amber-400 px-8 py-4 text-lg font-semibold text-gray-900 hover:bg-amber-500 focus-visible:ring-amber-300',
  outline:
    'border-2 border-lime-500 bg-white text-lime-600 hover:bg-lime-50 focus-visible:ring-lime-400',
  lime: 'bg-lime-500 text-white hover:bg-lime-600 focus-visible:ring-lime-300',
  limeIcon:
    'shrink-0 bg-lime-500 p-3 text-white hover:bg-lime-600 focus-visible:ring-lime-300',
}

const baseClasses =
  'inline-flex items-center justify-center rounded-lg font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50'

export function Button({ children, variant = 'amber', className = '', type = 'button', ...rest }) {
  const styles = `${baseClasses} ${variantClasses[variant] ?? variantClasses.amber} ${className}`

  return (
    <button type={type} className={styles} {...rest}>
      {children}
    </button>
  )
}
