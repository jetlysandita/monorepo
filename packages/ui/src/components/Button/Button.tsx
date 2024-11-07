import React from 'react';
import './button.css';
import Text from '../Text/Text';
import IconSpiner from '../Icon/IconSpinner';

const VARIANTS = [
  'primary',
  'secondary',
  'info',
  'warning',
  'error',
  'success',
] as const;

const SIZES = ['lg', 'md', 'sm'] as const;

type Variant = (typeof VARIANTS)[number];
type Size = (typeof SIZES)[number];

interface ButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
  className?: string;
  variant?: Variant;
  size?: Size;
  disabled?: boolean;
  isLoading?: boolean;
  style?: React.CSSProperties;
}

function Button({
  onClick,
  children,
  className,
  variant = 'primary',
  size = 'md',
  disabled = false,
  isLoading = false,
  style,
}: ButtonProps) {
  return (
    <button
      className={`button btn-${variant} btn-${size} ${className}`}
      onClick={onClick}
      disabled={disabled || isLoading}
      style={style}
    >
      {isLoading && <IconSpiner className="spinner" />}
      <span style={{ visibility: isLoading ? 'hidden' : 'visible' }}>
        {children}
      </span>
    </button>
  );
}

export function ExampleButton() {
  return (
    <div style={{ display: 'flex', gap: 10, flexDirection: 'column' }}>
      {VARIANTS.map((variant) => {
        return (
          <div
            key={variant}
            style={{ display: 'flex', gap: 10, flexDirection: 'column' }}
          >
            <Text tag="h2">{variant}</Text>
            <div style={{ display: 'flex', gap: 10 }}>
              <Button variant={variant} size="lg">
                Large Button
              </Button>

              <Button variant={variant} size="md">
                Medium Button
              </Button>

              <Button variant={variant} size="sm">
                Small Button
              </Button>

              <Button variant={variant} size="sm" isLoading>
                Small Button
              </Button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Button;
