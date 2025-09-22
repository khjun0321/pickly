import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:design_foundations/design_foundations.dart';

/// Pickly 텍스트 필드 컴포넌트
///
/// 한국어 입력 최적화 및 Material Design을 적용한 텍스트 입력 위젯
class PicklyTextField extends StatefulWidget {
  const PicklyTextField({
    super.key,
    this.controller,
    this.focusNode,
    this.label,
    this.hintText,
    this.helperText,
    this.errorText,
    this.prefixIcon,
    this.suffixIcon,
    this.prefix,
    this.suffix,
    this.variant = PicklyTextFieldVariant.outlined,
    this.size = PicklyTextFieldSize.medium,
    this.state = PicklyTextFieldState.normal,
    this.keyboardType,
    this.textInputAction,
    this.textCapitalization = TextCapitalization.none,
    this.obscureText = false,
    this.readOnly = false,
    this.enabled = true,
    this.maxLines = 1,
    this.minLines,
    this.maxLength,
    this.inputFormatters,
    this.validator,
    this.onChanged,
    this.onSubmitted,
    this.onTap,
    this.onEditingComplete,
    this.autofocus = false,
    this.autocorrect = true,
    this.enableSuggestions = true,
  });

  final TextEditingController? controller;
  final FocusNode? focusNode;
  final String? label;
  final String? hintText;
  final String? helperText;
  final String? errorText;
  final Widget? prefixIcon;
  final Widget? suffixIcon;
  final Widget? prefix;
  final Widget? suffix;
  final PicklyTextFieldVariant variant;
  final PicklyTextFieldSize size;
  final PicklyTextFieldState state;
  final TextInputType? keyboardType;
  final TextInputAction? textInputAction;
  final TextCapitalization textCapitalization;
  final bool obscureText;
  final bool readOnly;
  final bool enabled;
  final int? maxLines;
  final int? minLines;
  final int? maxLength;
  final List<TextInputFormatter>? inputFormatters;
  final String? Function(String?)? validator;
  final ValueChanged<String>? onChanged;
  final ValueChanged<String>? onSubmitted;
  final VoidCallback? onTap;
  final VoidCallback? onEditingComplete;
  final bool autofocus;
  final bool autocorrect;
  final bool enableSuggestions;

  @override
  State<PicklyTextField> createState() => _PicklyTextFieldState();
}

class _PicklyTextFieldState extends State<PicklyTextField> {
  late FocusNode _focusNode;
  bool _isFocused = false;

  @override
  void initState() {
    super.initState();
    _focusNode = widget.focusNode ?? FocusNode();
    _focusNode.addListener(_onFocusChanged);
  }

  @override
  void dispose() {
    _focusNode.removeListener(_onFocusChanged);
    if (widget.focusNode == null) {
      _focusNode.dispose();
    }
    super.dispose();
  }

