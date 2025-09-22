#!/usr/bin/env node

/**
 * Icon Generation Script
 *
 * SVG 아이콘을 플랫폼별로 최적화
 * - 웹: SVG 스프라이트 + React 컴포넌트
 * - 모바일: 다중 해상도 PNG + Flutter 위젯
 */

const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');
const sharp = require('sharp');

const ICONS_DIR = path.join(__dirname, '../icons');
const COMMON_DIR = path.join(ICONS_DIR, 'common');
const WEB_DIR = path.join(ICONS_DIR, 'web');
const MOBILE_DIR = path.join(ICONS_DIR, 'mobile');

async function main() {
  console.log('🖼️  Generating icons...');

  // 디렉토리 생성
  ensureDirectories();

  // SVG 파일 읽기
  const svgFiles = fs.readdirSync(COMMON_DIR)
    .filter(file => file.endsWith('.svg'));

  if (svgFiles.length === 0) {
    console.log('⚠️  No SVG files found in icons/common/');
    return;
  }

  // 웹용 아이콘 생성
  await generateWebIcons(svgFiles);

  // 모바일용 아이콘 생성
  await generateMobileIcons(svgFiles);

  console.log(`✅ Generated ${svgFiles.length} icons for web and mobile`);
}

function ensureDirectories() {
  [WEB_DIR, MOBILE_DIR].forEach(dir => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  });

  // 모바일 해상도별 디렉토리
  ['1x', '2x', '3x'].forEach(resolution => {
    const dir = path.join(MOBILE_DIR, resolution);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  });
}

/**
 * 웹용 아이콘 생성
 */
async function generateWebIcons(svgFiles) {
  console.log('🌐 Generating web icons...');

  const iconComponents = [];
  const iconExports = [];
  let spriteContent = '';

  for (const file of svgFiles) {
    const iconName = path.basename(file, '.svg');
    const iconNamePascal = toPascalCase(iconName);
    const svgPath = path.join(COMMON_DIR, file);
    const svgContent = fs.readFileSync(svgPath, 'utf8');

    // SVG 최적화 (SVGO 사용하지 않고 간단한 정리)
    const optimizedSvg = optimizeSvg(svgContent);

    // 개별 SVG 파일 저장
    fs.writeFileSync(
      path.join(WEB_DIR, file),
      optimizedSvg
    );

    // React 컴포넌트 생성
    const component = generateReactComponent(iconNamePascal, optimizedSvg);
    iconComponents.push(component);

    // Export 추가
    iconExports.push(`export { ${iconNamePascal} } from './${iconNamePascal}';`);

    // 스프라이트에 추가
    spriteContent += generateSpriteSymbol(iconName, optimizedSvg);
  }

  // SVG 스프라이트 생성
  const sprite = `<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">${spriteContent}</svg>`;
  fs.writeFileSync(path.join(WEB_DIR, 'sprite.svg'), sprite);

  // React 컴포넌트 파일들 생성
  iconComponents.forEach(({ name, content }) => {
    fs.writeFileSync(
      path.join(WEB_DIR, `${name}.jsx`),
      content
    );
  });

  // 인덱스 파일 생성
  const indexContent = `
/**
 * Pickly Icons - Web Components
 * Generated automatically - DO NOT EDIT
 */

${iconExports.join('\n')}

// Icon utilities
export function getIconUrl(name) {
  return \`/assets/icons/web/\${name}.svg\`;
}

export function getSpriteIcon(name) {
  return \`/assets/icons/web/sprite.svg#\${name}\`;
}
`.trim();

  fs.writeFileSync(path.join(WEB_DIR, 'index.js'), indexContent);

  // CSS 파일 생성
  generateIconCSS(svgFiles);
}

/**
 * 모바일용 아이콘 생성
 */
