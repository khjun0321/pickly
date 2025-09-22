/**
 * Pickly Design Tokens - Colors
 *
 * Primary palette: Pickly 브랜드 컬러 (녹색 계열)
 * Secondary palette: 보조 컬러 (블루 계열)
 * Neutral palette: 회색 계열
 * Semantic colors: 의미적 컬러 (성공, 경고, 에러 등)
 */

export const colors = {
  // Primary Palette - Pickly 브랜드 컬러 (녹색)
  primary: {
    50: { value: "#f0fdf4" },   // 매우 연한 녹색
    100: { value: "#dcfce7" },  // 연한 녹색
    200: { value: "#bbf7d0" },  // 밝은 녹색
    300: { value: "#86efac" },  // 중간 밝은 녹색
    400: { value: "#4ade80" },  // 밝은 녹색
    500: { value: "#22c55e" },  // 기본 녹색 (브랜드 메인)
    600: { value: "#16a34a" },  // 진한 녹색
    700: { value: "#15803d" },  // 더 진한 녹색
    800: { value: "#166534" },  // 매우 진한 녹색
    900: { value: "#14532d" },  // 가장 진한 녹색
    950: { value: "#052e16" }   // 거의 검은 녹색
  },

  // Secondary Palette - 보조 컬러 (블루)
  secondary: {
    50: { value: "#eff6ff" },
    100: { value: "#dbeafe" },
    200: { value: "#bfdbfe" },
    300: { value: "#93c5fd" },
    400: { value: "#60a5fa" },
    500: { value: "#3b82f6" },  // 기본 블루
    600: { value: "#2563eb" },
    700: { value: "#1d4ed8" },
    800: { value: "#1e40af" },
    900: { value: "#1e3a8a" },
    950: { value: "#172554" }
  },

  // Neutral Palette - 회색 계열
  neutral: {
    0: { value: "#ffffff" },    // 순백
    50: { value: "#f9fafb" },
    100: { value: "#f3f4f6" },
    200: { value: "#e5e7eb" },
    300: { value: "#d1d5db" },
    400: { value: "#9ca3af" },
    500: { value: "#6b7280" },
    600: { value: "#4b5563" },
    700: { value: "#374151" },
    800: { value: "#1f2937" },
    900: { value: "#111827" },
    950: { value: "#030712" },
    1000: { value: "#000000" }  // 순흑
  },

  // Semantic Colors - 의미적 컬러
  semantic: {
    success: {
      50: { value: "#f0fdf4" },
      100: { value: "#dcfce7" },
      500: { value: "#22c55e" },  // 성공 (Primary와 동일)
      600: { value: "#16a34a" },
      900: { value: "#14532d" }
    },
    warning: {
      50: { value: "#fffbeb" },
      100: { value: "#fef3c7" },
      500: { value: "#f59e0b" },  // 경고
      600: { value: "#d97706" },
      900: { value: "#78350f" }
    },
    error: {
      50: { value: "#fef2f2" },
      100: { value: "#fee2e2" },
      500: { value: "#ef4444" },  // 에러
      600: { value: "#dc2626" },
      900: { value: "#7f1d1d" }
    },
    info: {
      50: { value: "#eff6ff" },
      100: { value: "#dbeafe" },
      500: { value: "#3b82f6" },  // 정보 (Secondary와 동일)
      600: { value: "#2563eb" },
      900: { value: "#1e3a8a" }
    }
  },

  // Background Colors
  background: {
    primary: { value: "{neutral.0}" },       // 기본 배경 (흰색)
    secondary: { value: "{neutral.50}" },    // 보조 배경
    tertiary: { value: "{neutral.100}" },    // 3차 배경
    inverse: { value: "{neutral.900}" }      // 반전 배경 (다크)
  },

  // Text Colors
  text: {
    primary: { value: "{neutral.900}" },     // 기본 텍스트 (검은색)
    secondary: { value: "{neutral.600}" },   // 보조 텍스트
    tertiary: { value: "{neutral.400}" },    // 3차 텍스트 (비활성)
    inverse: { value: "{neutral.0}" },       // 반전 텍스트 (흰색)
    link: { value: "{secondary.600}" },      // 링크 텍스트
    linkHover: { value: "{secondary.700}" }  // 링크 호버
  },

  // Border Colors
  border: {
    primary: { value: "{neutral.200}" },     // 기본 보더
    secondary: { value: "{neutral.300}" },   // 보조 보더
    focus: { value: "{primary.500}" },       // 포커스 보더
    error: { value: "{semantic.error.500}" },// 에러 보더
    success: { value: "{semantic.success.500}" } // 성공 보더
  }
} as const;