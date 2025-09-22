import React, { forwardRef } from 'react';
import { useButton } from 'react-aria';
import { useRef } from 'react';
import clsx from 'clsx';
import './Button.css';

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  isDisabled?: boolean;
  isLoading?: boolean;
  children: React.ReactNode;
  className?: string;
  onPress?: () => void;
  type?: 'button' | 'submit' | 'reset';
  autoFocus?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({
    variant = 'primary',
    size = 'md',
    isDisabled = false,
    isLoading = false,
    children,
    className,
    onPress,
    type = 'button',
    autoFocus = false,
    ...props
  }, ref) => {
    const internalRef = useRef<HTMLButtonElement>(null);
    const buttonRef = ref || internalRef;

    const { buttonProps } = useButton(
      {
        onPress,
        isDisabled: isDisabled || isLoading,
        type,
        autoFocus,
        ...props,
      },
      buttonRef as React.RefObject<HTMLButtonElement>
    );

    const buttonClasses = clsx(
      'pickly-button',
      `pickly-button--${variant}`,
      `pickly-button--${size}`,
      {
        'pickly-button--disabled': isDisabled,
        'pickly-button--loading': isLoading,
      },
      className
    );

    return (
      <button
        {...buttonProps}
        ref={buttonRef}
        className={buttonClasses}
        disabled={isDisabled || isLoading}
      >
        {isLoading && (
          <span className="pickly-button__spinner" aria-hidden="true">
            <svg viewBox="0 0 24 24" className="pickly-button__spinner-icon">
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeDasharray="62.83"
                strokeDashoffset="62.83"
              />
            </svg>
          </span>
        )}
        <span className={clsx('pickly-button__content', {
          'pickly-button__content--hidden': isLoading
        })}>
          {children}
        </span>
      </button>
    );
  }
);

Button.displayName = 'Button';