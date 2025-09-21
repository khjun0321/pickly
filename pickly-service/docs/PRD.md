# 🎯 Pickly - 소셜 추천 & 큐레이션 플랫폼 PRD

## 📋 프로젝트 개요

Pickly는 사용자들이 다양한 콘텐츠를 발견하고, 큐레이션하며, 공유할 수 있는 소셜 추천 플랫폼입니다. Flutter 모바일 앱과 React 웹 애플리케이션을 통해 크로스플랫폼 경험을 제공합니다.

---

## 🎯 핵심 목표

### 비즈니스 목표
- 개인화된 콘텐츠 추천 시스템 구축
- 사용자 간 큐레이션 콘텐츠 공유 활성화
- 멀티플랫폼 일관성 있는 UX 제공
- 확장 가능한 마이크로서비스 아키텍처 구현

### 기술 목표
- 모던 풀스택 아키텍처 구현
- SPARC 방법론 기반 체계적 개발
- TDD 기반 고품질 코드베이스 구축
- CI/CD 자동화 및 DevOps 최적화

---

## 📁 프로젝트 구조 (Monorepo)

### ✅ 최종 구현된 구조

```
Pickly/
├── pickly-service/                    # 📦 메인 모노레포
│   ├── apps/                         # 🚀 프론트엔드 애플리케이션
│   │   ├── mobile/                   # 📱 Flutter 모바일 앱
│   │   │   ├── lib/                  # Dart 소스코드
│   │   │   │   ├── main.dart
│   │   │   │   ├── features/         # 기능별 모듈
│   │   │   │   ├── shared/           # 공통 위젯/유틸
│   │   │   │   └── core/             # 핵심 설정
│   │   │   ├── assets/               # 이미지/폰트 리소스
│   │   │   ├── test/                 # 테스트 파일
│   │   │   └── pubspec.yaml          # Flutter 의존성
│   │   ├── web/                      # 🌐 React 웹 애플리케이션
│   │   │   ├── src/                  # TypeScript 소스코드
│   │   │   │   ├── components/       # React 컴포넌트
│   │   │   │   ├── pages/            # 페이지 컴포넌트
│   │   │   │   ├── hooks/            # 커스텀 훅
│   │   │   │   ├── stores/           # 상태 관리
│   │   │   │   └── utils/            # 유틸리티
│   │   │   ├── public/               # 정적 파일
│   │   │   ├── package.json          # 의존성 설정
│   │   │   └── vite.config.ts        # 빌드 설정
│   │   └── admin/                    # 👩‍💼 관리자 대시보드
│   │
│   ├── backend/                      # ⚙️ 백엔드 마이크로서비스
│   │   ├── api/                      # 🔌 메인 API 서버
│   │   │   ├── src/
│   │   │   │   ├── routes/           # API 라우트
│   │   │   │   ├── controllers/      # 컨트롤러
│   │   │   │   ├── services/         # 비즈니스 로직
│   │   │   │   ├── middleware/       # 미들웨어
│   │   │   │   └── utils/            # 유틸리티
│   │   │   ├── tests/                # 테스트
│   │   │   └── package.json
│   │   ├── auth/                     # 🔐 인증 서비스
│   │   ├── notification/             # 🔔 알림 서비스
│   │   └── upload/                   # 📁 파일 업로드 서비스
│   │
│   ├── packages/                     # 📦 공유 패키지
│   │   ├── shared/                   # 🔄 공통 유틸리티
│   │   │   ├── src/
│   │   │   │   ├── utils/            # 헬퍼 함수
│   │   │   │   ├── constants/        # 상수
│   │   │   │   └── validators/       # 검증 로직
│   │   │   └── package.json
│   │   ├── ui/                       # 🎨 UI 컴포넌트 라이브러리
│   │   │   ├── src/
│   │   │   │   ├── components/       # 공통 컴포넌트
│   │   │   │   ├── themes/           # 테마 설정
│   │   │   │   └── tokens/           # 디자인 토큰
│   │   │   └── package.json
│   │   ├── types/                    # 📝 TypeScript 타입 정의
│   │   └── utils/                    # 🛠️ 유틸리티 함수
│   │
│   ├── docs/                         # 📚 프로젝트 문서
│   │   ├── architecture/             # 시스템 아키텍처
│   │   │   ├── OVERVIEW.md           # 전체 개요
│   │   │   ├── BACKEND.md            # 백엔드 아키텍처
│   │   │   └── FRONTEND.md           # 프론트엔드 아키텍처
│   │   ├── api/                      # API 문서
│   │   │   ├── openapi.yaml          # OpenAPI 스펙
│   │   │   └── endpoints.md          # API 엔드포인트
│   │   ├── deployment/               # 배포 가이드
│   │   │   ├── DOCKER.md             # Docker 설정
│   │   │   ├── KUBERNETES.md         # K8s 배포
│   │   │   └── CI_CD.md              # CI/CD 파이프라인
│   │   ├── user-guides/              # 사용자 가이드
│   │   │   ├── SETUP.md              # 개발 환경 설정
│   │   │   ├── DEVELOPMENT.md        # 개발 워크플로우
│   │   │   └── TESTING.md            # 테스트 가이드
│   │   ├── PRD.md                    # 이 문서
│   │   └── pickly_prd.md             # 기존 정책 문서
│   │
│   ├── shared/                       # 🔗 전역 설정
│   │   ├── constants/                # 전역 상수
│   │   ├── types/                    # 전역 타입
│   │   ├── utils/                    # 전역 유틸리티
│   │   └── configs/                  # 설정 파일
│   │       ├── eslint.config.js      # ESLint 설정
│   │       ├── prettier.config.js    # Prettier 설정
│   │       └── tsconfig.base.json    # TypeScript 기본 설정
│   │
│   ├── infra/                        # ☁️ 인프라스트럭처
│   │   ├── docker/                   # Docker 설정
│   │   │   ├── Dockerfile.api        # API 서버 이미지
│   │   │   ├── Dockerfile.web        # 웹 앱 이미지
│   │   │   └── docker-compose.yml    # 로컬 개발 환경
│   │   ├── k8s/                      # Kubernetes 매니페스트
│   │   │   ├── api-deployment.yaml   # API 배포
│   │   │   ├── web-deployment.yaml   # 웹 배포
│   │   │   └── ingress.yaml          # 인그레스 설정
│   │   └── terraform/                # Terraform IaC
│   │       ├── main.tf               # 메인 설정
│   │       ├── variables.tf          # 변수 정의
│   │       └── outputs.tf            # 출력 값
│   │
│   ├── package.json                  # 루트 패키지 설정
│   ├── melos.yaml                    # Melos 모노레포 설정
│   ├── .gitignore                    # Git 무시 파일
│   └── README.md                     # 프로젝트 개요
│
└── ops/                              # 🛠️ 운영 도구
    ├── claude-flow/                  # Claude Flow 실행 환경
    │   ├── claude-flow               # 실행 파일
    │   ├── claude-flow.config.json   # 기본 설정
    │   ├── .claude/                  # 에이전트 정의
    │   ├── coordination/             # 스웜 조정
    │   └── memory/                   # 지속적 메모리
    ├── configs/                      # 설정 파일
    │   ├── claude-flow.config.json   # Pickly 전용 설정
    │   ├── mcp.github.json           # GitHub MCP 통합
    │   └── mcp.filesystem.json       # 파일시스템 MCP
    ├── logs/                         # 실행 로그
    ├── secrets/                      # 환경 변수
    │   ├── .env.example              # 환경 변수 템플릿
    │   └── [.env 파일들]             # 실제 환경 변수
    └── README.md                     # 운영 가이드
```

