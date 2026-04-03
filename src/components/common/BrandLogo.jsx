import desunLogo from '../../assets/desunLogo.png'

export function BrandLogo({ className = 'h-9 sm:h-11' }) {
  return (
    <img
      src={desunLogo}
      alt="Desun Academy — Get Placed by Skills"
      className={`w-auto object-contain object-left ${className}`}
    />
  )
}
