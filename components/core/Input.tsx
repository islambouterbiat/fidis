import React from 'react'
import Image from 'next/image'

const Input = ({
  type,
  name,
  id,
  className,
  placeholder,
  disabled,
  required,
  onClick,
  value,
  width,
  accept,
  style,
}: {
  type?: string
  name?: string
  id?: string
  className?: string
  placeholder?: string
  disabled?: boolean
  required?: boolean
  onClick?: any
  value?: string
  width?: string
  accept?: string
  style?: any
}) => {
  return (
    <input
      type={type || 'text'}
      name={name || ''}
      id={id || ''}
      className={`w-${
        width || 'auto'
      } bg- flex items-center gap-3 rounded-full px-2 py-1.5 font-medium ${
        disabled && 'cursor-not-allowed opacity-50'
      } ${className || ''}`}
      placeholder={placeholder}
      disabled={disabled}
      onClick={onClick}
      required={required}
      value={value}
      accept={accept}
      style={style}
    />
  )
}

export default Input
