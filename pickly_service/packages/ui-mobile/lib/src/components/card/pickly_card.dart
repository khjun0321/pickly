import 'package:flutter/material.dart';
import 'package:design_foundations/design_foundations.dart';

/// Pickly 카드 컴포넌트
///
/// Material Design과 한국어 최적화를 적용한 카드 위젯
class PicklyCard extends StatelessWidget {
  const PicklyCard({
    super.key,
    required this.child,
    this.variant = PicklyCardVariant.elevated,
    this.padding = PicklyCardPadding.medium,
    this.margin,
    this.width,
    this.height,
    this.onTap,
    this.onLongPress,
    this.borderRadius,
    this.backgroundColor,
    this.shadowColor,
    this.borderColor,
    this.borderWidth,
    this.clipBehavior = Clip.antiAlias,
  });

  final Widget child;
  final PicklyCardVariant variant;
  final PicklyCardPadding padding;
  final EdgeInsetsGeometry? margin;
  final double? width;
  final double? height;
  final VoidCallback? onTap;
  final VoidCallback? onLongPress;
  final BorderRadius? borderRadius;
  final Color? backgroundColor;
  final Color? shadowColor;
  final Color? borderColor;
  final double? borderWidth;
  final Clip clipBehavior;

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);
    final tokens = PicklyTokens.of(context);

    return Container(
      width: width,
      height: height,
      margin: margin,
      child: _buildCard(context, theme, tokens),
    );
  }

  Widget _buildCard(BuildContext context, ThemeData theme, PicklyTokens tokens) {
    final cardChild = Padding(
      padding: _getPadding(),
      child: child,
    );

    switch (variant) {
      case PicklyCardVariant.elevated:
        return _buildElevatedCard(context, theme, tokens, cardChild);
      case PicklyCardVariant.outlined:
        return _buildOutlinedCard(context, theme, tokens, cardChild);
      case PicklyCardVariant.filled:
        return _buildFilledCard(context, theme, tokens, cardChild);
      case PicklyCardVariant.flat:
        return _buildFlatCard(context, theme, tokens, cardChild);
    }
  }

  Widget _buildElevatedCard(BuildContext context, ThemeData theme, PicklyTokens tokens, Widget cardChild) {
    return Material(
      elevation: 4,
      shadowColor: shadowColor ?? tokens.neutral900.withOpacity(0.1),
      borderRadius: _getBorderRadius(),
      color: backgroundColor ?? Colors.white,
      clipBehavior: clipBehavior,
      child: onTap != null || onLongPress != null
        ? InkWell(
            onTap: onTap,
            onLongPress: onLongPress,
            borderRadius: _getBorderRadius(),
            child: cardChild,
          )
        : cardChild,
    );
  }

  Widget _buildOutlinedCard(BuildContext context, ThemeData theme, PicklyTokens tokens, Widget cardChild) {
    return Container(
      decoration: BoxDecoration(
        color: backgroundColor ?? Colors.white,
        border: Border.all(
          color: borderColor ?? tokens.neutral200,
          width: borderWidth ?? 1,
        ),
        borderRadius: _getBorderRadius(),
      ),
      clipBehavior: clipBehavior,
      child: onTap != null || onLongPress != null
        ? Material(
            color: Colors.transparent,
            child: InkWell(
              onTap: onTap,
              onLongPress: onLongPress,
              borderRadius: _getBorderRadius(),
              child: cardChild,
            ),
          )
        : cardChild,
    );
  }

  Widget _buildFilledCard(BuildContext context, ThemeData theme, PicklyTokens tokens, Widget cardChild) {
    return Container(
      decoration: BoxDecoration(
        color: backgroundColor ?? tokens.neutral50,
        borderRadius: _getBorderRadius(),
      ),
      clipBehavior: clipBehavior,
      child: onTap != null || onLongPress != null
        ? Material(
            color: Colors.transparent,
            child: InkWell(
              onTap: onTap,
              onLongPress: onLongPress,
              borderRadius: _getBorderRadius(),
              child: cardChild,
            ),
          )
        : cardChild,
    );
  }

  Widget _buildFlatCard(BuildContext context, ThemeData theme, PicklyTokens tokens, Widget cardChild) {
    return Container(
      decoration: BoxDecoration(
        color: backgroundColor ?? Colors.white,
        borderRadius: _getBorderRadius(),
      ),
      clipBehavior: clipBehavior,
      child: onTap != null || onLongPress != null
        ? Material(
            color: Colors.transparent,
            child: InkWell(
              onTap: onTap,
              onLongPress: onLongPress,
              borderRadius: _getBorderRadius(),
              child: cardChild,
            ),
          )
        : cardChild,
    );
  }

  EdgeInsetsGeometry _getPadding() {
    switch (padding) {
      case PicklyCardPadding.none:
        return EdgeInsets.zero;
      case PicklyCardPadding.small:
        return const EdgeInsets.all(12);
      case PicklyCardPadding.medium:
        return const EdgeInsets.all(16);
      case PicklyCardPadding.large:
        return const EdgeInsets.all(24);
      case PicklyCardPadding.extraLarge:
        return const EdgeInsets.all(32);
    }
  }

  BorderRadius _getBorderRadius() {
    return borderRadius ?? BorderRadius.circular(12); // tokens.borderRadiusLg
  }
}

