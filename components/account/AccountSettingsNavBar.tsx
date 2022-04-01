import React from 'react'
import Image from 'next/image'

import profile_picture from '../../assets/images/user_icons/profile_picture.png'

const AccountSettingsNavBar = () => {
  return (
    <nav className="flex items-start justify-between">
      <div className="mt-10 flex items-center gap-10">
        <h1 className="text-xl">Account Details</h1>
        <div>
          <button className="border border-orange-FIDIS bg-orange-FIDIS px-4 py-1 text-sm font-medium">
            Personal
          </button>
          <button className="border border-orange-FIDIS bg-transparent px-4 py-1 text-sm font-medium">
            Business
          </button>
        </div>
      </div>
      <div className="jutify-center flex flex-col items-center gap-2 text-center">
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
