/**
 * Pickly Design Foundations - Flutter Theme Data
 *
 * Flutter 앱을 위한 테마 설정
 * Material 3 디자인 시스템 기반
 */

import 'package:flutter/material.dart';
import 'package:pickly_design_tokens/tokens.dart';

class PicklyTheme {
  // Private constructor to prevent instantiation
  PicklyTheme._();

  /// Light theme configuration
  static ThemeData light() {
    return ThemeData(
      useMaterial3: true,
      brightness: Brightness.light,

      // Color scheme based on our design tokens
      colorScheme: ColorScheme.fromSeed(
        seedColor: PicklyTokens.primary500,
        brightness: Brightness.light,
      ).copyWith(
        primary: PicklyTokens.primary500,
        onPrimary: PicklyTokens.neutral0,
        primaryContainer: PicklyTokens.primary100,
        onPrimaryContainer: PicklyTokens.primary900,

        secondary: PicklyTokens.secondary500,
        onSecondary: PicklyTokens.neutral0,
        secondaryContainer: PicklyTokens.secondary100,
        onSecondaryContainer: PicklyTokens.secondary900,

        error: PicklyTokens.semanticError500,
        onError: PicklyTokens.neutral0,
        errorContainer: PicklyTokens.semanticError100,
        onErrorContainer: PicklyTokens.semanticError900,

        background: PicklyTokens.backgroundPrimary,
        onBackground: PicklyTokens.textPrimary,
        surface: PicklyTokens.backgroundSecondary,
        onSurface: PicklyTokens.textPrimary,

        outline: PicklyTokens.borderPrimary,
        outlineVariant: PicklyTokens.borderSecondary,
      ),

      // Typography
      textTheme: _buildTextTheme(),

      // App Bar Theme
      appBarTheme: AppBarTheme(
        backgroundColor: PicklyTokens.backgroundPrimary,
        foregroundColor: PicklyTokens.textPrimary,
        elevation: 0,
        centerTitle: true,
        titleTextStyle: TextStyle(
          fontSize: PicklyTokens.typographyTextStylesHeading3FontSize,
          fontWeight: FontWeight.w600,
          color: PicklyTokens.textPrimary,
        ),
      ),

      // Card Theme
      cardTheme: CardTheme(
        color: PicklyTokens.backgroundPrimary,
        elevation: 2,
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(PicklyTokens.bordersComponentCard),
        ),
        margin: EdgeInsets.all(PicklyTokens.spacingSemanticSm),
      ),

      // Elevated Button Theme
      elevatedButtonTheme: ElevatedButtonThemeData(
        style: ElevatedButton.styleFrom(
          backgroundColor: PicklyTokens.primary500,
          foregroundColor: PicklyTokens.neutral0,
          textStyle: TextStyle(
            fontSize: PicklyTokens.typographyTextStylesButtonFontSize,
            fontWeight: FontWeight.w500,
          ),
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(PicklyTokens.bordersComponentButton),
          ),
          minimumSize: Size(
            double.infinity,
            PicklyTokens.sizesComponentButtonHeight,
          ),
          padding: EdgeInsets.symmetric(
            horizontal: PicklyTokens.spacingSemanticMd,
            vertical: PicklyTokens.spacingSemanticSm,
          ),
        ),
      ),

