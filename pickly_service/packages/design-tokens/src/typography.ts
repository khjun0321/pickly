/**
 * Pickly Design Tokens - Typography
 *
 * Font families, sizes, weights, line heights
 * 한글과 영문을 고려한 타이포그래피 시스템
 */

export const typography = {
  // Font Families
  fontFamily: {
    primary: {
      value: [
        "Pretendard Variable",
        "Pretendard",
        "-apple-system",
        "BlinkMacSystemFont",
        "system-ui",
        "Roboto",
        "Helvetica Neue",
        "Segoe UI",
        "Apple SD Gothic Neo",
        "Noto Sans KR",
        "Malgun Gothic",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "sans-serif"
      ]
    },
    mono: {
      value: [
        "SF Mono",
        "Monaco",
        "Inconsolata",
        "Roboto Mono",
        "Consolas",
        "Liberation Mono",
        "Menlo",
        "Courier",
        "monospace"
      ]
    }
  },

  // Font Weights
  fontWeight: {
    thin: { value: "100" },
    extraLight: { value: "200" },
    light: { value: "300" },
    regular: { value: "400" },
    medium: { value: "500" },
    semiBold: { value: "600" },
    bold: { value: "700" },
    extraBold: { value: "800" },
    black: { value: "900" }
  },

  // Font Sizes - 모바일 우선 반응형 크기
  fontSize: {
    // Body text
    xs: { value: "12px" },      // 작은 라벨, 캡션
    sm: { value: "14px" },      // 작은 텍스트
    base: { value: "16px" },    // 기본 바디 텍스트
    lg: { value: "18px" },      // 큰 바디 텍스트
    xl: { value: "20px" },      // 부제목

    // Headings
    "2xl": { value: "24px" },   // H4
    "3xl": { value: "30px" },   // H3
    "4xl": { value: "36px" },   // H2
    "5xl": { value: "48px" },   // H1
    "6xl": { value: "60px" },   // Display Large
    "7xl": { value: "72px" },   // Display XL
    "8xl": { value: "96px" },   // Display XXL
    "9xl": { value: "128px" }   // Display Hero
  },

  // Line Heights - 한글 최적화
  lineHeight: {
    none: { value: "1" },
    tight: { value: "1.25" },
    snug: { value: "1.375" },
    normal: { value: "1.5" },     // 한글 기본 권장
    relaxed: { value: "1.625" },
    loose: { value: "2" }
  },

  // Letter Spacing
  letterSpacing: {
    tighter: { value: "-0.05em" },
    tight: { value: "-0.025em" },
    normal: { value: "0em" },
    wide: { value: "0.025em" },
    wider: { value: "0.05em" },
    widest: { value: "0.1em" }
  },

  // Text Transform
  textTransform: {
    none: { value: "none" },
    capitalize: { value: "capitalize" },
    uppercase: { value: "uppercase" },
    lowercase: { value: "lowercase" }
  },

  // Text Decoration
  textDecoration: {
    none: { value: "none" },
    underline: { value: "underline" },
    overline: { value: "overline" },
    lineThrough: { value: "line-through" }
  },

  // Predefined Text Styles - 컴포넌트에서 바로 사용 가능한 스타일
  textStyles: {
    // Display styles
    displayHero: {
      fontSize: { value: "{fontSize.9xl}" },
      fontWeight: { value: "{fontWeight.black}" },
      lineHeight: { value: "{lineHeight.none}" },
      letterSpacing: { value: "{letterSpacing.tight}" }
    },
    displayLarge: {
      fontSize: { value: "{fontSize.6xl}" },
      fontWeight: { value: "{fontWeight.bold}" },
      lineHeight: { value: "{lineHeight.tight}" },
      letterSpacing: { value: "{letterSpacing.tight}" }
    },

    // Heading styles
    heading1: {
      fontSize: { value: "{fontSize.5xl}" },
      fontWeight: { value: "{fontWeight.bold}" },
      lineHeight: { value: "{lineHeight.tight}" },
      letterSpacing: { value: "{letterSpacing.normal}" }
    },
    heading2: {
      fontSize: { value: "{fontSize.4xl}" },
      fontWeight: { value: "{fontWeight.semiBold}" },
      lineHeight: { value: "{lineHeight.snug}" },
      letterSpacing: { value: "{letterSpacing.normal}" }
    },
    heading3: {
      fontSize: { value: "{fontSize.3xl}" },
      fontWeight: { value: "{fontWeight.semiBold}" },
      lineHeight: { value: "{lineHeight.snug}" },
      letterSpacing: { value: "{letterSpacing.normal}" }
    },
    heading4: {
      fontSize: { value: "{fontSize.2xl}" },
      fontWeight: { value: "{fontWeight.medium}" },
      lineHeight: { value: "{lineHeight.normal}" },
      letterSpacing: { value: "{letterSpacing.normal}" }
    },

    // Body styles
    bodyLarge: {
      fontSize: { value: "{fontSize.lg}" },
      fontWeight: { value: "{fontWeight.regular}" },
      lineHeight: { value: "{lineHeight.normal}" },
      letterSpacing: { value: "{letterSpacing.normal}" }
    },
    body: {
      fontSize: { value: "{fontSize.base}" },
      fontWeight: { value: "{fontWeight.regular}" },
      lineHeight: { value: "{lineHeight.normal}" },
      letterSpacing: { value: "{letterSpacing.normal}" }
    },
    bodySmall: {
      fontSize: { value: "{fontSize.sm}" },
      fontWeight: { value: "{fontWeight.regular}" },
      lineHeight: { value: "{lineHeight.normal}" },
      letterSpacing: { value: "{letterSpacing.normal}" }
    },

    // UI component styles
    button: {
      fontSize: { value: "{fontSize.base}" },
      fontWeight: { value: "{fontWeight.medium}" },
      lineHeight: { value: "{lineHeight.tight}" },
      letterSpacing: { value: "{letterSpacing.normal}" }
    },
    buttonSmall: {
      fontSize: { value: "{fontSize.sm}" },
      fontWeight: { value: "{fontWeight.medium}" },
      lineHeight: { value: "{lineHeight.tight}" },
      letterSpacing: { value: "{letterSpacing.normal}" }
    },
    caption: {
      fontSize: { value: "{fontSize.xs}" },
      fontWeight: { value: "{fontWeight.regular}" },
      lineHeight: { value: "{lineHeight.normal}" },
      letterSpacing: { value: "{letterSpacing.wide}" }
    },
    label: {
      fontSize: { value: "{fontSize.sm}" },
      fontWeight: { value: "{fontWeight.medium}" },
      lineHeight: { value: "{lineHeight.tight}" },
      letterSpacing: { value: "{letterSpacing.normal}" }
    },

    // Code styles
    code: {
      fontFamily: { value: "{fontFamily.mono}" },
      fontSize: { value: "{fontSize.sm}" },
      fontWeight: { value: "{fontWeight.regular}" },
      lineHeight: { value: "{lineHeight.normal}" }
    },
    codeBlock: {
      fontFamily: { value: "{fontFamily.mono}" },
      fontSize: { value: "{fontSize.sm}" },
      fontWeight: { value: "{fontWeight.regular}" },
      lineHeight: { value: "{lineHeight.relaxed}" }
    }
  }
} as const;