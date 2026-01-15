/**
 * 상품 데이터 타입 정의
 * API: https://api.zeri.pics
 */

/**
 * 개별 상품 정보
 */
export interface Product {
  /** 상품이 표시될 순서 (0-49) */
  index: number
  /** 상품명 */
  name: string
  /** 상품 가격 (문자열 형태: "40800원") */
  price: string
  /** 현재까지 들어온 주문의 합계 */
  current: number
  /** 제공 가능한 수량 */
  limit: number
  /** 상품 대표 이미지 (항상 null) */
  image: null
}

/**
 * API 응답 구조
 */
export interface ApiResponse {
  content: Product[]
}

/**
 * 품절 여부 확인 유틸리티 타입
 */
export type ProductWithSoldOut = Product & {
  isSoldOut: boolean
}
