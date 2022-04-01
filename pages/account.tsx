import { useState } from 'react'
import Image from 'next/image'
import React from 'react'
import AccountSettingsNavBar from '../components/account/AccountSettingsNavBar'
import PersonalAccountSettings from '../components/account/PersonalAccountSettings'
import BusinessAccountSettings from '../components/account/BusinessAccountSettings'

import save_updates_icon from '../assets/images/general_icons/Save.png'

const User = () => {
  const [accountType, setAccountType] = useState('Personal')
  console.log(accountType)
  return (
    <main className="container mx-auto h-full py-4 text-white">
      <AccountSettingsNavBar
        accountType={accountType}
        setAccountType={setAccountType}
      />
      {accountType == 'Personal' ? (
        <PersonalAccountSettings />
      ) : (
        <BusinessAccountSettings />
      )}

      <div id="save_changes" className="mt-6 flex w-full justify-end">
        <button className="flex items-center gap-3 rounded-full bg-orange-FIDIS px-2 py-1.5 font-medium">
          <Image
            src={save_updates_icon}
            height={20}
            width={20}
            alt="save changes icon"
          />
          Save Changes
        </button>
      </div>
    </main>
  )
}

export default User
