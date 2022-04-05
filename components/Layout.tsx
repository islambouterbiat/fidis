import React, { useState } from 'react'
import NavBar from './navbar'

const Layout = ({ children }: any) => {
  /// Default Profile picture
  const [profilePicture, setProfilePicture] = useState(
    '/profilePhotoDefault.png'
  )

  const [miniNav, SetMiniNav] = useState(false)
  const handleMiniNav = () => {
    SetMiniNav((p) => !p)
    console.log('Mini nav toggled')
  }

  return (
    <div className="container mx-auto flex h-screen">
      <div className="my-auto mx-auto flex h-5/6 max-h-[700px] max-w-[1100px] flex-auto gap-7 rounded bg-overlay-background px-8 shadow-lg xxl:max-h-[1500px] xxl:max-w-[2000px] ">
        <NavBar
          profilePicture={profilePicture}
          setProfilePicture={setProfilePicture}
          miniNav={miniNav}
        />
        {React.cloneElement(children, {
          profilePicture: profilePicture,
          setProfilePicture: setProfilePicture,
          handleMiniNav,
        })}
      </div>
    </div>
  )
}

export default Layout
