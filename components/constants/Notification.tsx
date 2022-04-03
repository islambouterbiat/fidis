import React from 'react'

const Notification = ({ text, color }: { text: string; color: string }) => {
  return (
    <div className="notification">
      <span
        className={
          color === 'red'
            ? 'text-red-rejected'
            : color === 'orange'
            ? 'text-orange-FIDIS'
            : color === 'green' && 'text-green-increased-value'
        }
      >
        {text}
      </span>
    </div>
  )
}

export default Notification
