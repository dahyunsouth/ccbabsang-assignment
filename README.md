# [척척밥상] 프론트엔드 과제 전형

## 배포 URL

**https://ccbabsang-assignment.vercel.app/**

## 기술

### Core
- **Next.js 16.1.2**
- **React 19.2.3**
- **TypeScript 5**

### Styling
- **Tailwind CSS 4**

### Data Fetching
- **SWR 2.3.8**

## 주요 기능

### 1. 상품 정렬
- index 0~49 오름차순 정렬
- 품절 상품은 자동으로 하단 배치
- 품절 제외한 나머지는 index 순서 유지

### 2. 품절 표시
- 이미지 오버레이로 'Coming Soon' 표시
- 상품명 앞에 "(품절)" 텍스트 추가
- 카드 opacity 조정으로 시각적 구분

### 3. 상품 가격 포맷팅
- 문자열로 전달되는 상품 가격에 천 단위 콤마 자동 삽입 (예: '7600원' → '7,600원')

### 4. 로딩 상태 처리
- 1-5초 API 지연 동안 SkeletonCard 표시
- animate-pulse 애니메이션

### 5. 반응형 디자인
- **모바일**: 가로형 카드 레이아웃 (1열)
- **태블릿**: 2열 그리드
- **PC**: 세로형 카드 레이아웃 (4열)

### 6. 웹 표준 및 접근성
- Semantic HTML (ul/li 목록 구조)
- ARIA 속성 (이미지, 로딩, 에러)
- 스크린 리더 지원
- 한국어 lang 속성

## 요구사항 충족 여부

| 요구사항 | 구현 | 상세 |
|---------|------|------|
| index 0~49 오름차순 표시 | ✅ | useProducts 훅에서 오름차순 정렬 로직 구현 |
| image null 공간 확보 | ✅ | 회색 배경으로 이미지 영역 표시 |
| 품절 상품 하단 배치 | ✅ | current >= limit 조건으로 분리 |
| 품절 상품 인지 가능 | ✅ | 이미지 영역에 "Coming Soon" 텍스트 오버레이, 상품명 앞에 "(품절)" 텍스트 추가 |
| 1-5초 지연 대응 | ✅ | SkeletonCard로 로딩 상태 표시 |
| TypeScript / Next.js 사용 | ✅ | - |
| PC/모바일 반응형 | ✅ | - |

## 프로젝트 구조

```
src/
├── app/
│   ├── layout.tsx          # 루트 레이아웃 (메타데이터, lang)
│   ├── page.tsx            # 메인 페이지 (헤더, ProductList)
│   └── globals.css         # 전역 스타일
├── components/
│   ├── product/
│   │   ├── ProductCard.tsx     # 개별 상품 카드
│   │   ├── ProductList.tsx     # 상품 목록 (useProducts 연동)
│   │   └── types.ts            # Product 타입 정의
│   └── ui/
│       └── SkeletonCard.tsx    # 로딩 상태 UI
├── hooks/
│   └── useProducts.ts      # 데이터 페칭 및 정렬 로직
└── lib/
    ├── api.ts              # API 엔드포인트, fetcher
    └── utils.ts            # cn, formatPrice 유틸리티
```
