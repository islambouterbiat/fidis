import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend)

const Distribution = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'right' as const,
      },
    },
  }

  const pie_chart_data = {
    labels: ['FI25', 'FI10', 'MetaFi'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 1,
      },
    ],
  }

  return (
    <div className="col-span-4 w-full rounded bg-black/30 py-2 px-3">
      <nav className="flex items-center justify-between border-b border-gray-300/30 py-2">
        <h1 className="text-xl font-medium">Distribution</h1>
      </nav>
      <h2 className="py-3 text-sm">FI25 Crypto Index Token</h2>
      <div className="relative -top-12 h-20">
        <Pie data={pie_chart_data} options={options} />
      </div>
    </div>
  )
}

export default Distribution
