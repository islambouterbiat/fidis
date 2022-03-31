import { Dispatch, SetStateAction } from 'react'
import Dashboard from './dashboard'

const Index = (props: {
  isConnected: boolean
  setIsConnected: Dispatch<SetStateAction<boolean>>
}) => {
  return (
    <div className="grow">
      <Dashboard />
    </div>
  )
}

export default Index
