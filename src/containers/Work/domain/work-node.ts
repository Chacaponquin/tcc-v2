import { Node } from "@xyflow/react";

export type WorkNodeProps = {
  image: string;
  onClick: () => void;
  title: string;
};

export type WorkNode = Node<WorkNodeProps>;
