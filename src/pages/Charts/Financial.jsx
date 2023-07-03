import React from 'react'
import { Header } from '../../Components'
import { ChartComponent, Crosshair, DateTime, HiloSeries, Inject, Logarithmic, SeriesCollectionDirective, SeriesDirective, Zoom } from '@syncfusion/ej2-react-charts'
import { FinancialPrimaryXAxis, FinancialPrimaryYAxis, financialChartData } from '../../data/dummy'
import { Tooltip } from '@syncfusion/ej2-react-popups'

export default function Financial() {
  const date1 = new Date('2017, 1, 1');

  function filterValue(value) {
    if (value.x >= date1) {
      return value.x, value.high, value.low;
    }
  }
  const returnValue = financialChartData.filter(filterValue);
  return (
    <>
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Chart" title=" Financial" />
      <div className="text-center mb-5">
        <p className='font-semibold'>AAPLE Historical</p>
      </div>
      <ChartComponent id='charts' primaryXAxis={FinancialPrimaryXAxis} primaryYAxis={FinancialPrimaryYAxis}
      chartArea={{border:{width:0}}} tooltip={{enable:true,shared:true}} crosshair={{ enable: true, lineType: 'Vertical', line: { width: 0 } }}>
        <Inject services={[HiloSeries, Tooltip, DateTime, Logarithmic, Crosshair, Zoom]} />
      <SeriesCollectionDirective>
        <SeriesDirective     
        dataSource={returnValue}
              xName="x"
              yName="low"
              name="Apple Inc"
              type="Hilo"
              low="low"
              high="high"/>
      </SeriesCollectionDirective>
      </ChartComponent>
      </div>
    </>
  )
}
