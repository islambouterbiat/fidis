import React, { useEffect } from 'react'
import { Chart } from 'react-google-charts'

const CandlestickChart = ({ chartData }) => {
  //* candlestick chart data
  const khra = chartData.map((data) => data)
  // chartData.unshift(['date', '', '', '', ''])
  const data = [['date', '', '', '', ''], ...khra]
  console.log(data)

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
      scaleType: 'linear',
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
    tootltip: { textStyle: { color: '#fff' }, showColorCode: false },
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
