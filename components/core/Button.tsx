import React from 'react'
import Image from 'next/image'

const Button = ({ isLoading, onClick, svg, text, background }) => {
  return (
    <button
      disabled={isLoading}
      onClick={onClick}
      className={`flex items-center gap-3 rounded-full bg-${background} px-2 py-1.5 font-medium ${
        isLoading && 'cursor-not-allowed opacity-50'
      }`}
    >
      <Image src={svg} height={20} width={20} alt="save changes icon" />
      {text}
    </button>
  )
}

export default Button
