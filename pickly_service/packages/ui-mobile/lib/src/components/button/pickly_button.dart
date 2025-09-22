import 'package:flutter/material.dart';
import 'package:design_foundations/design_foundations.dart';

/// Pickly 버튼 컴포넌트
///
/// Material Design과 한국어 최적화를 적용한 버튼 위젯
class PicklyButton extends StatelessWidget {
  const PicklyButton({
    super.key,
    required this.onPressed,
    required this.child,
    this.variant = PicklyButtonVariant.primary,
    this.size = PicklyButtonSize.medium,
    this.isLoading = false,
    this.isDisabled = false,
    this.width,
    this.height,
    this.icon,
    this.iconPosition = PicklyIconPosition.left,
  });

  final VoidCallback? onPressed;
  final Widget child;
  final PicklyButtonVariant variant;
  final PicklyButtonSize size;
  final bool isLoading;
  final bool isDisabled;
  final double? width;
  final double? height;
  final Widget? icon;
  final PicklyIconPosition iconPosition;

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);
    final tokens = PicklyTokens.of(context);

    final isEnabled = !isDisabled && !isLoading && onPressed != null;

    return SizedBox(
      width: width,
      height: height ?? _getButtonHeight(),
      child: _buildButton(context, theme, tokens, isEnabled),
    );
  }

  Widget _buildButton(BuildContext context, ThemeData theme, PicklyTokens tokens, bool isEnabled) {
    switch (variant) {
      case PicklyButtonVariant.primary:
        return _buildPrimaryButton(context, theme, tokens, isEnabled);
      case PicklyButtonVariant.secondary:
        return _buildSecondaryButton(context, theme, tokens, isEnabled);
      case PicklyButtonVariant.outline:
        return _buildOutlineButton(context, theme, tokens, isEnabled);
      case PicklyButtonVariant.ghost:
        return _buildGhostButton(context, theme, tokens, isEnabled);
      case PicklyButtonVariant.destructive:
        return _buildDestructiveButton(context, theme, tokens, isEnabled);
    }
  }

  Widget _buildPrimaryButton(BuildContext context, ThemeData theme, PicklyTokens tokens, bool isEnabled) {
    return ElevatedButton(
      onPressed: isEnabled ? onPressed : null,
      style: ElevatedButton.styleFrom(
        backgroundColor: isEnabled
          ? tokens.primary500
          : tokens.neutral300,
        foregroundColor: Colors.white,
        elevation: 2,
        shadowColor: tokens.primary500.withOpacity(0.3),
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(_getBorderRadius()),
        ),
        padding: _getPadding(),
        textStyle: _getTextStyle(tokens),
      ),
      child: _buildButtonContent(),
    );
  }

  Widget _buildSecondaryButton(BuildContext context, ThemeData theme, PicklyTokens tokens, bool isEnabled) {
    return ElevatedButton(
      onPressed: isEnabled ? onPressed : null,
      style: ElevatedButton.styleFrom(
        backgroundColor: isEnabled
          ? tokens.neutral100
          : tokens.neutral50,
        foregroundColor: isEnabled
          ? tokens.neutral900
          : tokens.neutral400,
        elevation: 0,
        side: BorderSide(
          color: isEnabled
            ? tokens.neutral200
            : tokens.neutral100,
          width: 1,
        ),
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(_getBorderRadius()),
        ),
        padding: _getPadding(),
        textStyle: _getTextStyle(tokens),
      ),
      child: _buildButtonContent(),
    );
  }

  Widget _buildOutlineButton(BuildContext context, ThemeData theme, PicklyTokens tokens, bool isEnabled) {
    return OutlinedButton(
      onPressed: isEnabled ? onPressed : null,
      style: OutlinedButton.styleFrom(
        foregroundColor: isEnabled
          ? tokens.primary600
          : tokens.neutral400,
        side: BorderSide(
          color: isEnabled
            ? tokens.primary500
            : tokens.neutral300,
          width: 1,
        ),
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(_getBorderRadius()),
        ),
        padding: _getPadding(),
        textStyle: _getTextStyle(tokens),
      ),
      child: _buildButtonContent(),
    );
  }

  Widget _buildGhostButton(BuildContext context, ThemeData theme, PicklyTokens tokens, bool isEnabled) {
    return TextButton(
      onPressed: isEnabled ? onPressed : null,
      style: TextButton.styleFrom(
        foregroundColor: isEnabled
          ? tokens.neutral700
          : tokens.neutral400,
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(_getBorderRadius()),
        ),
        padding: _getPadding(),
        textStyle: _getTextStyle(tokens),
      ),
      child: _buildButtonContent(),
    );
  }

  Widget _buildDestructiveButton(BuildContext context, ThemeData theme, PicklyTokens tokens, bool isEnabled) {
    return ElevatedButton(
      onPressed: isEnabled ? onPressed : null,
      style: ElevatedButton.styleFrom(
        backgroundColor: isEnabled
          ? tokens.error500
          : tokens.neutral300,
        foregroundColor: Colors.white,
        elevation: 2,
        shadowColor: tokens.error500.withOpacity(0.3),
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(_getBorderRadius()),
        ),
        padding: _getPadding(),
        textStyle: _getTextStyle(tokens),
      ),
      child: _buildButtonContent(),
    );
  }

  Widget _buildButtonContent() {
    if (isLoading) {
      return Row(
        mainAxisSize: MainAxisSize.min,
        children: [
          SizedBox(
            width: _getLoadingIndicatorSize(),
            height: _getLoadingIndicatorSize(),
            child: CircularProgressIndicator(
              strokeWidth: 2,
              valueColor: AlwaysStoppedAnimation<Color>(
                variant == PicklyButtonVariant.outline || variant == PicklyButtonVariant.ghost
                  ? Colors.grey
                  : Colors.white,
              ),
            ),
          ),
          if (child is Text) ...[
            const SizedBox(width: 8),
            Opacity(opacity: 0.6, child: child),
          ],
        ],
      );
    }

    if (icon != null) {
      return Row(
        mainAxisSize: MainAxisSize.min,
        children: iconPosition == PicklyIconPosition.left
          ? [icon!, const SizedBox(width: 8), child]
          : [child, const SizedBox(width: 8), icon!],
      );
    }

    return child;
  }

  double _getButtonHeight() {
    switch (size) {
      case PicklyButtonSize.small:
        return 32;
      case PicklyButtonSize.medium:
        return 40;
      case PicklyButtonSize.large:
        return 48;
      case PicklyButtonSize.extraLarge:
        return 56;
    }
  }

  EdgeInsetsGeometry _getPadding() {
    switch (size) {
      case PicklyButtonSize.small:
        return const EdgeInsets.symmetric(horizontal: 12, vertical: 6);
      case PicklyButtonSize.medium:
        return const EdgeInsets.symmetric(horizontal: 16, vertical: 8);
      case PicklyButtonSize.large:
        return const EdgeInsets.symmetric(horizontal: 20, vertical: 12);
      case PicklyButtonSize.extraLarge:
        return const EdgeInsets.symmetric(horizontal: 24, vertical: 16);
    }
  }

  double _getBorderRadius() {
    return 8.0; // tokens.borderRadiusMd
  }

  TextStyle _getTextStyle(PicklyTokens tokens) {
    switch (size) {
      case PicklyButtonSize.small:
        return PicklyFonts.primary(
          fontSize: 14,
          fontWeight: FontWeight.w500,
        );
      case PicklyButtonSize.medium:
        return PicklyFonts.primary(
          fontSize: 14,
          fontWeight: FontWeight.w500,
        );
      case PicklyButtonSize.large:
        return PicklyFonts.primary(
          fontSize: 16,
          fontWeight: FontWeight.w500,
        );
      case PicklyButtonSize.extraLarge:
        return PicklyFonts.primary(
          fontSize: 18,
          fontWeight: FontWeight.w500,
        );
    }
  }

  double _getLoadingIndicatorSize() {
    switch (size) {
      case PicklyButtonSize.small:
        return 14;
      case PicklyButtonSize.medium:
        return 16;
      case PicklyButtonSize.large:
        return 18;
      case PicklyButtonSize.extraLarge:
        return 20;
    }
  }
}

enum PicklyButtonVariant {
  primary,
  secondary,
  outline,
  ghost,
  destructive,
}

enum PicklyButtonSize {
  small,
  medium,
  large,
  extraLarge,
}

enum PicklyIconPosition {
  left,
  right,
}