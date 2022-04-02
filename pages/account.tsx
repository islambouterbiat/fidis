import { useState } from 'react'
import React from 'react'
import AccountSettingsNavBar from '../components/main/account/AccountSettingsNavBar'
import PersonalAccountSettings from '../components/main/account/PersonalAccountSettings'
import BusinessAccountSettings from '../components/main/account/BusinessAccountSettings'

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
    </main>
  )
}

export default User
