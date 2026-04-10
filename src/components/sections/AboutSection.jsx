export function AboutSection() {
  return (
    <section className="container-shell px-6 py-16 text-center border-t border-black/5 mt-8">
      {/* Exact Serif Heading (Screenshot Match) */}
      <h2 className="font-serif-display text-[32px] md:text-[40px] text-ink mb-10 leading-tight">
        What is Toyove India?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left max-w-5xl mx-auto">
        <div className="space-y-4">
          <h3 className="text-[19px] font-bold text-ink">A community doing good</h3>
          <p className="text-[14px] text-muted leading-relaxed">
            Toyove is a global online marketplace, where people come together to make, sell, buy and collect unique items. We’re also a community pushing for positive change for small businesses, people, and the planet.
          </p>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-[19px] font-bold text-ink">Support independent creators</h3>
          <p className="text-[14px] text-muted leading-relaxed">
            There’s no Toyove warehouse—just millions of people selling the things they love. We make the whole process easy, helping you connect directly with makers to find something extraordinary.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-[19px] font-bold text-ink">Peace of mind</h3>
          <p className="text-[14px] text-muted leading-relaxed">
            Your privacy is our highest priority. And if ever a problem arises, we always have your back. Our dedicated support team is here to help with any purchase or order.
          </p>
        </div>
      </div>

      <div className="mt-12">
         <h4 className="text-[16px] font-bold text-ink mb-4">Have a question? Well, we’ve got some answers.</h4>
         <button className="h-10 px-8 rounded-full border-2 border-ink text-ink font-bold text-[14px] hover:bg-ink hover:text-white transition">
           Go to Help Centre
         </button>
      </div>
    </section>
  )
}
