/**
 * Pickly Design Tokens - Spacing
 *
 * 일관된 간격 시스템을 위한 spacing 토큰
 * 4px 기본 단위를 사용한 8pt grid system
 */

export const spacing = {
  // Base unit: 4px
  // 8pt grid system을 위한 spacing scale

  // Micro spacing (0-8px)
  0: { value: "0px" },
  px: { value: "1px" },
  0.5: { value: "2px" },
  1: { value: "4px" },
  2: { value: "8px" },

  // Small spacing (12-24px)
  3: { value: "12px" },
  4: { value: "16px" },
  5: { value: "20px" },
  6: { value: "24px" },

  // Medium spacing (28-48px)
  7: { value: "28px" },
  8: { value: "32px" },
  9: { value: "36px" },
  10: { value: "40px" },
  11: { value: "44px" },
  12: { value: "48px" },

  // Large spacing (52-96px)
  14: { value: "56px" },
  16: { value: "64px" },
  20: { value: "80px" },
  24: { value: "96px" },

  // Extra large spacing (112px+)
  28: { value: "112px" },
  32: { value: "128px" },
  36: { value: "144px" },
  40: { value: "160px" },
  44: { value: "176px" },
  48: { value: "192px" },
  52: { value: "208px" },
  56: { value: "224px" },
  60: { value: "240px" },
  64: { value: "256px" },
  72: { value: "288px" },
  80: { value: "320px" },
  96: { value: "384px" },

  // Semantic spacing aliases
  semantic: {
    // Component internal spacing
    xs: { value: "{spacing.1}" },      // 4px - 아이콘과 텍스트 사이
    sm: { value: "{spacing.2}" },      // 8px - 작은 패딩
    md: { value: "{spacing.4}" },      // 16px - 기본 패딩
    lg: { value: "{spacing.6}" },      // 24px - 큰 패딩
    xl: { value: "{spacing.8}" },      // 32px - 매우 큰 패딩

    // Layout spacing
    sectionGap: { value: "{spacing.12}" },    // 48px - 섹션 간격
    pageMargin: { value: "{spacing.6}" },     // 24px - 페이지 여백
    containerPadding: { value: "{spacing.4}" }, // 16px - 컨테이너 패딩

    // Component spacing
    buttonPadding: { value: "{spacing.3} {spacing.4}" }, // 12px 16px
    inputPadding: { value: "{spacing.3} {spacing.4}" },  // 12px 16px
    cardPadding: { value: "{spacing.6}" },               // 24px
    modalPadding: { value: "{spacing.8}" },              // 32px

    // List spacing
    listItemGap: { value: "{spacing.3}" },     // 12px - 리스트 아이템 간격
    listSectionGap: { value: "{spacing.6}" },  // 24px - 리스트 섹션 간격

    // Grid spacing
    gridGap: { value: "{spacing.4}" },         // 16px - 기본 그리드 간격
    gridGapLarge: { value: "{spacing.6}" },    // 24px - 큰 그리드 간격
    gridGapSmall: { value: "{spacing.2}" },    // 8px - 작은 그리드 간격
  }
} as const;

// Size values (width, height 등에 사용)
export const sizes = {
  // Spacing을 상속받아 크기로도 사용
  ...spacing,

  // 추가적인 크기 값들
  none: { value: "0" },
  auto: { value: "auto" },
  full: { value: "100%" },
  screen: { value: "100vh" },
  min: { value: "min-content" },
  max: { value: "max-content" },
  fit: { value: "fit-content" },

  // Fraction sizes
  "1/2": { value: "50%" },
  "1/3": { value: "33.333333%" },
  "2/3": { value: "66.666667%" },
  "1/4": { value: "25%" },
  "2/4": { value: "50%" },
  "3/4": { value: "75%" },
  "1/5": { value: "20%" },
  "2/5": { value: "40%" },
  "3/5": { value: "60%" },
  "4/5": { value: "80%" },

  // Common component sizes
  component: {
    // Button sizes
    buttonHeightSmall: { value: "{spacing.8}" },    // 32px
    buttonHeight: { value: "{spacing.11}" },        // 44px
    buttonHeightLarge: { value: "{spacing.12}" },   // 48px

    // Input sizes
    inputHeight: { value: "{spacing.11}" },         // 44px
    inputHeightSmall: { value: "{spacing.8}" },     // 32px
    inputHeightLarge: { value: "{spacing.12}" },    // 48px

    // Icon sizes
    iconXs: { value: "{spacing.3}" },               // 12px
    iconSm: { value: "{spacing.4}" },               // 16px
    iconMd: { value: "{spacing.5}" },               // 20px
    iconLg: { value: "{spacing.6}" },               // 24px
    iconXl: { value: "{spacing.8}" },               // 32px
    icon2xl: { value: "{spacing.10}" },             // 40px

    // Avatar sizes
    avatarXs: { value: "{spacing.6}" },             // 24px
    avatarSm: { value: "{spacing.8}" },             // 32px
    avatarMd: { value: "{spacing.10}" },            // 40px
    avatarLg: { value: "{spacing.12}" },            // 48px
    avatarXl: { value: "{spacing.16}" },            // 64px
    avatar2xl: { value: "{spacing.20}" },           // 80px

    // Container max widths
    containerSm: { value: "640px" },
    containerMd: { value: "768px" },
    containerLg: { value: "1024px" },
    containerXl: { value: "1280px" },
    container2xl: { value: "1536px" }
  }
} as const;