# 🚀 Windsurf Claude Code 협업 개발 정책 (TDD)

## 📋 목적
Claude Flow와 Windsurf를 활용해 **Pickly 서비스(소스코드)**와 **도구 실행환경(Claude Flow, MCP)**을 분리 관리한다.  
이를 통해 불필요한 구조 변경을 방지하고, 프론트·백엔드·디자인·문서를 동시에 안전하게 개발할 수 있도록 한다.  

---

## 🎯 핵심 원칙 (RESPECT)
- **R**espect: 이미 정의된 폴더 구조와 파일 경로를 절대 변경하지 않는다.  
- **E**xamine: 작업 전 반드시 현재 프로젝트 구조를 확인한다.  
- **S**pecify: 모든 요청에서 정확한 파일 경로를 명시한다.  
- **P**reserve: 설정 파일(pubspec.yaml, melos.yaml 등)은 임의로 수정하지 않는다.  
- **E**xplicit: “새로 만들어줘” 대신 “지정된 경로에 추가해줘”처럼 구체적으로 지시한다.  
- **C**onfirm: 파일 생성/수정 전 반드시 사용자에게 승인받는다.  
- **T**est: 새로운 코드가 기존 기능에 미치는 영향을 테스트로 검증한다.  

---

## 📁 프로젝트 구조 정책

### ✅ 고정된 폴더 구조 (변경 금지)

```
Pickly/                               # 전체 작업 루트
├─ pickly-service/                    # ✅ 소스/문서 모노레포 (PRD 구조 기준)
│  ├─ apps/                           # 실제 실행되는 앱들
│  │   ├─ mobile/                     # 📱 Flutter 앱
│  │   │   ├─ lib/
│  │   │   ├─ assets/
│  │   │   └─ pubspec.yaml
│  │   └─ web/                        # 🌐 React/Next.js 웹
│  │       ├─ src/
│  │       ├─ public/
│  │       └─ package.json
│  │
│  ├─ backend/                        # ⚙️ 서버 (Node.js/NestJS 등)
│  │   ├─ src/
│  │   │   ├─ api/
│  │   │   ├─ models/
│  │   │   ├─ services/
│  │   │   └─ utils/
│  │   ├─ prisma/
│  │   └─ package.json
│  │
│  ├─ packages/                       # 📦 공통 패키지
│  │   ├─ design-system/              # 🎨 디자인 토큰 & 컴포넌트
│  │   │   ├─ tokens/                 # colors.json, typography.json 등
│  │   │   ├─ components/             # Flutter / Web 컴포넌트
│  │   │   ├─ assets/                 # 아이콘/일러스트
│  │   │   └─ index.ts / index.dart
│  │   ├─ utils/
│  │   ├─ api-client/
│  │   └─ types/
│  │
│  ├─ docs/                           # 📑 기획/문서 (최상위 분리)
│  │   ├─ PRD.md
│  │   ├─ TDD_GUIDE.md
│  │   ├─ feature-spec.xlsx
│  │   └─ user-flow.png
│  │
│  ├─ shared/                         # 🔗 공통 리소스
│  │   ├─ api-specs/                  # OpenAPI/Swagger 정의
│  │   └─ configs/                    # eslint, prettier, tsconfig 등
│  │
│  ├─ infra/                          # ☁️ 인프라
│  │   ├─ docker/
│  │   ├─ k8s/
│  │   └─ ci-cd/
│  │
│  ├─ .gitignore
│  ├─ melos.yaml
│  ├─ package.json
│  └─ README.md
│
└─ ops/                               # ✅ Claude Flow & MCP 실행환경
   ├─ claude-flow/                    # Claude Flow 원본 실행 폴더
   │   ├─ claude-flow / .bat / .ps1
   │   ├─ claude-flow.config.json     # 도구 기본 설정
   │   ├─ CLAUDE.md
   │   ├─ coordination/
   │   ├─ docs/                       # Claude Flow 자체 문서
   │   └─ memory/                     # Flow 메모리(DB/캐시)
   │
   ├─ configs/                        # Pickly 전용 Flow & MCP 설정
   │   ├─ claude-flow.config.json     # workdir = ../pickly-service
   │   ├─ mcp.figma.json
   │   ├─ mcp.github.json
   │   ├─ mcp.filesystem.json
   │   ├─ mcp.supabase.json
   │   └─ mcp.notion.json
   │
   ├─ logs/                           # 실행 로그
   └─ secrets/                        # 환경변수 (.env)
       ├─ .env.flow
       ├─ .env.mobile
       ├─ .env.web
       └─ .env.backend
```

---

### ❌ 금지된 행동들
- `pickly-service/` 구조 임의 변경  
- 파일 위치 이동 (`mv`)  
- 새로운 최상위 폴더 생성 (`ops/`, `docs/` 등 이미 정의된 것 외)  
- 설정 파일(pubspec.yaml, melos.yaml, package.json 등) 무단 수정  
- import 경로 대량 변경  

---

## 🗣️ Claude Code 소통 가이드
- 작업 요청 시 **정확한 경로**를 반드시 함께 명시한다.  
- “구조 변경”이 필요한 작업은 **반드시 사전 승인**을 받는다.  
- 새 파일은 **지정된 폴더 내부**에만 생성한다.  

---

## 🔄 TDD 기반 작업 플로우
1. **Think**: 영향 범위 확인  
2. **Design**: 테스트 케이스 작성  
3. **Develop**: 테스트 우선 → 최소 구현 → 리팩터  

---

## 📋 체크리스트
- [ ] 작업이 PRD 구조를 따르는가?  
- [ ] 기존 설정 파일을 변경하지 않았는가?  
- [ ] 테스트가 작성/실행되어 통과했는가?  

---

## 🎯 성공 지표
- 단기: 불필요한 구조 변경 0건  
- 장기: 안정적 구조와 빠른 개발 속도 유지  
