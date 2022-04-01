import React from 'react'
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
} from 'chart.js'
import { Line } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const LineChart = () => {
  const options = {
    responsive: true,
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
    labels,
    datasets: [
      {
        tension: 0.3,
        label: 'FI25',
        data: [20, 30, 100, 150, 120, 200, 190],
        // borderWidth: 4,
        borderColor: 'rgb(238,130,238)',
        backgroundColor: 'rgba(238,130,238, 0.5)',
      },
      {
        tension: 0.3,
        label: 'FI10',
        data: [50, 150, 230, 220, 120, 150, 90],
        borderColor: 'rgb(55, 125, 255)',
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
      },
      {
        tension: 0.3,
        label: 'MetaFI',
        data: [100, 250, 170, 240, 260, 250, 255],
        borderColor: 'rgb(240, 157, 1)',
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
      },
    ],
  }
  return (
    <Line options={options} data={line_chart_data} height={300} width={800} />
  )
}

export default LineChart
