/**
 * Pickly Assets - Main Entry Point
 * Generated automatically - DO NOT EDIT
 */

// Asset utilities
export const ASSET_BASE_URL = process.env.NEXT_PUBLIC_ASSET_URL || '/assets';

export function getAssetUrl(path) {
  return `${ASSET_BASE_URL}/${path}`;
}

export function getImageUrl(name, format = 'webp') {
  return getAssetUrl(`images/web/${format}/${name}.${format}`);
}

export function getIconUrl(name) {
  return getAssetUrl(`icons/web/${name}.svg`);
}

export function getThumbnailUrl(name, size = 'medium') {
  const sizes = {
    small: '150x150',
    medium: '300x300',
    large: '600x600'
  };
  return getAssetUrl(`images/web/thumbnails/${sizes[size]}/${name}.webp`);
}

export function getResponsiveImageSrcSet(name) {
  return `
    ${getThumbnailUrl(name, 'small')} 150w,
    ${getThumbnailUrl(name, 'medium')} 300w,
    ${getThumbnailUrl(name, 'large')} 600w
  `.trim();
}

// Picture element helper
export function createPictureElement(name, alt = '', className = '') {
  return `
    <picture class="${className}">
      <source srcset="${getImageUrl(name, 'webp')}" type="image/webp">
      <source srcset="${getImageUrl(name, 'png')}" type="image/png">
      <img src="${getImageUrl(name, 'png')}" alt="${alt}" loading="lazy">
    </picture>
  `.trim();
}

// Font loading helper
export function loadFonts() {
  // Preload critical fonts
  const fontsToPreload = [
    'Pretendard/web/PretendardVariable.woff2',
    'Pretendard/web/Pretendard-Regular.woff2',
    'Pretendard/web/Pretendard-Medium.woff2',
    'Pretendard/web/Pretendard-Bold.woff2'
  ];

  fontsToPreload.forEach(font => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = getAssetUrl(`fonts/${font}`);
    link.as = 'font';
    link.type = 'font/woff2';
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  });
}

// Asset manifest for build tools
export const ASSET_MANIFEST = {
  icons: [
    'apt', 'bell_m', 'book_m', 'building', 'bus', 'buy', 'calendar',
    'clock', 'condition', 'credit', 'ear', 'fire', 'heart', 'home',
    'home2', 'hospital', 'kinder', 'location', 'rice', 'ring',
    'school', 'shirts', 'speaker', 'star', 'tool', 'won'
  ],
  fonts: {
    primary: 'Pretendard',
    mono: 'SF Mono'
  },
  version: '1.0.0'
};