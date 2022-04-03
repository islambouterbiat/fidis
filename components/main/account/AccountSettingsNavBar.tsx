import React from 'react'
import Image from 'next/image'

import profile_picture from '../../../assets/images/user_icons/profile_picture.png'

const AccountSettingsNavBar = ({ accountType, setAccountType }) => {
  const getClickedButton = (e) => {
    setAccountType(e.target.innerText)
  }
  return (
    <nav className="mb-2 flex items-start justify-between">
      <div className="mt-10 flex items-center gap-10">
        <h1 className="text-xl">Account Details</h1>
        <div>
          <button
            onClick={(e) => getClickedButton(e)}
            className={`border border-orange-FIDIS ${
              accountType == 'Personal' ? 'bg-orange-FIDIS' : 'bg-transparent'
            } px-4 py-1 text-sm font-medium`}
          >
            Personal
          </button>
          <button
            onClick={(e) => getClickedButton(e)}
            className={`border border-orange-FIDIS  ${
              accountType == 'Business' ? 'bg-orange-FIDIS' : 'bg-transparent'
            } px-4 py-1 text-sm font-medium`}
          >
            Business
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-2 text-center">
        <Image
          src={profile_picture}
          height={120}
          width={120}
          className="rounded-full"
          alt="profile picture"
        />
        <button className="rounded-lg bg-input-background px-3 py-1 text-sm text-gray-500">
          update
        </button>
      </div>
    </nav>
  )
}

export default AccountSettingsNavBar
