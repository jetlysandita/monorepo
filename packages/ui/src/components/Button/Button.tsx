import React from 'react';
import './button.css';
import Text from '../Text/Text';

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
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  className,
  variant = 'primary',
  size = 'md',
  disabled = false,
}) => {
  return (
    <button
      className={`button btn-${variant} btn-${size} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
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
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Button;
