export function NewsletterSection() {
  return (
    <section className="container-shell px-4 py-12">
      {/* Exact Blue Promotional Box (Screenshot 2 Match) */}
      <div className="relative overflow-hidden rounded-2xl bg-[#97aef43b] border border-[#97aef4] p-8 text-center md:rounded-3xl">
        <h2 className="font-serif-display text-[20px] md:text-[24px] text-ink leading-tight mb-8 max-w-[400px] mx-auto">
          Get unique gift ideas and so much more delivered right to your inbox.
        </h2>
        
        {/* Exact Pill Input (Screenshot 2 Match) */}
        <form className="relative mx-auto max-w-[500px]">
          <div className="flex h-12 w-full items-center overflow-hidden rounded-full border border-ink/40 bg-white/60 px-6 backdrop-blur-sm transition focus-within:bg-white focus-within:border-ink">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="h-full flex-1 bg-transparent text-[15px] outline-none placeholder:text-muted"
            />
            <button 
              type="submit" 
              className="px-4 text-[15px] font-bold text-ink underline underline-offset-4 decoration-black/20 hover:decoration-black"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
