import Link from 'next/link'
import Head from 'next/head'
import { useState, useEffect, useRef } from 'react'

const styles = {
  buy_sell_buttons:
    'border-b w-full border-orange-FIDIS px-12 py-3 text-2xl font-bold ',
  popup_input:
    'border w-full border-orange-FIDIS py-3 px-4 text-xl text-white/50 ',
  popup_token_select:
    'mr-4 w-[90px] border-none rounded-r font-bold text-2xl text-center w-full text-orange-FIDIS pt-[10px] pb-[11px] px-2 popup_token_select hover:scale-105',
  select_container: 'border-2 rounded border-orange-FIDIS ',
}

const Popup = ({ SetPopupOpen, popupOpen }) => {
  const [popupAction, setPopupAction] = useState('Buy')
  const [tokenAmountInput, setTokenAmountInput] = useState('1')
  const ref: any = useRef()
  useEffect(() => {
    const checkIfClickedOutside = (e: any) => {
      // If the popup is open and the clicked target is not within the popup,
      // then close the popup
      if (popupOpen && ref.current && !ref.current.contains(e.target)) {
        SetPopupOpen(false)
      }
    }
    document.addEventListener('mousedown', checkIfClickedOutside)

    return () => {
      // Cleanup the event listener
      document.removeEventListener('mousedown', checkIfClickedOutside)
    }
  }, [popupOpen])

  const dollarsAmount = Number(tokenAmountInput) * 50
  const ethAmount = Number(tokenAmountInput) * 2
  return (
    <div
      className="fixed inset-0 z-10 overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="flex min-h-screen items-end justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        {/* <!--
      Background overlay, show/hide based on modal state.

      Entering: "ease-out duration-300"
        From: "opacity-0"
        To: "opacity-100"
      Leaving: "ease-in duration-200"
        From: "opacity-100"
        To: "opacity-0"
    --> */}
        <div
          className="fixed inset-0 bg-black bg-opacity-60 transition-opacity"
          aria-hidden="true"
        ></div>

        {/* <!-- This element is to trick the browser into centering the modal contents. --> */}
        <span
          className="hidden sm:inline-block sm:h-screen sm:align-middle"
          aria-hidden="true"
        >
          &#8203;
        </span>

        {/* <!--
      Modal panel, show/hide based on modal state.

      Entering: "ease-out duration-300"
        From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        To: "opacity-100 translate-y-0 sm:scale-100"
      Leaving: "ease-in duration-200"
        From: "opacity-100 translate-y-0 sm:scale-100"
        To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
    --> */}
        <div
          ref={ref}
          className="popup relative inline-block w-[22rem] transform overflow-hidden rounded-lg bg-black text-left align-bottom shadow-xl transition-all sm:my-8 sm:align-middle"
        >
          <div className="bg-black pb-4 shadow-lg shadow-black">
            <div className="flex w-full">
              {['Buy', 'sell'].map((btn, index) => (
                <button
                  key={index}
                  className={`
                    ${styles.buy_sell_buttons} + ${
                    popupAction == btn ? 'bg-orange-FIDIS' : 'bg-transparent'
                  }
                  `}
                  onClick={() => setPopupAction(btn)}
                >
                  {btn}
                </button>
              ))}
              {/* <button className={styles.buy_sell_buttons + 'bg-orange-FIDIS'} onclick={()=>setPopupAction('Buy')}>
                Buy
              </button>
              <button className={styles.buy_sell_buttons + 'bg-transparent'} onclick={()=>setPopupAction('Sell')>
                Sell
              </button> */}
            </div>
            <div className="flex flex-col gap-6 px-7 py-4">
              <div
                className={`${styles.select_container} mt-3 flex items-center`}
              >
                <input
                  value={tokenAmountInput}
                  onChange={(e) => setTokenAmountInput(e.target.value)}
                  type="text"
                  name="token_amount"
                  id="token_amount"
                  className="w-full rounded-l py-3 px-4 text-xl text-white/50"
                />
                <select
                  name="token_type"
                  id="token_type"
                  className={styles.popup_token_select}
                >
                  <option value="FI25">FI25</option>
                  <option value="FI10">FI10</option>
                  <option value="MetaFi">MetaFi</option>
                </select>
              </div>
              <div className="relative flex">
                <input
                  type="select"
                  name="dollars_amount"
                  id="dollars_amount"
                  value={dollarsAmount}
                  className={styles.popup_input + 'dollar_input rounded-l'}
                />
                <span className="absolute top-3 left-32 text-lg text-orange-FIDIS">
                  $
                </span>
                <input
                  type="select"
                  name="eth_amount"
                  id="eth_amount"
                  value={ethAmount}
                  className={styles.popup_input + 'rounded-r'}
                />
                <span className="absolute top-3 right-2 text-lg text-orange-FIDIS">
                  eth
                </span>
              </div>
              <button
                className={
                  styles.buy_sell_buttons + 'mt-3 rounded bg-orange-FIDIS'
                }
              >
                {popupAction == 'Buy' ? 'Buy' : 'Sell'} Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Popup

/* 
popup with background 60% black transparent, 
and black body and shadow (see figma), 
this popup will be used through the whole website
*/
