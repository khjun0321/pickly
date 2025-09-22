/**
 * Pickly Design Tokens
 *
 * 모든 디자인 토큰을 통합적으로 export하는 메인 인덱스 파일
 */

export { colors } from './colors';
export { typography } from './typography';
export { spacing, sizes } from './spacing';
export { shadows } from './shadows';
export { borders } from './borders';
export { animations } from './animations';

// 모든 토큰을 하나의 객체로 통합
export const tokens = {
  colors,
  typography,
  spacing,
  sizes,
  shadows,
  borders,
  animations
} as const;

// 타입 정의
export type PicklyTokens = typeof tokens;
export type ColorTokens = typeof colors;
export type TypographyTokens = typeof typography;
export type SpacingTokens = typeof spacing;
export type SizeTokens = typeof sizes;
export type ShadowTokens = typeof shadows;
export type BorderTokens = typeof borders;
export type AnimationTokens = typeof animations;