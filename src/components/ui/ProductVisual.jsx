export function ProductVisual({ product, mediaIndex = 0, detail = false }) {
  const media = product.media[mediaIndex] ?? product.media[0]
  const [primary, secondary, tertiary] = media.palette
  const imageUrl = media.imageUrl ?? product.imageUrl

  if (imageUrl) {
    return (
      <div className={`relative overflow-hidden ${detail ? 'aspect-[1.02]' : 'aspect-[0.95]'} rounded-xl bg-[#f3eee7]`}>
        <img className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]" src={imageUrl} alt={product.name} loading="lazy" />
      </div>
    )
  }

  return (
    <div className={`relative overflow-hidden ${detail ? 'aspect-[1.02]' : 'aspect-[0.95]'} rounded-xl bg-gradient-to-br ${product.tint}`}>
      <div className="absolute inset-0 opacity-60" style={{ background: `radial-gradient(circle at 20% 20%, ${secondary}66, transparent 30%), radial-gradient(circle at 80% 18%, ${tertiary}55, transparent 24%)` }} />
      <div className="absolute inset-x-0 top-0 h-[16%] bg-white/55" />
      <div className="flex h-full items-center justify-center p-5">
        <div className="relative h-[78%] w-[78%] rounded-lg bg-white/78 shadow-sm ring-1 ring-black/5">
          <div className="absolute inset-x-[10%] top-[10%] h-[22%] rounded-md" style={{ background: `${primary}cc` }} />
          <div className="absolute inset-x-[10%] top-[37%] h-[38%] rounded-md bg-white/90" />
          <div className="absolute left-[12%] top-[12%] h-[8%] w-[40%] rounded-full bg-white/90" />
          {media.accent === 'circle' ? (
            <>
              <div className="absolute left-[17%] top-[44%] h-12 w-12 rounded-full" style={{ background: `${secondary}cc` }} />
              <div className="absolute right-[18%] top-[42%] h-10 w-10 rounded-full" style={{ background: `${tertiary}bb` }} />
            </>
          ) : null}
          {media.accent === 'panel' ? (
            <>
              <div className="absolute left-[14%] top-[44%] h-[24%] w-[28%] rounded-md" style={{ background: `${secondary}d0` }} />
              <div className="absolute right-[14%] top-[44%] h-[24%] w-[34%] rounded-md" style={{ background: `${tertiary}ba` }} />
            </>
          ) : null}
          {media.accent === 'stack' ? (
            <>
              <div className="absolute left-[14%] top-[44%] h-[10%] w-[72%] rounded-full" style={{ background: `${secondary}d6` }} />
              <div className="absolute left-[22%] top-[58%] h-[10%] w-[56%] rounded-full" style={{ background: `${tertiary}c6` }} />
            </>
          ) : null}
          {media.accent === 'dots' ? (
            <div className="absolute inset-x-[16%] top-[44%] flex justify-between">
              {Array.from({ length: 5 }).map((_, index) => (
                <span key={index} className="h-4 w-4 rounded-full" style={{ background: index % 2 === 0 ? `${secondary}cc` : `${tertiary}b8` }} />
              ))}
            </div>
          ) : null}
          <div className="absolute bottom-[10%] left-[10%] h-[10%] w-[76%] rounded-md bg-white/92" />
        </div>
      </div>
    </div>
  )
}
