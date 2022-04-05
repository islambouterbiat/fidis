import { useState, useEffect, useRef } from 'react'
import React from 'react'
import AccountSettingsNavBar from '../components/main/account/AccountSettingsNavBar'
import PersonalAccountSettings from '../components/main/account/PersonalAccountSettings'
import BusinessAccountSettings from '../components/main/account/BusinessAccountSettings'
import Button from '../components/core/Button'
import { useMoralis } from 'react-moralis'
import Notification from '../components/constants/Notification'
import save_updates_icon from '../assets/images/general_icons/Save.png'
import { useRouter } from 'next/router'
import Head from 'next/head'

const styles = {
  gray_input:
    'rounded bg-input-background py-3 px-3 text-xs placeholder:text-xs text-gray-400 placeholder:text-gray-400',
  gray_input_label: 'text-orange-FIDIS font-semibold block mb-2',
}

const User = ({ profilePicture, setProfilePicture }: any) => {
  //// define the account type Personal/Business
  const [accountType, setAccountType] = useState('Personal')
  const [emptyFields, setEmptyFields] = useState(false)
  const router = useRouter()

  /* 
  variables:
    - user: the user object, contains all infos about the current user
    - setUserData: to set/update user data in Moralis database
    - isUserUpdating: used to show LADOING state when the user clicks 'save unfos'
    - userError: used to show error message when the user clicks 'save unfos'
  */
  const { user, isAuthUndefined, setUserData, isUserUpdating, userError } =
    useMoralis()

  // define the state + content of the form
  const formRef = useRef<HTMLFormElement>(null)!

  // show notification when the user clicks 'save unfos'
  const [
    showNotificationAfterUpdatingUserInfos,
    setShowNotificationAfterUpdatingUserInfos,
  ] = useState(false)

  // the function to update the user infos
  const handleUpdateUserInfos = async (e: any) => {
    e.preventDefault()

    // get Personal/Signee infos from the form
    const company_name =
        accountType === 'Business' ? formRef.current.company_name.value : '',
      ein = accountType === 'Business' ? formRef.current.ein.value : '',
      company_email =
        accountType === 'Business' ? formRef.current.company_email.value : '',
      company_houseNo =
        accountType === 'Business' ? formRef.current.company_houseNo.value : '',
      company_street =
        accountType === 'Business' ? formRef.current.company_street.value : '',
      company_city =
        accountType === 'Business' ? formRef.current.company_city.value : '',
      company_state =
        accountType === 'Business' ? formRef.current.company_state.value : '',
      company_zipCode =
        accountType === 'Business' ? formRef.current.company_zipCode.value : '',
      company_country =
        accountType === 'Business' ? formRef.current.company_country.value : '',
      company_address =
        accountType === 'Business'
          ? `House No: ${formRef.current.company_houseNo.value}, Street: ${formRef.current.company_street.value}, City: ${formRef.current.company_city.value}, , State: ${formRef.current.company_state.value}, Zip code: ${formRef.current.company_zipCode.value}, Country: ${formRef.current.company_country.value}`
          : ''

    // get Personal/Signee infos from the form
    const firstName = formRef.current.firstName.value,
      lastName = formRef.current.lastName.value,
      personalEmail = formRef.current.personalEmail.value,
      birthday_month = formRef.current.birthday_month.value,
      birthday_day = formRef.current.birthday_day.value,
      birthday_year = formRef.current.birthday_year.value,
      birthday = `${formRef.current.birthday_month.value} ${formRef.current.birthday_day.value}, ${formRef.current.birthday_year.value}`,
      nationality = formRef.current.nationality.value,
      idType = formRef.current.idType.value,
      idNumber = formRef.current.idNumber.value,
      idPhoto = formRef.current.idPhoto.value || '',
      houseNo = formRef.current.houseNo.value,
      street = formRef.current.street.value,
      city = formRef.current.city.value,
      state = formRef.current.state.value,
      zipCode = formRef.current.zipCode.value,
      country = formRef.current.country.value,
      homeAddress = `House No: ${formRef.current.houseNo.value}, Street: ${formRef.current.street.value}, City: ${formRef.current.city.value}, , State: ${formRef.current.state.value}, Zip code: ${formRef.current.zipCode.value}, Country: ${formRef.current.country.value}`

    /* 
      1- verify all inputs !== ''
      2- send all infos to Moralis database
      */
    if (
      firstName !== '' &&
      lastName !== '' &&
      personalEmail !== '' &&
      birthday_month !== '' &&
      birthday_day !== '' &&
      birthday_year !== '' &&
      birthday !== '' &&
      nationality !== '' &&
      idType !== '' &&
      idNumber !== '' &&
      // idPhoto !== '' &&
      houseNo !== '' &&
      street !== '' &&
      city !== '' &&
      state !== '' &&
      zipCode !== '' &&
      country !== ''
    ) {
      // if accountType is 'Business' then send the company infos
      if (accountType === 'Business') {
        if (
          company_name !== '' &&
          ein !== '' &&
          company_email !== '' &&
          company_houseNo !== '' &&
          company_street !== '' &&
          company_city !== '' &&
          company_state !== '' &&
          company_zipCode !== '' &&
          company_country !== ''
        ) {
          await setUserData({
            accountType,
            company_name,
            ein,
            company_email,
            company_houseNo,
            company_street,
            company_city,
            company_state,
            company_zipCode,
            company_country,
            company_address,
            firstName,
            lastName,
            personalEmail,
            username: personalEmail,
            email: personalEmail,
            birthday,
            birthday_month,
            birthday_day,
            birthday_year,
            nationality,
            idType,
            idNumber,
            idPhoto,
            homeAddress,
            houseNo,
            street,
            city,
            state,
            zipCode,
            country,
          })
          setShowNotificationAfterUpdatingUserInfos(true)

          setTimeout(() => {
            setShowNotificationAfterUpdatingUserInfos(false)
          }, 8000)
        } else {
          setEmptyFields(true)

          setTimeout(() => {
            setEmptyFields(false)
          }, 8000)
        }
      } else {
        await setUserData({
          accountType,
          firstName,
          lastName,
          personalEmail,
          username: personalEmail,
          email: personalEmail,
          birthday,
          birthday_month,
          birthday_day,
          birthday_year,
          nationality,
          idType,
          idNumber,
          idPhoto,
          homeAddress,
          houseNo,
          street,
          city,
          state,
          zipCode,
          country,
        })
        setShowNotificationAfterUpdatingUserInfos(true)

        setTimeout(() => {
          setShowNotificationAfterUpdatingUserInfos(false)
        }, 8000)
      }
    } else {
      setEmptyFields(true)

      setTimeout(() => {
        setEmptyFields(false)
      }, 8000)
    }
  }
  // console.log(formRef)

  /// this should execute only once, that's why it's separated, and not every time the user data changes
  useEffect(() => {
    user
      ? setAccountType(user.attributes.accountType || 'Personal')
      : 'Personal'

    !user && router.push('/')
  }, [])

  /// fetch all user data from Moralis database when the user logs in
  useEffect(() => {
    const updateUserInputs = () => {
      /* 
      here add company inputs infos
      */
      if (accountType === 'Business') {
        formRef.current.company_name.value = user.attributes.company_name || ''
        formRef.current.ein.value = user.attributes.ein || ''
        formRef.current.company_email.value =
          user.attributes.company_email || ''
        formRef.current.company_houseNo.value =
          user.attributes.company_houseNo || ''
        formRef.current.company_street.value =
          user.attributes.company_street || ''
        formRef.current.company_city.value = user.attributes.company_city || ''
        formRef.current.company_state.value =
          user.attributes.company_state || ''
        formRef.current.company_zipCode.value =
          user.attributes.company_zipCode || ''
        formRef.current.company_country.value =
          user.attributes.company_country || ''
      }

      formRef.current.firstName.value = user.attributes.firstName || ''
      formRef.current.lastName.value = user.attributes.lastName || ''
      formRef.current.personalEmail.value = user.attributes.personalEmail || ''
      formRef.current.birthday_month.value =
        user.attributes.birthday_month || ''
      formRef.current.birthday_day.value = user.attributes.birthday_day || ''
      formRef.current.birthday_year.value = user.attributes.birthday_year || ''
      formRef.current.nationality.value = user.attributes.nationality || ''
      formRef.current.idType.value = user.attributes.idType || ''
      formRef.current.idNumber.value = user.attributes.idNumber || ''
      // formRef.current.idPhoto.value = user.attributes.idPhoto
      formRef.current.houseNo.value = user.attributes.houseNo || ''
      formRef.current.street.value = user.attributes.street || ''
      formRef.current.city.value = user.attributes.city || ''
      formRef.current.state.value = user.attributes.state || ''
      formRef.current.zipCode.value = user.attributes.zipCode || ''
      formRef.current.country.value = user.attributes.country || ''
    }
    // execute the function only in case the user is logged in, this is important because $user is $undefined otherwise
    user && updateUserInputs()
  }, [user, accountType])

  return (
    <>
      <Head>
        <title>FIDIS - Account settings</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {user ? (
        <main className="container mx-auto h-full py-4 text-white">
          <AccountSettingsNavBar
            profilePicture={profilePicture}
            setProfilePicture={setProfilePicture}
            accountType={accountType}
            setAccountType={setAccountType}
            styles={styles}
          />
          <form ref={formRef} className="h-[90%] overflow-y-auto">
            <section className="scrolltype flex max-h-[70%] flex-col gap-8 overflow-y-auto pr-8">
              {/* I removed ths: relative -top-5 
      because it was causing the form to appear on the top of the button 'upload photo profile' */}
              <div className="flex">
                <div id="walletAddress">
                  <label
                    htmlFor="walletAddress"
                    className={styles.gray_input_label}
                  >
                    Wallet Address
                  </label>
                  <input
                    type="text"
                    name="walletAddress"
                    id="walletAddress"
                    className={styles.gray_input + ' w-[320px] rounded-md p-4'}
                    placeholder={user.attributes.ethAddress}
                    disabled
                  />
                </div>
              </div>
              {accountType == 'Personal' ? (
                <PersonalAccountSettings styles={styles} />
              ) : (
                <BusinessAccountSettings styles={styles} />
              )}
            </section>

            <div id="save_changes" className="mt-6 flex w-full justify-between">
              <Button
                isLoading={isUserUpdating}
                onClick={handleUpdateUserInfos}
                background="orange-FIDIS"
                svg={save_updates_icon}
                text="Save Changes"
              />
              {emptyFields && <Notification text="Empty fields" color="red" />}
              {userError
                ? showNotificationAfterUpdatingUserInfos && (
                    <Notification text={userError.message} color="red" />
                  )
                : showNotificationAfterUpdatingUserInfos && (
                    <Notification text="Done" color="green" />
                  )}
            </div>
          </form>
        </main>
      ) : (
        <></>
      )}
    </>
  )
}
export default User
