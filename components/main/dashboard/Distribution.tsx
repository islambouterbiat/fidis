import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend)

const Distribution = () => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
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
      <div className="">
        <Pie data={pie_chart_data} options={options} />
      </div>
      <div className="flex justify-end">
        <label
          htmlFor="value_balance"
          className="relative mt-2 flex cursor-pointer items-center hover:scale-105"
        >
          <input
            // onClick={handleBalanceToggle}
            type="checkbox"
            id="value_balance"
            className="sr-only cursor-pointer"
          />
          <div className="toggle_bg h-5 w-8 cursor-pointer rounded-full border-2 border-gray-200 bg-transparent"></div>
          <span className="ml-3 cursor-pointer text-sm font-medium">
            Balance
          </span>
        </label>
      </div>
    </div>
  )
}

export default Distribution
