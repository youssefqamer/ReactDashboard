import React from 'react'
import { Agenda, Day, DragAndDrop, Inject, Month, Resize, ScheduleComponent, Week, WorkWeek } from '@syncfusion/ej2-react-schedule';
import Header from './../Components/Header';
import { scheduleData } from '../data/dummy';

export default function Calendar() {
  return (
    <>
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
    <Header category='App' title='Calendar' />
    <ScheduleComponent height='650px' eventSettings={{dataSource:scheduleData}}
    
    selectedDate={new Date(2021,0,10)}
    >
      <Inject services={[Day,Week,WorkWeek,Month,Agenda,DragAndDrop,Resize]}/>
    </ScheduleComponent>
    </div>
    </>
  )
}
