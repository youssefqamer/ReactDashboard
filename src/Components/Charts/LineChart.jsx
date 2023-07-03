import React from 'react'
import { ChartComponent,DateTime,Inject, Legend, LineSeries,SeriesCollectionDirective,SeriesDirective,Tooltip } from '@syncfusion/ej2-react-charts';
import { LinePrimaryXAxis, LinePrimaryYAxis, lineCustomSeries } from '../../data/dummy';



export default function LineChart() {
  return (
    <>
    <ChartComponent id='line-chart' height='420px' primaryXAxis={LinePrimaryXAxis} primaryYAxis={LinePrimaryYAxis}
    chartArea={{border:{width:0}}} tooltip={{enable:true}} >
      <Inject services={[LineSeries,DateTime,Legend,Tooltip]}/>
      <SeriesCollectionDirective>
        {lineCustomSeries.map((item,index)=><SeriesDirective key={index} {...item}/>)}
      </SeriesCollectionDirective>
    </ChartComponent>

    </>
  )
}
