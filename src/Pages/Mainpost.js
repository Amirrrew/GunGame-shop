import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';
import prdlist from '../Data/Prdlist';


export default function Mainpost() {
  let params = useParams();
  const [post, setPost] = useState(prdlist ,);
  const newpost = post.find((newpost) => newpost.id === Number(params.Id)) 
  

  let Scrollfix = () => {
    document.documentElement.scrollTop = 0
  }


  return (
    <div>
      <div dir='ltr' className='prdshowcase flex justify-center mt-48'>
        <div style={{width: '75%'}} className='flex justify-between flex-wrap'>
          <div className='prd-image-box'>
            <img src={newpost.img2}></img>
          </div>
          <div className='mx-3 mt-5' dir='rtl'>
            <div className='prdtitle text-2xl w-[400px] border-b-2 pb-2 border-gray-900'>{newpost.title}</div>
            <div className='mt-1 text-gray-500'>{newpost.enTitle}</div>
            <div className='mt-1 text-gray-400 border-top'>در دسته: {newpost.cat}</div>
            <ul className='spec-list'>
              <div className='text-2xl mb-3'>ویژگی ها</div>
              <li>{newpost.m1}</li>
              <li>{newpost.m2}</li>
              <li>{newpost.m3}</li>
              <li>{newpost.m4}</li>
              <li>{newpost.m5}</li>
            </ul>
          </div>
        </div>
      </div>
      <div className='flex justify-center'>
        <div className='billbox'>
          <div className='text-2xl mx-1 border-b-2 size-fit pb-2'>
            سفارش محصول
          </div>
          <div className='flex justify-between mt-3 flex-wrap'>
            <div className='flex-wrap text-m text-gray-700 mx-2 flex gap-3'>
              سفارش {newpost.title} <div className='text-gray-400'>{newpost.enTitle}</div> <div className='texl-m text-red-600'>{newpost.price} تومان</div>
            </div>
            <Link className='call-link' to='/Contact' onClick={Scrollfix}>
              <button className='call-btn'>
                تماس بگیرید
              </button>
            </Link>
          </div>
        </div>
      </div>
      
    </div>
  )
}
