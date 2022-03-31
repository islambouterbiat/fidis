import React, { useState } from 'react'
import NavBar from './navbar'
import Main from './main'

const Layout = () => {
  const [isConnected, setIsConnected] = useState<boolean>(false)
  return (
    <div className="container mx-auto flex h-screen">
      <div className="my-auto mx-auto flex h-5/6 max-w-[1100px] flex-auto gap-10 rounded bg-overlay-background px-8 shadow-lg ">
        <NavBar isConnected={isConnected} setIsConnected={setIsConnected} />
        <Main isConnected={isConnected} setIsConnected={setIsConnected} />
      </div>
    </div>
  )
}

export default Layout
