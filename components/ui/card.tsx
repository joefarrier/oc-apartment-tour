interface CardProps {
  children: React.ReactNode;
}

export default function Card({ children }: CardProps) {
  return <div style={{ border: '1px solid #ccc', padding: '1rem' }}>{children}</div>;
}
