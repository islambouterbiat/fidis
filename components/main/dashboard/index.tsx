import React, { useState, useEffect } from 'react'
import MarketCap from './MarketCap'
import Distribution from './Distribution'
import Ads from './Ads'
import ChartsWrapper from './chart/ChartsWrapper'

import { getData } from './../../../utils/chartData'

const Index = () => {
  // state for charts data
  const [chartData, setChartData] = useState([])
  useEffect(() => {
    getData().then((data) => {
      setChartData(data)
    })
  }, [])
  return (
    <div className="scrolltype h-full overflow-auto pr-2">
      <div className="grid grid-cols-12 gap-4">
        <MarketCap />
        <Distribution />
        <Ads />
      </div>
      <div className="chart-wrapper grid min-h-[50%] grid-cols-1 py-6">
        <div className="col-span-1">
          <ChartsWrapper chartData={chartData} />
        </div>
      </div>
    </div>
  )
}

export default Index
