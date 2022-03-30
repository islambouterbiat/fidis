import Image from 'next/image'
import React from 'react'

import account_profile_picture from "../../assets/images/account_profile_picture_big.png"

const styles ={
  gray_input:"rounded bg-input-background py-1 px-3 placeholder:text-xs placeholder:text-gray-500",
  gray_input_label:"text-orange-FIDIS font-semibold block mb-2"
}
const User = () => {
  const personal_infos =[
    {id:"first_name",text:"First Name",placeholder:"john"},
    {id:"last_name",text:"Last Name",placeholder:"john"},
    {id:"personal_email",text:"Personal Email",placeholder:"John.smith@email.com"},
  ]
  return (
    <main className="container mx-auto text-white py-4">
      <nav className='flex items-start justify-between'>
        <div className='flex items-center mt-10 gap-10'>
          <h1 className='text-xl'>Account Details</h1>
          <div>
            <button className='px-4 py-1 bg-orange-FIDIS border border-orange-FIDIS font-medium text-sm'>Personal</button>
            <button className='px-4 py-1 bg-transparent border border-orange-FIDIS font-medium text-sm'>Business</button>
          </div>
        </div>
        <div className='flex flex-col items-center jutify-center text-center gap-2'>
          <Image src={account_profile_picture} height={120} width={120} className="rounded-full" alt='profile picture' />
          <button className='rounded-lg bg-input-background text-gray-500 px-3 py-1 text-sm'>update</button>
        </div>
      </nav>
      <section className='flex flex-col gap-8'>
        <div className='flex'>
          <div id='wallet_address'>
            <label htmlFor="wallet_address" className={styles.gray_input_label} >Wallet Address</label>
            <input type="text" name="wallet_address" id="wallet_address" className={styles.gray_input} placeholder="0x3Bf4CA8e5CA8e5CA8e5CA8e5CA8e5"/>
          </div>
        </div>
        <div className='flex gap-8'>
          {personal_infos.map((data,index)=>(
            <div key={index}>
              <label htmlFor={data.id} className={styles.gray_input_label} >{data.text}</label>
              <input type="text" name={data.id} id={data.id} className={styles.gray_input} placeholder={data.placeholder}/>
          </div>
          ))}
        </div>
      </section>
    </main>
  )
}

export default User