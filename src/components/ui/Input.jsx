/**
 * Text input with consistent padding and focus ring.
 */
export function Input({ className = '', ...rest }) {
  return (
    <input
      className={`min-w-0 w-full rounded-lg border border-gray-200 bg-gray-100 px-4 py-3 text-sm text-gray-800 placeholder:text-gray-400 focus:border-lime-500 focus:outline-none focus:ring-2 focus:ring-lime-500/30 ${className}`}
      {...rest}
    />
  )
}
