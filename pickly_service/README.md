# 📄 Pickly - 정부 정책/혜택 개인 맞춤형 큐레이션 서비스

복잡한 정부 정책/혜택 공고문을 개인 맞춤형으로 큐레이션하여, 누구나 쉽게 혜택을 확인하고 신청할 수 있도록 돕는 정책 정보 서비스입니다. Flutter, React, Supabase를 사용한 모노레포 프로젝트입니다.

## 🏗️ 프로젝트 구조

```
Pickly/
├── pickly-service/                    # 📦 메인 모노레포
│   ├── apps/                         # 🚀 프론트엔드 애플리케이션
│   │   ├── mobile/                   # 📱 Flutter 모바일 앱
│   │   ├── web/                      # 🌐 React 웹 애플리케이션
│   │   └── admin/                    # 👩‍💼 관리자 대시보드
│   ├── backend/                      # ⚙️ 백엔드 (Supabase 사용)
│   ├── packages/                     # 📦 공유 패키지
│   ├── docs/                         # 📚 프로젝트 문서
│   ├── shared/                       # 🔗 전역 설정
│   ├── infra/                        # ☁️ 인프라스트럭처
│   └── ops/                          # 🛠️ 운영 도구
```

### 핵심 가치
- **개인화**: 사용자 정보 기반 맞춤형 정책 추천
- **단순화**: 복잡한 정책 정보를 이해하기 쉽게 가공
- **접근성**: 언제 어디서나 쉽게 정책 정보 확인
- **실용성**: 정책 신청부터 관리까지 원스톱 서비스

## 🚀 기술 스택

### Frontend
- **Flutter** (모바일) - Riverpod, GoRouter, Dio, Hive
- **React** (웹/관리자) - Zustand, TanStack Query, MUI, Vite

### Backend
- **Supabase** (PostgreSQL + 인증 + 스토리지 + Edge Functions)

### Infra & DevOps
- Supabase 관리형 인프라 (자동 스케일링)
- GitHub Actions (CI/CD)
- Monitoring: Supabase Dashboard + Sentry

## 🛠️ 개발 환경 설정

### 필수 요구사항
- Node.js >= 18.0.0
- Flutter >= 3.10.0
- Dart >= 3.0.0

### 설치 및 실행
```bash
# 레포지토리 클론
git clone https://github.com/kwonhyunjun/pickly-service.git
cd pickly-service

# 의존성 설치
npm run bootstrap

# 개발 서버 실행
npm run dev
```

## 🛠️ Development Commands

### Core Scripts
```bash
npm run build          # Build all packages
npm run test           # Run all tests
npm run lint           # Lint all packages
npm run typecheck      # Type check all packages
npm run dev            # Start development servers
npm run clean          # Clean build artifacts
```

### SPARC Development
```bash
npm run sparc:modes    # List available SPARC modes
npm run sparc:tdd      # Run TDD workflow
npm run sparc:pipeline # Run full SPARC pipeline
```

### Melos Commands
```bash
melos analyze          # Analyze Dart code
melos format           # Format code
melos test:coverage    # Generate coverage reports
melos build:web        # Build web applications
melos build:mobile     # Build mobile applications
```

## 🏗️ Architecture

### Frontend Applications
- **Mobile**: Flutter app for iOS/Android
- **Web**: React application for desktop/mobile web
- **Admin**: Administrative dashboard

### Backend Services
- **API**: Main REST API server
- **Auth**: Authentication and authorization
- **Notification**: Push notifications and messaging
- **Upload**: File upload and media processing

### Shared Packages
- **UI**: Reusable UI components
- **Utils**: Common utility functions
- **Types**: TypeScript type definitions
- **Shared**: Cross-platform utilities

## 🧪 Testing Strategy

- **Unit Tests**: Jest for JavaScript/TypeScript, Flutter test for Dart
- **Integration Tests**: API and service integration testing
- **E2E Tests**: Full application workflow testing
- **TDD**: Test-driven development with SPARC methodology

## 📚 Documentation

- [Architecture](./docs/architecture/) - System design and architecture
- [API Documentation](./docs/api/) - REST API specifications
- [Deployment](./docs/deployment/) - Deployment and infrastructure guides
- [User Guides](./docs/user-guides/) - User documentation and tutorials

## 🚀 Deployment

### Development
```bash
npm run dev
```

### Production
```bash
npm run build
npm run deploy
```

### Docker
```bash
docker-compose up --build
```

### Kubernetes
```bash
kubectl apply -f infra/k8s/
```

## 🤝 Contributing

1. Follow SPARC methodology for development
2. Write tests first (TDD approach)
3. Use conventional commit messages
4. Ensure code passes all checks before PR

## 📄 License

MIT License - see LICENSE file for details