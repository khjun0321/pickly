#!/usr/bin/env node

/**
 * Pickly Assets Build Script
 *
 * 모든 에셋을 플랫폼별로 최적화하여 빌드
 * - 아이콘: SVG → 웹/모바일 최적화
 * - 이미지: 원본 → WebP, PNG, 다중 해상도
 * - 폰트: 웹/모바일 형식 변환
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

async function main() {
  console.log('🎨 Building Pickly Assets...');

  try {
    // 1. 아이콘 생성
    console.log('🖼️  Generating icons...');
    execSync('node scripts/generate-icons.js', { stdio: 'inherit' });

    // 2. 이미지 최적화
    console.log('📸 Optimizing images...');
    execSync('node scripts/optimize-images.js', { stdio: 'inherit' });

    // 3. 웹용 메인 인덱스 파일 생성
    console.log('📝 Generating web index...');
    generateWebIndex();

    // 4. 모바일용 메인 인덱스 파일 생성
    console.log('📱 Generating mobile index...');
    generateMobileIndex();

    console.log('✅ Assets built successfully!');
    console.log('📁 Generated files:');
    console.log('  - icons/web/index.js (Web icon components)');
    console.log('  - icons/mobile/index.dart (Flutter icon widgets)');
    console.log('  - images/web/index.js (Web image exports)');
    console.log('  - fonts/index.css (Web font declarations)');
    console.log('  - fonts/index.dart (Flutter font configuration)');

  } catch (error) {
    console.error('❌ Asset build failed:', error.message);
    process.exit(1);
  }
}

/**
 * 웹용 메인 인덱스 파일 생성
 */
function generateWebIndex() {
  const indexContent = `
/**
 * Pickly Assets - Web Entry Point
 * Generated automatically - DO NOT EDIT
 */

// Icons
export * from './icons/web/index.js';

// Images
export * from './images/web/index.js';

// Fonts
import './fonts/index.css';

// Asset utilities
export const ASSET_BASE_URL = process.env.NEXT_PUBLIC_ASSET_URL || '/assets';

export function getAssetUrl(path) {
  return \`\${ASSET_BASE_URL}/\${path}\`;
}

export function getImageUrl(name, format = 'webp') {
  return getAssetUrl(\`images/web/\${format}/\${name}.\${format}\`);
}

export function getIconUrl(name) {
  return getAssetUrl(\`icons/web/\${name}.svg\`);
}
`.trim();

  fs.writeFileSync(
    path.join(__dirname, '../index.js'),
    indexContent
  );
}

/**
 * 모바일용 메인 인덱스 파일 생성
 */
function generateMobileIndex() {
  const indexContent = `
/**
 * Pickly Assets - Flutter Entry Point
 * Generated automatically - DO NOT EDIT
 */

library pickly_assets;

// Icons
export 'icons/mobile/index.dart';

// Images
export 'images/mobile/index.dart';

// Fonts
export 'fonts/index.dart';
`.trim();

  fs.writeFileSync(
    path.join(__dirname, '../index.dart'),
    indexContent
  );
}

if (require.main === module) {
  main().catch(console.error);
}

module.exports = { main };