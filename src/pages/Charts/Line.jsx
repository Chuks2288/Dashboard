import React from 'react';
import { Header, LineChart } from '../../components';




export default function Line() {
    return (
        <div className='m-4 md:m-10 mt-24 bg-white
         dark:bg-secondary-dark-bg rounded-3xl'>

            <Header
                category='Chart'
                title='Inflation Rate'
            />

            <div className="w-full">
                <LineChart />
            </div>

        </div>
    )
}
