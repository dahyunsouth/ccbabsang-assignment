import { ProductList } from '@/components/product/ProductList'

export default function Home() {
  return (
    <>
      {/* 상단 녹색 헤더 */}
      <header className="sticky top-0 z-10 bg-green-700 text-white py-6 px-4 md:px-8">
        <div className="container mx-auto">
          <h1 className="text-2xl md:text-3xl font-bold">
            척척밥상 공동구매
          </h1>
          <p className="text-green-100 mt-2">
            식자재와 먹을거리 공동구매 서비스
          </p>
        </div>
      </header>

      {/* 메인 컨텐츠 */}
      <main className="container mx-auto p-4 md:p-8">
        <ProductList />
      </main>
    </>
  )
}
