/**
 * MarqueeBanner — infinite scrolling text ticker
 * Placed between "How It Works" and "Featured Contests" sections
 */

const items = [
  '✦ Welcome to Desun Academy Contest',
  '✦ Compete & Win Amazing Prizes',
  '✦ Welcome to Desun Academy Contest',
  '✦ Build Real-World Projects',
  '✦ Welcome to Desun Academy Contest',
  '✦ Climb the Leaderboard',
  '✦ Welcome to Desun Academy Contest',
  '✦ Earn Certificates & Cash Rewards',
  '✦ Welcome to Desun Academy Contest',
  '✦ Join the Community',
]

export function MarqueeBanner() {
  return (
    <div className="relative overflow-hidden bg-[#82C600] py-4 select-none">
      {/* Fade masks on edges */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-[#82C600] to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-[#82C600] to-transparent" />

      {/* Scrolling track */}
      <div
        className="flex w-max animate-marquee gap-0"
        aria-hidden="true"
      >
        {/* Duplicate items twice for seamless loop */}
        {[...items, ...items].map((text, i) => (
          <span
            key={i}
            className="inline-block whitespace-nowrap px-10 text-[11px] font-black uppercase tracking-[0.2em] text-white/90"
          >
            {text}
          </span>
        ))}
      </div>

      {/* Keyframe is defined in index.css */}
    </div>
  )
}
