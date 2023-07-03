import React from 'react'
import Header from './../../Components/Header';
import Piechart from '../../Components/Charts/Pie';
import { pieChartData } from '../../data/dummy';
export default function Pie() {
  return (
    <>
    <div className="m-4 md:m-10 mt-24 p-10 bg-white  rounded-3xl">
<Header category="Chart" title="Pie" />
<div className="text-center mb-5">
        <p className='font-semibold'>Project Cost Breakdown</p>
      </div>
<div className="w-full">
  <Piechart id="chart-pie" data={pieChartData} legendVisiblity height="full" />
</div>
</div>
    </>
  )
}

{/* <div className="m-2 md:m-10 mt-24   bg-white  rounded-3xl">
<Header category="Chart" title="Pie" />
<div className='text-center '>
<p className='font-semibold '>Project Cost Breakdown</p>
</div>
<div className="w-full">
<Piechart id="chart-pie" data={pieChartData} legendVisiblity height="full" />
</div>
</div> */}