async function generateMobileIcons(svgFiles) {
  console.log('📱 Generating mobile icons...');

  const flutterWidgets = [];
  const iconExports = [];

  for (const file of svgFiles) {
    const iconName = path.basename(file, '.svg');
    const iconNamePascal = toPascalCase(iconName);
    const svgPath = path.join(COMMON_DIR, file);

    // SVG를 PNG로 변환 (다중 해상도)
    const sizes = [
      { resolution: '1x', size: 24 },
      { resolution: '2x', size: 48 },
      { resolution: '3x', size: 72 }
    ];

    for (const { resolution, size } of sizes) {
      const outputPath = path.join(MOBILE_DIR, resolution, `${iconName}.png`);

      try {
        await sharp(svgPath)
          .resize(size, size)
          .png({ quality: 90 })
          .toFile(outputPath);
      } catch (error) {
        console.warn(`⚠️  Failed to convert ${iconName} to ${resolution}: ${error.message}`);
      }
    }

    // Flutter 위젯 생성
    const widget = generateFlutterWidget(iconNamePascal, iconName);
    flutterWidgets.push(widget);

    // Export 추가
    iconExports.push(`  static const IconData ${iconName} = PicklyIcons._('${iconName}');`);
  }

  // Flutter 인덱스 파일 생성
  const indexContent = `
/**
 * Pickly Icons - Flutter Widgets
 * Generated automatically - DO NOT EDIT
 */

import 'package:flutter/material.dart';

class PicklyIcons {
  PicklyIcons._();

${iconExports.join('\n')}

  static const String _family = 'PicklyIcons';
  static const IconData _default = IconData(0xe000, fontFamily: _family);

  static const IconData _(String name) {
    switch (name) {
${svgFiles.map(file => {
  const iconName = path.basename(file, '.svg');
  return `      case '${iconName}': return IconData(0x${(0xe000 + svgFiles.indexOf(file)).toString(16)}, fontFamily: _family);`;
}).join('\n')}
      default: return _default;
    }
  }
}

// Icon helper widgets
${flutterWidgets.join('\n\n')}
`.trim();

  fs.writeFileSync(path.join(MOBILE_DIR, 'index.dart'), indexContent);
}

/**
 * SVG 최적화
 */
function optimizeSvg(svgContent) {
  // 간단한 SVG 정리 (SVGO 대신)
  return svgContent
    .replace(/\s+/g, ' ')
    .replace(/>\s+</g, '><')
    .trim();
}

/**
 * React 컴포넌트 생성
 */
function generateReactComponent(name, svgContent) {
  // SVG에서 JSX props 추출
  const dom = new JSDOM(svgContent);
  const svg = dom.window.document.querySelector('svg');

  if (!svg) {
    throw new Error(`Invalid SVG content for ${name}`);
  }

  const viewBox = svg.getAttribute('viewBox') || '0 0 24 24';
  const pathElements = Array.from(svg.querySelectorAll('path, circle, rect, line, polyline, polygon'))
    .map(el => el.outerHTML)
    .join('');

  const content = `
import React from 'react';

/**
 * ${name} Icon Component
 * Generated automatically - DO NOT EDIT
 */
export function ${name}({
  size = 24,
  color = 'currentColor',
  className = '',
  ...props
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="${viewBox}"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={\`pickly-icon pickly-icon-${name.toLowerCase()} \${className}\`}
      {...props}
    >
      ${pathElements.replace(/fill="[^"]*"/g, `fill="\${color}"`)}
    </svg>
  );
}

${name}.displayName = '${name}';
`.trim();

  return { name, content };
}

/**
 * Flutter 위젯 생성
 */
function generateFlutterWidget(className, iconName) {
  return `
class ${className} extends StatelessWidget {
  const ${className}({
    Key? key,
    this.size = 24.0,
    this.color,
  }) : super(key: key);

  final double size;
  final Color? color;

  @override
  Widget build(BuildContext context) {
    return Image.asset(
      'assets/icons/\${size >= 48 ? '3x' : size >= 32 ? '2x' : '1x'}/${iconName}.png',
      width: size,
      height: size,
      color: color,
    );
  }
}`.trim();
}

/**
 * 스프라이트 심볼 생성
 */
function generateSpriteSymbol(iconName, svgContent) {
  const dom = new JSDOM(svgContent);
  const svg = dom.window.document.querySelector('svg');
  const viewBox = svg.getAttribute('viewBox') || '0 0 24 24';
  const innerHTML = svg.innerHTML;

  return `<symbol id="${iconName}" viewBox="${viewBox}">${innerHTML}</symbol>`;
}

/**
 * 아이콘 CSS 생성
 */
function generateIconCSS(svgFiles) {
  const cssRules = svgFiles.map(file => {
    const iconName = path.basename(file, '.svg');
    return `.pickly-icon-${iconName} { /* Add custom styles for ${iconName} */ }`;
  });

  const cssContent = `
/**
 * Pickly Icons - CSS Styles
 * Generated automatically - DO NOT EDIT
 */

.pickly-icon {
  display: inline-block;
  vertical-align: middle;
  flex-shrink: 0;
}

${cssRules.join('\n')}
`.trim();

  fs.writeFileSync(path.join(WEB_DIR, 'icons.css'), cssContent);
}

/**
 * PascalCase 변환
 */
function toPascalCase(str) {
  return str
    .split(/[-_]/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join('');
}

if (require.main === module) {
  main().catch(console.error);
}

module.exports = { main };