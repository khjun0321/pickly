/**
 * Pickly Design Tokens - Animations
 *
 * 일관된 애니메이션 시스템
 * 지속시간, 이징, 트랜지션 토큰들
 */

export const animations = {
  // Duration - 애니메이션 지속시간
  duration: {
    instant: { value: "0ms" },
    fast: { value: "150ms" },      // 빠른 피드백 (hover, focus)
    normal: { value: "250ms" },    // 기본 애니메이션
    slow: { value: "350ms" },      // 복잡한 애니메이션
    slower: { value: "500ms" },    // 큰 레이아웃 변화
    slowest: { value: "750ms" }    // 페이지 전환
  },

  // Timing functions - 이징 함수
  easing: {
    linear: { value: "linear" },
    ease: { value: "ease" },
    easeIn: { value: "ease-in" },
    easeOut: { value: "ease-out" },
    easeInOut: { value: "ease-in-out" },

    // Custom cubic-bezier curves
    bounce: { value: "cubic-bezier(0.68, -0.55, 0.265, 1.55)" },
    smooth: { value: "cubic-bezier(0.4, 0.0, 0.2, 1)" },
    sharp: { value: "cubic-bezier(0.4, 0.0, 0.6, 1)" },
    emphasized: { value: "cubic-bezier(0.2, 0.0, 0, 1.0)" },

    // Spring-like animations
    spring: { value: "cubic-bezier(0.175, 0.885, 0.32, 1.275)" },
    springGentle: { value: "cubic-bezier(0.25, 0.46, 0.45, 0.94)" }
  },

  // Common transitions - 자주 사용되는 트랜지션
  transition: {
    // Basic property transitions
    all: {
      duration: { value: "{animations.duration.normal}" },
      easing: { value: "{animations.easing.smooth}" },
      property: { value: "all" }
    },
    colors: {
      duration: { value: "{animations.duration.fast}" },
      easing: { value: "{animations.easing.smooth}" },
      property: { value: "background-color, border-color, color" }
    },
    opacity: {
      duration: { value: "{animations.duration.fast}" },
      easing: { value: "{animations.easing.smooth}" },
      property: { value: "opacity" }
    },
    transform: {
      duration: { value: "{animations.duration.normal}" },
      easing: { value: "{animations.easing.smooth}" },
      property: { value: "transform" }
    },
    shadow: {
      duration: { value: "{animations.duration.normal}" },
      easing: { value: "{animations.easing.smooth}" },
      property: { value: "box-shadow" }
    },

    // Component-specific transitions
    button: {
      duration: { value: "{animations.duration.fast}" },
      easing: { value: "{animations.easing.smooth}" },
      property: { value: "background-color, border-color, box-shadow, transform" }
    },
    input: {
      duration: { value: "{animations.duration.fast}" },
      easing: { value: "{animations.easing.smooth}" },
      property: { value: "border-color, box-shadow" }
    },
    modal: {
      duration: { value: "{animations.duration.normal}" },
      easing: { value: "{animations.easing.emphasized}" },
      property: { value: "opacity, transform" }
    },
    tooltip: {
      duration: { value: "{animations.duration.fast}" },
      easing: { value: "{animations.easing.smooth}" },
      property: { value: "opacity, transform" }
    },
    dropdown: {
      duration: { value: "{animations.duration.normal}" },
      easing: { value: "{animations.easing.spring}" },
      property: { value: "opacity, transform" }
    }
  },

  // Keyframe animations
  keyframes: {
    // Fade animations
    fadeIn: {
      from: { opacity: { value: "0" } },
      to: { opacity: { value: "1" } }
    },
    fadeOut: {
      from: { opacity: { value: "1" } },
      to: { opacity: { value: "0" } }
    },

    // Scale animations
    scaleIn: {
      from: {
        opacity: { value: "0" },
        transform: { value: "scale(0.9)" }
      },
      to: {
        opacity: { value: "1" },
        transform: { value: "scale(1)" }
      }
    },
    scaleOut: {
      from: {
        opacity: { value: "1" },
        transform: { value: "scale(1)" }
      },
      to: {
        opacity: { value: "0" },
        transform: { value: "scale(0.9)" }
      }
    },

    // Slide animations
    slideInDown: {
      from: {
        opacity: { value: "0" },
        transform: { value: "translateY(-10px)" }
      },
      to: {
        opacity: { value: "1" },
        transform: { value: "translateY(0)" }
      }
    },
    slideInUp: {
      from: {
        opacity: { value: "0" },
        transform: { value: "translateY(10px)" }
      },
      to: {
        opacity: { value: "1" },
        transform: { value: "translateY(0)" }
      }
    },
    slideInLeft: {
      from: {
        opacity: { value: "0" },
        transform: { value: "translateX(-10px)" }
      },
      to: {
        opacity: { value: "1" },
        transform: { value: "translateX(0)" }
      }
    },
    slideInRight: {
      from: {
        opacity: { value: "0" },
        transform: { value: "translateX(10px)" }
      },
      to: {
        opacity: { value: "1" },
        transform: { value: "translateX(0)" }
      }
    },

    // Loading animations
    spin: {
      from: { transform: { value: "rotate(0deg)" } },
      to: { transform: { value: "rotate(360deg)" } }
    },
    pulse: {
      "0%, 100%": { opacity: { value: "1" } },
      "50%": { opacity: { value: "0.5" } }
    },
    bounce: {
      "0%, 100%": {
        transform: { value: "translateY(-25%)" },
        animationTimingFunction: { value: "cubic-bezier(0.8,0,1,1)" }
      },
      "50%": {
        transform: { value: "none" },
        animationTimingFunction: { value: "cubic-bezier(0,0,0.2,1)" }
      }
    }
  },

  // Pre-defined animation combinations
  preset: {
    // Button animations
    buttonHover: {
      duration: { value: "{animations.duration.fast}" },
      easing: { value: "{animations.easing.smooth}" },
      transform: { value: "translateY(-1px)" },
      boxShadow: { value: "{shadows.buttonHover}" }
    },
    buttonPress: {
      duration: { value: "{animations.duration.fast}" },
      easing: { value: "{animations.easing.sharp}" },
      transform: { value: "translateY(0)" }
    },

    // Modal animations
    modalEnter: {
      duration: { value: "{animations.duration.normal}" },
      easing: { value: "{animations.easing.emphasized}" },
      keyframes: { value: "{animations.keyframes.scaleIn}" }
    },
    modalExit: {
      duration: { value: "{animations.duration.normal}" },
      easing: { value: "{animations.easing.emphasized}" },
      keyframes: { value: "{animations.keyframes.scaleOut}" }
    },

    // Toast animations
    toastEnter: {
      duration: { value: "{animations.duration.normal}" },
      easing: { value: "{animations.easing.spring}" },
      keyframes: { value: "{animations.keyframes.slideInRight}" }
    },
    toastExit: {
      duration: { value: "{animations.duration.fast}" },
      easing: { value: "{animations.easing.smooth}" },
      keyframes: { value: "{animations.keyframes.fadeOut}" }
    },

    // Loading animations
    spinner: {
      duration: { value: "1s" },
      easing: { value: "{animations.easing.linear}" },
      iterationCount: { value: "infinite" },
      keyframes: { value: "{animations.keyframes.spin}" }
    },
    skeleton: {
      duration: { value: "2s" },
      easing: { value: "{animations.easing.linear}" },
      iterationCount: { value: "infinite" },
      keyframes: { value: "{animations.keyframes.pulse}" }
    }
  }
} as const;