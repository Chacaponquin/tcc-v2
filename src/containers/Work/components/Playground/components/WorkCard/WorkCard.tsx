import { WorkNodeProps } from "@pages/Work/domain/work-node";
import Image from "next/image";

interface Props {
  data: WorkNodeProps;
}

export default function WorkCard({ data: { image, onClick, title } }: Props) {
  return (
    <article
      onClick={onClick}
      className="w-full transition-all duration-300 cursor-pointer hover:-translate-y-2"
    >
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
