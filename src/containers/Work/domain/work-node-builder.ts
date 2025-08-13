import { Work } from "./works";
import { WorkNode } from "./work-node";

interface Props {
  data: Work;
}

export class WorkNodeBuilder {
  static execute({ data }: Props): WorkNode {
    return {
      data: data,
      id: crypto.randomUUID(),
      draggable: true,
      type: "custom",
      position: { x: 100, y: 500 },
    };
  }
}
