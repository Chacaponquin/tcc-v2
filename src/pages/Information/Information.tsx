import GridLayout from "@modules/shared/components/GridLayout/GridLayout";
import React from "react";
import Top from "./components/Top/Top";
import Content from "./components/Content/Content";
import Bottom from "./components/Bottom/Bottom";

export default function Information() {
  return (
    <GridLayout>
      <Top />

      <Content />

      <Bottom />
    </GridLayout>
  );
}
