/**
 * Pickly Design Tokens - Shadows
 *
 * 일관된 그림자 시스템
 * 깊이와 elevation을 표현하는 shadow 토큰들
 */

export const shadows = {
  // Drop shadows - 컴포넌트 elevation 표현
  none: { value: "none" },

  // Subtle shadows
  xs: {
    value: "0 1px 2px 0 rgba(0, 0, 0, 0.05)"
  },
  sm: {
    value: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)"
  },

  // Default shadows
  md: {
    value: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)"
  },
  lg: {
    value: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)"
  },
  xl: {
    value: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)"
  },

  // Strong shadows
  "2xl": {
    value: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
  },

  // Inner shadows
  inner: {
    value: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)"
  },

  // Colored shadows - 브랜드 컬러를 활용한 그림자
  colored: {
    primary: {
      sm: { value: "0 1px 3px 0 rgba(34, 197, 94, 0.1), 0 1px 2px -1px rgba(34, 197, 94, 0.1)" },
      md: { value: "0 4px 6px -1px rgba(34, 197, 94, 0.1), 0 2px 4px -2px rgba(34, 197, 94, 0.1)" },
      lg: { value: "0 10px 15px -3px rgba(34, 197, 94, 0.1), 0 4px 6px -4px rgba(34, 197, 94, 0.1)" }
    },
    secondary: {
      sm: { value: "0 1px 3px 0 rgba(59, 130, 246, 0.1), 0 1px 2px -1px rgba(59, 130, 246, 0.1)" },
      md: { value: "0 4px 6px -1px rgba(59, 130, 246, 0.1), 0 2px 4px -2px rgba(59, 130, 246, 0.1)" },
      lg: { value: "0 10px 15px -3px rgba(59, 130, 246, 0.1), 0 4px 6px -4px rgba(59, 130, 246, 0.1)" }
    },
    error: {
      sm: { value: "0 1px 3px 0 rgba(239, 68, 68, 0.1), 0 1px 2px -1px rgba(239, 68, 68, 0.1)" },
      md: { value: "0 4px 6px -1px rgba(239, 68, 68, 0.1), 0 2px 4px -2px rgba(239, 68, 68, 0.1)" },
      lg: { value: "0 10px 15px -3px rgba(239, 68, 68, 0.1), 0 4px 6px -4px rgba(239, 68, 68, 0.1)" }
    }
  },

  // Component-specific shadows
  component: {
    card: { value: "{shadows.sm}" },
    cardHover: { value: "{shadows.md}" },
    modal: { value: "{shadows.xl}" },
    dropdown: { value: "{shadows.lg}" },
    tooltip: { value: "{shadows.md}" },
    button: { value: "{shadows.xs}" },
    buttonHover: { value: "{shadows.sm}" },
    input: { value: "{shadows.xs}" },
    inputFocus: { value: "{shadows.colored.primary.sm}" },
    navbar: { value: "{shadows.sm}" },
    sidebar: { value: "{shadows.lg}" },
    floatingActionButton: { value: "{shadows.lg}" }
  },

  // Elevation system - Material Design 스타일 elevation
  elevation: {
    0: { value: "none" },
    1: { value: "0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)" },
    2: { value: "0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)" },
    3: { value: "0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)" },
    4: { value: "0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)" },
    5: { value: "0 19px 38px rgba(0, 0, 0, 0.30), 0 15px 12px rgba(0, 0, 0, 0.22)" }
  }
} as const;