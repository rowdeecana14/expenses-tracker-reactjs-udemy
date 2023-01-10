import React from 'react';

import ChartBar from './ChartBar';
import './ExpenseChart.css';

function ExpenseChart({ expenses }) {

    const data_points = [
        { label: 'Jan', value: 0 },
        { label: 'Feb', value: 0 },
        { label: 'Mar', value: 0 },
        { label: 'Apr', value: 0 },
        { label: 'May', value: 0 },
        { label: 'Jun', value: 0 },
        { label: 'Jul', value: 0 },
        { label: 'Aug', value: 0 },
        { label: 'Sep', value: 0 },
        { label: 'Oct', value: 0 },
        { label: 'Nov', value: 0 },
        { label: 'Dec', value: 0 },
    ];
    
    for (const expense of expenses) {
        const month = expense.date.getMonth(); // starting at 0 => January => 0
        data_points[month].value += expense.amount;
    }
    
    const values = data_points.map(data => data.value);
    const max = Math.max(...values);

    console.log(values, 'values')
    console.log(max, 'max')


    return (
        <div className='chart'>
            {data_points.map((data) => (
                <ChartBar
                    key={data.label}
                    value={data.value}
                    max={max}
                    label={data.label}
                />
            ))}
        </div>
    );
}

export default ExpenseChart;