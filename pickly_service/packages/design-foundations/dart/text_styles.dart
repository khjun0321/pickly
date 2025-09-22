/**
 * Pickly Design Foundations - Flutter Text Styles
 *
 * Flutter 앱을 위한 텍스트 스타일 정의
 * 디자인 토큰 기반의 일관된 타이포그래피
 */

import 'package:flutter/material.dart';
import 'package:pickly_design_tokens/tokens.dart';

class PicklyTextStyles {
  // Private constructor to prevent instantiation
  PicklyTextStyles._();

  /// Display styles for hero sections
  static TextStyle get displayHero => TextStyle(
    fontSize: PicklyTokens.typographyTextStylesDisplayHeroFontSize,
    fontWeight: FontWeight.w900,
    height: PicklyTokens.typographyTextStylesDisplayHeroLineHeight,
    letterSpacing: PicklyTokens.typographyTextStylesDisplayHeroLetterSpacing,
    color: PicklyTokens.textPrimary,
  );

  static TextStyle get displayLarge => TextStyle(
    fontSize: PicklyTokens.typographyTextStylesDisplayLargeFontSize,
    fontWeight: FontWeight.w700,
    height: PicklyTokens.typographyTextStylesDisplayLargeLineHeight,
    letterSpacing: PicklyTokens.typographyTextStylesDisplayLargeLetterSpacing,
    color: PicklyTokens.textPrimary,
  );

  /// Heading styles
  static TextStyle get heading1 => TextStyle(
    fontSize: PicklyTokens.typographyTextStylesHeading1FontSize,
    fontWeight: FontWeight.w700,
    height: PicklyTokens.typographyTextStylesHeading1LineHeight,
    letterSpacing: PicklyTokens.typographyTextStylesHeading1LetterSpacing,
    color: PicklyTokens.textPrimary,
  );

  static TextStyle get heading2 => TextStyle(
    fontSize: PicklyTokens.typographyTextStylesHeading2FontSize,
    fontWeight: FontWeight.w600,
    height: PicklyTokens.typographyTextStylesHeading2LineHeight,
    letterSpacing: PicklyTokens.typographyTextStylesHeading2LetterSpacing,
    color: PicklyTokens.textPrimary,
  );

  static TextStyle get heading3 => TextStyle(
    fontSize: PicklyTokens.typographyTextStylesHeading3FontSize,
    fontWeight: FontWeight.w600,
    height: PicklyTokens.typographyTextStylesHeading3LineHeight,
    letterSpacing: PicklyTokens.typographyTextStylesHeading3LetterSpacing,
    color: PicklyTokens.textPrimary,
  );

  static TextStyle get heading4 => TextStyle(
    fontSize: PicklyTokens.typographyTextStylesHeading4FontSize,
    fontWeight: FontWeight.w500,
    height: PicklyTokens.typographyTextStylesHeading4LineHeight,
    letterSpacing: PicklyTokens.typographyTextStylesHeading4LetterSpacing,
    color: PicklyTokens.textPrimary,
  );

  /// Body text styles
  static TextStyle get bodyLarge => TextStyle(
    fontSize: PicklyTokens.typographyTextStylesBodyLargeFontSize,
    fontWeight: FontWeight.w400,
    height: PicklyTokens.typographyTextStylesBodyLargeLineHeight,
    letterSpacing: PicklyTokens.typographyTextStylesBodyLargeLetterSpacing,
    color: PicklyTokens.textPrimary,
  );

  static TextStyle get body => TextStyle(
    fontSize: PicklyTokens.typographyTextStylesBodyFontSize,
    fontWeight: FontWeight.w400,
    height: PicklyTokens.typographyTextStylesBodyLineHeight,
    letterSpacing: PicklyTokens.typographyTextStylesBodyLetterSpacing,
    color: PicklyTokens.textPrimary,
  );

  static TextStyle get bodySmall => TextStyle(
    fontSize: PicklyTokens.typographyTextStylesBodySmallFontSize,
    fontWeight: FontWeight.w400,
    height: PicklyTokens.typographyTextStylesBodySmallLineHeight,
    letterSpacing: PicklyTokens.typographyTextStylesBodySmallLetterSpacing,
    color: PicklyTokens.textPrimary,
  );

  /// UI component styles
  static TextStyle get button => TextStyle(
    fontSize: PicklyTokens.typographyTextStylesButtonFontSize,
    fontWeight: FontWeight.w500,
    height: PicklyTokens.typographyTextStylesButtonLineHeight,
    letterSpacing: PicklyTokens.typographyTextStylesButtonLetterSpacing,
  );

  static TextStyle get buttonSmall => TextStyle(
    fontSize: PicklyTokens.typographyTextStylesButtonSmallFontSize,
    fontWeight: FontWeight.w500,
    height: PicklyTokens.typographyTextStylesButtonSmallLineHeight,
    letterSpacing: PicklyTokens.typographyTextStylesButtonSmallLetterSpacing,
  );

