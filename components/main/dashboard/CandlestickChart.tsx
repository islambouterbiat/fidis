import React, { useEffect } from 'react'
import { Chart } from 'react-google-charts'

const CandlestickChart = ({ chartData, startDate, endDate }) => {
  //* candlestick chart data
  const mappedChartData = chartData.map((data) => data)
  // chartData.unshift(['date', '', '', '', ''])
  const data = [['date', '', '', '', ''], ...mappedChartData]

  // candlstick chart options
  const options = {
    legend: 'none',
    bar: { groupWidth: '100%' }, // Remove space between bars.
    candlestick: {
      fallingColor: { strokeWidth: 0, fill: '#EB2824', stroke: '#FF4E4E' }, // red
      risingColor: { strokeWidth: 0, fill: '#199E5D' }, // green
    },
    animation: {
      easing: 'in',
      duration: 300,
      startup: true,
    },
    hAxis: {
      // scaleType: 'linear',
      viewWindow: {
        min: startDate ? new Date(startDate) : new Date(data[1][0]),
        max: endDate ? new Date(endDate) : new Date(data[data.length - 1][0]),
      },
      gridlines: { color: '#f09d01' },
      minorGridlines: { color: '#f09d01' },
      textStyle: { color: '#f09d01' },
      baselineColor: { color: '#f09d01' },
    },
    vAxis: {
      gridlines: { color: '#f09d01' },
      minorGridlines: { color: '#f09d01' },
      baselineColor: { color: '#f09d01' },
      textStyle: { color: '#f09d01' },
    },
    explorer: { axis: 'horizontal', keepInBounds: true },
  }
  return (
    <Chart
      chartType="CandlestickChart"
      width="100%"
      height="100%"
      data={data}
      options={options}
    />
  )
}

export default CandlestickChart
