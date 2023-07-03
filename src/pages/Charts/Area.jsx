import React from 'react'
import { ChartComponent,DateTime,Inject, Legend, SplineAreaSeries,SeriesCollectionDirective,SeriesDirective,Tooltip } from '@syncfusion/ej2-react-charts';
import { useContext } from 'react';
import { stateContext } from '../../Context/ContextProvider';
import { areaCustomSeries,areaPrimaryXAxis, areaPrimaryYAxis } from '../../data/dummy';
import Header from '../../Components/Header';

export default function Area() {
  const {currentMode}=useContext(stateContext)
  return (
    <>
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Chart" title="Area" />
      <div className="text-center mb-5">
        <p className='font-semibold'>Inflation Rate In Percentage</p>
      </div>
    <ChartComponent id='area-chart' height='420px' primaryXAxis={areaPrimaryXAxis} primaryYAxis={areaPrimaryYAxis}
    chartArea={{border:{width:0}}} tooltip={{enable:true}} >
      <Inject services={[DateTime,Legend,SplineAreaSeries]}/>
      <SeriesCollectionDirective>
        {areaCustomSeries.map((item,index)=><SeriesDirective key={index} {...item}/>)}
      </SeriesCollectionDirective>
    </ChartComponent>
</div>
    
    </>
  )
}
