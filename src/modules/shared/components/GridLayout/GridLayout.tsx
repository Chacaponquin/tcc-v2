interface Props {
  children?: React.ReactNode;
}

export default function GridLayout({ children }: Props) {
  return (
    <div
      style={{ background: `url('/ui/bg.jpg')` }}
      className="w-full flex h-[100dvh] flex-col justify-between items-center py-20 px-6 text-text text-center"
    >
      {children}
    </div>
  );
}
