import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Notification from './../constants/NationalityList'
import Popup from './../constants/Popup'

import logo from '../../assets/images/fidis_icons/fidis_logo_text_gold_transparent.png'
import mini_logo from '../../assets/images/fidis_icons/fidis_logo_gold_transparent.png'
import Chart_pie_icon from '../../assets/images/general_icons/Chart_pie.png'
import FI25_icon from '../../assets/images/tokens_icons/fi25.png'
import FI10_icon from '../../assets/images/tokens_icons/fi10.png'
import METAFI_icon from '../../assets/images/tokens_icons/metafi.png'
import wallet_icon from '../../assets/images/general_icons/wallet.png'
import logout_icon from '../../assets/images/general_icons/logout.png'
import profilePhotoDefault from '../../assets/images/user_icons/profilePhotoDefault.png'

import { useMoralis } from 'react-moralis'

const styles = {
  btnNav: 'py-[0.8rem] hover:text-orange-FIDIS',
  btnBottomNav: 'hover:text-orange-FIDIS',
}
const NavBar = () => {
  const [miniNavOpen, SetMiniNavOpen] = useState(false)
  const [popupOpen, SetPopupOpen] = useState(false)
  const data = [
    { name: 'FI25', icon: FI25_icon },
    { name: 'FI10', icon: FI10_icon },
    { name: 'MetaFI', icon: METAFI_icon },
  ]

  // using useMoralis Hook
  const {
    authenticate,
    authError,
    login,
    logout,
    isAuthenticated,
    isAuthenticating,
  } = useMoralis()

  const buySellTokens = () => {
    SetPopupOpen((p) => !p)
  }

  const handleMiniNav = () => {
    SetMiniNavOpen((p) => !p)
  }

  return (
    <nav
      className={`grid ${
        !miniNavOpen ? ' w-[200px] min-w-[200px] max-w-[200px]' : 'w-15'
      }  grid-cols-1 place-content-between gap-6 py-12 text-sm font-light text-white transition `}
    >
      <div>
        {!miniNavOpen ? (
          <Image
            src={logo}
            height={50}
            width={222}
            className="object-cover"
            alt="FIDIS"
          />
        ) : (
          <Image
            src={mini_logo}
            height={50}
            width={50}
            className="object-cover"
            alt="FIDIS"
          />
        )}
        <button
          disabled={isAuthenticating}
          onClick={async () =>
            isAuthenticated ? buySellTokens() : await authenticate()
          }
          className={`hoverEffectContained ${
            !miniNavOpen ? 'w-full px-2' : 'px-[0.3rem]'
          } my-4 flex h-12 items-center gap-3 whitespace-nowrap rounded bg-orange-FIDIS  py-1 text-[1.2rem] font-semibold`}
        >
          <Image src={wallet_icon} height={24} width={30} alt="" />
          {!miniNavOpen &&
            (isAuthenticated
              ? 'Buy/Sell'
              : !isAuthenticated
              ? 'Connect wallet'
              : isAuthenticating
              ? 'Loading...'
              : '')}
        </button>
        {authError && authError.message !== undefined && (
          <Notification text={authError.message} color="red" />
        )}

        <nav className="mt-8 text-[1.1rem]">
          <Link href="/">
            <a
              className={`${styles.btnNav} flex items-center gap-2 border-b-2`}
            >
              <svg
                width="35"
                height="35"
                viewBox="0 0 35 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14.9771 5.11746C8.1407 5.82007 2.80821 11.5967 2.80821 18.6187C2.80821 26.1149 8.88507 32.1918 16.3813 32.1918C23.4033 32.1918 29.1799 26.8593 29.8825 20.0229H16.3813C15.6058 20.0229 14.9771 19.3942 14.9771 18.6187V5.11746ZM0 18.6187C0 9.57163 7.33414 2.2375 16.3813 2.2375C17.1567 2.2375 17.7854 2.86614 17.7854 3.64161V17.2146H31.3584C32.1339 17.2146 32.7625 17.8433 32.7625 18.6187C32.7625 27.6659 25.4284 35 16.3813 35C7.33414 35 0 27.6659 0 18.6187Z"
                  fill="#DADADA"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M22.9338 3.03062V12.0662H31.9694C30.9153 7.6023 27.3977 4.08469 22.9338 3.03062ZM21.994 0.012731C28.7717 0.856184 34.1438 6.22829 34.9873 13.006C35.115 14.0321 34.2645 14.8745 33.2305 14.8745H21.0616C20.5446 14.8745 20.1255 14.4554 20.1255 13.9384V1.76946C20.1255 0.735507 20.9679 -0.114954 21.994 0.012731Z"
                  fill="#DADADA"
                />
              </svg>
              {!miniNavOpen && 'Dashboard'}
            </a>
          </Link>
          {/* add passHref if the url contains anything other than a string */}
          <div className="flex flex-col">
            {data.map((nav, index) => (
              <Link key={index} href={`/${nav.name}`}>
                <a className={`${styles.btnNav} flex items-center gap-2`}>
                  <Image
                    src={nav.icon}
                    height={30}
                    width={30}
                    alt={`${nav.name} icon`}
                  />
                  {!miniNavOpen && nav.name}
                </a>
              </Link>
            ))}
          </div>
        </nav>
      </div>

      <div className="text-[1.1rem]">
        {/* mini-nav checkbox */}
        <label
          htmlFor="mini_nav"
          className="relative mb-4 flex cursor-pointer items-center hover:scale-105"
        >
          <input
            onClick={handleMiniNav}
            type="checkbox"
            id="mini_nav"
            className="sr-only cursor-pointer"
          />
          <div className="toggle_bg h-5 w-8 cursor-pointer rounded-full border-2 border-gray-200 bg-transparent"></div>
          {!miniNavOpen && (
            <span className="ml-3 cursor-pointer text-sm font-medium">
              mini-nav
            </span>
          )}
        </label>
        {isAuthenticated && (
          <>
            <Link href="/account">
              <button
                className={`${styles.btnBottomNav} flex items-center gap-3 bg-transparent py-1.5`}
              >
                <div
                  id="profilePicWrapper"
                  className="h-[35px] w-[35px] overflow-hidden rounded-full border-2 border-normal-white-text"
                >
                  <Image
                    src={profilePhotoDefault}
                    height={41}
                    width={41}
                    alt="connect wallet icon"
                    className="overflow-hidden rounded-full"
                  />
                </div>
                {!miniNavOpen && 'Account'}
              </button>
            </Link>
            <span className="my-2 block h-[0.05rem] w-full bg-white/50"></span>
            <Link href="/">
              <button
                onClick={logout}
                className={`${styles.btnBottomNav} flex items-center gap-3 rounded-full bg-transparent py-1.5 text-[#D29E9E]`}
              >
                <div className="grid h-[30px] w-[30px] place-items-center overflow-hidden ">
                  <Image
                    src={logout_icon}
                    height={40}
                    width={40}
                    alt="connect wallet icon"
                  />
                </div>
                {!miniNavOpen && 'Disconnect'}
              </button>
            </Link>
          </>
        )}
      </div>
      {popupOpen && <Popup SetPopupOpen={SetPopupOpen} popupOpen={popupOpen} />}
    </nav>
  )
}

export default NavBar

/* 
this navbar will contain the whole navbar menu: check Miro structure and Figma
*/
