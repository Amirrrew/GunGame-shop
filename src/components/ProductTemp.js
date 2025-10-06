import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductTemp({id ,title ,enTitle ,img ,price}) {

  let Scrollfix = () => {
    document.documentElement.scrollTop = 0
  }

  return (
    <Link onClick={Scrollfix} to={`/Products/${id}`}>
      <div className='prd-temp'>
          <div className='text-xl mt-4'>
              {title}
          </div>
          <div className='text-gray-400'>
              {enTitle}
          </div>
          <div className='flex justify-center'>
            <div className='price text-lg mt-1'>
                {price} تومان
            </div>
          </div>
          <div className='flex justify-center'>
              <img className='prd-img' src={img}></img>
          </div>
      </div>
    </Link>
  )
}
