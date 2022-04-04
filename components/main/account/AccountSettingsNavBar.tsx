import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { useMoralis } from 'react-moralis'
import Moralis from 'moralis'
const AccountSettingsNavBar = ({
  accountType,
  setAccountType,
  styles,
  profilePicture,
  setProfilePicture,
}) => {
  const getClickedButton = (e) => {
    setAccountType(e.target.innerText)
  }

  const profilePictureRef = useRef<HTMLInputElement>()
  const [loadingImage, setLoadingImage] = useState(false)
  const { user, isAuthenticated } = useMoralis()

  const handleUploadProfileImage = async (e) => {
    e.preventDefault()
    // if the user click upload, then canceled, return nothing
    if (!profilePictureRef.current.files.length) return

    // catch the first file in the file list (image) (only one file allowed)
    const file = profilePictureRef.current.files[0]

    // create a new Moralis file instance containing the image name and actual image metadata
    const profileImage = new Moralis.File(file.name, file)

    // set loading image to true
    setLoadingImage(true)
    try {
      // awaiting to moralis server to upload the image to the IPFS
      await profileImage.saveIPFS()

      try {
        // store the image url in the user data in Moralis
        user.set('profilePicture', profileImage._url)
        await user.save()
        setProfilePicture(`${profileImage._url}`)
      } catch (error) {
        // console if error
        console.log(error)
      }

      // set the new image url as the new profile picture
    } catch (error) {
      // console if error
      console.log(error)
    }

    // set loading image to false
    setLoadingImage(false)
  }

  useEffect(() => {
    /// update the profile picture from the default to the one in Moralis database if it exists
    if (!isAuthenticated) return
    if (user && user.attributes.profilePicture !== undefined) {
      try {
        setProfilePicture(`${user.attributes.profilePicture}`)
      } catch (error) {
        console.log(error)
      }
    }
  }, [user, isAuthenticated])
  return (
    <nav className="-mb-2 flex items-start justify-between">
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
      <div className="mr-12 mt-4 flex flex-col items-center justify-center gap-2">
        <div
          className={`relative h-[120px] w-[120px] overflow-hidden rounded-full border-4 border-solid border-orange-FIDIS text-center hover:opacity-[0.8] ${
            loadingImage ? ' cursor-wait blur-sm' : 'cursor-pointer'
          }`}
        >
          <Image
            src={profilePicture}
            height={120}
            width={120}
            alt=""
            className={`object-cover object-center`}
          />
          <input
            disabled={loadingImage}
            onChange={handleUploadProfileImage}
            type="file"
            accept="image/*"
            id="idPhoto"
            name="idPhoto"
            className={`
              ${styles.gray_input}
              z-999 absolute -top-16 -left-16 h-[300px] w-[300px] cursor-pointer  opacity-0
              ${loadingImage && 'cursor-wait opacity-0'}
            `}
            ref={profilePictureRef}
          />
        </div>
        {
          <div className={`${loadingImage ? 'opacity-1' : 'opacity-0'}`}>
            Uploading...
          </div>
        }
        {/* 
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
        </label>*/}
      </div>
    </nav>
  )
}

export default AccountSettingsNavBar
