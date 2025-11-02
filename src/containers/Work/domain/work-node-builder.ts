import { Work } from "./works";
import { WorkNode } from "./work-node";

interface Props {
  data: Work;
  onSelect: (v: Work) => void;
  cols: number;
  nodeWidth: number;
  nodeHeight: number;
  gap: number;
  index: number;
}

export class WorkNodeBuilder {
  static execute({
    data,
    onSelect,
    cols,
    gap,
    nodeHeight,
    nodeWidth,
    index,
  }: Props): WorkNode {
    const row = Math.floor(index / cols);
    const col = index % cols;

    return {
      data: {
        image: data.cover,
        onClick: () => onSelect(data),
        title: data.cover,
      },
      id: crypto.randomUUID(),
      draggable: false,
      type: "custom",
      position: {
        x: col * (nodeWidth + gap),
        y: row * (nodeHeight + gap),
      },
    };
  }
}
