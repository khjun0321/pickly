# 🚀 Windsurf Claude Code 협업 개발 정책 (TDD)

## 📋 목적
Windsurf의 Claude Code와 효율적으로 협업하면서 불필요한 파일 이동, 폴더 생성, 구조 변경을 방지하고 기존 프로젝트 구조를 보존하는 것을 목표로 합니다.

---

## 🎯 핵심 원칙 (RESPECT)
- **R**espect - 기존 구조 존중: 이미 정의된 폴더 구조와 파일 경로를 절대 변경하지 않음
- **E**xamine - 현재 상태 먼저 파악: 작업 전 반드시 현재 프로젝트 구조 확인
- **S**pecify - 명확한 경로 지정: 모든 요청에서 정확한 파일 경로 명시
- **P**reserve - 기존 설정 보존: pubspec.yaml, melos.yaml 등 설정 파일 함부로 수정 금지
- **E**xplicit - 명시적 요청: '새로 만들어줘' 대신 '지정된 경로에 추가해줘'
- **C**onfirm - 작업 전 확인: 파일 생성/이동 전 반드시 사용자 승인 요청
- **T**est - 기존 기능 영향도 확인: 테스트 가능한 최소 단위로 작업 진행

---

## 📁 프로젝트 구조 정책

### ✅ 고정된 폴더 구조 (변경 금지)
```
pickly-service/
├── apps/                       # 실제 실행되는 앱들
│   ├── mobile/                 # 📱 Flutter 앱
│   │   ├── lib/
│   │   ├── assets/
│   │   └── pubspec.yaml
│   └── web/                    # 🌐 웹 (React, Next.js 등)
│       ├── src/
│       ├── public/
│       └── package.json
│
├── backend/                    # ⚙️ 서버 (API, DB, 서비스 로직)
│   ├── src/
│   │   ├── api/
│   │   ├── models/
│   │   ├── services/
│   │   └── utils/
│   ├── prisma/
│   └── package.json
│
├── packages/                   # 📦 공통 모듈
│   ├── design-system/          # 디자인 토큰 & 컴포넌트
│   │   ├── tokens/
│   │   ├── components/
│   │   └── index.ts
│   ├── utils/
│   ├── api-client/
│   └── types/
│
├── docs/                       # 📑 기획 및 문서 (최상위로 분리)
│   ├── PRD.md
│   ├── feature-spec.xlsx
│   ├── user-flow.png
│   └── design-guidelines.md
│
├── shared/                     # 🔗 공유 리소스 (문서 제외)
│   ├── api-specs/
│   └── configs/
│
├── infra/                      # ☁️ 인프라
│   ├── docker/
│   ├── k8s/
│   └── ci-cd/
│
├── .gitignore
├── melos.yaml
├── package.json
└── README.md
```

---

### ❌ 금지된 행동들
- 폴더 구조 임의 변경
- 파일 위치 이동 (mv 명령어 사용)
- 새로운 최상위 폴더 생성 (docs, infra 등 이미 정의된 것 외 금지)
- 기존 import 경로 변경
- 설정 파일 무단 수정

---

## 🗣️ Claude Code 소통 가이드
경로 지정, 작업 범위 한정, 금지/권장 표현을 반드시 따른다.

---

## 🔄 TDD 기반 작업 플로우
Think → Design → Develop 단계를 따르며, 기존 구조를 보존하는 방식으로만 진행.

---

## 📋 체크리스트
작업 전후에 구조 보존, 경로 일치 여부, 설정파일 보존 여부를 점검한다.

---

## 🎯 성공 지표
- 단기: 불필요한 구조 변경 0건  
- 장기: 안정적 구조와 빠른 개발 속도 유지.
