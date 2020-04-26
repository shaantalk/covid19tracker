import React from 'react';
import { Doughnut, Pie } from 'react-chartjs-2';

import styles from './DonutChart.module.css';

const DonutChart = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
    if (!confirmed) {
        return 'Loading...';
    }

    const ChartData = {
        labels: ["Confirmed", "Recovered", "Deaths"],
        datasets: [{
            data: [confirmed.value, recovered.value, deaths.value],
            backgroundColor: [
                '#3f51b5cc',
                '#29a729cc',
                '#dd2138cc'
            ],
            hoverBackgroundColor: [
                '#3f51b5cc',
                '#29a729cc',
                '#dd2138cc'
            ]
        }]
    };


    return (
        <div className={styles.container}>
            {/* <Doughnut data={ChartData} /> */}
            <Pie width={100} data={ChartData} />
        </div>
    )
}

export default DonutChart;