  void _onFocusChanged() {
    setState(() {
      _isFocused = _focusNode.hasFocus;
    });
  }

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);
    final tokens = PicklyTokens.of(context);

    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        if (widget.label != null)
          Padding(
            padding: const EdgeInsets.only(bottom: 6),
            child: Text(
              widget.label!,
              style: PicklyFonts.primary(
                fontSize: _getLabelFontSize(),
                fontWeight: FontWeight.w500,
                color: widget.enabled
                  ? tokens.neutral700
                  : tokens.neutral400,
              ),
            ),
          ),
        _buildTextField(context, theme, tokens),
        if (widget.helperText != null || widget.errorText != null)
          Padding(
            padding: const EdgeInsets.only(top: 4),
            child: Text(
              widget.errorText ?? widget.helperText!,
              style: PicklyFonts.primary(
                fontSize: 12,
                color: widget.errorText != null
                  ? tokens.error600
                  : tokens.neutral600,
              ),
            ),
          ),
      ],
    );
  }

  Widget _buildTextField(BuildContext context, ThemeData theme, PicklyTokens tokens) {
    switch (widget.variant) {
      case PicklyTextFieldVariant.outlined:
        return _buildOutlinedTextField(context, theme, tokens);
      case PicklyTextFieldVariant.filled:
        return _buildFilledTextField(context, theme, tokens);
      case PicklyTextFieldVariant.underlined:
        return _buildUnderlinedTextField(context, theme, tokens);
    }
  }

  Widget _buildOutlinedTextField(BuildContext context, ThemeData theme, PicklyTokens tokens) {
    return Container(
      height: _getTextFieldHeight(),
      child: TextField(
        controller: widget.controller,
        focusNode: _focusNode,
        keyboardType: widget.keyboardType,
        textInputAction: widget.textInputAction,
        textCapitalization: widget.textCapitalization,
        obscureText: widget.obscureText,
        readOnly: widget.readOnly,
        enabled: widget.enabled,
        maxLines: widget.maxLines,
        minLines: widget.minLines,
        maxLength: widget.maxLength,
        inputFormatters: widget.inputFormatters,
        onChanged: widget.onChanged,
        onSubmitted: widget.onSubmitted,
        onTap: widget.onTap,
        onEditingComplete: widget.onEditingComplete,
        autofocus: widget.autofocus,
        autocorrect: widget.autocorrect,
        enableSuggestions: widget.enableSuggestions,
        style: _getTextStyle(tokens),
        decoration: InputDecoration(
          hintText: widget.hintText,
          hintStyle: PicklyFonts.primary(
            fontSize: _getTextFontSize(),
            color: tokens.neutral400,
          ),
          prefixIcon: widget.prefixIcon,
          suffixIcon: widget.suffixIcon,
          prefix: widget.prefix,
          suffix: widget.suffix,
          border: OutlineInputBorder(
            borderRadius: BorderRadius.circular(8),
            borderSide: BorderSide(
              color: tokens.neutral300,
              width: 1,
            ),
          ),
          enabledBorder: OutlineInputBorder(
            borderRadius: BorderRadius.circular(8),
            borderSide: BorderSide(
              color: _getBorderColor(tokens),
              width: 1,
            ),
          ),
          focusedBorder: OutlineInputBorder(
            borderRadius: BorderRadius.circular(8),
            borderSide: BorderSide(
              color: _getFocusedBorderColor(tokens),
              width: 2,
            ),
          ),
          errorBorder: OutlineInputBorder(
            borderRadius: BorderRadius.circular(8),
            borderSide: BorderSide(
              color: tokens.error500,
              width: 1,
            ),
          ),
          focusedErrorBorder: OutlineInputBorder(
            borderRadius: BorderRadius.circular(8),
            borderSide: BorderSide(
              color: tokens.error500,
              width: 2,
            ),
          ),
          disabledBorder: OutlineInputBorder(
            borderRadius: BorderRadius.circular(8),
            borderSide: BorderSide(
              color: tokens.neutral200,
              width: 1,
            ),
          ),
          filled: false,
          contentPadding: _getContentPadding(),
          counterText: '',
        ),
      ),
    );
  }

  Widget _buildFilledTextField(BuildContext context, ThemeData theme, PicklyTokens tokens) {
    return Container(
      height: _getTextFieldHeight(),
      child: TextField(
        controller: widget.controller,
        focusNode: _focusNode,
        keyboardType: widget.keyboardType,
        textInputAction: widget.textInputAction,
        textCapitalization: widget.textCapitalization,
        obscureText: widget.obscureText,
        readOnly: widget.readOnly,
        enabled: widget.enabled,
        maxLines: widget.maxLines,
        minLines: widget.minLines,
        maxLength: widget.maxLength,
        inputFormatters: widget.inputFormatters,
        onChanged: widget.onChanged,
        onSubmitted: widget.onSubmitted,
        onTap: widget.onTap,
        onEditingComplete: widget.onEditingComplete,
        autofocus: widget.autofocus,
        autocorrect: widget.autocorrect,
        enableSuggestions: widget.enableSuggestions,
        style: _getTextStyle(tokens),
        decoration: InputDecoration(
          hintText: widget.hintText,
          hintStyle: PicklyFonts.primary(
            fontSize: _getTextFontSize(),
            color: tokens.neutral400,
          ),
          prefixIcon: widget.prefixIcon,
          suffixIcon: widget.suffixIcon,
          prefix: widget.prefix,
          suffix: widget.suffix,
          border: OutlineInputBorder(
            borderRadius: BorderRadius.circular(8),
            borderSide: BorderSide.none,
          ),
          filled: true,
          fillColor: _getFillColor(tokens),
          contentPadding: _getContentPadding(),
          counterText: '',
        ),
      ),
    );
  }

  Widget _buildUnderlinedTextField(BuildContext context, ThemeData theme, PicklyTokens tokens) {
    return Container(
      height: _getTextFieldHeight(),
      child: TextField(
        controller: widget.controller,
        focusNode: _focusNode,
        keyboardType: widget.keyboardType,
        textInputAction: widget.textInputAction,
        textCapitalization: widget.textCapitalization,
        obscureText: widget.obscureText,
        readOnly: widget.readOnly,
        enabled: widget.enabled,
        maxLines: widget.maxLines,
        minLines: widget.minLines,
        maxLength: widget.maxLength,
        inputFormatters: widget.inputFormatters,
        onChanged: widget.onChanged,
        onSubmitted: widget.onSubmitted,
        onTap: widget.onTap,
        onEditingComplete: widget.onEditingComplete,
        autofocus: widget.autofocus,
        autocorrect: widget.autocorrect,
        enableSuggestions: widget.enableSuggestions,
        style: _getTextStyle(tokens),
        decoration: InputDecoration(
          hintText: widget.hintText,
          hintStyle: PicklyFonts.primary(
            fontSize: _getTextFontSize(),
            color: tokens.neutral400,
          ),
          prefixIcon: widget.prefixIcon,
          suffixIcon: widget.suffixIcon,
          prefix: widget.prefix,
          suffix: widget.suffix,
          border: UnderlineInputBorder(
            borderSide: BorderSide(
              color: tokens.neutral300,
              width: 1,
            ),
          ),
          enabledBorder: UnderlineInputBorder(
            borderSide: BorderSide(
              color: _getBorderColor(tokens),
              width: 1,
            ),
          ),
          focusedBorder: UnderlineInputBorder(
            borderSide: BorderSide(
              color: _getFocusedBorderColor(tokens),
              width: 2,
            ),
          ),
          errorBorder: UnderlineInputBorder(
            borderSide: BorderSide(
              color: tokens.error500,
              width: 1,
            ),
          ),
          focusedErrorBorder: UnderlineInputBorder(
            borderSide: BorderSide(
              color: tokens.error500,
              width: 2,
            ),
          ),
          disabledBorder: UnderlineInputBorder(
            borderSide: BorderSide(
              color: tokens.neutral200,
              width: 1,
            ),
          ),
          filled: false,
          contentPadding: _getContentPadding(),
          counterText: '',
        ),
      ),
    );
  }

  double _getTextFieldHeight() {
    switch (widget.size) {
      case PicklyTextFieldSize.small:
        return 32;
      case PicklyTextFieldSize.medium:
        return 40;
      case PicklyTextFieldSize.large:
        return 48;
    }
  }

  double _getLabelFontSize() {
    switch (widget.size) {
      case PicklyTextFieldSize.small:
        return 12;
      case PicklyTextFieldSize.medium:
        return 14;
      case PicklyTextFieldSize.large:
        return 14;
    }
  }

  double _getTextFontSize() {
    switch (widget.size) {
      case PicklyTextFieldSize.small:
        return 14;
      case PicklyTextFieldSize.medium:
        return 14;
      case PicklyTextFieldSize.large:
        return 16;
    }
  }

  TextStyle _getTextStyle(PicklyTokens tokens) {
    return PicklyFonts.primary(
      fontSize: _getTextFontSize(),
      color: widget.enabled
        ? tokens.neutral900
        : tokens.neutral400,
    );
  }

  EdgeInsetsGeometry _getContentPadding() {
    switch (widget.size) {
      case PicklyTextFieldSize.small:
        return const EdgeInsets.symmetric(horizontal: 12, vertical: 8);
      case PicklyTextFieldSize.medium:
        return const EdgeInsets.symmetric(horizontal: 12, vertical: 10);
      case PicklyTextFieldSize.large:
        return const EdgeInsets.symmetric(horizontal: 16, vertical: 12);
    }
  }

  Color _getBorderColor(PicklyTokens tokens) {
    switch (widget.state) {
      case PicklyTextFieldState.normal:
        return tokens.neutral300;
      case PicklyTextFieldState.error:
        return tokens.error500;
      case PicklyTextFieldState.success:
        return tokens.success500;
    }
  }

  Color _getFocusedBorderColor(PicklyTokens tokens) {
    switch (widget.state) {
      case PicklyTextFieldState.normal:
        return tokens.primary500;
      case PicklyTextFieldState.error:
        return tokens.error500;
      case PicklyTextFieldState.success:
        return tokens.success500;
    }
  }

  Color _getFillColor(PicklyTokens tokens) {
    if (!widget.enabled) {
      return tokens.neutral50;
    }

    if (_isFocused) {
      return Colors.white;
    }

    return tokens.neutral100;
  }
}

enum PicklyTextFieldVariant {
  outlined,
  filled,
  underlined,
}

enum PicklyTextFieldSize {
  small,
  medium,
  large,
}

enum PicklyTextFieldState {
  normal,
  error,
  success,
}