export default function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button {...props}>{props.children ?? 'Button'}</button>;
}
