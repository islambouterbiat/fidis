import React, { useState } from 'react'
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
import CandleStick from './CandleStick'
import { AiOutlineLineChart } from 'react-icons/ai'
import { MdOutlineWaterfallChart } from 'react-icons/md'

ChartJS.register(
  ArcElement,
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
  // state for giving user the ability to set chart timeframe by month or week ...
  const [timeframe, setTimeframe] = useState('month')
  // state for showing current type of charts
  const [currentChart, setCurrentChart] = useState('line_chart')

  const options: any = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
        align: 'end',
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
        // parsing:false we will use this when we get timestamps from api for better performance
        type: 'time',
        time: {
          unit: timeframe,
        },
      },
      y: {
        max: 200,
      },
    },
  }

  const line_chart_data = {
    // labels,
    datasets: [
      {
        tension: 0.3,
        label: 'FI25',
        data: [
          { x: '2022-03-12T13:00:00', y: 50 },
          { x: '2022-03-23T14:00:00', y: 10 },
          { x: '2022-04-12T03:00:00', y: 20 },
          { x: '2022-04-28T18:00:00', y: 100 },
          { x: '2022-05-12T19:00:00', y: 60 },
          { x: '2022-06-12T10:00:00', y: 40 },
        ],
        // borderWidth: 4,
        borderColor: 'rgb(238,130,238)',
        backgroundColor: 'rgba(238,130,238, 0.5)',
      },
      {
        tension: 0.3,
        label: 'FI10',
        data: [
          { x: '2022-03-12T13:00:00', y: 100 },
          { x: '2022-03-23T14:00:00', y: 80 },
          { x: '2022-04-12T03:00:00', y: 70 },
          { x: '2022-04-28T18:00:00', y: 10 },
          { x: '2022-05-12T19:00:00', y: 20 },
          { x: '2022-06-12T10:00:00', y: 70 },
        ],
        borderColor: 'rgb(55, 125, 255)',
        backgroundColor: 'rgba(55, 125, 255, 0.5)',
      },
      {
        tension: 0.3,
        label: 'MetaFI',
        data: [
          { x: '2022-03-12T13:00:00', y: 200 },
          { x: '2022-03-23T14:00:00', y: 80 },
          { x: '2022-04-12T03:00:00', y: 100 },
          { x: '2022-04-28T18:00:00', y: 30 },
          { x: '2022-05-12T19:00:00', y: 20 },
          { x: '2022-06-12T10:00:00', y: 10 },
        ],
        borderColor: 'rgb(240, 157, 1)',
        backgroundColor: 'rgba(240, 157, 1, 0.5)',
      },
    ],
  }
  const timeframeData = [
    { name: 'hour', text: '1H' },
    { name: 'day', text: '1D' },
    { name: 'week', text: '1W' },
    { name: 'month', text: '1M' },
    { name: 'year', text: '1Y' },
  ]

  return (
    <div className="relative h-[15rem] xxl:h-[25rem]">
      {/* timeframe options */}
      <div className="absolute top-2.5 left-12 flex items-center gap-2">
        {timeframeData.map((t, index) => (
          <button
            key={index}
            className={`rounded px-2 py-1 text-center text-xs xxl:px-4 xxl:py-2  ${
              timeframe == t.name
                ? 'bg-white text-black'
                : 'bg-black/50 text-white'
            }`}
            onClick={() => setTimeframe(t.name)}
          >
            {t.text}
          </button>
        ))}
      </div>
      {/* chart type buttons */}
      <div className="absolute top-2.5 left-72 flex items-center gap-2 xxl:left-[42rem]">
        <button
          className={
            currentChart == 'line_chart' ? 'rounded bg-black/50 px-1' : ''
          }
          onClick={() => setCurrentChart('line_chart')}
        >
          <AiOutlineLineChart className="h-5 w-5 xxl:h-10 xxl:w-10" />
        </button>
        <button
          className={
            currentChart == 'candlestick' ? 'rounded bg-black/50 px-1' : ''
          }
          onClick={() => setCurrentChart('candlestick')}
        >
          <MdOutlineWaterfallChart className="h-5 w-5 xxl:h-10 xxl:w-10" />
        </button>
      </div>
      {currentChart == 'line_chart' ? (
        <Line options={options} data={line_chart_data} />
      ) : currentChart == 'candlestick' ? (
        <CandleStick />
      ) : (
        ''
      )}
    </div>
  )
}

export default LineChart
