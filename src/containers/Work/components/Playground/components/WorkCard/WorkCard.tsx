import { Work } from "@pages/Work/domain/works";
import Image from "next/image";

interface Props {
  data: Work;
}

export default function WorkCard({ data: { image } }: Props) {
  return (
    <article className="w-full transition-all duration-300 cursor-pointer hover:-translate-y-2">
      <Image
        className="md:h-[220px] h-[200px] w-full object-contain"
        src={`/works/${image}`}
        alt="Buenas"
        width={200}
        height={400}
      />
    </article>
  );
}
