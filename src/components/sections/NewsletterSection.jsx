export function NewsletterSection() {
  return (
    // make responsive fix for all devices
    <section className="container-shell px-4 py-4">
      <div className="relative overflow-hidden rounded-xl bg-[#8ea7f1] px-4 py-8 text-center md:rounded-md md:p-12">
        <p className="text-[14px] text-ink font-bold leading-tight mb-4 max-w-[340px] mx-auto sm:max-w-none text-[#000000] 
line-height-20.8px vertical-align baseline letter-spacing-0.16px font-weight-700 
        ">
          Get unique gift ideas and so much more delivered right to your inbox.
        </p>

        {/*  */}
        <form className="mx-auto max-w-[500px]">
          <div className="flex h-11 w-full items-center overflow-hidden rounded-full border border-[#928681] bg-black/5 transition-colors duration-200 hover:border-ink focus-within:border-ink focus-within:bg-black/10 sm:h-12">
            <input
              type="email"
              placeholder="  Enter your email"
              className="h-full flex-1 bg-transparent px-2 text-[12px] outline-none placeholder:text-muted font-medium"
            />
            <button
              type="submit"
              className="h-full px-6 text-[11px] font-bold text-ink border border-transparent transition-all duration-200 
  hover:bg-[#222222] hover:text-white hover:border-white"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </section>

  )
}
