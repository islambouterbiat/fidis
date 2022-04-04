import Chart from 'react-apexcharts'

const CandleStick = () => {
  const options = {}
  const series = [
    {
      data: [
        {
          x: new Date('2016, 01, 01'),
          y: [51.98, 56.29, 51.59, 53.85],
        },
        {
          x: new Date('2016, 02, 01'),
          y: [53.66, 54.99, 51.35, 52.95],
        },
        {
          x: new Date('2016, 08, 01'),
          y: [52.76, 57.35, 52.15, 57.03],
        },
        {
          x: new Date('2016, 09, 01'),
          y: [52.76, 57.35, 52.15, 57.03],
        },
        {
          x: new Date('2016, 10, 01'),
          y: [52.76, 57.35, 52.15, 57.03],
        },
        {
          x: new Date('2016, 11, 01'),
          y: [52.76, 57.35, 52.15, 57.03],
        },
        {
          x: new Date('2016, 12, 01'),
          y: [52.76, 57.35, 52.15, 57.03],
        },
      ],
    },
  ]
  return (
    <div className="relative top-10">
      <Chart options={options} series={series} type="candlestick" />
    </div>
  )
}

export default CandleStick
