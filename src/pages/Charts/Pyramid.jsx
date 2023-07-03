import React from 'react'
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, Inject, AccumulationLegend, PyramidSeries, AccumulationTooltip, AccumulationDataLabel } from '@syncfusion/ej2-react-charts';
import Header from '../../Components/Header';
import { PyramidData } from '../../data/dummy';
export default function Pyramid() {
  return (
    <>
    <div className="m-4 md:m-10 mt-24  p-10 bg-white  rounded-3xl">
      <Header category="Chart" title="Pyramid" />
      <div className="text-center mb-5">
        <p className='font-semibold'>Food Comparison Chart</p>
      </div>

      <div className="w-full">
      <AccumulationChartComponent id="pyramid-chart"
          legendSettings={{ background: 'white' }} tooltip={{ enable: true }}
          >
      <Inject services={[AccumulationLegend, PyramidSeries, AccumulationTooltip, AccumulationDataLabel]}/>
      <AccumulationSeriesCollectionDirective>
            <AccumulationSeriesDirective
              name="Food"
              dataSource={PyramidData}
              xName="x"
              yName="y"
              type="Pyramid"
              width="40%"
              height="80%"
              neckWidth="15%"
              gapRatio={0.03}
              explode
              emptyPointSettings={{ mode: 'Drop', fill: 'red' }}
              dataLabel={{
                visible: true,
                position: 'Inside',
                name: 'text',
              }}
            />
          </AccumulationSeriesCollectionDirective>
        </AccumulationChartComponent>
      </div>
      
      </div>
    
    </>
  )
}
