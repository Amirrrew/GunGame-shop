import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Services() {

    let servlist = [
        {id: 0,title: 'تعمیرات کامپیوتر' ,caption: 'تعمیرات سیستم' ,img: '../images/backgronds/PC-Repairs.jpg'},
        {id: 1,title: 'تعمیرات کنسول' ,caption: 'تعمیرات انواع Xbox و PS' ,img: '../images/backgronds/console-repair.webp'},
        {id: 2,title: 'تعمیرات دسته' ,caption: 'تعمیرات انواع کنترلر' ,img: '../images/backgronds/ps4c-repair.jpg'},
        {id: 3,title: 'تعمیرات لپتاپ' ,caption: 'تعمیرات و سرویس انواع لپتاپ' ,img: '../images/backgronds/loptop-repair.webp'},
    ]

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

    let [post ,setPost] = useState(servlist);

    let Scrollfix = () => {
      document.documentElement.scrollTop = 0
    }

  return (
    <div className='mt-20'>
        <div className='flex justify-center'>
            <div style={{width: '90%'}} className='title-box mt-10'>
                    <div className='flex'>
                        <i className='fa fa-arrow-left'></i>
                        <div className='text-3xl mx-3 m-auto' style={{marginTop: '-12px'}}>
                            خدمات
                        </div>
                    </div>
                <Link onClick={Scrollfix} to='/Services'><button className='btn-01 more'>مشاهده همه</button></Link>
            </div>
        </div>
        <div className='flex justify-center gap-3 flex-wrap mt-5'>
            {post.map(item => {
                return <Servtemp id={item.id} title={item.title} img={item.img} caption={item.caption}></Servtemp>
            })}
        </div>
    </div>

  )
}
