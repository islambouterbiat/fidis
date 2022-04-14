import React, { useState, useEffect } from 'react'
import LineChart from './LineChart'
import CandlestickChart from './CandlestickChart'
import OhlcChart from '../OhlcChart'

import moment from 'moment'

import { getData } from '../../../../utils/chartData'
import ChartCustomization from './ChartCustomization'

const ChartsWrapper = ({ chartData }) => {
  const [chartInterval, setChartInterval] = useState(1)
  // state for showing current type of charts
  const [currentChart, setCurrentChart] = useState('line_chart')
  // state for start & end chart date values
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')

  useEffect(() => {
    chartData.length == 0
      ? ''
      : setStartDate(
          moment(
            chartData[chartData.length - 1].date.getTime() -
              24 * 60 * 60 * 1000 * 365
          ).format('YYYY-MM-DDThh:mm')
        )
    chartData.length == 0
      ? ''
      : setEndDate(
          moment(chartData[chartData.length - 1].date).format(
            'YYYY-MM-DDThh:mm'
          )
        )
  }, [chartData])
  console.log(chartData)

  //give data an ohlc structure
  const ohlcData = chartData.map((data) => {
    const newDataObject = [
      data.date,
      data.low,
      data.open,
      data.close,
      data.high,
    ]
    return newDataObject
  })

  let finalData = []
  while (ohlcData.length > 0) {
    const intervalArray = ohlcData.splice(0, chartInterval)

    const newArr = [
      intervalArray[0][0],
      intervalArray[0][1],
      intervalArray[0][2],
      intervalArray[intervalArray.length - 1][3],
      intervalArray[intervalArray.length - 1][4],
    ]
    finalData.push(newArr)
  }

  return (
    <div className="relative col-span-9 flex h-full w-full flex-col bg-black/30">
      <ChartCustomization
        currentChart={currentChart}
        setCurrentChart={setCurrentChart}
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
        chartInterval={chartInterval}
        setChartInterval={setChartInterval}
      />

      {/* charts */}
      <div className="h-full w-full">
        {currentChart == 'line_chart' ? (
          <LineChart
            startDate={startDate}
            endDate={endDate}
            chartData={finalData}
          />
        ) : currentChart == 'candlestick' ? (
          <CandlestickChart
            chartData={finalData}
            startDate={startDate}
            endDate={endDate}
          />
        ) : currentChart == 'ohlc' ? (
          'Under Dev'
        ) : (
          // <OhlcChart
          //   chartData={finalData}
          //   startDate={startDate}
          //   endDate={endDate}
          // />
          ''
        )}
      </div>
    </div>
  )
}

export default ChartsWrapper
