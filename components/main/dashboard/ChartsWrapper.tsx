import React, { useState, useEffect } from 'react'
import LineChart from './LineChart'
import CandlestickChart from './CandlestickChart'
import { AiOutlineLineChart } from 'react-icons/ai'
import { MdOutlineWaterfallChart } from 'react-icons/md'

import { getData } from './../../../utils/chartData'

const ChartsWrapper = () => {
  // state for giving user the ability to set chart timeframe by month or week ...
  const [timeframe, setTimeframe] = useState('month')
  // state for showing current type of charts
  const [currentChart, setCurrentChart] = useState('line_chart')
  // candlestick chart data fetching
  const [chartData, setChartData] = useState([])
  useEffect(() => {
    getData().then((data) => {
      setChartData(data)
    })
  }, [])
  const timeframeData = [
    { name: 'hour', text: '1H' },
    { name: 'day', text: '1D' },
    { name: 'week', text: '1W' },
    { name: 'month', text: '1M' },
    { name: 'year', text: '1Y' },
  ]
  // state for start & end chart date values
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  console.log(startDate, endDate)

  return (
    <div className="relative flex h-full flex-col">
      {/* customization options */}
      <div className="flex items-center justify-between">
        {/* timeframe options */}
        <div className="z-40 flex items-center gap-2">
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
        <div className="z-40 flex items-center gap-2">
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
        {/* min & max dates inputes */}
        <div className="flex items-center gap-8">
          <input
            type="date"
            name="start-date"
            id="start-date"
            className=""
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
          <input
            type="date"
            name="end-date"
            id="end-date"
            className=""
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
      </div>
      <div className="mt-3 h-full">
        {currentChart == 'line_chart' ? (
          <LineChart
            timeframe={timeframe}
            startDate={startDate}
            endDate={endDate}
            chartData={chartData}
          />
        ) : currentChart == 'candlestick' ? (
          <CandlestickChart chartData={chartData} />
        ) : (
          ''
        )}
      </div>
    </div>
  )
}

export default ChartsWrapper
