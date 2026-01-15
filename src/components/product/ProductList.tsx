'use client'

import { useProducts } from '@/hooks/useProducts'
import { ProductCard } from './ProductCard'
import { SkeletonCard } from '@/components/ui/SkeletonCard'

/**
 * ProductList: 상품 목록 컴포넌트
 * - useProducts 훅 연결
 * - 로딩/에러 상태 처리
 * - 반응형 그리드 레이아웃 (1/2/4열)
 */
export function ProductList() {
  const { products, isLoading, error } = useProducts()

  // 에러 상태
  if (error) {
    return (
      <div className="text-center py-8" role="alert">
        <p className="text-red-600">상품을 불러오는데 실패했습니다.</p>
        <p className="text-sm text-gray-500 mt-2">{error.message}</p>
      </div>
    )
  }

  return (
    <ul className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 list-none">
      {isLoading
        ? Array.from({ length: 8 }).map((_, i) => (
            <li key={i}>
              <SkeletonCard />
            </li>
          ))
        : products.map((product) => (
            <li key={product.index}>
              <ProductCard product={product} />
            </li>
          ))}
    </ul>
  )
}
