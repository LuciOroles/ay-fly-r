import React, { FunctionComponent } from 'react';
import { VictoryChart, VictoryBar, VictoryAxis, VictoryTheme } from 'victory';
import groupWithLocation from './groupWithLocation';
type SubCategoriesType = {
  data: any[];
  subcategory: string;
};

const Subcategory: FunctionComponent<SubCategoriesType> = ({
  subcategory,
  data,
}) => {
  const graphData = groupWithLocation(subcategory)(data);
  console.log(graphData);
  return (
    <VictoryChart>
      <VictoryAxis theme={VictoryTheme.material} />
      <VictoryAxis dependentAxis theme={VictoryTheme.material} />
      <VictoryBar
        data={graphData}
        x="location"
        y={subcategory}
        style={{ data: { fill: '#72a7da' } }}
        alignment="middle"
        barWidth={10}
      />
    </VictoryChart>
  );
};

export default Subcategory;
