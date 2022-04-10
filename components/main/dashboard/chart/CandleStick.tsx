import dynamic from 'next/dynamic'
const ApexCharts = dynamic(() => import('react-apexcharts'), { ssr: false })

import { candlestickData } from '../../../../utils/candlestickChartData'

const CandleStick = () => {
  const options: any = {
    chart: {
      foreColor: '#fff',
      toolbar: { show: false },
    },
  }
  const series = [
    {
      data: candlestickData,
    },
  ]
  return (
    <div className="relative top-10 h-[15rem] xxl:h-[25rem]">
      <ApexCharts
        options={options}
        series={series}
        type="candlestick"
        height="100%"
      />
    </div>
  )
}

export default CandleStick
