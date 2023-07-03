import React from 'react'
import Header from '../../Components/Header'
import LineChart from './../../Components/Charts/LineChart';
export default function Line() {
  return (
  <>
   <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
   <Header category="Chart" title="Line" />
   <div className="text-center mb-5">
        <p className='font-semibold'>Inflation Rate</p>
      </div>
   <div className="w-full">
    <LineChart/>
   </div>
   </div>
  </>
  )
}
