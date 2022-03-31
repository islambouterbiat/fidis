import { Dispatch, SetStateAction } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import logo from '../../assets/images/fidis_icons/fidis_logo_text_gold_transparent.png'
import Chart_pie_icon from '../../assets/images/general_icons/Chart_pie.png'
import FI25_icon from '../../assets/images/tokens_icons/fi25.png'
import FI10_icon from '../../assets/images/tokens_icons/fi10.png'
import METAFI_icon from '../../assets/images/tokens_icons/metafi.png'
import wallet_icon from '../../assets/images/general_icons/wallet.png'
import logout_icon from '../../assets/images/general_icons/logout.png'
import profile_picture from '../../assets/images/user_icons/profile_picture.png'

const styles = {
  btnNav: 'py-[1rem] hover:text-orange-FIDIS',
  btnBottomNav: 'hover:text-orange-FIDIS',
}
const NavBar = (props: {
  isConnected: boolean
  setIsConnected: Dispatch<SetStateAction<boolean>>
}) => {
  const data = [
    { name: 'FI25', icon: FI25_icon },
    { name: 'FI10', icon: FI10_icon },
    { name: 'MetaFI', icon: METAFI_icon },
  ]

  const handleConnectWallet = () => {
    props.setIsConnected(true)
  }

  const handleDisconnectWallet = () => {
    props.setIsConnected(false)
  }
  console.log(props.isConnected)
  return (
    <nav className="grid w-64 grid-cols-1 place-content-between gap-6 py-12 text-sm font-light text-white">
      <div>
        <Image
          src={logo}
          height={82}
          width={354}
          className="object-cover"
          alt="FIDIS"
        />
        <button
          onClick={handleConnectWallet}
          className="hoverEffectContained my-4 flex h-12 w-full items-center gap-3 whitespace-nowrap rounded bg-orange-FIDIS px-2 py-1 text-[1.2rem]"
        >
          <Image src={wallet_icon} height={24} width={30} alt="" />
          {props.isConnected ? 'Buy/Sell' : 'Connect wallet'}
        </button>
        <nav className="text-[1.1rem]">
          <Link href="/">
            <a className={`${styles.btnNav} flex items-center gap-2`}>
              <svg
                width="35"
                height="35"
                viewBox="0 0 35 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clip-rule="evenodd"
                  d="M14.9771 5.11746C8.1407 5.82007 2.80821 11.5967 2.80821 18.6187C2.80821 26.1149 8.88507 32.1918 16.3813 32.1918C23.4033 32.1918 29.1799 26.8593 29.8825 20.0229H16.3813C15.6058 20.0229 14.9771 19.3942 14.9771 18.6187V5.11746ZM0 18.6187C0 9.57163 7.33414 2.2375 16.3813 2.2375C17.1567 2.2375 17.7854 2.86614 17.7854 3.64161V17.2146H31.3584C32.1339 17.2146 32.7625 17.8433 32.7625 18.6187C32.7625 27.6659 25.4284 35 16.3813 35C7.33414 35 0 27.6659 0 18.6187Z"
                  fill="#DADADA"
                />
                <path
                  fillRule="evenodd"
                  clip-rule="evenodd"
                  d="M22.9338 3.03062V12.0662H31.9694C30.9153 7.6023 27.3977 4.08469 22.9338 3.03062ZM21.994 0.012731C28.7717 0.856184 34.1438 6.22829 34.9873 13.006C35.115 14.0321 34.2645 14.8745 33.2305 14.8745H21.0616C20.5446 14.8745 20.1255 14.4554 20.1255 13.9384V1.76946C20.1255 0.735507 20.9679 -0.114954 21.994 0.012731Z"
                  fill="#DADADA"
                />
              </svg>
              Overview
            </a>
          </Link>
          <div className="flex flex-col">
            {data.map((nav, index) => (
              <Link key={index} href="/">
                <a className={`${styles.btnNav} flex items-center gap-2`}>
                  <Image
                    src={nav.icon}
                    height={30}
                    width={30}
                    alt={`${nav.name} icon`}
                  />
                  {nav.name}
                </a>
              </Link>
            ))}
          </div>
        </nav>
      </div>
      {props.isConnected && (
        <div className="text-[1.1rem]">
          <Link href="/account/1">
            <button
              className={`${styles.btnBottomNav} flex items-center gap-3 bg-transparent px-2 py-1.5`}
            >
              <div
                id="profilePicWrapper"
                className="h-[35px] w-[35px] overflow-hidden rounded-full border-2 border-normal-white-text"
              >
                <Image
                  src={profile_picture}
                  height={41}
                  width={41}
                  alt="connect wallet icon"
                  className="overflow-hidden rounded-full"
                />
              </div>
              Account
            </button>
          </Link>
          <span className="my-2 block h-[0.05rem] w-full bg-white/50"></span>
          <Link href="/">
            <button
              onClick={handleDisconnectWallet}
              className={`${styles.btnBottomNav} flex items-center gap-3 rounded-full bg-transparent px-2 py-1.5 text-[#D29E9E]`}
            >
              <div className="grid h-[30px] w-[30px] place-items-center overflow-hidden ">
                <Image
                  src={logout_icon}
                  height={40}
                  width={40}
                  alt="connect wallet icon"
                />
              </div>
              Disconnect
            </button>
          </Link>
        </div>
      )}
    </nav>
  )
}

export default NavBar

/* 
this navbar will contain the whole navbar menu: check Miro structure and Figma
*/
