import React from 'react'

const styles={
    outlined_button:'py-1 px-2 text-sm text-orange-FIDIS border border-orange-FIDIS rounded-lg text-center'
}

const MarketCap = () => {
  return (
    <div className='rounded bg-black/30 py-2 px-3 w-[30rem]'>
        <nav className='flex justify-between items-center py-2'>
            <h1 className='text-xl font-medium'>Market Cap</h1>
            <div className='flex gap-3'>
                <button className={styles.outlined_button}>Transfer</button>
                <button className={styles.outlined_button}>Request</button>
            </div>
        </nav>
        <table className="market-cap-table text-left w-full">
            <thead className='whitespace-nowrap text-xs text-gray-300/30'>
                <tr className="border-y border-gray-300/30">
                    <th className='py-2'>Token Name</th>
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

