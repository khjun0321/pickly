import React, { forwardRef, useRef } from 'react';
import { useTextField } from 'react-aria';
import clsx from 'clsx';
import './Input.css';

export interface InputProps {
  label?: string;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'filled' | 'flushed';
  state?: 'default' | 'error' | 'success';
  isDisabled?: boolean;
  isRequired?: boolean;
  isReadOnly?: boolean;
  autoComplete?: string;
  autoFocus?: boolean;
  type?: 'text' | 'email' | 'password' | 'tel' | 'url' | 'search';
  maxLength?: number;
  minLength?: number;
  pattern?: string;
  className?: string;
  helpText?: string;
  errorMessage?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  onChange?: (value: string) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({
    label,
    placeholder,
    value,
    defaultValue,
    size = 'md',
    variant = 'default',
    state = 'default',
    isDisabled = false,
    isRequired = false,
    isReadOnly = false,
    autoComplete,
    autoFocus = false,
    type = 'text',
    maxLength,
    minLength,
    pattern,
    className,
    helpText,
    errorMessage,
    leftIcon,
    rightIcon,
    onChange,
    onFocus,
    onBlur,
    onKeyDown,
    ...props
  }, ref) => {
    const internalRef = useRef<HTMLInputElement>(null);
    const inputRef = ref || internalRef;
    const labelRef = useRef<HTMLLabelElement>(null);

    const { labelProps, inputProps, descriptionProps, errorMessageProps } = useTextField(
      {
        label,
        placeholder,
        value,
        defaultValue,
        isDisabled,
        isRequired,
        isReadOnly,
        autoComplete,
        autoFocus,
        type,
        maxLength,
        minLength,
        pattern,
        onChange,
        ...props,
      },
      inputRef as React.RefObject<HTMLInputElement>
    );

    const containerClasses = clsx(
      'pickly-input-container',
      `pickly-input-container--${size}`,
      `pickly-input-container--${variant}`,
      `pickly-input-container--${state}`,
      {
        'pickly-input-container--disabled': isDisabled,
        'pickly-input-container--readonly': isReadOnly,
        'pickly-input-container--with-left-icon': leftIcon,
        'pickly-input-container--with-right-icon': rightIcon,
      },
      className
    );

    const inputClasses = clsx('pickly-input', {
      'pickly-input--with-left-icon': leftIcon,
      'pickly-input--with-right-icon': rightIcon,
    });

    return (
      <div className={containerClasses}>
        {label && (
          <label {...labelProps} ref={labelRef} className="pickly-input-label">
            {label}
            {isRequired && <span className="pickly-input-required">*</span>}
          </label>
        )}

        <div className="pickly-input-wrapper">
          {leftIcon && (
            <div className="pickly-input-icon pickly-input-icon--left">
              {leftIcon}
            </div>
          )}

          <input
            {...inputProps}
            ref={inputRef}
            className={inputClasses}
            onFocus={onFocus}
            onBlur={onBlur}
            onKeyDown={onKeyDown}
          />

          {rightIcon && (
            <div className="pickly-input-icon pickly-input-icon--right">
              {rightIcon}
            </div>
          )}
        </div>

        {(helpText || errorMessage) && (
          <div className="pickly-input-description">
            {state === 'error' && errorMessage ? (
              <div {...errorMessageProps} className="pickly-input-error">
                {errorMessage}
              </div>
            ) : helpText ? (
              <div {...descriptionProps} className="pickly-input-help">
                {helpText}
              </div>
            ) : null}
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';