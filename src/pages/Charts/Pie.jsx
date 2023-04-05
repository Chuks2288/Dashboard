import React from 'react';
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, Inject, PieSeries }
    from '@syncfusion/ej2-react-charts';


import { pieChartData, ecomPieChartData } from '../../data/dummy';

export default function Pie() {
    return (
        <div className='m-4 md:m-10 mt-24 bg-white
         dark:bg-secondary-dark-bg rounded-3xl'>

            <Header
                category='Chart'
                title='Inflation Rate'
            />

            <AccumulationChartComponent
                id='charts'>
                dataSource={pieChartData} 


                <Inject services={[PieSeries]} />
                <AccumulationSeriesCollectionDirective>
                    {ecomPieChartData.map((item, index) =>
                        <AccumulationSeriesDirective
                            key={index} {...item} />)}
                </AccumulationSeriesCollectionDirective>
            </AccumulationChartComponent>

        </div>
    )
}
