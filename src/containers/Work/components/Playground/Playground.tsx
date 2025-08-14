"use client";

import React, { useCallback, useEffect, useState } from "react";
import { ReactFlow, useNodesState, useReactFlow } from "@xyflow/react";
import WorkCard from "./components/WorkCard/WorkCard";
import { WorkNodeBuilder } from "@pages/Work/domain/work-node-builder";
import { Work, WORKS } from "@pages/Work/domain/works";
import { WorkNodesPositionsBuilder } from "@pages/Work/domain/work-nodes-positions-builder";

import "@xyflow/react/dist/style.css";

const nodeTypes = {
  custom: WorkCard,
};

interface Props {
  onSelect: (v: Work) => void;
}

type Translate = [[number, number], [number, number]];

export default function Playground({ onSelect }: Props) {
  useEffect(() => {
    const el = document.querySelector("[href='https://reactflow.dev']");

    if (el) {
      el.classList.add("hidden");
    }
  }, []);

  const buildNodes = useCallback(() => {
    const nodes = WORKS.map((w) =>
      WorkNodeBuilder.execute({ data: w, onSelect: onSelect })
    );

    const positionBuilder = new WorkNodesPositionsBuilder(nodes, {
      height: 220,
      width: 180,
    });

    const result = positionBuilder.execute({
      areaSize: 2400,
      minDistance: 150,
    });

    return result;
  }, [onSelect]);

  const { fitView, getNodesBounds } = useReactFlow();

  const [nodes, _, onNodesChange] = useNodesState(buildNodes());
  const [translateExtent, setTranslateExtent] = useState<Translate | null>(
    null
  );

  useEffect(() => {
    const bounds = getNodesBounds(nodes);

    // Limitar el pan a los bounds de los nodos (con un poco de margen)
    setTranslateExtent([
      [bounds.x - 50, bounds.y - 50],
      [bounds.x + bounds.width + 50, bounds.y + bounds.height + 50],
    ]);
  }, [nodes, fitView, getNodesBounds]);

  return (
    <div className="w-full flex flex-grow flex-col">
      <ReactFlow
        nodes={nodes}
        edges={[]}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        nodesConnectable={false}
        nodesDraggable={false}
        fitView={true}
        translateExtent={translateExtent ? translateExtent : undefined}
      ></ReactFlow>
    </div>
  );
}
