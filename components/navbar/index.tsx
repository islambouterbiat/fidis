import Image from "next/image"
import logo from "../../assets/images/FIDIS_logo.png"
import Link from 'next/link';

import overview_icon from "../../assets/images/overview_icon.png"
import FI25 from "../../assets/images/fi25_icon.png"
import FI10 from "../../assets/images/fi10_icon.png"
import METAFI from "../../assets/images/metafi_icon.png"
import connect_wallet_icon from "../../assets/images/connect_wallet_icon.png"
import buy_and_sell_icon from "../../assets/images/buy_and_sell_icon.png"

const NavBar = () => {
  const data = [
      {name:"FI25",icon:FI25},
      {name:"FI10",icon:FI10},
      {name:"MetaFI",icon:METAFI},
  ]
  return (
    <nav className="text-white font-light text-sm">
        <Image src={logo} height={30} width={125} className='object-cover' alt='FIDIS Logo'/>
        <button className="bg-orange-FIDIS rounded my-4 pl-1.5 pr-4 py-1.5 flex items-center gap-3 font-medium">
            <Image src={buy_and_sell_icon} height={20} width={23} alt="buy and sell icon"/>
            Buy/Sell
        </button>
        <nav>
            <Link href="/">
                <a className="flex items-center gap-2 my-6">
                    <Image src={overview_icon} height={35} width={35} alt="overview icon"/>
                    Overview
                </a>
            </Link>
            <div className="flex flex-col gap-4">
                {data.map((nav,index)=>(
                    <Link key={index} href="/">
                        <a className="flex items-center gap-2">
                            <Image src={nav.icon} height={30} width={30} alt={`${nav.name} icon`} />
                            {nav.name}
                        </a>
                    </Link>
                ))}
            </div>
        </nav>
        <button className="bg-orange-FIDIS rounded-full my-4 px-2 py-1.5 flex items-center gap-3 font-medium">
            <Image src={connect_wallet_icon} height={20} width={20} alt="connect wallet icon"/>
            Connect wallet
        </button>
    </nav>
  )
}

export default NavBar

/* 
this navbar will contain the whole navbar menu: check Miro structure and Figma
*/
