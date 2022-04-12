import moment from 'moment'
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  HiloOpenCloseSeries,
  Category,
  Tooltip,
  DateTime,
  Zoom,
  Logarithmic,
  Crosshair,
} from '@syncfusion/ej2-react-charts'

const OhlcChart = ({ chartData, startDate, endDate }) => {
  const data = chartData.map((data) => {
    const newDataObject = {
      close: data[4],
      high: data[3],
      low: data[1],
      open: data[2],
      x: data[0],
    }
    return newDataObject
  })
  return (
    <ChartComponent
      zoomSettings={{
        enableSelectionZooming: false,
        enableMouseWheelZooming: true,
        mode: 'X',
        enableScrollbar: true,
        enablePan: true,
      }}
      background="rgb(0 0 0 / 0.3)"
      id="charts"
      style={{ textAlign: 'center' }}
      //   ref={(chart) => (this.chart1 = chart)}
      primaryXAxis={{
        valueType: 'DateTime',
        crosshairTooltip: { enable: true },
        majorGridLines: { width: 0 },
        lineStyle: { color: '#f09d01' },
        labelStyle: { color: '#f09d01' },
        minimum: moment(startDate).format(),
        maximum: moment(endDate).format(),
      }}
      primaryYAxis={{
        labelFormat: 'n0',
        rangePadding: 'None',
        lineStyle: { width: 0 },
        majorTickLines: { width: 0 },
        majorGridLines: { width: 0 },
        labelStyle: { color: '#f09d01' },
      }}
      chartArea={{ border: { width: 0 } }}
      tooltip={{
        enable: true,
        shared: true,
      }}
      height={'60%'}
      width={'100%'}
      legendSettings={{ visible: false }}
      crosshair={{
        enable: true,
        lineType: 'Vertical',
        line: { width: 0 },
      }}
    >
      <Inject
        services={[
          HiloOpenCloseSeries,
          Category,
          Tooltip,
          DateTime,
          Zoom,
          Logarithmic,
          Crosshair,
        ]}
      />
      <SeriesCollectionDirective>
        <SeriesDirective
          type="HiloOpenClose"
          dataSource={data}
          animation={{ enable: true }}
          bearFillColor="#2ecd71"
          bullFillColor="#e74c3d"
          xName="x"
          low="low"
          high="high"
          open="open"
          close="close"
          name="Token"
        ></SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>
  )
}

export default OhlcChart
