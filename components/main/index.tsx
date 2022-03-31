import { Dispatch, SetStateAction } from 'react'

import Dashboard from './dashboard'

const Main = (props: {
  isConnected: boolean
  setIsConnected: Dispatch<SetStateAction<boolean>>
}) => {
  return <Dashboard />
}

export default Main
