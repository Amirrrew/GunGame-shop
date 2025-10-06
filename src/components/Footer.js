import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {


  let Scrolltop = () => {
    document.documentElement.scrollTop = 0;
  }

  let Scrollfix = () => {
    document.documentElement.scrollTop = 0;
}


  return (
    <div className='footer mt-20'>
      <div className='footer-layer pb-5'>
        <div className='flex justify-between p-5'>
          <Link to='/'><img src='../images/logos/Gungame-logo.png' className='w-32'></img></Link>
          <button onClick={Scrolltop} className='btn-01 mt-5 mx-2' style={{width: '70px' ,height: '70px'}}><i className='fa fa-arrow-up text-white'></i></button>
        </div>
        <div className=' flex justify-start gap-20 flex-wrap px-10'>
          <ul className='footer-text'>
            <div className='text-2xl mb-4'>محصولات</div>
            <Link onClick={Scrollfix} to='/Products'><li>کنسول بازی</li></Link>
            <Link onClick={Scrollfix} to='/Products'><li>لوازم جانبی کنسول</li></Link>
            <Link onClick={Scrollfix} to='/Products'><li>لوازم جانبی سیستم</li></Link>
            <Link onClick={Scrollfix} to='/Products'><li>قطعات کامپیوتر</li></Link>
          </ul>
          <ul className='footer-text'>
            <div className='text-2xl mb-4'>خدمات</div>
            <Link onClick={Scrollfix} to='/Services'><li>رزرو گیم سنتر</li></Link>
            <Link onClick={Scrollfix} to='/Services'><li>تعمیرات کنسول</li></Link>
            <Link onClick={Scrollfix} to='/Services'><li>تعمیرات کامپیوتر</li></Link>
            <Link onClick={Scrollfix} to='/Services'><li>تعمیرات لوازم جانبی</li></Link>
            <Link onClick={Scrollfix} to='/Services'><li>نصب بازی کنسول</li></Link>
            <Link onClick={Scrollfix} to='/Services'><li>نصب بازی کامپیوتر</li></Link>
          </ul>          
          <ul className='footer-text'>
            <div className='text-2xl mb-4'>ارتباط باما</div>
            <li ><i className='fa fa-phone px-2'></i>09031864813</li>
            <li ><i className='fa fa-phone px-2'></i>09050113945</li>
            <Link to='https://t.me/Me_shad'><li>https://t.me/Me_shad</li></Link>
            <Link to='https://www.instagram.com/mehr_shaaad/'><li>mehr_shaaad</li></Link>
          </ul>          
        </div>
      </div>
    </div>
  )
}
