import React from 'react'
import Image from 'next/image'

import FI25_icon from '../../../assets/images/tokens_icons/fi25.png'
import FI10_icon from '../../../assets/images/tokens_icons/fi10.png'
import METAFI_icon from '../../../assets/images/tokens_icons/metafi.png'

const styles = {
  outlined_button:
    'py-1 px-2 text-sm text-orange-FIDIS border border-orange-FIDIS rounded-lg text-center',
}

const MarketCap = () => {
  const dummy_data = [
    {
      token_name: 'FI25',
      token_icon: FI25_icon,
      balance: 218.3,
      change: 130.4,
    },
    {
      token_name: 'FI10',
      token_icon: FI10_icon,
      balance: 31.38,
      change: 24.51,
    },
    {
      token_name: 'MetaFi',
      token_icon: METAFI_icon,
      balance: 0,
      change: 259.32,
    },
  ]
  return (
    <div className="col-span-5 w-full rounded bg-black/30 py-2 px-3">
      <nav className="flex items-center justify-between py-2">
        <h1 className="text-xl font-medium">Market Cap</h1>
        <div className="flex gap-3">
          <button className={styles.outlined_button}>Transfer</button>
          <button className={styles.outlined_button}>Request</button>
        </div>
      </nav>
      <table className="market-cap-table w-full text-left">
        <thead className="whitespace-nowrap text-xs text-gray-300/30">
          <tr className="border-y border-gray-300/30 text-center ">
            <th className="py-2">Token Name</th>
            <th className="text-[#00FF38]">Balance</th>
            <th>Change</th>
          </tr>
        </thead>
        <tbody className="">
          {dummy_data.map((token, index) => (
            <tr key={index} className="text-right">
              <td className="flex items-center gap-2 py-3">
                <Image
                  src={token.token_icon}
                  height={26}
                  width={26}
                  alt={`${token.token_name} icon`}
                />
                {token.token_name}
              </td>
              <td>{token.balance}</td>
              <td>$ {token.change}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default MarketCap
