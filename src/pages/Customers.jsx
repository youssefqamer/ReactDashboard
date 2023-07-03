import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective,Sort, Page, Inject, Toolbar, Edit, Filter,Selection } from '@syncfusion/ej2-react-grids';
import { customersData,customersGrid } from './../data/dummy';
import Header from './../Components/Header';
export default function Customers() {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Customers" />
      <GridComponent
        dataSource={customersData}
        allowPaging
      allowSorting
      toolbar={["Delete"]}
      width='auto'
      editSettings={{allowDeleting:true,allowEditing:true}}
      >
        <ColumnsDirective>
          {customersGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={[Page,Toolbar,Selection,Edit,Sort,Filter]}/>
      </GridComponent>
    </div>
  );
};

