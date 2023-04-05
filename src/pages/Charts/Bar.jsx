import React from 'react';
import {
    ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject,
    Legend, Category, Tooltip, DataLabel, BarSeries
} from '@syncfusion/ej2-react-charts';

import { useStateContext } from '../../contexts/ContextProvider';

import { Header } from '../../components';



import { barCustomSeries, barPrimaryXAxis, barPrimaryYAxis, barChartData } from '../../data/dummy';


export default function Bar() {

    const { currentMode } = useStateContext();

    return (
        <div className='m-4 md:m-10 mt-24 bg-white
        dark:bg-secondary-dark-bg rounded-3xl'>

            <Header
                category='Bar Chart'
                title='Inflation Rate in Percentage'

            />
            <ChartComponent
                id='bar-chart'
                // height='420px'
                dataSource={barChartData}
                primaryXAxis={barPrimaryXAxis}
                primaryYAxis={barPrimaryYAxis}
                // chartArea={{ border: { width: 0 } }}
                tooltip={{ enable: true }}
                background={currentMode === 'Dark' ? '#33373E' : '#fff'}
            >
                <Inject services={[BarSeries, Legend, Tooltip, DataLabel, Category]} />


                <SeriesCollectionDirective>
                    {barCustomSeries.map((item, index) =>
                        <SeriesDirective key={index} {...item}
                        />)}
                </SeriesCollectionDirective>
            </ChartComponent>
        </div>
    )
}
