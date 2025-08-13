import { WorkNode } from "./work-node";

interface Props {
  areaSize: number;
  minDistance: number;
}

export class WorkNodesPositionsBuilder {
  constructor(
    private readonly nodes: WorkNode[],
    private readonly size: { width: number; height: number }
  ) {}

  private nodesOverlap(a: WorkNode, b: WorkNode) {
    return !(
      a.position.x + this.size.width < b.position.x ||
      b.position.x + this.size.width < a.position.x ||
      a.position.y + this.size.height < b.position.y ||
      b.position.y + this.size.height < a.position.y
    );
  }

  execute({ areaSize }: Props): WorkNode[] {
    const nodes: WorkNode[] = [];

    for (let i = 0; i < this.nodes.length; i++) {
      let position;
      let safe = false;
      let tries = 0;

      while (!safe && tries < 2000) {
        position = {
          x:
            Math.random() * (areaSize - this.size.width) -
            areaSize / 2 +
            this.size.width / 2,
          y:
            Math.random() * (areaSize - this.size.height) -
            areaSize / 2 +
            this.size.height / 2,
        };

        const newNode: WorkNode = {
          ...this.nodes[i],
          position: position,
        };

        safe = nodes.every((n) => !this.nodesOverlap(n, newNode));
        tries++;
      }

      nodes.push({
        ...this.nodes[i],
        position: position!,
      });
    }

    return nodes;
  }
}
