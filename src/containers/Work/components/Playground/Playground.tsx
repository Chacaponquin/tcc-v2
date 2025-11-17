"use client";

import React, { useCallback, useEffect } from "react";
import { ReactFlow, useNodesState, useReactFlow } from "@xyflow/react";
import WorkCard from "./components/WorkCard/WorkCard";
import { WorkNodeBuilder } from "@pages/Work/domain/work-node-builder";
import { Work, WORKS } from "@pages/Work/domain/works";

import "@xyflow/react/dist/style.css";

const nodeTypes = {
  custom: WorkCard,
};

interface Props {
  onSelect: (v: Work) => void;
}

const nodeWidth = 180;
const nodeHeight = 220;
const gap = 60;
const cols = 5;

export default function Playground({ onSelect }: Props) {
  const { setCenter } = useReactFlow();

  useEffect(() => {
    const el = document.querySelector("[href='https://reactflow.dev']");

    if (el) {
      el.classList.add("hidden");
    }
  }, []);

  const buildNodes = useCallback(() => {
    const nodes = WORKS.map((w, index) =>
      WorkNodeBuilder.execute({
        data: w,
        cols: cols,
        nodeWidth: nodeWidth,
        nodeHeight: nodeHeight,
        gap: gap,
        index: index,
        onSelect: onSelect,
      })
    );

    return nodes;
  }, [onSelect]);

  const [nodes, _, onNodesChange] = useNodesState(buildNodes());

  useEffect(() => {
    if (nodes.length > 0) {
      // Calcular el ancho total del grid
      const totalWidth = cols * (nodeWidth + gap) - gap;
      const centerX = totalWidth / 2;

      // Centrar solo en X, Y se posiciona cerca del inicio
      // Ajusta el valor de Y según necesites (más alto = más abajo)
      setCenter(centerX, nodeHeight * 2, { zoom: 1, duration: undefined });
    }
  }, [nodes.length, setCenter]);

  return (
    <div className="w-full flex flex-grow flex-col">
      <ReactFlow
        nodes={nodes}
        edges={[]}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        nodesConnectable={false}
        nodesDraggable={false}
        fitView={false}
      ></ReactFlow>
    </div>
  );
}
