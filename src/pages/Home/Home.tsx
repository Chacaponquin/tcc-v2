import React from "react";
import Content from "./components/Content/Content";
import Top from "./components/Top/Top";
import Bottom from "./components/Bottom/Bottom";
import GridLayout from "@modules/shared/components/GridLayout/GridLayout";

export default function Home() {
  return (
    <GridLayout>
      <Top />
      <Content />
      <Bottom />
    </GridLayout>
  );
}
