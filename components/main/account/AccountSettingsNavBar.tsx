import { useRef, useState } from 'react'
import Image from 'next/image'
import { useMoralisFile } from 'react-moralis'
import Moralis from 'moralis'

const AccountSettingsNavBar = ({ accountType, setAccountType, styles }) => {
  const getClickedButton = (e) => {
    setAccountType(e.target.innerText)
  }
  const [profilePicture, setProfilePicture] = useState(
    '/profilePhotoDefault.png'
  )
  const [loadingImage, setLoadingImage] = useState(false)

  const profilePhoto = useRef<HTMLInputElement>()
  const handleUploadProfileImage = async (e) => {
    e.preventDefault()
    const file = profilePhoto.current.files[0]
    const profileImage = new Moralis.File(file.name, file)

    try {
      setLoadingImage(true)
      await profileImage.saveIPFS()
      setProfilePicture(profileImage._url)
      console.log(profileImage._url)
      setLoadingImage(false)
    } catch (error) {
      console.log(error)
      setLoadingImage(false)
    }
  }
  return (
    <nav className="mb-2 flex items-start justify-between">
      <div className="mt-10 flex items-center gap-10">
        <h1 className="text-xl">Account Details</h1>
        <div>
          <button
            onClick={(e) => getClickedButton(e)}
            className={`border border-orange-FIDIS ${
              accountType == 'Personal' ? 'bg-orange-FIDIS' : 'bg-transparent'
            } px-4 py-1 text-sm font-medium`}
          >
            Personal
          </button>
          <button
            onClick={(e) => getClickedButton(e)}
            className={`border border-orange-FIDIS  ${
              accountType == 'Business' ? 'bg-orange-FIDIS' : 'bg-transparent'
            } px-4 py-1 text-sm font-medium`}
          >
            Business
          </button>
        </div>
      </div>
      <div className="mr-12 flex flex-col items-center justify-center gap-2 text-center">
        <Image
          src={profilePicture}
          height={120}
          width={120}
          className="rounded-full border-4 border-solid border-orange-FIDIS"
          alt="profile picture"
        />

        <input
          type="file"
          accept="image/*"
          id="idPhoto"
          // style={{ display: 'none' }}
          name="idPhoto"
          className={styles.gray_input + ' w-28 cursor-pointer'}
          // value="upload"
          ref={profilePhoto}
        />
        <label htmlFor="idPhoto">
          <button
            disabled={loadingImage}
            onClick={handleUploadProfileImage}
            className={`${styles.gray_input} w-20 py-[0.5rem] ${
              loadingImage
                ? ' cursor-wait bg-input-background-READONLY'
                : 'cursor-pointer'
            }`}
          >
            Update
          </button>
        </label>
      </div>
    </nav>
  )
}

export default AccountSettingsNavBar
