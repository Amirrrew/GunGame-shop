import React from 'react'
import { useState } from 'react'
import ProductTemp from './ProductTemp';
import { Link } from 'react-router-dom';

export default function Consoles() {

        

    let Scrollfix = () => {
        document.documentElement.scrollTop = 0;
    }

    let ConMain = [
        {id: 0, title: 'پلی استیشن 5 اسلیم دیجیتال' ,enTitle: 'Playstation 5 slim Digital' ,img: '../images/consoles/ps5-s-digital.jpg' ,price: '37,000,000'},
        {id: 1, title: 'پلی استیشن 5' ,enTitle: 'Playstation 5 fat' ,img: '../images/consoles/ps5-fat.jpg' ,price: '41,000,000'},
        {id: 2, title: 'پلی استیشن 4 ' ,enTitle: 'Playstation 4 fat' ,img: '../images/consoles/ps4-fat.jpg' ,price: '19,000,000'},
        {id: 3, title: 'ایکس باکس سری اس' ,enTitle: 'Xbox Series S' ,img: '../images/consoles/xbox-series-s.jpg' ,price: '27,000,000'},
    ]

    let [post , setPost] = useState(ConMain);
  return (
    <div className='mt-32'>
        <div className='flex justify-center'>
            <div className='title-box'>
                <div className='flex'>
                    <i className='fa fa-arrow-left'></i>
                    <div className='text-3xl mx-3 m-auto' style={{marginTop: '-12px'}}>
                        کنسول بازی
                    </div>
                </div>
                <Link onClick={Scrollfix} to='/Products'><button className='btn-01 more'>مشاهده همه</button></Link>
            </div>
        </div>
        <div className='flex justify-center gap-2 mt-5 flex-wrap'>
            {post.map(item => {
                return <ProductTemp id={item.id} title={item.title} enTitle={item.enTitle} img={item.img} price={item.price}></ProductTemp>
            })}
        </div>
    </div>
  )
}
