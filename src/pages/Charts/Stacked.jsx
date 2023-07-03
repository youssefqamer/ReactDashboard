import React from 'react'
import Header from './../../Components/Header';
import { Category, ChartComponent,Inject, Legend, SeriesCollectionDirective, SeriesDirective, StackingColumnSeries, Tooltip } from '@syncfusion/ej2-react-charts';
import { stackedCustomSeries, stackedPrimaryXAxis, stackedPrimaryYAxis } from '../../data/dummy';
export default function Stacked() {
  return (
    <>
     <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Chart" title="Stacked" />
      <div className="text-center mb-5">
        <p className='font-semibold'>Revenue Breakdown</p>
      </div>
      <div className="w-full ">
        <ChartComponent 
        id='charts' primaryXAxis={stackedPrimaryXAxis} primaryYAxis={stackedPrimaryYAxis}
              width={'90%'}
              height={'100%'}
              chartArea={{ border: { width: 0 } }}
              tooltip={{ enable: true }}
              legendSettings={{ background: 'white' }}
            >
           <Inject services={[StackingColumnSeries, Category, Legend, Tooltip]}/>
           <SeriesCollectionDirective>
        {stackedCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)}
      </SeriesCollectionDirective>
        </ChartComponent>
      </div>
      </div>
    </>
  )
}