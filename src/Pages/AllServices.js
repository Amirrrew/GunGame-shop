import React, { useState } from 'react'
import allsercviceslist from '../Data/Servlist'
import { Link } from 'react-router-dom'

export default function AllServices() {

  let Servtemp = ({id ,title ,caption ,img}) => {
    return (
      <div className='Servtemp2'>
        <img src={img}></img>
        <div className='serv-text mx-4'>
          <div className='text-2xl'>{title}</div>
          <div className='text-gray-600'>{caption}</div>
          <div className='serv-text flex justify-end'>
            <Link onClick={Scrollfix} to='/Contact'><button className='serv-btn'><div className='call-text'>تماس بگیرید</div><i className='fa fa-phone call-icon'></i></button></Link>
          </div>
        </div>
      </div>
    )
}
  
  let Scrollfix = () => {
    document.documentElement.scrollTop = 0
  }

  let [post ,setPost] = useState(allsercviceslist)

  return (
    <div className='mt-48'>
      <div className='text-center text-4xl'>
        همه خدمات
      </div>
      <div className='flex justify-center'>
        <div style={{width: '90%'}} className='alllist mt-20 flex gap-2 flex-wrap'>
          {post.map(item => {
            return <Servtemp id={item.id} title={item.title} img={item.img} caption={item.caption}></Servtemp>
          })}
        </div>
      </div>
    </div>
  )
}
