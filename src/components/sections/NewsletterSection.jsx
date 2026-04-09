export function NewsletterSection() {
  return (
    <section className="container-shell px-4 py-8">
      {/* Exact Blue Background Box (Screenshot Match: Solid Periwinkle) */}
      <div className="relative overflow-hidden rounded-2xl bg-[#8ea7f1] p-8 text-center md:rounded-3xl md:p-12">
        <h2 className="text-[19px] md:text-[22px] text-ink font-bold leading-tight mb-8 max-w-[340px] mx-auto sm:max-w-none">
          Get unique gift ideas and so much more delivered right to your inbox.
        </h2>
        
        {/* Exact Pill Input (Screenshot Match: White background with integrated button) */}
        <form className="mx-auto max-w-[450px]">
          <div className="flex h-12 w-full items-center overflow-hidden rounded-full border border-black/10 bg-white px-5 transition focus-within:border-black/30 shadow-sm">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="h-full flex-1 bg-transparent text-[15px] outline-none placeholder:text-muted font-medium"
            />
            <button 
              type="submit" 
              className="px-2 text-[15px] font-bold text-ink underline underline-offset-4 decoration-black/20 hover:decoration-black sm:px-4"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