---

## 🏗️ 기술 스택

### Frontend
- **Mobile**: Flutter 3.0+ (Dart)
  - State Management: Riverpod
  - Navigation: GoRouter
  - HTTP: Dio + Retrofit
  - Local Storage: Hive
- **Web**: React 18 (TypeScript)
  - State Management: Zustand
  - Data Fetching: TanStack Query
  - Styling: Emotion + MUI
  - Build Tool: Vite

### Backend
- **Runtime**: Node.js 18+ (TypeScript)
- **Framework**: Fastify (고성능 REST API)
- **Database**: PostgreSQL + Drizzle ORM
- **Cache**: Redis
- **Authentication**: JWT + Refresh Tokens
- **File Storage**: AWS S3

### DevOps & Infrastructure
- **Containerization**: Docker + Docker Compose
- **Orchestration**: Kubernetes
- **CI/CD**: GitHub Actions
- **Infrastructure**: Terraform
- **Monitoring**: Prometheus + Grafana
- **Logging**: Winston + ELK Stack

### Development Tools
- **Monorepo**: Melos (Flutter/Dart) + npm workspaces
- **Code Quality**: ESLint, Prettier, Husky
- **Testing**: Jest, Vitest, Flutter Test
- **Documentation**: TypeDoc, DartDoc
- **Development**: Claude Flow + SPARC 방법론

---

## 🚀 주요 기능

### 핵심 기능
1. **콘텐츠 발견**
   - AI 기반 개인화 추천
   - 카테고리별 콘텐츠 탐색
   - 트렌딩 콘텐츠 피드

2. **큐레이션 & 컬렉션**
   - 개인 컬렉션 생성/관리
   - 태그 기반 분류 시스템
   - 협업 큐레이션 기능

