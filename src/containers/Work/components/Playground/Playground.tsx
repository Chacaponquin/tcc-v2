"use client";

import React, { useEffect } from "react";
import { ReactFlow, useNodesState } from "@xyflow/react";
import WorkCard from "./components/WorkCard/WorkCard";
import { WorkNodeBuilder } from "@pages/Work/domain/work-node-builder";
import { WORKS } from "@pages/Work/domain/works";

import "@xyflow/react/dist/style.css";
import { WorkNodesPositionsBuilder } from "@pages/Work/domain/work-nodes-positions-builder";

const nodeTypes = {
  custom: WorkCard,
};

const buildNodes = () => {
  const nodes = WORKS.map((w) => WorkNodeBuilder.execute({ data: w }));

  const positionBuilder = new WorkNodesPositionsBuilder(nodes, {
    height: 220,
    width: 180,
  });

  const result = positionBuilder.execute({
    areaSize: 2400,
    minDistance: 150,
  });

  return result;
};

export default function Playground() {
  useEffect(() => {
    const el = document.querySelector("[href='https://reactflow.dev']");

    if (el) {
      el.classList.add("hidden");
    }
  }, []);

  const [nodes, _, onNodesChange] = useNodesState(buildNodes());

  return (
    <div className="w-full flex flex-grow flex-col">
      <ReactFlow
        nodes={nodes}
        edges={[]}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        nodesConnectable={false}
        fitView={true}
      ></ReactFlow>
    </div>
  );
}
