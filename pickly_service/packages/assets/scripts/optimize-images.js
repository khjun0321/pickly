#!/usr/bin/env node

/**
 * Image Optimization Script
 *
 * 이미지를 플랫폼별로 최적화
 * - 웹: WebP, PNG, 썸네일
 * - 모바일: 압축된 이미지, 다중 해상도
 */

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const IMAGES_DIR = path.join(__dirname, '../images');
const COMMON_DIR = path.join(IMAGES_DIR, 'common');
const WEB_DIR = path.join(IMAGES_DIR, 'web');
const MOBILE_DIR = path.join(IMAGES_DIR, 'mobile');

async function main() {
  console.log('📸 Optimizing images...');

  // 디렉토리 생성
  ensureDirectories();

  // 이미지 파일 읽기
  const imageFiles = getImageFiles(COMMON_DIR);

  if (imageFiles.length === 0) {
    console.log('⚠️  No image files found in images/common/');
    return;
  }

  // 웹용 이미지 최적화
  await optimizeWebImages(imageFiles);

  // 모바일용 이미지 최적화
  await optimizeMobileImages(imageFiles);

  // 인덱스 파일 생성
  generateIndexFiles(imageFiles);

  console.log(`✅ Optimized ${imageFiles.length} images for web and mobile`);
}

function ensureDirectories() {
  // 웹 디렉토리
  ['webp', 'png', 'thumbnails'].forEach(format => {
    const dir = path.join(WEB_DIR, format);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  });

  // 모바일 디렉토리
  ['compressed', '1x', '2x', '3x'].forEach(resolution => {
    const dir = path.join(MOBILE_DIR, resolution);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  });
}

function getImageFiles(dir) {
  if (!fs.existsSync(dir)) {
    return [];
  }

  const files = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    if (entry.isDirectory()) {
      const subFiles = getImageFiles(path.join(dir, entry.name))
        .map(file => path.join(entry.name, file));
      files.push(...subFiles);
    } else if (isImageFile(entry.name)) {
      files.push(entry.name);
    }
  }

  return files;
}

function isImageFile(filename) {
  const imageExtensions = ['.jpg', '.jpeg', '.png', '.webp', '.gif', '.bmp'];
  const ext = path.extname(filename).toLowerCase();
  return imageExtensions.includes(ext);
}

/**
 * 웹용 이미지 최적화
 */
async function optimizeWebImages(imageFiles) {
  console.log('🌐 Optimizing web images...');

  for (const file of imageFiles) {
    const inputPath = path.join(COMMON_DIR, file);
    const baseName = path.basename(file, path.extname(file));
    const subDir = path.dirname(file) === '.' ? '' : path.dirname(file);

    try {
      const image = sharp(inputPath);
      const metadata = await image.metadata();

      // WebP 형식 (고품질, 작은 파일 크기)
      const webpDir = path.join(WEB_DIR, 'webp', subDir);
      if (!fs.existsSync(webpDir)) {
        fs.mkdirSync(webpDir, { recursive: true });
      }

      await image
        .webp({ quality: 85 })
        .toFile(path.join(webpDir, `${baseName}.webp`));

      // PNG 폴백 (WebP 미지원 브라우저용)
      const pngDir = path.join(WEB_DIR, 'png', subDir);
      if (!fs.existsSync(pngDir)) {
        fs.mkdirSync(pngDir, { recursive: true });
      }

      await image
        .png({ quality: 90, compressionLevel: 6 })
        .toFile(path.join(pngDir, `${baseName}.png`));

      // 썸네일 생성 (여러 크기)
      const thumbnailSizes = [150, 300, 600];

      for (const size of thumbnailSizes) {
        const thumbnailDir = path.join(WEB_DIR, 'thumbnails', `${size}x${size}`, subDir);
        if (!fs.existsSync(thumbnailDir)) {
          fs.mkdirSync(thumbnailDir, { recursive: true });
        }

        await image
          .resize(size, size, {
            fit: 'cover',
            position: 'center'
          })
          .webp({ quality: 80 })
          .toFile(path.join(thumbnailDir, `${baseName}.webp`));
      }

    } catch (error) {
      console.warn(`⚠️  Failed to optimize web image ${file}: ${error.message}`);
    }
  }
}

/**
 * 모바일용 이미지 최적화
 */
