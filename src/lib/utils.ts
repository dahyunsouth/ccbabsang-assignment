import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * cn: className 유틸리티 함수
 * clsx + tailwind-merge 조합
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * formatPrice: 가격 문자열을 천 단위 콤마와 함께 포맷합니다.
 * 예: "40800원" -> "40,800원"
 */
export function formatPrice(priceString: string): string {
  // 숫자 부분만 추출 (예: "40800원" -> "40800")
  const numericPart = parseInt(priceString.replace(/\D/g, ''), 10);

  // "원" 또는 다른 통화 단위를 추출
  const currencyUnit = priceString.replace(/\d/g, '');

  if (isNaN(numericPart)) {
    return priceString; // 숫자로 변환할 수 없으면 원래 문자열 반환
  }

  // 숫자를 천 단위 콤마와 함께 포맷
  const formattedNumber = numericPart.toLocaleString('ko-KR'); // 한국 로케일 사용

  return `${formattedNumber}${currencyUnit}`;
}

