import React from 'react'
import Header from './../../Components/Header';
import { ColorMappingPrimaryXAxis, ColorMappingPrimaryYAxis, colorMappingData, rangeColorMapping } from '../../data/dummy';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, ColumnSeries, Category, Tooltip, Legend, RangeColorSettingsDirective, RangeColorSettingDirective} from '@syncfusion/ej2-react-charts';
export default function ColorMaping() {
  return (
   <>
    <div className="m-4 md:m-10 mt-24 p-10 bg-white  rounded-3xl">
      <Header category="Color Mappping" title="Color Mapping" />
      <div className='text-center mb-5'>
        <p className='font-semibold'>USA CLIMATE - WEATHER BY MONTH</p>
      </div>
      <div className="w-full">
      <ChartComponent id='charts' primaryXAxis={ColorMappingPrimaryXAxis} 
      primaryYAxis={ColorMappingPrimaryYAxis} chartArea={{border:{width:0}}}
      legendSettings={{ mode: 'Range', background: 'white' }}
      tooltip={{ enable: true }}>
        <Inject services={[ColumnSeries,Tooltip,Category,Legend]}/>
        <SeriesCollectionDirective>
          <SeriesDirective 
             dataSource={colorMappingData[0]}
              name="USA"
              xName="x"
              yName="y"
              type="Column"
              cornerRadius={{
                topLeft: 10,
                topRight: 10,
              }}
              />
               <RangeColorSettingsDirective>
                {rangeColorMapping.map((item,index)=><RangeColorSettingDirective  key={index} {...item}/>)}
              </RangeColorSettingsDirective>
        </SeriesCollectionDirective>
</ChartComponent>
      </div>
    </div>
   </>
  )
}
