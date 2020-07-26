import React, { FunctionComponent } from 'react';
import { VictoryChart, VictoryBar, VictoryAxis, VictoryTheme } from 'victory';

type SubCategoriesType = {
  data: any[];
  subcategory: string;
};

const tickFormat = (subcateogry: string) => (v: string) => {
  switch (subcateogry) {
    case 'cost':
      return `${v} $`;
    case 'duration':
      return `${v} H`;
    case 'frequency':
      return `${v}/d`;
    case 'temp-average':
      return `${v} °C`;
    case 'humidity':
      return `${v} %`;
    case 'sun-hours':
      return `${v} H`;

    default:
      return `${v}`;
  }
};

const SubcategoryGraph: FunctionComponent<SubCategoriesType> = ({
  subcategory,
  data,
}) => {
  const applyTickFormat = tickFormat(subcategory);
  return (
    <VictoryChart height={280}>
      <VictoryAxis theme={VictoryTheme.material} />
      <VictoryAxis
        dependentAxis
        theme={VictoryTheme.material}
        tickFormat={applyTickFormat}
        width={600}
        offsetX={50}
      />
      <VictoryBar
        data={data}
        x="location"
        y={subcategory}
        style={{ data: { fill: '#72a7da' } }}
        alignment="middle"
        barWidth={10}
      />
    </VictoryChart>
  );
};

export default SubcategoryGraph;
