import { useState, useEffect, useRef, useCallback } from 'react'

type Slide = { src: string; tag: string; title: string }

export default function PhotoSlider({ slides }: { slides: Slide[] }) {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const startX = useRef<number | null>(null)
  const count = slides.length

  const go = useCallback((i: number) => setIndex((i + count) % count), [count])

  useEffect(() => {
    if (paused || count <= 1) return
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = setInterval(() => setIndex(p => (p + 1) % count), 5000)
    return () => clearInterval(id)
  }, [paused, count, index])

  const onStart = (e: React.TouchEvent) => { startX.current = e.touches[0].clientX }
  const onEnd = (e: React.TouchEvent) => {
    if (startX.current === null) return
    const dx = e.changedTouches[0].clientX - startX.current
    if (Math.abs(dx) > 40) go(index + (dx < 0 ? 1 : -1))
    startX.current = null
  }

  return (
    <div
      className="relative select-none"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="relative overflow-hidden rounded-xl bg-cream-3"
        onTouchStart={onStart}
        onTouchEnd={onEnd}
      >
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides.map(s => (
            <figure key={s.src} className="relative w-full flex-shrink-0 m-0">
              <div className="relative h-[300px] sm:h-[440px] lg:h-[560px]">
                <img src={s.src} alt={s.title} className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent" />
                <figcaption className="absolute bottom-0 left-0 p-6">
                  <span className="block text-[11px] tracking-[0.18em] uppercase text-white/70 mb-1">{s.tag}</span>
                  <p className="font-serif text-lg sm:text-2xl text-white leading-snug">{s.title}</p>
                </figcaption>
              </div>
            </figure>
          ))}
        </div>
        <button
          type="button"
          onClick={() => go(index - 1)}
          aria-label="Photo précédente"
          className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/85 hover:bg-white text-ink text-2xl leading-none flex items-center justify-center shadow-md transition-colors"
        >
          ‹
        </button>
        <button
          type="button"
          onClick={() => go(index + 1)}
          aria-label="Photo suivante"
          className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/85 hover:bg-white text-ink text-2xl leading-none flex items-center justify-center shadow-md transition-colors"
        >
          ›
        </button>
      </div>
      <div className="flex justify-center gap-2 mt-4">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => go(i)}
            aria-label={`Aller à la photo ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-200 ${i === index ? 'w-6 bg-green' : 'w-2 bg-ink/25 hover:bg-ink/45'}`}
          />
        ))}
      </div>
    </div>
  )
}
