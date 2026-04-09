export function CategorySection() {
  const categories = [
    { label: "Mother's Day Gifts", image: "https://i.etsystatic.com/26905697/r/il/86e0e8/6288078036/il_200x200.6288078036_98nc.jpg" },
    { label: "Greeting Cards", image: "https://i.etsystatic.com/19326639/r/il/6ccd4d/6163068342/il_200x200.6163068342_k565.jpg" },
    { label: "Personalised Jewellery", image: "https://i.etsystatic.com/7371176/c/1379/1379/330/480/860e18/5209812466/il_200x200.5209812466_gatj.jpg" },
    { label: "Diamond Gifts", image: "https://i.etsystatic.com/27585129/c/1418/1418/290/327382/7179875253/il_200x200.7179875253_dymb.jpg" },
    { label: "Wall Art", image: "https://i.etsystatic.com/43397399/r/il/f4263d/7801928554/il_200x200.7801928554_dm5r.jpg" },
    { label: "Men's Clothing", image: "https://i.etsystatic.com/21832647/c/1176/1176/296/c9be15/5054945905/il_200x200.5054945905_hj32.jpg" }
  ]

  return (
    // want to add padding on left right that title shifted into center

    <section className="container-shell py-4 px-3 flex flex-col items-center 
    md:px-10
    lg:px-20
    xl:px-30
    2xl:px-40
    ">
      {/* add color : 
#000000 and font-weight-700 don't use inline style*/}
      <h2 className="font-serif-display text-[18px] md:text-[22px] text-ink mb-4 text-center leading-tight text-[#000000] !font-bold" >
        Gifts as special as they are
      </h2>
      {/* reduce the top-bottom padding of the cards */}
      {/* 2-Column Grid (Circular Bubbles with Card Hover) */}
      <div className="grid grid-cols-2 gap-x-2 gap-y-4 w-full max-w-[500px] md:grid-cols-3 lg:grid-cols-6 px-10 md:px-0 py-2 mb-2 ">
        {categories.map((item, index) => (
          <div key={index} className="flex flex-col items-center cursor-pointer group relative mt-2 mb-2">

            {/* Hover State Background Card (Exact match for Screenshot hover effect) */}
            <div className="absolute -inset-x-2 -inset-y-3 rounded-2xl bg-white opacity-0 shadow-md transition-all duration-200 group-hover:opacity-100 scale-95 group-hover:scale-100 z-0" />

            <div className="relative z-10 flex flex-col items-center w-full gap-3">
              {/* Circular Image Container */}
              <div className="relative h-28 w-28 overflow-hidden rounded-full border border-black/5 bg-[#f4f4f4] md:h-32 md:w-32">
                <img
                  src={item.image}
                  alt={item.label}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Exact Typography match from Inspector Screenshot: 16px, 20.8lh, -0.16ls */}
              <span
                className="text-ink text-center z-10 px-1"
                style={{
                  fontSize: '16px',
                  lineHeight: '20.8px',
                  letterSpacing: '-0.16px',
                  fontWeight: '700'
                }}
              >
                {item.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