async function optimizeMobileImages(imageFiles) {
  console.log('📱 Optimizing mobile images...');

  for (const file of imageFiles) {
    const inputPath = path.join(COMMON_DIR, file);
    const baseName = path.basename(file, path.extname(file));
    const ext = path.extname(file);
    const subDir = path.dirname(file) === '.' ? '' : path.dirname(file);

    try {
      const image = sharp(inputPath);
      const metadata = await image.metadata();

      // 압축된 기본 이미지
      const compressedDir = path.join(MOBILE_DIR, 'compressed', subDir);
      if (!fs.existsSync(compressedDir)) {
        fs.mkdirSync(compressedDir, { recursive: true });
      }

      await image
        .jpeg({ quality: 85, progressive: true })
        .toFile(path.join(compressedDir, `${baseName}.jpg`));

      // 다중 해상도 이미지 (1x, 2x, 3x)
      const resolutions = [
        { name: '1x', scale: 1 },
        { name: '2x', scale: 2 },
        { name: '3x', scale: 3 }
      ];

      const baseWidth = metadata.width || 100;
      const baseHeight = metadata.height || 100;

      for (const { name, scale } of resolutions) {
        const resolutionDir = path.join(MOBILE_DIR, name, subDir);
        if (!fs.existsSync(resolutionDir)) {
          fs.mkdirSync(resolutionDir, { recursive: true });
        }

        const targetWidth = Math.round(baseWidth / 3 * scale);
        const targetHeight = Math.round(baseHeight / 3 * scale);

        await image
          .resize(targetWidth, targetHeight, {
            fit: 'contain',
            background: { r: 255, g: 255, b: 255, alpha: 0 }
          })
          .png({ quality: 90 })
          .toFile(path.join(resolutionDir, `${baseName}.png`));
      }

    } catch (error) {
      console.warn(`⚠️  Failed to optimize mobile image ${file}: ${error.message}`);
    }
  }
}

/**
 * 인덱스 파일 생성
 */
function generateIndexFiles(imageFiles) {
  // 웹용 인덱스
  const webExports = imageFiles.map(file => {
    const baseName = path.basename(file, path.extname(file));
    const safeName = baseName.replace(/[-\s]/g, '_').replace(/[^a-zA-Z0-9_]/g, '');
    const subDir = path.dirname(file) === '.' ? '' : `${path.dirname(file)}/`;

    return `export const ${safeName} = {
  webp: '/assets/images/web/webp/${subDir}${baseName}.webp',
  png: '/assets/images/web/png/${subDir}${baseName}.png',
  thumbnail: {
    small: '/assets/images/web/thumbnails/150x150/${subDir}${baseName}.webp',
    medium: '/assets/images/web/thumbnails/300x300/${subDir}${baseName}.webp',
    large: '/assets/images/web/thumbnails/600x600/${subDir}${baseName}.webp'
  }
};`;
  });

  const webIndexContent = `
/**
 * Pickly Images - Web Exports
 * Generated automatically - DO NOT EDIT
 */

${webExports.join('\n\n')}

// Image utilities
export function getImageUrl(name, format = 'webp') {
  return \`/assets/images/web/\${format}/\${name}.\${format}\`;
}

export function getThumbnailUrl(name, size = 'medium') {
  const sizes = {
    small: '150x150',
    medium: '300x300',
    large: '600x600'
  };
  return \`/assets/images/web/thumbnails/\${sizes[size]}/\${name}.webp\`;
}

export function getResponsiveImageSrcSet(name) {
  return \`
    \${getThumbnailUrl(name, 'small')} 150w,
    \${getThumbnailUrl(name, 'medium')} 300w,
    \${getThumbnailUrl(name, 'large')} 600w
  \`.trim();
}
`.trim();

  fs.writeFileSync(path.join(WEB_DIR, 'index.js'), webIndexContent);

  // 모바일용 인덱스
  const mobileConstants = imageFiles.map(file => {
    const baseName = path.basename(file, path.extname(file));
    const constantName = baseName.toUpperCase().replace(/[-\s]/g, '_').replace(/[^A-Z0-9_]/g, '');
    const subDir = path.dirname(file) === '.' ? '' : `${path.dirname(file)}/`;

    return `  static const String ${constantName} = 'assets/images/${subDir}${baseName}';`;
  });

  const mobileIndexContent = `
/**
 * Pickly Images - Flutter Constants
 * Generated automatically - DO NOT EDIT
 */

class PicklyImages {
  PicklyImages._();

${mobileConstants.join('\n')}

  /// Get image path for specific resolution
  static String getImage(String name, {String resolution = '1x'}) {
    return 'assets/images/\$resolution/\$name.png';
  }

  /// Get compressed image path
  static String getCompressed(String name) {
    return 'assets/images/compressed/\$name.jpg';
  }

  /// Get responsive image based on device pixel ratio
  static String getResponsive(String name, double pixelRatio) {
    if (pixelRatio >= 3.0) {
      return getImage(name, resolution: '3x');
    } else if (pixelRatio >= 2.0) {
      return getImage(name, resolution: '2x');
    } else {
      return getImage(name, resolution: '1x');
    }
  }
}
`.trim();

  fs.writeFileSync(path.join(MOBILE_DIR, 'index.dart'), mobileIndexContent);
}

if (require.main === module) {
  main().catch(console.error);
}

module.exports = { main };