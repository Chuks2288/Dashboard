import React from 'react';
import {
    ChartComponent, SeriesDirective, Inject, Legend, Category, StackingColumnSeries, Tooltip
    , SeriesCollectionDirective
} from '@syncfusion/ej2-react-charts';

import { stackedCustomSeries, stackedPrimaryXAxis, stackedPrimaryYAxis } from '../../data/dummy';




export default function Stacked({ width, height }) {
    return (
        <ChartComponent
            width={width}
            height={height}
            id='charts'
            primaryXAxis={stackedPrimaryXAxis}
            primaryYAxis={stackedPrimaryYAxis}
            chartArea={{ border: { width: 0 } }}
            tooltip={{ enable: true }}
            legendSettings={{ background: 'white' }}
        >
            <Inject services={[Legend, Category, StackingColumnSeries, Tooltip]} />
            <SeriesCollectionDirective>
                {stackedCustomSeries.map
                    ((item, index) => <SeriesDirective key={index} {...item} />)}
            </SeriesCollectionDirective>
        </ChartComponent>
    )
}
