# Shooter Official — Design Guide
> Site: https://shooterofficial.co.kr/
> 분석일: 2026-04-14

---

## 1. 브랜드 개요

- **브랜드명:** 슈터 (Shooter)
- **포지셔닝:** 국내 1위 상세페이지 제작 브랜딩 에이전시
- **디자인 언어:** 다크 모던 미니멀 + 오렌지 포인트 / 강렬한 브랜드 아이덴티티
- **주요 언어:** 한국어 + 영어 병기

---

## 2. Color Palette

### Primary Colors

| 이름 | HEX | 용도 |
|---|---|---|
| Brand Orange | `#f96319` | CTA 버튼, 호버 액션, 포인트 컬러 |
| Black | `#000000` | 주요 배경, 텍스트 |
| White | `#ffffff` | 다크 배경 위 텍스트, 오버레이 |
| Charcoal | `#212121` | 본문 텍스트, 헤더 타이틀 |

### Secondary / Neutral

| 이름 | HEX | 용도 |
|---|---|---|
| Dark Charcoal | `#282828` | 드롭다운 배경, 카드 배경 |
| Dark Container | `rgba(25,25,25,1)` | 카드/리스트 배경 |
| Overlay | `rgba(0,0,0,0.7)` | 히어로 섹션 오버레이 |
| Light Gray | `#dadada` | 보더, 폼 인풋 |
| Medium Gray | `#cccccc` | 비활성 상태, 보조 텍스트 |

### Accent / Status

| 이름 | HEX | 용도 |
|---|---|---|
| Orange Hover | `rgba(217,76,6,1)` | 브랜드 오렌지 다크 호버 |
| Green Accent | `#00d255` | 활성 네비게이션 언더라인 |
| Blue Accent | `#00B8FF` | 검색 버튼 |

