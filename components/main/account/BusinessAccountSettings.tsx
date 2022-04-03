import NationalityList from '../../constants/NationalityList'
import { useMoralis } from 'react-moralis'
import PersonalAccountSettings from './PersonalAccountSettings'

const BusinessAccountSettings = ({
  styles,
}: {
  styles: { gray_input_label: string; gray_input: string }
}) => {
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
    <>
      {/* Company Infos */}
      <h1 className="mt-0 w-fit border-b-2 p-4 pl-0 text-2xl font-bold text-green-increased-value">
        Company Infos
      </h1>
      <div className="flex gap-8">
        {company_infos.map((data, index) => (
          <div key={index}>
            <label htmlFor={data.id} className={styles.gray_input_label}>
              {data.text}
              <span className=" text-red-decreased-value">{' *'}</span>
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
            <span className=" text-red-decreased-value">{' *'}</span>
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
      <h1 className="mt-4 w-fit border-b-2 p-4 pl-0 text-2xl font-bold text-green-increased-value">
        Company Signee Infos
      </h1>
      <PersonalAccountSettings styles={styles} />
    </>
  )
}

export default BusinessAccountSettings
