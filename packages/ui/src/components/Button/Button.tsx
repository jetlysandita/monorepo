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
  onClick?: () => void;
  children: React.ReactNode;
  className?: string; // Optional additional class
  variant?: Variant;
  size?: Size;
  disabled?: boolean;
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  className,
  variant = 'primary',
  size = 'md',
  disabled = false,
  isLoading = false,
}) => {
  return (
    <button
      className={`button btn-${variant} btn-${size} ${className}`}
      onClick={onClick}
      disabled={disabled || isLoading}
    >
      {isLoading && <IconSpiner className="spinner" />}
      <span style={{ visibility: isLoading ? 'hidden' : 'visible' }}>
        {children}
      </span>
    </button>
  );
};

export const ButtonExample = () => {
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
};

export default Button;