### 사용 원칙
- 배경은 항상 **블랙 계열** (95% dark)
- 포인트는 반드시 **Brand Orange (#f96319)** 단독 사용
- 화이트 텍스트에 opacity 변화로 위계 표현
- Green/Blue 액센트는 UI 상태 표시 전용, 브랜딩에는 사용 금지

---

## 3. Typography

### 폰트 패밀리

```css
/* 영문 헤딩, 네비게이션 */
font-family: 'Montserrat', sans-serif;

/* 한글 본문, 설명 */
font-family: 'Noto Sans Korean', 'SUITE', sans-serif;
```

### 타입 스케일

| 역할 | Size | Weight | 비고 |
|---|---|---|---|
| 로고 / 메인 헤딩 | `24px` | Bold | letter-spacing: 0 |
| 섹션 헤딩 | `20px~24px` | Bold | Montserrat |
| 네비게이션 | `14px` | Normal/Bold | 활성 시 Bold |
| 드롭다운 메뉴 | `13px` | Normal | |
| 본문 텍스트 | `14px` | Normal | |
| 보조/캡션 | `12px` | Normal | |

### Line Height

```css
line-height: inherit;   /* 기본 대부분 */
line-height: 1.2;       /* 이미지 오버레이 텍스트 */
line-height: 1;         /* 아이콘 요소 */
```

### 사용 원칙
- **영문 키워드, 브랜드 네임, 숫자** → Montserrat
- **한국어 본문, 설명, 메뉴** → Noto Sans Korean / SUITE
- 헤딩은 대문자 처리 또는 Bold weight로 위계 확보

---

## 4. Layout & Grid

### 컨테이너

```css
max-width: 1280px;
padding-left: 15px;
padding-right: 15px;
margin: 0 auto;
```

### 특수 섹션 패딩

```css
/* 넓은 섹션 */
padding-left: 80px;
padding-right: 80px;

/* 기본 내부 여백 */
padding: 10px 20px;
```

### 반응형 브레이크포인트

| 이름 | 기준 |
|---|---|
| Mobile | `max-width: 767px` |
| Mobile-L | `max-width: 768px` |
| Tablet | `max-width: 991px` |
| Tablet-L | `max-width: 992px` |
| Desktop | `min-width: 1200px` |

### 헤더 높이

```css
.header-primary:    height: 90px;   /* 데스크탑 기본 */
.header-secondary:  height: 70px;   /* 스크롤 후 */
.header-tall:       height: 100px;  /* 특정 변형 */
.header-mobile:     height: 79px;   /* 모바일 */
```

---

## 5. Section Structure (페이지 구성 순서)

```
┌─────────────────────────────────────────┐
│  1. Primary Header (Sticky)             │
│     └ 로고 | 네비게이션 | 검색 | 로그인  │
├─────────────────────────────────────────┤
│  2. Hero / Visual Section               │
│     └ 풀스크린 캐러셀 (Owl Carousel)     │
│     └ 텍스트 오버레이 + CTA 버튼         │
├─────────────────────────────────────────┤
│  3. Product / Shop Section              │
│     └ 상품 카드 그리드                   │
│     └ 카테고리 필터                      │
├─────────────────────────────────────────┤
│  4. Content / 상세 소개 Section          │
│     └ 서비스 소개, 포트폴리오             │
├─────────────────────────────────────────┤
│  5. Board / Article Section             │
│     └ 공지사항, 갤러리 리스팅            │
├─────────────────────────────────────────┤
│  6. Footer                              │
│     └ 링크 | 정보 | SNS                 │
└─────────────────────────────────────────┘
```

---

## 6. Component Patterns

### 6-1. Navigation

```
구조:
- 듀얼 헤더 (PC용 / Mobile용 분리)
- 스크롤 시 Sticky Fixed 고정
- 드롭다운 서브메뉴 (hover → visibility)
- 모바일: 햄버거 메뉴 → 오버레이 슬라이드인
```

```css
/* 기본 네비 아이템 */
font-size: 14px;
color: #ffffff;
transition: color 0.3s ease;

/* 활성 상태 */
color: #f96319;
border-bottom: 2px solid #00d255;

/* 드롭다운 배경 */
background: #282828;
font-size: 13px;
```

### 6-2. Hero Section

```
- 풀스크린 캐러셀 (height: 100vh)
- 이미지 위 반투명 오버레이 rgba(0,0,0,0.7)
- 텍스트는 table-cell 방식 수직 중앙 정렬
- Owl Carousel 기반 슬라이드
- 페이지네이션 도트 (커스텀 border 스타일)
- Prev/Next 화살표 버튼
```

```css
/* 반응형 높이 */
desktop: 100vh
tablet:  500px
mobile:  400px
```

### 6-3. Buttons

| 타입 | Background | Border | Text Color | 용도 |
|---|---|---|---|---|
| Primary (Brand) | `#f96319` | none | `#ffffff` | 주요 CTA |
| Default | `#000000` | transparent | `#ffffff` | 일반 액션 |
| Outlined | transparent | `1px solid #fff` | `#ffffff` | 보조 액션 |
| Hover 상태 | `#ffffff` | - | `#000000` | 모든 버튼 공통 |
| Search | `#00B8FF` | none | `#ffffff` | 검색 전용 |

```css
/* 공통 트랜지션 */
transition: all 0.3s ease;
```

### 6-4. Cards

```css
background: rgba(25, 25, 25, 1);
border: 1px solid #ccc;  /* 또는 다크 그레이 */
padding: 10px 20px;

/* 이미지 호버 */
transform: scale(1.1);
transition: transform 0.3s ease;
```

### 6-5. Forms / Inputs

```css
/* 기본 인풋 */
.form-control {
  background: #ffffff;
  border: 1px solid #dadada;
  color: #212121;
}

/* 포커스 */
border-color: #f96319;

/* 다크 셀렉트 */
background: #000000;
color: #ffffff;
```

### 6-6. Search Bar (6종 변형)

```css
/* 공통 */
height: 34px;

/* 타입별 버튼 색상 */
.search_btn_type01: 기본
.search_btn_type02: 오렌지 (#f96319)
.search_btn_type03: 블루 (#00B8FF)
/* ... type04 ~ type06 */
```

### 6-7. Image Hover Effects

```css
/* 오버레이 페이드인 */
.widget.image:hover .overlay {
  opacity: 1;
  transition: opacity 0.3s ease;
}

/* 이미지 줌인 */
.widget.image:hover img {
  transform: scale(1.1);
  transition: transform 0.3s ease;
}
```

---

## 7. Animation & Interaction

| 요소 | 인터랙션 | 값 |
|---|---|---|
| 모든 호버 | color / background 전환 | `0.3s ease` |
| 이미지 카드 | scale transform | `scale(1.1), 0.3s ease` |
| 오버레이 | opacity fade | `0 → 1, 0.3s ease` |
| 네비 드롭다운 | visibility toggle | 즉시 (JS 제어) |
| 히어로 캐러셀 | Owl Carousel 슬라이드 | 자동 재생 |
| 헤더 | scroll-to-fixed | JS 라이브러리 |

---

## 8. Responsive 전략

| 구분 | PC | Mobile |
|---|---|---|
| 헤더 | 90px, 가로 풀 네비 | 79px, 햄버거 메뉴 |
| 히어로 | 100vh | 400px 고정 |
| 레이아웃 | 멀티 컬럼 그리드 | 1컬럼 스택 |
| 섹션 표시 | `.pc_section` 표시 | `.device_type_m` 활성화 |
| 헤더 오버레이 | `.new_header_overlay` | `.new_header_overlay_mobile` |

---

## 9. CSS 설계 패턴

### 유틸리티 클래스 패턴

```css
/* 시멘틱 색상 유틸 */
.body_font_color_*       /* 텍스트 색상 시리즈 */
.section_bg              /* 섹션 배경 */
.section_bg_color        /* 커스텀 배경색 */
.hover_section_bg:hover  /* 호버 배경 변경 */

/* 레이아웃 유틸 */
.inline_widget           /* 인라인 콘텐츠 래퍼 */
.visual_section          /* 히어로 섹션 컨테이너 */
.viewport-nav            /* 네비게이션 리스트 */
```

### 반응형 분기 클래스

```css
.pc_section              /* 데스크탑 전용 */
.mobile_section_first    /* 모바일 전용 */
.device_type_m           /* 모바일 모드 활성 */
```

---

## 10. 디자인 원칙 요약

1. **다크 퍼스트** — 배경은 블랙 계열, 밝은 배경은 예외적 사용
2. **오렌지 원포인트** — `#f96319`는 핵심 CTA와 액션에만 집중 사용
3. **타이포 위계** — Montserrat(영문 강조) + Noto Sans Korean(한글 가독성) 이중 체계
4. **마이크로 인터랙션** — 모든 호버에 `0.3s ease` 일관성 유지
5. **풀스크린 임팩트** — 히어로는 100vh, 이미지 중심의 강렬한 첫인상
6. **모바일 완전 분리** — PC/Mobile 섹션 클래스 분리로 독립 최적화
7. **최대 너비 1280px** — 넓은 화면에서도 콘텐츠 집중도 유지
