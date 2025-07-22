interface Props {
  children?: React.ReactNode;
}

export default function GridLayout({ children }: Props) {
  return (
    <div className="w-full flex h-[100dvh] bg-white flex-col justify-between items-center py-20 text-text text-center">
      {children}
    </div>
  );
}
