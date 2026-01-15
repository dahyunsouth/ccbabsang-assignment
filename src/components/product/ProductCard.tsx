import { Product } from './types'
import { cn, formatPrice } from '@/lib/utils'

interface ProductCardProps {
  product: Product
}

/**
 * ProductCard: 개별 상품 카드
 * - 품절 상품: 흐릿하게 표시
 * - 반응형: 모바일 가로형, PC 세로형
 */
export function ProductCard({ product }: ProductCardProps) {
  const isSoldOut = product.current >= product.limit

  return (
    <article
      className={cn(
        'transition-opacity',
        isSoldOut && 'opacity-60'
      )}
    >
      {/* 모바일: 가로형, PC: 세로형 */}
      <div className="flex gap-4 md:flex-col md:gap-0 md:border md:rounded-lg md:overflow-hidden md:hover:shadow-lg md:transition-shadow">
        {/* 이미지 영역 (null이지만 공간 확보) */}
        <div className="relative w-24 h-24 md:w-full md:aspect-square bg-gray-200 rounded-lg md:rounded-none flex-shrink-0">
          {/* 품절 오버레이 */}
          {isSoldOut && (
            <>
              <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg md:rounded-none" />
              <div className="absolute inset-0 flex items-center justify-center">
                {/* 모바일 */}
                <span className="text-white text-sm font-bold text-center md:hidden">
                  Coming<br/>Soon
                </span>
                {/* PC: 'Coming Soon' 줄바꿈 없음 */}
                <span className="hidden md:block text-white text-base font-bold">
                  Coming Soon
                </span>
              </div>
            </>
          )}
        </div>

        {/* 정보 영역 */}
        <div className="flex-1 md:p-4 flex flex-col justify-between">
          {/* 재고 뱃지 */}
          {!isSoldOut && (
            <div className="mb-2">
              <span className="inline-block px-2 py-0.5 text-xs font-semibold bg-pink-100 text-red-600 rounded">
                {product.limit - product.current}개 남았어요!
              </span>
            </div>
          )}

          {/* 상품명 */}
          <h3 className="text-sm md:text-base font-medium text-gray-900 line-clamp-2">
            {isSoldOut ? '(품절) ' + product.name : product.name}
          </h3>

          {/* 가격 */}
          <p className="text-lg md:text-xl font-bold text-gray-900 mt-1">
            {formatPrice(product.price)}
          </p>
        </div>
      </div>
    </article>
  )
}
