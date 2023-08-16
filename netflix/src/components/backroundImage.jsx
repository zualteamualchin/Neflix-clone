import React from 'react'
import background from '../assets/login.jpg'
import { styled } from 'styled-components'
export const BackroundImage = (props) => {
  return (
    <div style={{height:props.height}}  >
        <img alt='background' src={background} className=' brightness-50 bg-[rgb(0 0 0 /40%)] h-full w-full' />
    </div>
  )
}
