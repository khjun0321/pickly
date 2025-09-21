# Pickly Service - Social Recommendation Platform

A comprehensive monorepo for the Pickly social recommendation and content curation platform, built with Flutter, React, and Node.js using SPARC methodology.

## 📁 Project Structure

```
pickly-service/
├── apps/                    # Frontend applications
│   ├── mobile/             # Flutter mobile app
│   ├── web/                # React web application
│   └── admin/              # Admin dashboard
├── backend/                # Backend services
│   ├── api/                # Main API server
│   ├── auth/               # Authentication service
│   ├── notification/       # Notification service
│   └── upload/             # File upload service
├── packages/               # Shared packages
│   ├── shared/             # Common utilities
│   ├── ui/                 # UI components
│   ├── utils/              # Utility functions
│   └── types/              # TypeScript definitions
├── docs/                   # Documentation
│   ├── architecture/       # System architecture
│   ├── api/                # API documentation
│   ├── deployment/         # Deployment guides
│   └── user-guides/        # User documentation
├── shared/                 # Shared configurations
│   ├── constants/          # Application constants
│   ├── types/              # Global types
│   ├── utils/              # Shared utilities
│   └── configs/            # Configuration files
└── infra/                  # Infrastructure
    ├── docker/             # Docker configurations
    ├── k8s/                # Kubernetes manifests
    └── terraform/          # Infrastructure as code
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- Flutter 3.0+
- Dart 3.0+
- Melos (for monorepo management)

### Setup
```bash
# Install dependencies
npm install -g melos
npm install

# Bootstrap the monorepo
melos bootstrap

# Run in development mode
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