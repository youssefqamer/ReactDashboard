import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Page,Search, Inject, Toolbar } from '@syncfusion/ej2-react-grids';
import { employeesData,employeesGrid } from './../data/dummy';
import Header from './../Components/Header';
export default function Employees() {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Employees" />
      <GridComponent
        dataSource={employeesData}
        allowPaging
      allowSorting
      width='auto'
      toolbar={["Search"]}
      >
        <ColumnsDirective>
          {employeesGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={[Page,Search,Toolbar]}/>
      </GridComponent>
    </div>
  );
};

