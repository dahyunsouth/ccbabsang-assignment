/**
 * SkeletonCard: 로딩 상태 UI
 * 1-5초 API 지연 동안 표시
 */
export function SkeletonCard() {
  return (
    <article className="animate-pulse" aria-busy="true" aria-label="상품 로딩 중">
      {/* 모바일: 가로형, PC: 세로형 */}
      <div className="flex gap-4 md:flex-col md:gap-0 md:border md:rounded-lg md:overflow-hidden">
        {/* 이미지 영역 */}
        <div className="w-24 h-24 md:w-full md:h-36 bg-gray-200 rounded-lg md:rounded-none" />

        {/* 정보 영역 */}
        <div className="flex-1 md:p-4 flex flex-col justify-between">
          {/* 재고 뱃지 영역 (ProductCard와 동일) */}
          <div className="mb-2">
            <div className="inline-block px-2 py-0.5 w-24 h-5 bg-gray-200 rounded" />
          </div>

          {/* 상품명 (text-sm md:text-base 높이와 유사) */}
          <div className="h-5 md:h-6 bg-gray-200 rounded w-3/4" />

          {/* 가격 (text-lg md:text-xl 높이와 유사) */}
          <div className="h-7 md:h-8 bg-gray-200 rounded w-1/2 mt-1" />
        </div>
      </div>
    </article>
  )
}
