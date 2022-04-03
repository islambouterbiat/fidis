import NationalityList from '../../constants/NationalityList'
import { useMoralis } from 'react-moralis'

const styles = {
  gray_input:
    'rounded-lg bg-input-background py-3 px-3 text-xs placeholder:text-xs text-gray-400 placeholder:text-gray-400',
  gray_input_label: 'text-orange-FIDIS font-semibold block mb-2',
}

const BusinessAccountSettings = () => {
  const company_infos = [
    { id: 'company_name', text: 'Company Name', placeholder: 'Google' },
    { id: 'ein', text: 'EIN', placeholder: '745934057324' },
    {
      id: 'company_email',
      text: 'Company Email',
      placeholder: 'ceo@google.com',
    },
  ]
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
          <input
            type="text"
            name="walletAddress"
            id="walletAddress"
            className={styles.gray_input + ' w-[320px]'}
            placeholder={user.attributes.ethAddress}
            disabled
          />
        </div>
      </div>
      {/* Company Infos */}
      <h1 className="text-2xl text-green-increased-value">Company Infos</h1>
      <div className="flex gap-8">
        {company_infos.map((data, index) => (
          <div key={index}>
            <label htmlFor={data.id} className={styles.gray_input_label}>
              {data.text}
            </label>
            <input
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
        <div id="home_address">
          <label htmlFor="company_houseNo" className={styles.gray_input_label}>
            Company Address
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="House Number"
              id="company_houseNo"
              name="company_houseNo"
              className={styles.gray_input + ' w-32'}
              required
            />
            <input
              type="text"
              placeholder="Street"
              id="company_street"
              name="company_street"
              className={styles.gray_input + ' w-40'}
              required
            ></input>
            <input
              type="text"
              placeholder="City"
              id="company_city"
              name="company_city"
              className={styles.gray_input + ' w-36'}
              required
            ></input>
            <input
              type="text"
              placeholder="State"
              id="company_state"
              name="company_state"
              className={styles.gray_input + ' w-36'}
              required
            ></input>
            <input
              type="text"
              placeholder="Zip Code"
              id="company_zipCode"
              name="company_zipCode"
              className={styles.gray_input + ' w-20'}
              required
            ></input>
            <input
              type="text"
              placeholder="Country"
              id="company_country"
              name="company_country"
              className={styles.gray_input + ' w-20'}
            ></input>
          </div>
        </div>
      </div>
      {/* Company Signee Infos */}
      <h1 className=" text-2xl text-green-increased-value">
        Company Signee Infos
      </h1>
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
            <br />
            {user.attributes.idPhoto && (
              <a className="text-sm text-green-400 underline" href="">
                view current
              </a>
            )}
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
            Home Address{' '}
            <a className="text-sm text-green-400 underline" href="">
              fill with the company address
            </a>
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
  )
}

export default BusinessAccountSettings
