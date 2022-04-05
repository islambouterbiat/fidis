import { useState, useEffect } from 'react'
import { scaleTime } from 'd3-scale'
import { utcDay } from 'd3-time'
import { ChartCanvas, Chart } from 'react-stockcharts'
import { CandlestickSeries } from 'react-stockcharts/lib/series'
import { XAxis, YAxis } from 'react-stockcharts/lib/axes'
import { fitWidth } from 'react-stockcharts/lib/helper'
import { last, timeIntervalBarWidth } from 'react-stockcharts/lib/utils'

const CandlestickChart = ({ chartData }) => {
  const xAccessor = (d) => d.date
  const xExtents = [
    xAccessor(last(chartData)),
    xAccessor(chartData[chartData.length - 100]),
  ]
  return (
    <ChartCanvas
      height={300}
      // ratio={ratio}
      width={800}
      margin={{ left: 50, right: 50, top: 10, bottom: 30 }}
      type="svg"
      seriesName="MSFT"
      data={chartData}
      xAccessor={xAccessor}
      xScale={scaleTime()}
      xExtents={xExtents}
    >
      <Chart id={1} yExtents={(d) => [d.high, d.low]}>
        <XAxis axisAt="bottom" orient="bottom" ticks={6} />
        <YAxis axisAt="left" orient="left" ticks={5} />
        <CandlestickSeries width={timeIntervalBarWidth(utcDay)} />
      </Chart>
    </ChartCanvas>
  )
}
export default CandlestickChart
// CandleStickChart.propTypes = {
//   data: PropTypes.array.isRequired,
//   width: PropTypes.number.isRequired,
//   ratio: PropTypes.number.isRequired,
//   type: PropTypes.oneOf(['svg', 'hybrid']).isRequired,
// }

// CandleStickChart.defaultProps = {
//   type: 'svg',
// }
// CandleStickChart = fitWidth(CandleStickChart)
