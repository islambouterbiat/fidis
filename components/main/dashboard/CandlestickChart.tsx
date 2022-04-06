import PropTypes from 'prop-types'
import { scaleTime } from 'd3-scale'
import { timeFormat } from 'd3-time-format'
import { format } from 'd3-format'
import { utcDay } from 'd3-time'
import { ChartCanvas, Chart } from 'react-stockcharts'
import { CandlestickSeries } from 'react-stockcharts/lib/series'
import { XAxis, YAxis } from 'react-stockcharts/lib/axes'
import { HoverTooltip } from 'react-stockcharts/lib/tooltip'
import { fitWidth } from 'react-stockcharts/lib/helper'
import { last, timeIntervalBarWidth } from 'react-stockcharts/lib/utils'

const dateFormat = timeFormat('%Y-%m-%d')
const numberFormat = format('.2f')

function tooltipContent(ys) {
  return ({ currentItem, xAccessor }) => {
    return {
      x: dateFormat(xAccessor(currentItem)),
      y: [
        {
          label: 'open',
          value: currentItem.open && numberFormat(currentItem.open),
        },
        {
          label: 'high',
          value: currentItem.high && numberFormat(currentItem.high),
        },
        {
          label: 'low',
          value: currentItem.low && numberFormat(currentItem.low),
        },
        {
          label: 'close',
          value: currentItem.close && numberFormat(currentItem.close),
        },
      ]
        .concat(
          ys.map((each) => ({
            label: each.label,
            value: each.value(currentItem),
            stroke: each.stroke,
          }))
        )
        .filter((line) => line.value),
    }
  }
}

const keyValues = ['high', 'low']

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
        {/* <HoverTooltip yAccessor={chartData.accessor()} fontSize={15} /> */}
      </Chart>
    </ChartCanvas>
  )
}
export default CandlestickChart
