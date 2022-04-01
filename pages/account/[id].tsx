import Image from 'next/image'
import React from 'react'
import AccountSettingsNavBar from '../../components/account/AccountSettingsNavBar'
import PersonalAccountSettings from '../../components/account/PersonalAccountSettings'

import save_updates_icon from '../../assets/images/general_icons/Save.png'

const User = () => {
  return (
    <main className="container mx-auto h-full py-4 text-white">
      <AccountSettingsNavBar />
      <PersonalAccountSettings />
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
