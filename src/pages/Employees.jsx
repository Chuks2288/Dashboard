import React from 'react';
import {
    GridComponent, ColumnsDirective, ColumnDirective,
    Page, Search, Inject, Toolbar
} from '@syncfusion/ej2-react-grids';

import { employeesData, contextMenuItems, employeesGrid } from '../data/dummy';
import { Header } from '../components';
import { Item } from '@syncfusion/ej2/navigations';

export default function Employees() {
    return (
        <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl pt-20'>
            <Header
                category='Page' title='Employees'
            />
            <GridComponent
                dataSource={employeesData}

                // this function allow there to be pagination
                allowPaging
                //this function allow for sorting
                allowSorting
                toolbar={['Search']}
                width='auto'
            >
                <ColumnsDirective>
                    {employeesGrid.map((item, index) => (
                        <ColumnDirective key={index}{...item}
                        />
                    ))}
                </ColumnsDirective>

                <Inject services={[Page, Search, Toolbar]} />
            </GridComponent>
        </div>
    )
}
