import React from 'react'
import { Chart } from 'react-google-charts'

const CandlestickChart = ({ chartData }) => {
  // candlestick chart data
  const candlestickData = chartData.slice(0, 10).map((data) => {
    const newDataObject = [
      data.date,
      data.low,
      data.open,
      data.close,
      data.high,
    ]
    return newDataObject
  })
  candlestickData.unshift(['date', '', '', '', ''])
  console.log(candlestickData)
  // while (candlestickData.length > 0) {
  //   const khra = candlestickData.splice(0, 3)
  //   // console.log(khra[0][1])
  //   const newArr = [
  //     khra[0][0],
  //     khra[0][1],
  //     khra[0][2],
  //     khra[khra.length - 1][3],
  //     khra[khra.length - 1][4],
  //   ]
  //   console.log(newArr)
  //   // console.log(khra)
  // }
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
      data={candlestickData}
      options={options}
    />
  )
}

export default CandlestickChart
