import React, { useState, useEffect } from 'react'
import LineChart from './LineChart'
import CandlestickChart from './CandlestickChart'
import { MdOutlineStackedLineChart } from 'react-icons/md'
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
        {/* chart type buttons */}
        <div className="z-40 flex items-center gap-2">
          <button
            className={`border-2 border-orange-FIDIS px-2 xxl:border-4
              ${
                currentChart == 'line_chart'
                  ? 'bg-orange-FIDIS'
                  : 'bg-transaprent'
              }
            `}
            onClick={() => setCurrentChart('line_chart')}
          >
            <MdOutlineStackedLineChart
              color={currentChart == 'line_chart' ? 'white' : '#f09d01'}
              className="h-5 w-5 xxl:h-12 xxl:w-12"
            />
          </button>
          <button
            className={`border-2 border-orange-FIDIS px-2 xxl:border-4
              ${
                currentChart == 'candlestick'
                  ? 'bg-orange-FIDIS'
                  : 'bg-transaprent'
              }
            `}
            onClick={() => setCurrentChart('candlestick')}
          >
            <MdOutlineWaterfallChart
              color={currentChart == 'candlestick' ? 'white' : '#f09d01'}
              className="h-5 w-5 xxl:h-12 xxl:w-12"
            />
          </button>
        </div>
        {/* timeframe options */}
        <div className="z-40 flex items-center border-b-4 border-orange-FIDIS">
          {timeframeData.map((t, index) => (
            <button
              key={index}
              className={`px-2 py-1 text-center text-xs xxl:px-4 xxl:py-3  ${
                timeframe == t.name
                  ? 'bg-orange-FIDIS text-white'
                  : 'bg-transparent text-orange-FIDIS'
              }`}
              onClick={() => setTimeframe(t.name)}
            >
              {t.text}
            </button>
          ))}
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
