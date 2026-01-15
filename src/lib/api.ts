import { ApiResponse } from '@/components/product/types'

/**
 * API 엔드포인트
 */
export const API_ENDPOINTS = {
  PRODUCTS: 'https://api.zeri.pics',
} as const

/**
 * SWR fetcher 함수
 * @param url - API 엔드포인트 URL
 * @returns Promise<ApiResponse>
 */
export const fetcher = async (url: string): Promise<ApiResponse> => {
  const response = await fetch(url)

  if (!response.ok) {
    throw new Error(`API 요청 실패: ${response.status}`)
  }

  return response.json()
}

/**
 * 상품 목록 조회 (타입 안전성을 위한 헬퍼)
 */
export const fetchProducts = () => fetcher(API_ENDPOINTS.PRODUCTS)
