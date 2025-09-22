/**
 * Pickly Design Tokens - Borders
 *
 * 일관된 보더 시스템
 * 테두리 두께, 스타일, 반경 토큰들
 */

export const borders = {
  // Border widths
  width: {
    none: { value: "0" },
    thin: { value: "1px" },
    medium: { value: "2px" },
    thick: { value: "4px" },
    thicker: { value: "8px" }
  },

  // Border styles
  style: {
    none: { value: "none" },
    solid: { value: "solid" },
    dashed: { value: "dashed" },
    dotted: { value: "dotted" },
    double: { value: "double" }
  },

  // Border radius - 부드러운 코너를 위한 radius 시스템
  radius: {
    none: { value: "0" },
    xs: { value: "2px" },      // 아주 작은 radius
    sm: { value: "4px" },      // 작은 radius
    md: { value: "6px" },      // 기본 radius
    lg: { value: "8px" },      // 큰 radius
    xl: { value: "12px" },     // 매우 큰 radius
    "2xl": { value: "16px" },  // 더 큰 radius
    "3xl": { value: "24px" },  // 매우 큰 radius
    full: { value: "9999px" }  // 완전한 원형 (pill shape)
  },

  // Component-specific border radius
  component: {
    button: { value: "{borders.radius.md}" },        // 6px
    buttonRound: { value: "{borders.radius.full}" }, // pill shape
    input: { value: "{borders.radius.md}" },         // 6px
    card: { value: "{borders.radius.lg}" },          // 8px
    modal: { value: "{borders.radius.xl}" },         // 12px
    badge: { value: "{borders.radius.full}" },       // pill shape
    avatar: { value: "{borders.radius.full}" },      // circle
    image: { value: "{borders.radius.md}" },         // 6px
    thumbnail: { value: "{borders.radius.sm}" },     // 4px
    tooltip: { value: "{borders.radius.sm}" },       // 4px
    dropdown: { value: "{borders.radius.lg}" },      // 8px
    tab: { value: "{borders.radius.md}" },           // 6px
    toast: { value: "{borders.radius.lg}" }          // 8px
  },

  // Composite border tokens - 자주 사용되는 보더 조합
  composite: {
    none: {
      width: { value: "{borders.width.none}" },
      style: { value: "{borders.style.none}" }
    },
    default: {
      width: { value: "{borders.width.thin}" },
      style: { value: "{borders.style.solid}" },
      color: { value: "{border.primary}" }
    },
    focus: {
      width: { value: "{borders.width.medium}" },
      style: { value: "{borders.style.solid}" },
      color: { value: "{border.focus}" }
    },
    error: {
      width: { value: "{borders.width.thin}" },
      style: { value: "{borders.style.solid}" },
      color: { value: "{border.error}" }
    },
    success: {
      width: { value: "{borders.width.thin}" },
      style: { value: "{borders.style.solid}" },
      color: { value: "{border.success}" }
    },
    dashed: {
      width: { value: "{borders.width.thin}" },
      style: { value: "{borders.style.dashed}" },
      color: { value: "{border.secondary}" }
    }
  }
} as const;