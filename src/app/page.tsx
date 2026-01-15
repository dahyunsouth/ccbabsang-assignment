import { SkeletonCard } from '@/components/ui/SkeletonCard'

export default function Home() {
  return (
    <main className="container mx-auto p-4 md:p-8">
      <header className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
          척척밥상 공동구매
        </h1>
        <p className="text-gray-600 mt-2">
          식자재와 먹을거리 공동구매 서비스
        </p>
      </header>

      {/* SkeletonCard 테스트 */}
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
      </div>
    </main>
  )
}
