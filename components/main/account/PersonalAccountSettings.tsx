import { useEffect, useRef, useState } from 'react'
import NationalityList from '../../constants/NationalityList'
import { useMoralis } from 'react-moralis'
import save_updates_icon from '../../../assets/images/general_icons/Save.png'
import Image from 'next/image'
import Button from '../../core/Button'
import Notification from '../../constants/notification'

const styles = {
  gray_input:
    'rounded-lg bg-input-background py-3 px-3 text-xs placeholder:text-xs text-gray-400 placeholder:text-gray-400',
  gray_input_label: 'text-orange-FIDIS font-semibold block mb-2',
}

const PersonalAccountSettings = () => {
  const { user, setUserData, isUserUpdating, userError } = useMoralis()

  const personal_infos = [
    { id: 'firstName', text: 'First Name', placeholder: 'john' },
    { id: 'lastName', text: 'Last Name', placeholder: 'john' },
    {
      id: 'personalEmail',
      text: 'Personal Email',
      placeholder: 'John.smith@email.com',
    },
  ]
  const personalFormRef = useRef<HTMLFormElement>(null)!
  const [
    showNotificationAfterUpdatingUserInfos,
    setShowNotificationAfterUpdatingUserInfos,
  ] = useState(false)
  const handleUpdateUserInfos = async (e: any) => {
    e.preventDefault()
    const firstName = personalFormRef.current.firstName.value,
      lastName = personalFormRef.current.lastName.value,
      personalEmail = personalFormRef.current.personalEmail.value,
      birthday = `${personalFormRef.current.birthday_month.value} ${personalFormRef.current.birthday_day.value}, ${personalFormRef.current.birthday_year.value}`,
      idType = personalFormRef.current.idType.value,
      idNumber = personalFormRef.current.idNumber.value,
      idPhoto = personalFormRef.current.idPhoto.value || '',
      houseNo = personalFormRef.current.houseNo.value,
      street = personalFormRef.current.street.value,
      city = personalFormRef.current.city.value,
      state = personalFormRef.current.state.value,
      zipCode = personalFormRef.current.zipCode.value,
      country = personalFormRef.current.country.value,
      homeAddress = `House No: ${personalFormRef.current.houseNo.value}, Street: ${personalFormRef.current.street.value}, City: ${personalFormRef.current.city.value}, , State: ${personalFormRef.current.state.value}, Zip code: ${personalFormRef.current.zipCode.value}, Country: ${personalFormRef.current.country.value}`

    firstName !== '' &&
    lastName !== '' &&
    personalEmail !== '' &&
    birthday !== '' &&
    idType !== '' &&
    idNumber !== '' &&
    // idPhoto !== '' &&
    houseNo !== '' &&
    street !== '' &&
    city !== '' &&
    state !== '' &&
    zipCode !== '' &&
    country !== ''
      ? await setUserData({
          firstName,
          lastName,
          personalEmail,
          email: personalEmail,
          birthday,
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
      : alert('empty fields')

    setShowNotificationAfterUpdatingUserInfos(true)

    setTimeout(() => {
      setShowNotificationAfterUpdatingUserInfos(false)
    }, 8000)
  }
  console.log(personalFormRef)
  if (!user) return <>user logged out</>

  user &&
    useEffect(() => {
      personalFormRef.current.firstName.value = user.attributes.firstName
      personalFormRef.current.lastName.value = user.attributes.lastName
      personalFormRef.current.personalEmail.value =
        user.attributes.personalEmail
      personalFormRef.current.birthday_month.value =
        user.attributes.birthday_month
      personalFormRef.current.birthday_day.value = user.attributes.birthday_day
      personalFormRef.current.birthday_year.value =
        user.attributes.birthday_year
      personalFormRef.current.idType.value = user.attributes.idType
      personalFormRef.current.idNumber.value = user.attributes.idNumber
      // personalFormRef.current.idPhoto.value = user.attributes.idPhoto
      personalFormRef.current.houseNo.value = user.attributes.houseNo
      personalFormRef.current.street.value = user.attributes.street
      personalFormRef.current.city.value = user.attributes.city
      personalFormRef.current.state.value = user.attributes.state
      personalFormRef.current.zipCode.value = user.attributes.zipCode
      personalFormRef.current.country.value = user.attributes.country
    })

  return (
    <form ref={personalFormRef}>
      <section className="scrolltype relative -top-5 flex max-h-[70%] flex-col gap-8 overflow-y-auto pr-8">
        <div className="flex">
          <div id="walletAddress">
            <label htmlFor="walletAddress" className={styles.gray_input_label}>
              Wallet Address
            </label>
            <input
              type="text"
              name="walletAddress"
              id="walletAddress"
              className={styles.gray_input + ' w-[230px]'}
              placeholder={user.attributes.username}
              disabled
              required
            />
          </div>
        </div>
        <div className="flex gap-8">
          {personal_infos.map((data, index) => (
            <div key={index}>
              <label htmlFor={data.id} className={styles.gray_input_label}>
                {data.text}
              </label>
              <input
                type="text"
                name={data.id}
                id={data.id}
                className={styles.gray_input}
                placeholder={data.placeholder}
                required
              />
            </div>
          ))}
        </div>
        <div className="flex items-center gap-8">
          <div id="date_of_birth">
            <label htmlFor="date_of_birth" className={styles.gray_input_label}>
              Birth Day
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="MM"
                id="birthday_month"
                name="birthday_month"
                className={styles.gray_input + ' w-12'}
                required
              ></input>
              <input
                type="text"
                placeholder="DD"
                id="birthday_day"
                name="birthday_day"
                className={styles.gray_input + ' w-12'}
                required
              ></input>
              <input
                type="text"
                placeholder="YYYY"
                id="birthday_year"
                name="birthday_year"
                className={styles.gray_input + ' w-20'}
                required
              ></input>
            </div>
          </div>
          <div id="nationality">
            <label htmlFor="nationality" className={styles.gray_input_label}>
              Nationality
            </label>
            <NationalityList className={styles.gray_input + ' w-36'} />
          </div>
          <div id="id_type">
            <label htmlFor="id_type" className={styles.gray_input_label}>
              ID Type
            </label>
            <select
              required
              id="idType"
              name="idType"
              className={styles.gray_input}
            >
              <option value="">SSN</option>
              <option value="idk">idk</option>
              <option value="idk">idk</option>
              <option value="idk">idk</option>
              <option value="idk">idk</option>
              <option value="idk">idk</option>
            </select>
          </div>
          <div id="idNumber">
            <label htmlFor="idNumber" className={styles.gray_input_label}>
              ID Number
            </label>
            <input
              type="text"
              id="idNumber"
              name="idNumber"
              className={styles.gray_input + ' w-28'}
              placeholder="LTS123728673"
              required
            ></input>
          </div>
          <div id="idPhoto">
            <label htmlFor="idPhoto" className={styles.gray_input_label}>
              ID Photo
            </label>
            <input
              type="file"
              accept="image/*"
              id="idPhoto"
              style={{ display: 'none' }}
              name="idPhoto"
              className={styles.gray_input + ' w-28 cursor-pointer'}
              // value="upload"
            />
            <label htmlFor="idPhoto">
              <button
                onClick={(e) => {
                  e.preventDefault()
                }}
                className={styles.gray_input + ' w-28 cursor-pointer'}
              >
                Upload
              </button>
            </label>
          </div>
        </div>
        <div className="flex items-center gap-8">
          <div id="home_address">
            <label htmlFor="houseNo" className={styles.gray_input_label}>
              Home Address
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="House Number"
                id="houseNo"
                name="houseNo"
                className={styles.gray_input + ' w-32'}
                required
              ></input>
              <input
                type="text"
                placeholder="Street"
                id="street"
                name="street"
                className={styles.gray_input + ' w-40'}
                required
              ></input>
              <input
                type="text"
                placeholder="City"
                id="city"
                name="city"
                className={styles.gray_input + ' w-36'}
                required
              ></input>
              <input
                type="text"
                placeholder="State"
                id="state"
                name="state"
                className={styles.gray_input + ' w-36'}
                required
              ></input>
              <input
                type="text"
                placeholder="Zip Code"
                id="zipCode"
                name="zipCode"
                className={styles.gray_input + ' w-20'}
                required
              ></input>
              <input
                type="text"
                placeholder="Country"
                id="country"
                name="country"
                className={styles.gray_input + ' w-20'}
              ></input>
            </div>
          </div>
        </div>
      </section>
      <div id="save_changes" className="mt-6 flex w-full justify-end">
        <Button
          isLoading={isUserUpdating}
          onClick={handleUpdateUserInfos}
          background="orange-FIDIS"
          svg={save_updates_icon}
          text="Save Changes"
        />
        {userError
          ? showNotificationAfterUpdatingUserInfos && (
              <Notification text={userError.message} color="red" />
            )
          : showNotificationAfterUpdatingUserInfos && (
              <Notification text="Done" color="green" />
            )}
      </div>
    </form>
  )
}

export default PersonalAccountSettings
