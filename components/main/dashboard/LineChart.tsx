import React from 'react'
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  TimeScale,
  PointElement,
  LineElement,
  Title,
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import 'chartjs-adapter-date-fns'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale
)

const LineChart = () => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      //   title: {
      //     display: true,
      //     text: 'Chart.js Line Chart',
      //   },
    },
    interaction: {
      intersect: false,
    },
    scales: {
      x: {
        type: 'time',
        time: {
          unit: 'day',
        },
      },
    },
  }
  const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
  ]

  const line_chart_data = {
    // labels,
    datasets: [
      {
        tension: 0.3,
        label: 'FI25',
        data: [
          { x: '2022-03-12', y: 50 },
          { x: '2022-03-23', y: 10 },
          { x: '2022-04-12', y: 20 },
          { x: '2022-04-28', y: 100 },
          { x: '2022-05-12', y: 60 },
          { x: '2022-06-12', y: 40 },
        ],
        // borderWidth: 4,
        borderColor: 'rgb(238,130,238)',
        backgroundColor: 'rgba(238,130,238, 0.5)',
      },
      {
        tension: 0.3,
        label: 'FI10',
        data: [
          { x: '2022-03-12', y: 100 },
          { x: '2022-03-23', y: 80 },
          { x: '2022-04-12', y: 70 },
          { x: '2022-04-28', y: 10 },
          { x: '2022-05-12', y: 20 },
          { x: '2022-06-12', y: 70 },
        ],
        borderColor: 'rgb(55, 125, 255)',
        backgroundColor: 'rgba(55, 125, 255, 0.5)',
      },
      {
        tension: 0.3,
        label: 'MetaFI',
        data: [100, 250, 170, 240, 260, 250, 375],
        borderColor: 'rgb(240, 157, 1)',
        backgroundColor: 'rgba(240, 157, 1, 0.5)',
      },
    ],
  }
  return (
    <div className="h-[15rem]">
      <Line options={options} data={line_chart_data} />
    </div>
  )
}

export default LineChart
