import 'chartjs-adapter-luxon'
import { DateTime } from 'luxon'
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  TimeScale,
  PointElement,
  LineElement,
  Title,
} from 'chart.js'

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale
)

const CandleStick = () => {
  //   const ctx = document.getElementById('myChart')
  const date01 = DateTime.fromRFC2822('04 Apr 2022 00:00 GMT')
  const date02 = DateTime.fromRFC2822('05 Apr 2022 00:00 GMT')
  const date03 = DateTime.fromRFC2822('06 Apr 2022 00:00 GMT')
  const date04 = DateTime.fromRFC2822('07 Apr 2022 00:00 GMT')
  const data = {
    datasets: [
      {
        data: [
          {
            x: date01.valueOf(),
            o: 1, //opening
            h: 1.5, //heighest point
            l: 0.75, //lowest point
            c: 1.25, //closing
          },
          {
            x: date02.valueOf(),
            o: 1, //opening
            h: 1.5, //heighest point
            l: 0.75, //lowest point
            c: 1.25, //closing
          },
          {
            x: date03.valueOf(),
            o: 1, //opening
            h: 1.5, //heighest point
            l: 0.75, //lowest point
            c: 1.25, //closing
          },
          {
            x: date04.valueOf(),
            o: 1, //opening
            h: 1.5, //heighest point
            l: 0.75, //lowest point
            c: 1.25, //closing
          },
        ],
      },
    ],
  }
  const config = {
    type: 'candlestick',
    data: data,
    options: {},
  }
  const myChart = new ChartJS('myChart', config)
  return <div>{myChart}</div>
}

export default CandleStick
