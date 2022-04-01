import React, { useState } from 'react'
import NavBar from './navbar'

const Layout = ({ children }: any) => {
  return (
    <div className="container mx-auto flex h-screen">
      <div className="my-auto mx-auto flex h-5/6 max-w-[1100px] flex-auto gap-7 rounded bg-overlay-background px-8 shadow-lg ">
        <NavBar />
        {children}
      </div>
    </div>
  )
}

export default Layout
