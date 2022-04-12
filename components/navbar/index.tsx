import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Notification from './../constants/Notification'
import Popup from './../constants/Popup'
import { useMoralis } from 'react-moralis'
import { useRouter } from 'next/router'
import MiniNav from '../main/account/MiniNav'

import logo from '../../assets/images/fidis_icons/fidis_logo_text_gold_transparent.png'
import mini_logo from '../../assets/images/fidis_icons/fidis_logo_gold_transparent.png'
import FI25_icon from '../../assets/images/tokens_icons/fi25.png'
import GOLDFI_icon from '../../assets/images/tokens_icons/fi10.png'
import METAFI_icon from '../../assets/images/tokens_icons/metafi.png'
import wallet_icon from '../../assets/images/general_icons/wallet.png'
import logout_icon from '../../assets/images/general_icons/logout.png'

const styles = {
  btnNav: 'py-[0.8rem] hover:text-orange-FIDIS',
  btnBottomNav: 'hover:text-orange-FIDIS',
}
const NavBar = ({ profilePicture, setProfilePicture }: any) => {
  const [popupOpen, SetPopupOpen] = useState(false)
  const [miniNav, SetMiniNav] = useState(false)
  const handleMiniNav = () => {
    SetMiniNav((p) => !p)
  }
  const data = [
    { name: 'FI25', icon: FI25_icon },
    { name: 'GoldFI', icon: GOLDFI_icon },
    { name: 'MetaFI', icon: METAFI_icon },
    { name: 'NFTFI', icon: FI25_icon },
    { name: 'GameFI', icon: METAFI_icon },
    { name: 'DeFiFI', icon: GOLDFI_icon },
  ]

  // using useMoralis Hook
  const {
    user,
    authenticate,
    authError,
    login,
    logout,
    isAuthenticated,
    isAuthenticating,
    isLoggingOut,
  } = useMoralis()

  const buySellTokens = () => {
    SetPopupOpen((p) => !p)
  }

  // using router for navbar activeCLass (get page pathname and set className)
  const router = useRouter()

  useEffect(() => {
    /// update the profile picture from the default to the one in Moralis database if it exists
    if (!isAuthenticated) return
    if (user && user.attributes.profilePicture !== undefined) {
      try {
        setProfilePicture(`${user.attributes.profilePicture}`)
      } catch (error) {
        console.log(error)
      }
    }
  }, [user, isAuthenticated])
  return (
    <nav
      id="Navbar"
      className={`grid ${
        !miniNav ? 'max-w-[180px] xxl:max-w-[280px]' : 'w-[55px]'
      }  grid-cols-1 place-content-between gap-6 py-12 text-center text-sm font-light text-white transition `}
    >
      <div>
        {!miniNav ? (
          <Image
            src={logo}
            height={55}
            width={236}
            className="object-cover"
            alt="FIDIS"
          />
        ) : (
          <Image
            src={mini_logo}
            height={55}
            width={55}
            className="object-cover"
            alt="FIDIS"
          />
        )}
        <button
          disabled={isAuthenticating || isLoggingOut}
          onClick={async () =>
            isAuthenticated
              ? buySellTokens()
              : await authenticate({
                  signingMessage: 'Login to the Dashboard',
                })
          }
          className={`hoverEffectContained ${
            !miniNav ? 'w-full px-2' : 'px-[0.3rem]'
          } my-4 inline-flex h-12 items-center gap-3 whitespace-nowrap rounded bg-orange-FIDIS  py-1 text-[0.8rem] font-semibold `}
        >
          <Image src={wallet_icon} height={24} width={30} alt="" />
          {!miniNav &&
            (isAuthenticated
              ? 'Buy/Sell'
              : !isAuthenticated
              ? 'Connect MetaMask'
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
              className={`${styles.btnNav} flex items-center gap-2 ${
                router.pathname === '/'
                  ? 'bg-[#17175e99] text-orange-FIDIS'
                  : ''
              }`}
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
                  fill={router.pathname === '/' ? '#F09D01' : '#DADADA'}
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M22.9338 3.03062V12.0662H31.9694C30.9153 7.6023 27.3977 4.08469 22.9338 3.03062ZM21.994 0.012731C28.7717 0.856184 34.1438 6.22829 34.9873 13.006C35.115 14.0321 34.2645 14.8745 33.2305 14.8745H21.0616C20.5446 14.8745 20.1255 14.4554 20.1255 13.9384V1.76946C20.1255 0.735507 20.9679 -0.114954 21.994 0.012731Z"
                  fill={router.pathname === '/' ? '#F09D01' : '#DADADA'}
                />
              </svg>
              {!miniNav && 'Dashboard'}
            </a>
          </Link>
          {/* add passHref if the url contains anything other than a string */}
          <div className="tokens_scrolltype flex h-48 flex-col overflow-auto pr-2 xxl:h-full">
            {data.map((nav, index) => (
              <Link key={index} href={`/${nav.name}`}>
                <a
                  className={`${styles.btnNav} flex items-center gap-2 ${
                    router.pathname.includes(`/${nav.name}`)
                      ? 'bg-[#17175e99]   text-orange-FIDIS'
                      : ''
                  }`}
                >
                  <Image
                    src={nav.icon}
                    height={37}
                    width={37}
                    alt={`${nav.name} icon`}
                  />
                  {!miniNav && nav.name}
                </a>
              </Link>
            ))}
          </div>
        </nav>
      </div>
      <div className="text-[1.1rem]">
        <MiniNav handleMiniNav={handleMiniNav} miniNav={miniNav} />
        {isAuthenticated && (
          <>
            <Link href="/account">
              <a
                className={`${styles.btnNav} flex items-center gap-2 ${
                  router.pathname === '/account'
                    ? 'bg-[#17175e99]   text-orange-FIDIS'
                    : ''
                }`}
              >
                <div
                  id="profilePicWrapper"
                  className="h-[35px] w-[35px] overflow-hidden rounded-full border-2 border-normal-white-text"
                >
                  <Image
                    src={profilePicture}
                    height={41}
                    width={41}
                    alt="connect wallet icon"
                    className="overflow-hidden rounded-full"
                  />
                </div>
                {!miniNav && 'Account'}
              </a>
            </Link>
            <span className="mb-2 block h-[0.05rem] w-full bg-white/50"></span>
            <Link href="/">
              <button
                disabled={isAuthenticating || isLoggingOut}
                onClick={() => {
                  logout()
                  router.push('/')
                  router.reload()
                }}
                className={`${styles.btnBottomNav} ${
                  miniNav ? 'mx-auto ml-1' : ''
                } flex items-center gap-3 rounded-full bg-transparent py-1.5 text-[#D29E9E]`}
              >
                <div
                  className={` grid h-[30px] w-[30px] place-items-center overflow-hidden `}
                >
                  <Image
                    src={logout_icon}
                    height={40}
                    width={40}
                    alt="connect wallet icon"
                  />
                </div>
                {!miniNav && 'Disconnect'}
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
