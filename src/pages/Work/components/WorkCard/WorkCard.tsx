import Image from "next/image";

interface Props {
  image: string;
  title: string;
}

export default function WorkCard({ image, title }: Props) {
  return (
    <article className="w-full transition-all duration-300 cursor-pointer hover:-translate-y-2">
      <Image
        className="md:h-[220px] h-[200px] w-full object-contain"
        src={`/works/${image}`}
        alt={title}
        width={200}
        height={400}
      />
    </article>
  );
}
