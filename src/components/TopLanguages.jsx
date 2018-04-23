import React from "react";
import { ResponsivePie } from "nivo";
import { topLanguages } from "../services/dataMassagers";

export default ({ repositories }) => (
  <ResponsivePie
    data={topLanguages(repositories)}
    margin={{
      top: 40,
      right: 80,
      bottom: 80,
      left: 80
    }}
    innerRadius={0.5}
    padAngle={0.7}
    cornerRadius={3}
  />
);
