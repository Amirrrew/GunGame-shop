import React from 'react'
import Welcome from './Welcome'
import Consoles from './Consoles'
import Ads from './Ads'
import Games from './Games'
import Services from './Services'

export default function Home() {
  return (
    <div className=''>
      <Welcome></Welcome>
      <Consoles></Consoles>
      <Ads></Ads>
      <Games></Games>
      <Services></Services>
    </div>
  )
}
