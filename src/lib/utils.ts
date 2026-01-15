import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * cn: className 유틸리티 함수
 * clsx + tailwind-merge 조합
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
