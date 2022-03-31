import React from 'react'

const Notification = ({ text, color }: { text: string; color: string }) => {
  return (
    <div className="notification_disappear absolute top-4 left-[35%] grid place-content-center rounded bg-black p-4 shadow-2xl">
      <span
        className={
          color === 'red'
            ? 'text-red-rejected'
            : color === 'orange'
            ? 'text-orange-FIDIS'
            : color === 'green' && 'text-green-success'
        }
      >
        {text}
      </span>
    </div>
  )
}

export default Notification
