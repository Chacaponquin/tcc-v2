import { Work } from "./works";
import { WorkNode } from "./work-node";

interface Props {
  data: Work;
  onSelect: (v: Work) => void;
}

export class WorkNodeBuilder {
  static execute({ data, onSelect }: Props): WorkNode {
    return {
      data: {
        image: data.image,
        onClick: () => onSelect(data),
        title: "Buenas",
      },
      id: crypto.randomUUID(),
      draggable: false,
      type: "custom",
      position: { x: 100, y: 500 },
    };
  }
}
