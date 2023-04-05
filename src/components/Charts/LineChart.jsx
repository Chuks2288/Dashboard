import React from 'react';
import {
    ChartComponent, SeriesCollectionDirective, LineSeries, SeriesDirective, Inject
    , DateTime, Legend, Tooltip
} from '@syncfusion/ej2-react-charts';

import { useStateContext } from '../../contexts/ContextProvider';



import { lineCustomSeries, LinePrimaryXAxis, LinePrimaryYAxis } from '../../data/dummy';


export default function LineChart() {

    const { currentMode } = useStateContext();

    return (
        <div>
            <ChartComponent
                id='line-chart'
                height='420px'
                primaryXAxis={LinePrimaryXAxis}
                primaryYAxis={LinePrimaryYAxis}
                chartArea={{ border: { width: 0 } }}
                tooltip={{ enable: true }}
                background={currentMode === 'Dark' ? '#33373E' : '#fff'}
            >
                <Inject services={[LineSeries, DateTime, Legend, Tooltip]} />

                <SeriesCollectionDirective>
                    {lineCustomSeries.map((item, index) =>
                        <SeriesDirective key={index} {...item} />)}
                </SeriesCollectionDirective>
            </ChartComponent>
        </div>
    )
}
