/**
 * SkeletonCard: 로딩 상태 UI
 * 1-5초 API 지연 동안 표시
 */
export function SkeletonCard() {
  return (
    <article className="animate-pulse">
      {/* 모바일: 가로형, PC: 세로형 */}
      <div className="flex gap-4 md:flex-col md:gap-0 md:border md:rounded-lg md:overflow-hidden">
        {/* 이미지 영역 */}
        <div className="w-24 h-24 md:w-full md:aspect-square bg-gray-200 rounded-lg md:rounded-none" />

        {/* 정보 영역 */}
        <div className="flex-1 md:p-4 space-y-3">
          {/* 상품명 */}
          <div className="h-4 bg-gray-200 rounded w-3/4" />

          {/* 가격 */}
          <div className="h-6 bg-gray-200 rounded w-1/2" />

          {/* 재고 정보 */}
          <div className="h-3 bg-gray-200 rounded w-2/3" />
        </div>
      </div>
    </article>
  )
}