/// 카드 헤더 컴포넌트
class PicklyCardHeader extends StatelessWidget {
  const PicklyCardHeader({
    super.key,
    this.title,
    this.subtitle,
    this.leading,
    this.trailing,
    this.padding = const EdgeInsets.all(16),
    this.crossAxisAlignment = CrossAxisAlignment.start,
  });

  final Widget? title;
  final Widget? subtitle;
  final Widget? leading;
  final Widget? trailing;
  final EdgeInsetsGeometry padding;
  final CrossAxisAlignment crossAxisAlignment;

  @override
  Widget build(BuildContext context) {
    final tokens = PicklyTokens.of(context);

    return Padding(
      padding: padding,
      child: Row(
        crossAxisAlignment: crossAxisAlignment,
        children: [
          if (leading != null) ...[
            leading!,
            const SizedBox(width: 12),
          ],
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                if (title != null)
                  DefaultTextStyle(
                    style: PicklyFonts.primary(
                      fontSize: 18,
                      fontWeight: FontWeight.w600,
                      color: tokens.neutral900,
                    ),
                    child: title!,
                  ),
                if (subtitle != null) ...[
                  if (title != null) const SizedBox(height: 4),
                  DefaultTextStyle(
                    style: PicklyFonts.primary(
                      fontSize: 14,
                      color: tokens.neutral600,
                    ),
                    child: subtitle!,
                  ),
                ],
              ],
            ),
          ),
          if (trailing != null) ...[
            const SizedBox(width: 12),
            trailing!,
          ],
        ],
      ),
    );
  }
}

/// 카드 바디 컴포넌트
class PicklyCardBody extends StatelessWidget {
  const PicklyCardBody({
    super.key,
    required this.child,
    this.padding = const EdgeInsets.symmetric(horizontal: 16),
  });

  final Widget child;
  final EdgeInsetsGeometry padding;

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: padding,
      child: child,
    );
  }
}

/// 카드 푸터 컴포넌트
class PicklyCardFooter extends StatelessWidget {
  const PicklyCardFooter({
    super.key,
    required this.child,
    this.padding = const EdgeInsets.all(16),
  });

  final Widget child;
  final EdgeInsetsGeometry padding;

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: padding,
      child: child,
    );
  }
}

enum PicklyCardVariant {
  elevated,
  outlined,
  filled,
  flat,
}

enum PicklyCardPadding {
  none,
  small,
  medium,
  large,
  extraLarge,
}