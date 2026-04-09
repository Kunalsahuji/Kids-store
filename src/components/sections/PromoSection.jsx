export function PromoSection() {
  const interests = [
     { label: "Say Yes!", imageUrl: "https://i.etsystatic.com/42719272/r/il/88d28e/6540298932/il_510x680.6540298932_9vle.jpg" },
     { label: "Scuba Diving Essentials", imageUrl: "https://i.etsystatic.com/16823567/r/il/935c3d/3987871898/il_510x680.3987871898_hmpe.jpg" },
     { label: "Macrame Essentials", imageUrl: "https://i.etsystatic.com/13527283/r/il/dec308/5407264578/il_510x680.5407264578_99a9.jpg" },
     { label: "Going Baroque", imageUrl: "https://i.etsystatic.com/6688444/r/il/dc9163/4731961326/il_510x680.4731961326_7vq1.jpg" }
  ]

  return (
    <section className="py-12 bg-white">
      <div className="container-shell px-4">
        {/* Exact Etsy Heading */}
        <h2 className="font-serif-display text-[26px] md:text-[32px] text-ink mb-6">
          Jump into featured interests
        </h2>

        {/* Horizontal Scrollable Carousel (Side-peeking Cards) */}
        <div className="hide-scrollbar flex gap-4 overflow-x-auto -mx-4 px-4 md:grid md:grid-cols-4 md:mx-0 md:px-0 lg:grid-cols-4 lg:gap-6">
          {interests.map((item, index) => (
            <div key={index} className="min-w-[180px] w-[200px] md:w-full flex flex-col gap-3 group shrink-0">
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-black/5 bg-[#f4f4f4] transition-transform group-hover:scale-[1.02] active:scale-95">
                <img 
                  src={item.imageUrl} 
                  alt={item.label} 
                  className="h-full w-full object-cover"
                  loading="lazy" 
                />
              </div>
              <span className="text-[14px] md:text-[16px] font-bold text-ink underline underline-offset-4 decoration-black/20 group-hover:decoration-black">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
