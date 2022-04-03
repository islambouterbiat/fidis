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
      balance_in_dollars: 13.213,
      change: 130.4,
      change_percentage: 25.1,
    },
    {
      token_name: 'FI10',
      token_icon: FI10_icon,
      balance: 31.38,
      balance_in_dollars: 1.213,
      change: 24.51,
      change_percentage: 4,
    },
    {
      token_name: 'MetaFi',
      token_icon: METAFI_icon,
      balance: 0,
      balance_in_dollars: 0,
      change: 259.32,
      change_percentage: -3,
    },
  ]
  return (
    <div className="col-span-5 w-full rounded bg-black/30 py-2 px-3">
      <nav className="flex items-center justify-between py-2">
        <h1 className="text-xl font-medium">Market Cap</h1>
      </nav>
      <table className="market-cap-table w-full text-left">
        <thead className="whitespace-nowrap text-xs text-gray-300/30">
          <tr className="border-y border-gray-300/30 text-center">
            <th className="py-2 text-left text-sm font-light">Token Name</th>
            <th className="text-right text-sm font-medium text-green-increased-value">
              Balance
            </th>
            <th className="text-right text-sm font-light">Change</th>
          </tr>
        </thead>
        <tbody>
          {dummy_data.map((token, index) => (
            <tr key={index} className="text-right">
              <td className="flex items-center gap-2 py-3 font-bold">
                <Image
                  src={token.token_icon}
                  height={26}
                  width={26}
                  alt={`${token.token_name} icon`}
                />
                {token.token_name}
              </td>
              <td className="font-bold">
                {token.balance}
                <span className="block text-xs font-medium text-green-increased-value">
                  ≈ ${token.balance_in_dollars}
                </span>
                {/* {token.balance > 0 && (
                  <span className="block text-xs font-medium text-green-increased-value">
                    ≈ ${token.balance_in_dollars}
                  </span>
                )} */}
              </td>
              <td className="font-bold">
                $ {token.change}
                <span
                  className={`block text-xs font-medium ${
                    token.change_percentage >= 0
                      ? 'text-green-increased-value'
                      : 'text-red-decreased-value'
                  }`}
                >
                  {token.change_percentage > 0
                    ? '+' + token.change_percentage
                    : token.change_percentage}
                  %
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default MarketCap

// Daily Scrum:
// 1) Created Pie Chart + Line Chart + lot of customization + start working on popups
// 2) Have finished Dashboard and popups by the end of today
// 3) No problem.
