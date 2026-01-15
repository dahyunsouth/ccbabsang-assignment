import { useMemo } from 'react'
import useSWR from 'swr'
import { API_ENDPOINTS, fetcher } from '@/lib/api'
import { Product } from '@/components/product/types'

/**
 * 상품 데이터 페칭 및 정렬 훅
 *
 * 요구사항:
 * 1. index 0~49 오름차순 정렬
 * 2. 품절 상품(current >= limit)은 하단 배치
 * 3. 품절 제외한 나머지는 index 순서 유지
 */
export function useProducts() {
  // SWR로 데이터 페칭
  const { data, error, isLoading } = useSWR(API_ENDPOINTS.PRODUCTS, fetcher)

  // 정렬 로직: 일반 상품 + 품절 상품
  const sortedProducts = useMemo(() => {
    if (!data?.content) return []

    // 품절 여부로 분리
    const available: Product[] = []
    const soldOut: Product[] = []

    data.content.forEach((product) => {
      if (product.current >= product.limit) {
        soldOut.push(product)
      } else {
        available.push(product)
      }
    })

    // 각각 index 기준 오름차순 정렬
    const sortByIndex = (a: Product, b: Product) => a.index - b.index

    available.sort(sortByIndex)
    soldOut.sort(sortByIndex)

    // 일반 상품 먼저, 품절 상품 하단
    return [...available, ...soldOut]
  }, [data])

  return {
    products: sortedProducts,
    isLoading,
    error,
  }
}
