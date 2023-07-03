import React from 'react'
import { Header } from '../../Components'
import { Category, ChartComponent, ColumnSeries, DataLabel, Inject, Legend, SeriesCollectionDirective, SeriesDirective } from '@syncfusion/ej2-react-charts'
import { barCustomSeries, barPrimaryXAxis } from '../../data/dummy'
import { barPrimaryYAxis } from './../../data/dummy';
import { Tooltip } from '@syncfusion/ej2-react-popups';

export default function Bar() {
  return (
    <>
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Chart" title="Bar" />
      <div className="text-center mb-5">
        <p className='font-semibold'>Olympic Medal Counts - RIO</p>
      </div>
      <div className="">
        <ChartComponent id='chart' primaryXAxis={barPrimaryXAxis} primaryYAxis={barPrimaryYAxis}
        chartArea={{border:{width:0}}} tooltip={{enable:true}} legendSettings={{background:'white'}}>
          <Inject services={[ColumnSeries, Legend, Tooltip, Category, DataLabel]} />
          <SeriesCollectionDirective>
            {barCustomSeries.map((item,index)=> <SeriesDirective key={index} {...item}/>)}
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
            </div>
    </>
  )
}
