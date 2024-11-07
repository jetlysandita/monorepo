import React from 'react';
import './text.css'; // Import the global CSS file

// Define variants and sizes using `as const` to get literal types
const VARIANTS = [
  'primary',
  'secondary',
  'success',
  'error',
  'warning',
  'info',
] as const;
const SIZES = ['sm', 'md', 'lg'] as const;

const TEXT_TAGS = ['h1', 'h2', 'h3', 'p', 'span'] as const;

// TypeScript Types for the props
type TextVariant = (typeof VARIANTS)[number];
type TextSize = (typeof SIZES)[number];
type TextTag = (typeof TEXT_TAGS)[number];

interface TextProps {
  children: React.ReactNode;
  variant?: TextVariant;
  size?: TextSize;
  tag?: TextTag; // Default to span if no tag is provided
  numberOfLines?: number;
  style?: React.CSSProperties;
}

// The Text Component
function Text({
  variant = 'primary',
  size = 'md',
  tag = 'span',
  children,
  style,
  numberOfLines = 0,
}: TextProps) {
  const truncateStyle = {
    display: '-webkit-box',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    WebkitLineClamp: numberOfLines,
    WebkitBoxOrient: 'vertical' as const,
  };
  // Combine the variant and size styles into one className dynamically
  const classNames = [
    'text', // Base class
    'txt-' + variant, // Variant specific class
    'txt-' + size, // Size specific class
  ].join(' ');

  const Tag = tag; // Dynamic tag selection

  return (
    <Tag className={classNames} style={{ ...truncateStyle, ...style }}>
      {children}
    </Tag>
  );
}

export const ExampleText = () => {
  return (
    <div style={{ display: 'flex', gap: 10, flexDirection: 'column' }}>
      {VARIANTS.map((variant) => {
        return (
          <div
            key={variant}
            style={{ display: 'flex', gap: 10, flexDirection: 'column' }}
          >
            <Text tag="h2">{variant}</Text>
            <div
              style={{
                display: 'flex',
                gap: 10,
              }}
            >
              <Text variant={variant} size="lg">
                Large Text
              </Text>

              <Text variant={variant} size="md">
                Medium Text
              </Text>
              <Text variant={variant} size="sm">
                Small Text
              </Text>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Text;
