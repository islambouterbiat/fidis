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
    labels: ['FI25', 'GoldFI', 'MetaFi', 'NFTFI', 'GameFI', 'DeFiFI'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 4, 8, 9],
        backgroundColor: [
          'rgba(111, 159, 198, 1)',
          'rgba(243, 168, 101, 1)',
          'rgba(127, 185, 115, 1)',
          '#38bdf8',
          '#fbbf24',
          '#c084fc',
        ],
        borderColor: [
          'rgba(111, 159, 198, 1)',
          'rgba(243, 168, 101, 1)',
          'rgba(127, 185, 115, 1)',
          '#38bdf8',
          '#fbbf24',
          '#c084fc',
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
      <div className="h-32 xxl:h-72">
        <Pie data={pie_chart_data} options={options} />
      </div>
      <div className="flex justify-end">
        <label
          htmlFor="value_balance"
          className="relative mt-2 flex cursor-pointer items-center hover:scale-105"
        >
          <span className="mr-1.5 cursor-pointer text-sm font-medium">
            Value
          </span>
          <div className="relative">
            <input
              // onClick={handleBalanceToggle}
              type="checkbox"
              id="value_balance"
              className="sr-only cursor-pointer"
            />
            <div className="toggle_bg h-5 w-8 cursor-pointer rounded-full border-2 border-gray-200 bg-transparent"></div>
          </div>

          <span className="ml-1.5 cursor-pointer text-sm font-medium">
            Balance
          </span>
        </label>
      </div>
    </div>
  )
}

export default Distribution