3. **소셜 기능**
   - 팔로우/팔로워 시스템
   - 콘텐츠 공유 및 댓글
   - 사용자 프로필 관리

4. **검색 & 필터링**
   - 전문 검색 엔진 통합
   - 고급 필터링 옵션
   - 검색 히스토리 관리

### 관리자 기능
- 콘텐츠 관리 및 모더레이션
- 사용자 관리 시스템
- 분석 및 리포팅 대시보드
- 시스템 설정 관리

---

## 🧪 개발 방법론

### SPARC 방법론
1. **Specification**: 요구사항 분석 및 명세
2. **Pseudocode**: 알고리즘 설계 및 의사코드
3. **Architecture**: 시스템 아키텍처 설계
4. **Refinement**: TDD 기반 반복 개발
5. **Completion**: 통합 및 배포

### TDD (Test-Driven Development)
- **Red**: 실패하는 테스트 작성
- **Green**: 테스트를 통과하는 최소 코드 구현
- **Refactor**: 코드 품질 개선 및 최적화

### 품질 관리
- 코드 리뷰 필수
- 자동화된 테스트 (단위/통합/E2E)
- 정적 분석 및 린팅
- 성능 모니터링

---

## 📊 성능 및 확장성

### 성능 목표
- **로딩 시간**: 첫 화면 2초 이내
- **API 응답**: 평균 200ms 이하
- **동시 사용자**: 10,000명 지원
- **가용성**: 99.9% 업타임

### 확장성 전략
- 마이크로서비스 아키텍처
- 수평적 스케일링 지원
- CDN을 통한 글로벌 콘텐츠 배포
- 데이터베이스 샤딩 준비

---

## 🔐 보안 및 개인정보

### 보안 조치
- HTTPS 필수 적용
- JWT 기반 인증 + 리프레시 토큰
- API Rate Limiting
- 입력값 검증 및 SQL Injection 방지
- CSRF 및 XSS 공격 방어

### 개인정보 보호
- GDPR 준수
- 데이터 최소 수집 원칙
- 암호화된 저장
- 사용자 데이터 삭제 권한 제공

---

## 📈 로드맵

### Phase 1: MVP (3개월)
- [ ] 기본 사용자 인증 시스템
- [ ] 콘텐츠 CRUD 기능
- [ ] 기본 추천 알고리즘
- [ ] 모바일 & 웹 앱 기본 UI

### Phase 2: 소셜 기능 (2개월)
- [ ] 팔로우/팔로워 시스템
- [ ] 댓글 및 반응 기능
- [ ] 실시간 알림 시스템
- [ ] 소셜 공유 기능

### Phase 3: 고급 기능 (3개월)
- [ ] AI 기반 개인화 추천
- [ ] 고급 검색 및 필터링
- [ ] 협업 큐레이션 기능
- [ ] 분석 및 인사이트 제공

### Phase 4: 최적화 (2개월)
- [ ] 성능 최적화
- [ ] 확장성 개선
- [ ] 고급 보안 기능
- [ ] 국제화 지원

---

## 📋 개발 가이드라인

### 코딩 표준
- TypeScript/Dart 타입 안정성 유지
- 함수형 프로그래밍 패러다임 선호
- 모듈화 및 재사용 가능한 코드 작성
- 명확한 네이밍 컨벤션 준수

### 협업 규칙
- SPARC 방법론 엄격 준수
- Claude Flow 기반 자동화된 워크플로우
- Pull Request 리뷰 필수
- 지속적 통합/배포 (CI/CD)

### 문서화
- 코드 주석 및 DocString 작성
- API 문서 자동 생성
- 아키텍처 결정 기록 (ADR)
- 사용자 가이드 업데이트

---

## 🎯 성공 지표

### 개발 지표
- **코드 커버리지**: 90% 이상
- **빌드 성공률**: 95% 이상
- **배포 주기**: 주 2회 이상
- **버그 해결 시간**: 평균 24시간 이하

### 비즈니스 지표
- **월간 활성 사용자**: 10,000명 목표
- **사용자 리텐션**: 30일 70% 이상
- **콘텐츠 참여율**: 평균 5% 이상
- **시스템 가용성**: 99.9% 이상

---

## 📞 연락처 및 리소스

### 개발팀
- **Lead Developer**: Kwon Hyun Jun
- **Repository**: https://github.com/kwonhyunjun/pickly-service
- **Documentation**: `/docs` 디렉토리 참조

### 외부 리소스
- [Claude Flow Documentation](https://github.com/ruvnet/claude-flow)
- [Flutter Documentation](https://flutter.dev/docs)
- [React Documentation](https://react.dev)
- [Fastify Documentation](https://www.fastify.io)

---

*이 문서는 프로젝트 진행에 따라 지속적으로 업데이트됩니다.*