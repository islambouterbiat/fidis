import React, { useEffect, useState } from 'react'
import { Chart } from 'react-google-charts'

const CandlestickChart = ({ chartData, startDate, endDate }) => {
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

  //* rerenders when size changes (in order to chart fits automatically place when mininav clicked)

  const [size, setSize] = useState({
    width: undefined,
    height: undefined,
  })
  useEffect(() => {
    const resize_ob = new ResizeObserver(function (entries) {
      // since we are observing only a single element, so we access the first element in entries array
      let rect = entries[0].contentRect

      // current width & height
      let width = rect.width
      let height = rect.height
      setSize({ width, height })

      console.log('Current Width : ' + width)
      console.log('Current Height : ' + height)
    })

    // start observing for resize
    resize_ob.observe(document.querySelector('#candlestick'))
    return () => {
      resize_ob.unobserve(document.querySelector('#candlestick'))
    }
  }, [size.width])

  return (
    <div id="candlestick" className="h-full">
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