  static TextStyle get label => TextStyle(
    fontSize: PicklyTokens.typographyTextStylesLabelFontSize,
    fontWeight: FontWeight.w500,
    height: PicklyTokens.typographyTextStylesLabelLineHeight,
    letterSpacing: PicklyTokens.typographyTextStylesLabelLetterSpacing,
    color: PicklyTokens.textPrimary,
  );

  static TextStyle get caption => TextStyle(
    fontSize: PicklyTokens.typographyTextStylesCaptionFontSize,
    fontWeight: FontWeight.w400,
    height: PicklyTokens.typographyTextStylesCaptionLineHeight,
    letterSpacing: PicklyTokens.typographyTextStylesCaptionLetterSpacing,
    color: PicklyTokens.textSecondary,
  );

  /// Code styles
  static TextStyle get code => TextStyle(
    fontFamily: PicklyTokens.typographyFontFamilyMono,
    fontSize: PicklyTokens.typographyTextStylesCodeFontSize,
    fontWeight: FontWeight.w400,
    height: PicklyTokens.typographyTextStylesCodeLineHeight,
    color: PicklyTokens.textPrimary,
  );

  static TextStyle get codeBlock => TextStyle(
    fontFamily: PicklyTokens.typographyFontFamilyMono,
    fontSize: PicklyTokens.typographyTextStylesCodeBlockFontSize,
    fontWeight: FontWeight.w400,
    height: PicklyTokens.typographyTextStylesCodeBlockLineHeight,
    color: PicklyTokens.textPrimary,
  );

  /// Semantic color variations

  // Secondary text styles
  static TextStyle get bodySecondary => body.copyWith(
    color: PicklyTokens.textSecondary,
  );

  static TextStyle get bodySmallSecondary => bodySmall.copyWith(
    color: PicklyTokens.textSecondary,
  );

  static TextStyle get labelSecondary => label.copyWith(
    color: PicklyTokens.textSecondary,
  );

  // Tertiary text styles
  static TextStyle get bodyTertiary => body.copyWith(
    color: PicklyTokens.textTertiary,
  );

  static TextStyle get captionTertiary => caption.copyWith(
    color: PicklyTokens.textTertiary,
  );

  // Link styles
  static TextStyle get link => body.copyWith(
    color: PicklyTokens.textLink,
    decoration: TextDecoration.underline,
  );

  static TextStyle get linkSmall => bodySmall.copyWith(
    color: PicklyTokens.textLink,
    decoration: TextDecoration.underline,
  );

  // Brand color styles
  static TextStyle get headingPrimary => heading2.copyWith(
    color: PicklyTokens.primary500,
  );

  static TextStyle get bodyPrimary => body.copyWith(
    color: PicklyTokens.primary500,
  );

  static TextStyle get labelPrimary => label.copyWith(
    color: PicklyTokens.primary500,
  );

  // Semantic color styles
  static TextStyle get success => body.copyWith(
    color: PicklyTokens.semanticSuccess500,
  );

  static TextStyle get warning => body.copyWith(
    color: PicklyTokens.semanticWarning500,
  );

  static TextStyle get error => body.copyWith(
    color: PicklyTokens.semanticError500,
  );

  static TextStyle get info => body.copyWith(
    color: PicklyTokens.semanticInfo500,
  );

  // On dark background styles
  static TextStyle get onDark => body.copyWith(
    color: PicklyTokens.textInverse,
  );

  static TextStyle get headingOnDark => heading2.copyWith(
    color: PicklyTokens.textInverse,
  );

  static TextStyle get captionOnDark => caption.copyWith(
    color: PicklyTokens.neutral300,
  );

  /// Utility methods for custom styling

  /// Apply custom color to any text style
  static TextStyle withColor(TextStyle style, Color color) {
    return style.copyWith(color: color);
  }

  /// Apply custom font weight to any text style
  static TextStyle withWeight(TextStyle style, FontWeight weight) {
    return style.copyWith(fontWeight: weight);
  }

  /// Apply custom font size to any text style
  static TextStyle withSize(TextStyle style, double size) {
    return style.copyWith(fontSize: size);
  }

  /// Create responsive text style based on screen size
  static TextStyle responsive({
    required BuildContext context,
    required TextStyle mobile,
    required TextStyle desktop,
  }) {
    final screenWidth = MediaQuery.of(context).size.width;
    return screenWidth >= 768 ? desktop : mobile;
  }

  /// Create adaptive text style based on platform
  static TextStyle adaptive({
    required TextStyle material,
    TextStyle? cupertino,
  }) {
    // For future iOS support
    return material;
  }
}