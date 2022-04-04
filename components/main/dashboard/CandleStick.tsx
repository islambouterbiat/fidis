import moment from 'moment'
import dynamic from 'next/dynamic'
const ApexCharts = dynamic(() => import('react-apexcharts'), { ssr: false })

const CandleStick = () => {
  const options = {
    chart: {
      foreColor: '#fff',
    },
  }
  const series = [
    {
      data: [
        {
          x: moment(new Date('2021- 01- 01')).format('MMM Do YY'),
          y: [51.98, 56.29, 51.59, 53.85],
        },
        {
          x: moment(new Date('2021- 02- 01')).format('MMM Do YY'),
          y: [53.66, 54.99, 51.35, 52.95],
        },
        {
          x: moment(new Date('2021- 03- 21')).format('MMM Do YY'),
          y: [52.95, 57.35, 52.15, 57.03],
        },
        {
          x: moment(new Date('2021- 05- 15')).format('MMM Do YY'),
          y: [57.03, 57.35, 52.15, 52.03],
        },
        {
          x: moment(new Date('2021- 06- 13')).format('MMM Do YY'),
          y: [52.03, 57.35, 52.15, 53.03],
        },
        {
          x: moment(new Date('2021- 08- 05')).format('MMM Do YY'),
          y: [53.03, 57.35, 52.15, 52.5],
        },
        {
          x: moment(new Date('2021- 11- 01')).format('MMM Do YY'),
          y: [52.5, 57.35, 52.15, 52.76],
        },
      ],
    },
  ]
  return (
    <div className="relative top-10">
      <ApexCharts
        options={options}
        series={series}
        type="candlestick"
        height="200"
      />
    </div>
  )
}

export default CandleStick
