import React from 'react'

const MarketCap = () => {
  return (
    <div className='rounded bg-black/30 py-2 px-3 w-[30rem]'>
        <nav className='flex justify-between items-center py-2'>
            <h1 className='text-xl font-medium'>Market Cap</h1>
            <div className='flex gap-3'>
                <button className='py-1 px-2 text-sm text-orange-FIDIS border border-orange-FIDIS rounded-lg text-center'>Transfer</button>
                <button className='py-1 px-2 text-sm text-orange-FIDIS border border-orange-FIDIS rounded-lg text-center'>Request</button>
            </div>
        </nav>
        <table className="market-cap-table text-left w-full">
            <thead className='whitespace-nowrap text-xs text-gray-300/30'>
                <tr className="py-1 border-y border-gray-300/30">
                    <th>Token Name</th>
                    <th className='text-[#00FF38]'>Balance</th>
                    <th>Latest Chart</th>
                    <th>Change</th>
                    <th>ROI</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>FI25</td>
                    <td>2000</td>
                    <td>2000</td>
                    <td>2000</td>
                    <td>2000</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default MarketCap

// Daily Scrum:
// 1) i've fixed some issues in repository, updated folder structure (components structure), finished navbar design (static), started working on market cap table
// 2) for today im going to finish all dashboard page (static) + start working on popups
// 3) there is no problem 