import React, { Component } from 'react'
import { Bar } from 'react-chartjs-2'

class Chart extends Component {
  render() {
    return (
      <div className='chart-container'>
        <Bar
          data={{
            labels: [
              'HTML5',
              'CSS3',
              'JavaScript',
              'React',
              'Redux',
              'Vue',
              'TypeScript',
              'jQuery',
              'Bootstrap',
              'NodeJs',
              'ExpressJs',
              'WordPress'
            ],
            datasets: [
              {
                label: 'Level of skills',
                data: [75, 70, 60, 55, 40, 30, 30, 20, 30, 40, 40, 55, 100],
                backgroundColor: [
                  'rgb(255, 99, 132)',
                  'rgb(54, 162, 235)',
                  'rgb(255, 206, 86)',
                  'rgb(75, 192, 192)',
                  'rgb(153, 101, 255)',
                  'rgb(54, 162, 235)',
                  'rgb(161, 190, 116)',
                  'rgb(153, 102, 255)',
                  'rgb(143, 200, 55)',
                  'rgb(134, 101, 54)',
                  'rgb(153, 101, 255)',
                  'rgb(54, 162, 235)',
                  'rgb(255, 255, 255)'
                ]
              }
            ]
          }}
          options={{
            scales: {
              xAxes: [
                {
                  gridLines: {
                    display: false,
                    drawOnChartArea: false,
                    drawTicks: false
                  },
                  ticks: {
                    padding: 10
                  }
                }
              ],
              yAxes: [
                {
                  gridLines: {
                    display: false
                  },
                  ticks: {
                    beginAtZero: true
                  }
                }
              ]
            },
            legend: {
              display: false
            },
            tooltips: {
              enabled: false
            },
            labels: {
              fontColor: '#000',
              fontSize: 16
            }
          }}
        />
      </div>
    )
  }
}

export default Chart
