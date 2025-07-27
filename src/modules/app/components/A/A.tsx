interface Props {
  children?: React.ReactNode;
  to: string;
}

export default function A({ children, to }: Props) {
  return (
    <a href={to} target="_blank" rel="noopener noreferrer" className="">
      {children}
    </a>
  );
}
