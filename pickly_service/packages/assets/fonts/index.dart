/**
 * Pickly Assets - Flutter Font Configuration
 *
 * Flutter 앱에서 사용할 폰트 설정
 */

import 'package:flutter/material.dart';

class PicklyFonts {
  PicklyFonts._();

  /// Primary font family name
  static const String primaryFamily = 'Pretendard';

  /// Monospace font family name
  static const String monoFamily = 'SF Mono';

  /// Font weights
  static const FontWeight thin = FontWeight.w100;
  static const FontWeight extraLight = FontWeight.w200;
  static const FontWeight light = FontWeight.w300;
  static const FontWeight regular = FontWeight.w400;
  static const FontWeight medium = FontWeight.w500;
  static const FontWeight semiBold = FontWeight.w600;
  static const FontWeight bold = FontWeight.w700;
  static const FontWeight extraBold = FontWeight.w800;
  static const FontWeight black = FontWeight.w900;

  /// Primary text style with Pretendard font
  static TextStyle primary({
    double? fontSize,
    FontWeight? fontWeight,
    Color? color,
    double? height,
    double? letterSpacing,
  }) {
    return TextStyle(
      fontFamily: primaryFamily,
      fontSize: fontSize,
      fontWeight: fontWeight ?? regular,
      color: color,
      height: height,
      letterSpacing: letterSpacing,
    );
  }

  /// Monospace text style
  static TextStyle mono({
    double? fontSize,
    FontWeight? fontWeight,
    Color? color,
    double? height,
    double? letterSpacing,
  }) {
    return TextStyle(
      fontFamily: monoFamily,
      fontSize: fontSize,
      fontWeight: fontWeight ?? regular,
      color: color,
      height: height,
      letterSpacing: letterSpacing,
    );
  }

  /// Get font configuration for pubspec.yaml
  static List<Map<String, dynamic>> getFontConfiguration() {
    return [
      {
        'family': primaryFamily,
        'fonts': [
          {
            'asset': 'assets/fonts/Pretendard/mobile/Pretendard-Thin.ttf',
            'weight': 100,
          },
          {
            'asset': 'assets/fonts/Pretendard/mobile/Pretendard-ExtraLight.ttf',
            'weight': 200,
          },
          {
            'asset': 'assets/fonts/Pretendard/mobile/Pretendard-Light.ttf',
            'weight': 300,
          },
          {
            'asset': 'assets/fonts/Pretendard/mobile/Pretendard-Regular.ttf',
            'weight': 400,
          },
          {
            'asset': 'assets/fonts/Pretendard/mobile/Pretendard-Medium.ttf',
            'weight': 500,
          },
          {
            'asset': 'assets/fonts/Pretendard/mobile/Pretendard-SemiBold.ttf',
            'weight': 600,
          },
          {
            'asset': 'assets/fonts/Pretendard/mobile/Pretendard-Bold.ttf',
            'weight': 700,
          },
          {
            'asset': 'assets/fonts/Pretendard/mobile/Pretendard-ExtraBold.ttf',
            'weight': 800,
          },
          {
            'asset': 'assets/fonts/Pretendard/mobile/Pretendard-Black.ttf',
            'weight': 900,
          },
        ],
      },
    ];
  }

  /// Font licensing information
  static const String licenseInfo = '''
Pretendard Font License:

This font is licensed under the SIL Open Font License, Version 1.1.
You can use this font freely in both personal and commercial projects.

Font Source: https://github.com/orioncactus/pretendard
License: https://scripts.sil.org/OFL
''';
}