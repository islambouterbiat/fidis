import NationalityList from '../../constants/NationalityList'
import { useMoralis } from 'react-moralis'
import Input from '../../core/Input'

const styles = {
  gray_input:
    'rounded-lg bg-input-background py-3 px-3 text-xs placeholder:text-xs text-gray-400 placeholder:text-gray-400',
  gray_input_label: 'text-orange-FIDIS font-semibold block mb-2',
}

const PersonalAccountSettings = () => {
  const personal_infos = [
    { id: 'firstName', text: 'First Name', placeholder: 'john' },
    { id: 'lastName', text: 'Last Name', placeholder: 'john' },
    {
      id: 'personalEmail',
      text: 'Personal Email',
      placeholder: 'John.smith@email.com',
    },
  ]
  const { user } = useMoralis()

  if (!user) return <div>user logged out</div>

  return (
    <section className="scrolltype flex max-h-[70%] flex-col gap-8 overflow-y-auto pr-8">
      {/* I removed ths: relative -top-5 
      because it was causing the form to appear on the top of the button 'upload photo profile' */}
      <div className="flex">
        <div id="walletAddress">
          <label htmlFor="walletAddress" className={styles.gray_input_label}>
            Wallet Address
          </label>
          <Input
            type="text"
            name="walletAddress"
            id="walletAddress"
            className={styles.gray_input + ' w-[320px]'}
            placeholder={user.attributes.ethAddress}
            disabled
          />
        </div>
      </div>
      <div className="flex gap-8">
        {personal_infos.map((data, index) => (
          <div key={index}>
            <label htmlFor={data.id} className={styles.gray_input_label}>
              {data.text}
            </label>
            <Input
              type="text"
              name={data.id}
              id={data.id}
              className={styles.gray_input + ' w-[230px]'}
              placeholder={data.placeholder}
              required
            />
          </div>
        ))}
      </div>
      <div className="flex items-center gap-8">
        <div id="date_of_birth">
          <label htmlFor="date_of_birth" className={styles.gray_input_label}>
            Birthday
          </label>
          <div className="flex gap-2">
            <Input
              type="text"
              placeholder="MM"
              id="birthday_month"
              name="birthday_month"
              className={styles.gray_input + ' w-12'}
              required
            ></Input>
            <Input
              type="text"
              placeholder="DD"
              id="birthday_day"
              name="birthday_day"
              className={styles.gray_input + ' w-12'}
              required
            ></Input>
            <Input
              type="text"
              placeholder="YYYY"
              id="birthday_year"
              name="birthday_year"
              className={styles.gray_input + ' w-20'}
              required
            ></Input>
          </div>
        </div>
        <div id="nationality">
          <label htmlFor="nationality" className={styles.gray_input_label}>
            Nationality
          </label>
          <NationalityList className={styles.gray_input + ' w-28'} />
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
            <option value="Passport">Passport</option>
            <option value="ID Card">ID Card</option>
            <option value="Driver permit">Driver permit</option>
          </select>
        </div>
        <div id="idNumber">
          <label htmlFor="idNumber" className={styles.gray_input_label}>
            ID Number
          </label>
          <Input
            type="text"
            id="idNumber"
            name="idNumber"
            className={styles.gray_input + ' w-28'}
            placeholder="LTS123728673"
            required
          ></Input>
        </div>
        <div id="idPhoto">
          <label htmlFor="idPhoto" className={styles.gray_input_label}>
            ID Photo
            <br />
            {user.attributes.idPhoto && (
              <a className="text-sm text-green-400 underline" href="">
                view current
              </a>
            )}
          </label>
          <Input
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
            <Input
              type="text"
              placeholder="House Number"
              id="houseNo"
              name="houseNo"
              className={styles.gray_input + ' w-32'}
              required
            ></Input>
            <Input
              type="text"
              placeholder="Street"
              id="street"
              name="street"
              className={styles.gray_input + ' w-40'}
              required
            ></Input>
            <Input
              type="text"
              placeholder="City"
              id="city"
              name="city"
              className={styles.gray_input + ' w-36'}
              required
            ></Input>
            <Input
              type="text"
              placeholder="State"
              id="state"
              name="state"
              className={styles.gray_input + ' w-36'}
              required
            ></Input>
            <Input
              type="text"
              placeholder="Zip Code"
              id="zipCode"
              name="zipCode"
              className={styles.gray_input + ' w-20'}
              required
            ></Input>
            <Input
              type="text"
              placeholder="Country"
              id="country"
              name="country"
              className={styles.gray_input + ' w-20'}
            ></Input>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PersonalAccountSettings
