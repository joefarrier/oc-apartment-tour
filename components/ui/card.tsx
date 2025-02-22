import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function Card({ children, ...props }: CardProps) {
  return (
    <div {...props} style={{ border: '1px solid #ccc', borderRadius: '4px', padding: '1rem', ...props.style }}>
      {children}
    </div>
  );
}

interface CardSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function CardContent({ children, ...props }: CardSectionProps) {
  return (
    <div {...props} style={{ padding: '1rem', ...props.style }}>
      {children}
    </div>
  );
}

export function CardFooter({ children, ...props }: CardSectionProps) {
  return (
    <div {...props} style={{ padding: '1rem', borderTop: '1px solid #ccc', ...props.style }}>
      {children}
    </div>
  );
}
