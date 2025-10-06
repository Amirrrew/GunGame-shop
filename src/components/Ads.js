import React from 'react'
import { Link } from 'react-router-dom'

export default function Ads() {

  let Scrollfix = () => {
    document.documentElement.scrollTop = 0
  }

  return (
    <div className='ads flex justify-center gap-3 mt-20'>
      <div className='ad-box'>
        <div className='ad-text'>
          <div>
            <div className='text-2xl font-bold text-white'>
              همون چیزی که میخواستی!
            </div>
            <div className='text-white mt-2'>
              خرید و اسمبل سیستم گیمینگ و اداری
            </div>
          </div>
          <div>
            <Link onClick={Scrollfix} to='/Services'><button className='more-btn'><i className='fa fa-angle-left'></i></button></Link>
          </div>
        </div>
      </div>


      <div className='ad-box' id='ad2'>
        <div className='ad-text'>
          <div>
            <div className='text-3xl font-bold text-white'>
              دسته خرابه دستت نباشه!
            </div>
            <div className='text-white mt-2'>
              خرید / تعمیرات دسته بازی
            </div>
          </div>
          <div>
            <Link to='/Services' onClick={Scrollfix}><button className='more-btn'><i className='fa fa-angle-left'></i></button></Link>
          </div>
        </div>
      </div>
    </div>
  )
}
