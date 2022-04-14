import React, { useRef } from 'react'
import { Chart } from 'react-google-charts'
import useSize from '../../../../hooks/useSize'

const CandlestickChart = ({ chartData, startDate, endDate }) => {
  console.log(chartData)
  //* candlestick chart data
  const mappedChartData = chartData.map((data) => data)
  const data = [['date', '', '', '', ''], ...mappedChartData]

  // candlstick chart options
  const options = {
    legend: 'none',
    chartArea: { left: 50, top: 25, width: '90%', height: '80%' },
    bar: { groupWidth: '90%' }, // Remove space between bars.
    candlestick: {
      hollowIsRising: true,
      fallingColor: { strokeWidth: 0, fill: '#EB2824' }, // red
      risingColor: { strokeWidth: 0, fill: '#199E5D' }, // green
    },
    series: {
      fallingColor: { fill: '#EB4824' },
      0: { color: '#199E5D' },
    },
    animation: {
      easing: 'in',
      duration: 300,
      startup: true,
    },
    hAxis: {
      // scaleType: 'linear',
      // slantedText: true,
      viewWindow: {
        min: new Date(startDate),
        max: new Date(endDate),
      },
      gridlines: { color: 'transparent' },
      minorGridlines: { color: 'transparent' },
      textStyle: { color: '#f09d01' },
      baselineColor: { color: '#f09d01' },
      // format: chartInterval < 288 ? 'hh:mm' : 'MMM d, YY',
    },
    vAxis: {
      gridlines: { count: 1, color: '#f09d01' },
      minorGridlines: { color: 'transparent' },
      baselineColor: { color: '#f09d01' },
      textStyle: { color: '#f09d01' },
    },
    explorer: { axis: 'horizontal', keepInBounds: true, zoomDelta: 0.75 },
  }

  //* rerenders when size changes (in order to chart fits automatically place when mininav clicked) using custopm hook
  const target = useRef(null)
  useSize(target)

  return (
    <div ref={target} className="h-full">
      <Chart
        chartType="CandlestickChart"
        width="100%"
        height="100%"
        data={data}
        options={options}
      />
    </div>
  )
}

export default CandlestickChart
