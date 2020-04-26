import React, { useState, useEffect } from 'react';
import { Line, Bar, defaults } from 'react-chartjs-2';
import { Card } from '@material-ui/core';
import { merge } from 'lodash';
import { fetchDailyData } from '../../api';
import styles from './Charts.module.css';

merge(defaults, {
  scale: {
    gridLines: {
      drawOnChartArea: false,
     },
  },
});

const Charts = ({ data: { confirmed, recovered, deaths }, country }) => {
  const [dailyData, setDailyData] = useState({});

  useEffect(() => {
    const fetchMyAPI = async () => {
      const initialDailyData = await fetchDailyData();

      setDailyData(initialDailyData);
    };

    fetchMyAPI();
  }, []);

  const barChart = (
    confirmed ? (
      <Bar
        data={{
          labels: ['Infected', 'Recovered', 'Deaths'],
          datasets: [
            {
              label: 'People',
              backgroundColor: ['#3f51b5cc', '#29a729cc', '#dd2138cc'],
              data: [confirmed.value, recovered.value, deaths.value],
            },
          ],
        }}
        options={{
          legend: { display: false },
          title: { display: true, text: `Current state in ${country}` },
        }}
      />
    ) : null
  );

  var options = {
    scales: {
        yAxes: [
            {
                ticks: {
                    callback: function(label, index, labels) {
                      if(label >= 100000){
                        return label/100000+'L'
                      }  
                      return label/1000+'k';
                    }
                }
            }
        ],
        xAxes: [{
          ticks: {
              autoSkip: true,
              autoSkipPadding: 20,
              maxRotation: 90,
              minRotation: 90
          }
      }]
    }
}

  const lineChart = (
    dailyData[0] ? (
      <Line options={options}
        data={{
          labels: dailyData.map(({ date }) => date),
          datasets: [{
            data: dailyData.map((data) => data.confirmed),
            label: 'Infected',
            borderColor: '#3f51b5cc',
            backgroundColor: '#3f51b5cc',
            fill: false,
            pointBorderColor: '#3f51b5cc',
            pointBackgroundColor: '#3f51b5cc',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: '#3f51b5cc',
            pointHoverBorderColor: '#3f51b5cc',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
          }, {
            data: dailyData.map((data) => data.deaths),
            label: 'Deaths',
            borderColor: '#dd2138cc',
            backgroundColor: '#dd2138cc',
            fill: false,
            pointBorderColor: '#dd2138cc',
            pointBackgroundColor: '#dd2138cc',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: '#dd2138cc',
            pointHoverBorderColor: '#dd2138cc',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
          }
          ],
        }}
      />
    ) : null
  );


  return (
    <Card className={styles.container}>
      {country ? barChart : lineChart}
    </Card>
  );
};

export default Charts;