
import React, { JSX } from 'react';
import { CSSProperties } from 'react';

type TypographyVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'body1'
  | 'body2'
  | 'subtitle1'
  | 'subtitle2'
  | 'caption';

type ColorVariant =
  | 'primary'
  | 'secondary'
  | 'error'
  | 'success'
  | 'warning'
  | 'info'
  | 'default';

type AlignVariant = 'left' | 'center' | 'right' | 'justify';

interface TypographyProps {
  variant?: TypographyVariant;
  color?: ColorVariant;
  align?: AlignVariant;
  children: React.ReactNode;
  className?: string;
  style?: CSSProperties;
  gutterBottom?: boolean;
  noWrap?: boolean;
  onClick?: () => void;
}

const variantStyles: Record<TypographyVariant, CSSProperties> = {
  h1: {
    fontSize: '2.5rem',
    fontWeight: 700,
    lineHeight: 1.2,
  },
  h2: {
    fontSize: '2rem',
    fontWeight: 500,
    lineHeight: 1.3
  },
  h3: {
    fontSize: '1.75rem',
    fontWeight: 500,
    lineHeight: 1.4
  },
  h4: {
    fontSize: '1.5rem',
    fontWeight: 500,
    lineHeight: 1.5
  },
  h5: {
    fontSize: '1.25rem',
    fontWeight: 500,
    lineHeight: 1.6
  },
  h6: {
    fontSize: '1rem',
    fontWeight: 600,
    lineHeight: 1.7
  },
  body1: {
    fontSize: '1rem',
    fontWeight: 400,
    lineHeight: 1.5
  },
  body2: {
    fontSize: '0.875rem',
    fontWeight: 400,
    lineHeight: 1.4
  },
  subtitle1: {
    fontSize: '1rem',
    fontWeight: 500,
    lineHeight: 1.6,
  },
  subtitle2: {
    fontSize: '0.875rem',
    fontWeight: 400,
    lineHeight: 1.5,
  },
  caption: {
    fontSize: '0.75rem',
    fontWeight: 400,
    lineHeight: 1.3,
  }
};

const colorStyles: Record<ColorVariant, CSSProperties> = {
  primary: { color: '#FCF6F6' },
  secondary: { color: '#C1BFBF' },
  error: { color: '#a51c30' },
  success: { color: '#2e7d32' },
  warning: { color: '#ed6c02' },
  info: { color: '#0288d1' },
  default: { color: '#000' }
};

const alignmentStyles: Record<AlignVariant, CSSProperties> = {
  left: { textAlign: 'left' },
  center: { textAlign: 'center' },
  right: { textAlign: 'right' },
  justify: { textAlign: 'justify' }
};

export const Typography: React.FC<TypographyProps> = ({
  variant = 'body1',
  color = 'default',
  align = 'left',
  children,
  className = '',
  style = {},
  gutterBottom = false,
  noWrap = false,
  onClick
}) => {
  const combinedStyle: CSSProperties = {
    ...variantStyles[variant],
    ...colorStyles[color],
    ...alignmentStyles[align],
    ...(gutterBottom ? { marginBottom: '0.75rem' } : {}),
    ...(noWrap ? {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    } : {}),
    ...style
  };

  const variantToTag: Record<TypographyVariant, keyof JSX.IntrinsicElements> = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
    body1: 'p',
    body2: 'p',
    subtitle1: 'p',
    subtitle2: 'p',
    caption: 'span'
  };

  const Tag = variantToTag[variant];

  return (
    <Tag
      className={`typography ${variant} ${color} ${className}`}
      style={combinedStyle}
      onClick={onClick}
    >
      {children}
    </Tag>
  );
};
