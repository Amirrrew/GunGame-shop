import React, { useState } from 'react'
import ProductTemp from '../components/ProductTemp.js'
import prdlist from '../Data/Prdlist.js'


export default function Allprd() {

  let [post ,setPost] = useState(prdlist)

  return (
    <div className='mt-48'>
      <div className='text-center text-4xl'>
        همه محصولات
      </div>
      <div className='alllist mt-20 flex justify-center gap-2 flex-wrap'>
        {post.map(item => {
          return <ProductTemp id={item.id} title={item.title} enTitle={item.enTitle} img={item.img} price={item.price}></ProductTemp>
        })}
      </div>
    </div>
  )
}
