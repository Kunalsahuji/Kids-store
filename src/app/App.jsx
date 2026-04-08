import { useEffect, useState } from 'react'
import { Footer } from '../components/layout/Footer'
import { MobileSidebar } from '../components/layout/MobileSidebar'
import { Navbar } from '../components/layout/Navbar'
import { HomePage } from '../pages/home/HomePage'
import { getProductById } from '../data/storefront'
import { ProductDetailPage } from '../pages/product/ProductDetailPage'

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [route, setRoute] = useState(() => {
    const match = window.location.hash.match(/^#product-(\d+)$/)
    return match ? { page: 'product', productId: Number(match[1]) } : { page: 'home' }
  })

  useEffect(() => {
    function handleHashChange() {
      const match = window.location.hash.match(/^#product-(\d+)$/)
      setRoute(match ? { page: 'product', productId: Number(match[1]) } : { page: 'home' })
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  function openProduct(productId) {
    window.location.hash = `product-${productId}`
  }

  const product = route.page === 'product' ? getProductById(route.productId) : null

  return (
    <div className="page-shell">
      <Navbar onOpenMenu={() => setIsSidebarOpen(true)} />
      <MobileSidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      {product ? <ProductDetailPage product={product} onSelectProduct={openProduct} /> : <HomePage onSelectProduct={openProduct} />}
      <Footer />
    </div>
  )
}

export default App