      // Outlined Button Theme
      outlinedButtonTheme: OutlinedButtonThemeData(
        style: OutlinedButton.styleFrom(
          foregroundColor: PicklyTokens.primary500,
          textStyle: TextStyle(
            fontSize: PicklyTokens.typographyTextStylesButtonFontSize,
            fontWeight: FontWeight.w500,
          ),
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(PicklyTokens.bordersComponentButton),
          ),
          side: BorderSide(
            color: PicklyTokens.borderPrimary,
            width: PicklyTokens.bordersWidthThin,
          ),
          minimumSize: Size(
            double.infinity,
            PicklyTokens.sizesComponentButtonHeight,
          ),
          padding: EdgeInsets.symmetric(
            horizontal: PicklyTokens.spacingSemanticMd,
            vertical: PicklyTokens.spacingSemanticSm,
          ),
        ),
      ),

      // Text Button Theme
      textButtonTheme: TextButtonThemeData(
        style: TextButton.styleFrom(
          foregroundColor: PicklyTokens.primary500,
          textStyle: TextStyle(
            fontSize: PicklyTokens.typographyTextStylesButtonFontSize,
            fontWeight: FontWeight.w500,
          ),
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(PicklyTokens.bordersComponentButton),
          ),
          padding: EdgeInsets.symmetric(
            horizontal: PicklyTokens.spacingSemanticMd,
            vertical: PicklyTokens.spacingSemanticSm,
          ),
        ),
      ),

      // Input Decoration Theme
      inputDecorationTheme: InputDecorationTheme(
        filled: true,
        fillColor: PicklyTokens.backgroundPrimary,
        border: OutlineInputBorder(
          borderRadius: BorderRadius.circular(PicklyTokens.bordersComponentInput),
          borderSide: BorderSide(
            color: PicklyTokens.borderPrimary,
            width: PicklyTokens.bordersWidthThin,
          ),
        ),
        enabledBorder: OutlineInputBorder(
          borderRadius: BorderRadius.circular(PicklyTokens.bordersComponentInput),
          borderSide: BorderSide(
            color: PicklyTokens.borderPrimary,
            width: PicklyTokens.bordersWidthThin,
          ),
        ),
        focusedBorder: OutlineInputBorder(
          borderRadius: BorderRadius.circular(PicklyTokens.bordersComponentInput),
          borderSide: BorderSide(
            color: PicklyTokens.borderFocus,
            width: PicklyTokens.bordersWidthMedium,
          ),
        ),
        errorBorder: OutlineInputBorder(
          borderRadius: BorderRadius.circular(PicklyTokens.bordersComponentInput),
          borderSide: BorderSide(
            color: PicklyTokens.borderError,
            width: PicklyTokens.bordersWidthThin,
          ),
        ),
        focusedErrorBorder: OutlineInputBorder(
          borderRadius: BorderRadius.circular(PicklyTokens.bordersComponentInput),
          borderSide: BorderSide(
            color: PicklyTokens.borderError,
            width: PicklyTokens.bordersWidthMedium,
          ),
        ),
        contentPadding: EdgeInsets.symmetric(
          horizontal: PicklyTokens.spacingSemanticMd,
          vertical: PicklyTokens.spacingSemanticSm,
        ),
        hintStyle: TextStyle(
          color: PicklyTokens.textTertiary,
        ),
      ),

      // Chip Theme
      chipTheme: ChipThemeData(
        backgroundColor: PicklyTokens.backgroundSecondary,
        selectedColor: PicklyTokens.primary100,
        labelStyle: TextStyle(
          fontSize: PicklyTokens.typographyTextStylesLabelFontSize,
          fontWeight: FontWeight.w500,
          color: PicklyTokens.textPrimary,
        ),
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(PicklyTokens.bordersComponentBadge),
        ),
        padding: EdgeInsets.symmetric(
          horizontal: PicklyTokens.spacingSemanticSm,
          vertical: PicklyTokens.spacingSemanticXs,
        ),
      ),

      // Bottom Navigation Bar Theme
      bottomNavigationBarTheme: BottomNavigationBarThemeData(
        backgroundColor: PicklyTokens.backgroundPrimary,
        selectedItemColor: PicklyTokens.primary500,
        unselectedItemColor: PicklyTokens.textTertiary,
        type: BottomNavigationBarType.fixed,
        elevation: 8,
      ),

      // Tab Bar Theme
      tabBarTheme: TabBarTheme(
        labelColor: PicklyTokens.primary500,
        unselectedLabelColor: PicklyTokens.textSecondary,
        labelStyle: TextStyle(
          fontSize: PicklyTokens.typographyTextStylesLabelFontSize,
          fontWeight: FontWeight.w600,
        ),
        unselectedLabelStyle: TextStyle(
          fontSize: PicklyTokens.typographyTextStylesLabelFontSize,
          fontWeight: FontWeight.w500,
        ),
        indicator: BoxDecoration(
          color: PicklyTokens.primary500,
          borderRadius: BorderRadius.circular(PicklyTokens.bordersComponentTab),
        ),
      ),

      // Dialog Theme
      dialogTheme: DialogTheme(
        backgroundColor: PicklyTokens.backgroundPrimary,
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(PicklyTokens.bordersComponentModal),
        ),
        elevation: 24,
        titleTextStyle: TextStyle(
          fontSize: PicklyTokens.typographyTextStylesHeading4FontSize,
          fontWeight: FontWeight.w600,
          color: PicklyTokens.textPrimary,
        ),
        contentTextStyle: TextStyle(
          fontSize: PicklyTokens.typographyTextStylesBodyFontSize,
          color: PicklyTokens.textSecondary,
        ),
      ),

      // Snack Bar Theme
      snackBarTheme: SnackBarThemeData(
        backgroundColor: PicklyTokens.neutral800,
        contentTextStyle: TextStyle(
          color: PicklyTokens.neutral0,
          fontSize: PicklyTokens.typographyTextStylesBodyFontSize,
        ),
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(PicklyTokens.bordersComponentToast),
        ),
        behavior: SnackBarBehavior.floating,
      ),

      // Progress Indicator Theme
      progressIndicatorTheme: ProgressIndicatorThemeData(
        color: PicklyTokens.primary500,
        linearTrackColor: PicklyTokens.primary100,
        circularTrackColor: PicklyTokens.primary100,
      ),

      // Switch Theme
      switchTheme: SwitchThemeData(
        thumbColor: MaterialStateProperty.resolveWith((states) {
          if (states.contains(MaterialState.selected)) {
            return PicklyTokens.primary500;
          }
          return PicklyTokens.neutral300;
        }),
        trackColor: MaterialStateProperty.resolveWith((states) {
          if (states.contains(MaterialState.selected)) {
            return PicklyTokens.primary200;
          }
          return PicklyTokens.neutral200;
        }),
      ),

      // Checkbox Theme
      checkboxTheme: CheckboxThemeData(
        fillColor: MaterialStateProperty.resolveWith((states) {
          if (states.contains(MaterialState.selected)) {
            return PicklyTokens.primary500;
          }
          return Colors.transparent;
        }),
        checkColor: MaterialStateProperty.all(PicklyTokens.neutral0),
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(PicklyTokens.bordersRadiusXs),
        ),
      ),

      // Radio Theme
      radioTheme: RadioThemeData(
        fillColor: MaterialStateProperty.resolveWith((states) {
          if (states.contains(MaterialState.selected)) {
            return PicklyTokens.primary500;
          }
          return PicklyTokens.neutral400;
        }),
      ),
    );
  }

  /// Dark theme configuration
  static ThemeData dark() {
    return light().copyWith(
      brightness: Brightness.dark,
      colorScheme: ColorScheme.fromSeed(
        seedColor: PicklyTokens.primary500,
        brightness: Brightness.dark,
      ).copyWith(
        primary: PicklyTokens.primary400,
        onPrimary: PicklyTokens.neutral900,
        primaryContainer: PicklyTokens.primary800,
        onPrimaryContainer: PicklyTokens.primary100,

        background: PicklyTokens.neutral900,
        onBackground: PicklyTokens.neutral100,
        surface: PicklyTokens.neutral800,
        onSurface: PicklyTokens.neutral100,
      ),
    );
  }

  /// Build text theme based on design tokens
  static TextTheme _buildTextTheme() {
    return TextTheme(
      // Display styles
      displayLarge: TextStyle(
        fontSize: PicklyTokens.typographyTextStylesDisplayLargeFontSize,
        fontWeight: FontWeight.w700,
        height: PicklyTokens.typographyTextStylesDisplayLargeLineHeight,
        letterSpacing: PicklyTokens.typographyTextStylesDisplayLargeLetterSpacing,
      ),

      // Headline styles
      headlineLarge: TextStyle(
        fontSize: PicklyTokens.typographyTextStylesHeading1FontSize,
        fontWeight: FontWeight.w700,
        height: PicklyTokens.typographyTextStylesHeading1LineHeight,
        letterSpacing: PicklyTokens.typographyTextStylesHeading1LetterSpacing,
      ),
      headlineMedium: TextStyle(
        fontSize: PicklyTokens.typographyTextStylesHeading2FontSize,
        fontWeight: FontWeight.w600,
        height: PicklyTokens.typographyTextStylesHeading2LineHeight,
        letterSpacing: PicklyTokens.typographyTextStylesHeading2LetterSpacing,
      ),
      headlineSmall: TextStyle(
        fontSize: PicklyTokens.typographyTextStylesHeading3FontSize,
        fontWeight: FontWeight.w600,
        height: PicklyTokens.typographyTextStylesHeading3LineHeight,
        letterSpacing: PicklyTokens.typographyTextStylesHeading3LetterSpacing,
      ),

      // Title styles
      titleLarge: TextStyle(
        fontSize: PicklyTokens.typographyTextStylesHeading4FontSize,
        fontWeight: FontWeight.w500,
        height: PicklyTokens.typographyTextStylesHeading4LineHeight,
        letterSpacing: PicklyTokens.typographyTextStylesHeading4LetterSpacing,
      ),
      titleMedium: TextStyle(
        fontSize: PicklyTokens.typographyTextStylesBodyLargeFontSize,
        fontWeight: FontWeight.w500,
        height: PicklyTokens.typographyTextStylesBodyLargeLineHeight,
        letterSpacing: PicklyTokens.typographyTextStylesBodyLargeLetterSpacing,
      ),
      titleSmall: TextStyle(
        fontSize: PicklyTokens.typographyTextStylesLabelFontSize,
        fontWeight: FontWeight.w500,
        height: PicklyTokens.typographyTextStylesLabelLineHeight,
        letterSpacing: PicklyTokens.typographyTextStylesLabelLetterSpacing,
      ),

      // Body styles
      bodyLarge: TextStyle(
        fontSize: PicklyTokens.typographyTextStylesBodyLargeFontSize,
        fontWeight: FontWeight.w400,
        height: PicklyTokens.typographyTextStylesBodyLargeLineHeight,
        letterSpacing: PicklyTokens.typographyTextStylesBodyLargeLetterSpacing,
      ),
      bodyMedium: TextStyle(
        fontSize: PicklyTokens.typographyTextStylesBodyFontSize,
        fontWeight: FontWeight.w400,
        height: PicklyTokens.typographyTextStylesBodyLineHeight,
        letterSpacing: PicklyTokens.typographyTextStylesBodyLetterSpacing,
      ),
      bodySmall: TextStyle(
        fontSize: PicklyTokens.typographyTextStylesBodySmallFontSize,
        fontWeight: FontWeight.w400,
        height: PicklyTokens.typographyTextStylesBodySmallLineHeight,
        letterSpacing: PicklyTokens.typographyTextStylesBodySmallLetterSpacing,
      ),

      // Label styles
      labelLarge: TextStyle(
        fontSize: PicklyTokens.typographyTextStylesButtonFontSize,
        fontWeight: FontWeight.w500,
        height: PicklyTokens.typographyTextStylesButtonLineHeight,
        letterSpacing: PicklyTokens.typographyTextStylesButtonLetterSpacing,
      ),
      labelMedium: TextStyle(
        fontSize: PicklyTokens.typographyTextStylesLabelFontSize,
        fontWeight: FontWeight.w500,
        height: PicklyTokens.typographyTextStylesLabelLineHeight,
        letterSpacing: PicklyTokens.typographyTextStylesLabelLetterSpacing,
      ),
      labelSmall: TextStyle(
        fontSize: PicklyTokens.typographyTextStylesCaptionFontSize,
        fontWeight: FontWeight.w400,
        height: PicklyTokens.typographyTextStylesCaptionLineHeight,
        letterSpacing: PicklyTokens.typographyTextStylesCaptionLetterSpacing,
      ),
    );
  }
}