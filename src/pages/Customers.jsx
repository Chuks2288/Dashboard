import React from 'react';


import {
    GridComponent, ColumnsDirective, ColumnDirective, Page, Selection
    , Inject, Edit, Toolbar, Sort, Filter
} from '@syncfusion/ej2-react-grids';

import { customersData, customersGrid } from '../data/dummy';
import { Header } from '../components';



export default function Customers() {
    return (
        <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl pt-20'>
            <Header
                category='Page' title='Customers'
            />
            <GridComponent
                dataSource={customersData}

                // this function allow there to be pagination
                allowPaging
                //this function allow for sorting
                allowSorting
                toolbar={['Delete']}
                editSettings={{ allowDeleting: true, allowEditing: true }}
                width='auto'
            >
                <ColumnsDirective>
                    {customersGrid.map((item, index) => (
                        <ColumnDirective key={index}{...item}
                        />
                    ))}
                </ColumnsDirective>

                <Inject services={[Page, Toolbar, Selection, Edit, Sort, Filter]} />
            </GridComponent>
        </div>
    )
}
