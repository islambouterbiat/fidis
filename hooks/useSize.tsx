import React, { useState, useEffect, useRef, useLayoutEffect } from 'react'
import useResizeObserver from '@react-hook/resize-observer'

//this is custom hook that allows as too listening on size change for a div
const useSize = (target) => {
  const [size, setSize] = useState()

  useLayoutEffect(() => {
    setSize(target.current.getBoundingClientRect())
  }, [target])

  // Where the magic happens
  useResizeObserver(target, (entry: any) => setSize(entry.contentRect))
  return size
}

export default useSize
