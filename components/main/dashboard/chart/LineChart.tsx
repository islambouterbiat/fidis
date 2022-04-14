import React, { useState, useEffect } from 'react'
import { Chart } from 'react-google-charts'

const LineChart = ({ startDate, endDate, chartData }) => {
  // line chart data
  const mappedChartData = chartData.map((data) => {
    const newDataObject = [data[0], data[3]]
    return newDataObject
  })
  const data = [['date', ''], ...mappedChartData]

  // line chart options
  const options = {
    chartArea: { left: 50, top: 25, width: '90%', height: '80%' },
    lineWidth: 3,
    legend: 'none',
    animation: {
      easing: 'in',
      duration: 600,
      startup: true,
    },
    colors: ['#c084fc', 'other color here'], // specify the color of lines by order
    hAxis: {
      viewWindow: {
        min: new Date(startDate),
        max: new Date(endDate),
      },
      gridlines: { color: 'transparent' },
      minorGridlines: { color: 'transparent' },
      textStyle: { color: '#f09d01' },
      baselineColor: { color: '#f09d01' },
    },
    vAxis: {
      gridlines: { count: 1, color: '#f09d01' },
      minorGridlines: { color: '#f09d01' },
      baselineColor: { color: '#f09d01' },
      textStyle: { color: '#f09d01' },
    },
    explorer: { axis: 'horizontal', keepInBounds: true, zoomDelta: 0.75 }, //scroll and zoom In/Out
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
    resize_ob.observe(document.querySelector('#line_chart'))
    return () => {
      resize_ob.unobserve(document.querySelector('#line_chart'))
    }
  }, [size.width])

  return (
    // <Line options={line_chart_options} data={line_chart_data} />
    <div id="line_chart" className="h-full">
      <Chart
        chartType="LineChart"
        width="100%"
        height="100%"
        data={data}
        options={options}
      />
    </div>
  )
}

export default LineChart

//* old chart.js line chart
// const line_chart_options: any = {
//   responsive: true,
//   maintainAspectRatio: false,
//   // aspectRation: 3,
//   plugins: {
//     legend: {
//       position: 'top' as const,
//       align: 'end',
//     },
//     //   title: {
//     //     display: true,
//     //     text: 'Chart.js Line Chart',
//     //   },
//   },
//   interaction: {
//     intersect: false,
//   },
//   scales: {
//     x: {
//       // parsing:false we will use this when we get timestamps from api for better performance
//       type: 'time',
//       time: {
//         unit: timeframe,
//       },
//       min: startDate,
//       max: endDate,
//     },
//     // y: {
//     //   max: 200,
//     // },
//   },
//   elements: {
//     point: {
//       radius: 1,
//     },
//   },
// }

// const line_chart_data = {
//   // labels: chartData.map((coin) => {
//   //   let date = new Date(coin.date)
//   //   let time =
//   //     date.getHours() > 12
//   //       ? `${date.getHours() - 12}:${date.getMinutes()} PM`
//   //       : `${date.getHours()}:${date.getMinutes()} AM`
//   //   return days === 1 ? time : date.toLocaleDateString()
//   // }),
//   datasets: [
//     {
//       // tension: 0.3,
//       label: 'FI25',
//       data: chartData.map((data) => {
//         const newDataObject = { x: data[0], y: data[3] }
//         return newDataObject
//       }),
//       // borderWidth: 4,
//       borderColor: 'rgb(238,130,238)',
//       backgroundColor: 'rgba(238,130,238, 0.5)',
//     },
//     // {
//     //   // tension: 0.3,
//     //   label: 'FI10',
//     //   data: [
//     //     { x: '2022-03-12T13:00:00', y: 100 },
//     //     { x: '2022-03-23T14:00:00', y: 80 },
//     //     { x: '2022-04-12T03:00:00', y: 70 },
//     //     { x: '2022-04-28T18:00:00', y: 10 },
//     //     { x: '2022-05-12T19:00:00', y: 20 },
//     //     { x: '2022-06-12T10:00:00', y: 70 },
//     //     { x: '2022-07-12T13:00:00', y: 50 },
//     //     { x: '2022-08-23T14:00:00', y: 29 },
//     //     { x: '2022-09-12T03:00:00', y: 38 },
//     //     { x: '2022-10-28T18:00:00', y: 200 },
//     //     { x: '2022-11-12T19:00:00', y: 160 },
//     //     { x: '2022-12-12T10:00:00', y: 40 },
//     //   ],
//     //   borderColor: 'rgb(55, 125, 255)',
//     //   backgroundColor: 'rgba(55, 125, 255, 0.5)',
//     // },
//     // {
//     //   // tension: 0.3,
//     //   label: 'MetaFI',
//     //   data: [
//     //     { x: '2022-03-12T13:00:00', y: 200 },
//     //     { x: '2022-03-23T14:00:00', y: 80 },
//     //     { x: '2022-04-12T03:00:00', y: 100 },
//     //     { x: '2022-04-28T18:00:00', y: 30 },
//     //     { x: '2022-05-12T19:00:00', y: 20 },
//     //     { x: '2022-06-12T10:00:00', y: 10 },
//     //   ],
//     //   borderColor: 'rgb(240, 157, 1)',
//     //   backgroundColor: 'rgba(240, 157, 1, 0.5)',
//     // },
//   ],
// }
