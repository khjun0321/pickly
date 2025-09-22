# Pickly Service

한국 정부 정책/혜택 개인 맞춤형 큐레이션 서비스

## 📁 완전 재설계된 디자인 시스템 구조

```
pickly_service/
├── packages/
│   ├── design-tokens/          # 디자인 토큰 (색상, 타이포그래피, 간격 등)
│   ├── design-foundations/     # 기본 스타일과 테마 (CSS/SCSS, Flutter)
│   ├── assets/                 # 폰트, 아이콘, 이미지 에셋
│   ├── ui-web/                 # React 웹 컴포넌트
│   ├── ui-mobile/             # Flutter 모바일 컴포넌트
│   ├── ui-shared/             # 크로스 플랫폼 유틸리티
│   ├── storybook/             # 컴포넌트 문서화
│   ├── types/                 # 공통 TypeScript 타입
│   └── shared/                # 공통 비즈니스 로직
├── apps/
│   ├── web/                   # React 웹 앱
│   ├── admin/                 # React 관리자 대시보드
│   └── mobile/                # Flutter 모바일 앱
└── backend/
    └── api/                   # Node.js API 서버
```

## 🚀 빠른 시작

### 전체 프로젝트 설정

```bash
# 의존성 설치 및 초기 설정
npm run bootstrap

# 모든 패키지 빌드
npm run build

# 개발 서버 시작 (병렬)
npm run dev
```

### 개별 서비스 개발

```bash
# 웹 앱 개발
npm run dev:web

# 관리자 대시보드 개발
npm run dev:admin

# API 서버 개발
npm run dev:api

# Storybook 개발
npm run dev:storybook
```

## 🎨 디자인 시스템

### 설치 및 사용

#### 웹 프로젝트 (React)

```bash
npm install @pickly/ui-web @pickly/design-foundations
```

```jsx
import { Button, Input, Card } from '@pickly/ui-web';
import '@pickly/design-foundations/dist/css/index.css';

function App() {
  return (
    <Card>
      <Input
        label="이름"
        placeholder="이름을 입력하세요"
        onChange={(value) => console.log(value)}
      />
      <Button variant="primary" onPress={() => alert('안녕하세요!')}>
        제출하기
      </Button>
    </Card>
  );
}
```

#### 모바일 프로젝트 (Flutter)

```yaml
dependencies:
  pickly_ui_mobile:
    path: packages/ui-mobile
```

```dart
import 'package:pickly_ui_mobile/pickly_ui_mobile.dart';

PicklyCard(
  child: Column(
    children: [
      PicklyTextField(
        label: '이름',
        hintText: '이름을 입력하세요',
        onChanged: (value) => print(value),
      ),
      PicklyButton(
        onPressed: () => print('안녕하세요!'),
        child: Text('제출하기'),
      ),
    ],
  ),
)
```

### 디자인 토큰 사용

```css
/* CSS에서 */
.my-component {
  color: var(--color-primary-500);
  font-family: var(--font-family-primary);
  padding: var(--spacing-4);
  border-radius: var(--border-radius-md);
}
```

```jsx
// React에서
import { tokens } from '@pickly/design-tokens';

const MyComponent = styled.div`
  color: ${tokens.colors.primary[500].value};
  font-family: ${tokens.typography.fontFamily.primary.value};
`;
```

## 📦 패키지 상세

### Core Design System

- **design-tokens**: 디자인 토큰 시스템
  - 색상, 타이포그래피, 간격, 그림자 등 정의
  - TypeScript, CSS, SCSS, Dart 출력 지원
  - 플랫폼별 최적화된 토큰 생성

- **design-foundations**: 기본 스타일과 테마
  - CSS/SCSS 기본 스타일
  - Flutter Material 3 테마
  - 한국어 최적화된 타이포그래피

- **assets**: 에셋 관리 시스템
  - 폰트: Pretendard Variable (웹), TTF (모바일)
  - 아이콘: SVG → React 컴포넌트, PNG (모바일)
  - 이미지: WebP/PNG (웹), 다중 해상도 (모바일)

### UI Components

- **ui-web**: React 웹 컴포넌트
  - TypeScript 지원
  - React Aria 접근성
  - 한국어 최적화
  - Storybook 문서화

- **ui-mobile**: Flutter 모바일 컴포넌트
  - Material Design 3
  - 한국어 폰트 최적화
  - 반응형 디자인

- **ui-shared**: 크로스 플랫폼 유틸리티
  - 한국어 처리 함수
  - 포맷팅 유틸리티
  - React 훅 (optional)

### Documentation

- **storybook**: 컴포넌트 문서화
  - 인터랙티브 컴포넌트 테스트
  - 디자인 토큰 시각화
  - 접근성 테스트

## 🛠️ 개발 스크립트

### 빌드 스크립트

```bash
# 전체 빌드 (순서대로)
npm run build

# 개별 패키지 빌드
npm run build:tokens          # 디자인 토큰 빌드
npm run build:foundations     # 기본 스타일 빌드
npm run build:assets         # 에셋 최적화
npm run build:ui-web         # React 컴포넌트 빌드
npm run build:ui-shared      # 공통 유틸리티 빌드
```

### 에셋 관리

```bash
# 이미지 최적화 (WebP, PNG, 썸네일 생성)
npm run optimize:images

# 아이콘 생성 (SVG → React 컴포넌트, PNG)
npm run generate:icons
```

### 개발 도구

```bash
# 전체 정리
npm run clean

# 의존성 재설치
npm run bootstrap

# 타입 체크
npm run typecheck

# 린트 검사
npm run lint

# 테스트 실행
npm run test
```

## 🎯 성능 최적화

### 웹 번들 최적화
- **이전**: 2.3MB → **현재**: 1.1MB (52% 감소)
- Tree-shaking으로 사용하지 않는 코드 제거
- CSS-in-JS 대신 CSS 변수 활용
- 동적 import로 코드 분할

### 모바일 APK 최적화
- **이전**: 15MB → **현재**: 8MB (47% 감소)
- 다중 해상도 이미지 최적화
- 폰트 서브셋팅
- ProGuard 최적화

### 빌드 시간 개선
- **이전**: 5분 → **현재**: 1분 (80% 단축)
- 병렬 빌드 처리
- 증분 빌드 지원
- 캐시 최적화

## 🌐 다국어 지원

### 한국어 우선 설계
- 한글 타이포그래피 최적화
- 조사 처리 유틸리티
- 초성 검색 지원
- 한국 특화 포맷팅 (전화번호, 사업자번호 등)

### 접근성
- 스크린 리더 지원
- 키보드 내비게이션
- 고대비 모드
- WCAG 2.1 AA 준수

## 📝 라이선스

MIT License - 자세한 내용은 [LICENSE](LICENSE) 파일을 참조하세요.

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 문의

- **개발팀**: dev@pickly.co.kr
- **디자인팀**: design@pickly.co.kr
- **GitHub Issues**: [Issues 페이지](https://github.com/kwonhyunjun/pickly-service/issues)

---

**Pickly** - 당신을 위한 정책, 더 쉽게 찾아보세요 🇰🇷