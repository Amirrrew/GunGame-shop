import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Games() {

    let Gameslist = [
        {id: 0,title: 'EA Sports FC24' ,img: '../images/game-covers/fc24.webp'},
        {id: 1,title: 'eFootball PES 2021' ,img: '../images/game-covers/pes24.jpg'},
        {id: 2,title: 'Call Of Duty Black Ops 3' ,img: '../images/game-covers/Black_Ops_3.jpg'},
        {id: 3,title: 'Grand Theft Auto V' ,img: '../images/game-covers/gtav.jpg'},
        {id: 4,title: 'Mortal Kombat 11' ,img: '../images/game-covers/mk11.png'},
    ]

    let Gametemp = ({id ,img ,title}) => {
        return (
            <div className='game-temp'>
                <img src={img}></img>
                <div className='game-text'>
                    {title}
                </div>
            </div>
        )
    }

    let Scrollfix = () => {
        document.documentElement.scrollTop = 0
    }


    let [post ,setPost] = useState(Gameslist);

  return (
    <div className='games-box'>
      <div className='games-cover'>
      <div className='flex justify-center'>
        <div className='title-box mt-10'>
                <div className='flex'>
                    <i className='fa fa-arrow-left'></i>
                    <div className='text-xl mx-3 m-auto' style={{marginTop: '-7px'}}>
                        بازی های گیم سنتر
                    </div>
                </div>
                <Link onClick={Scrollfix} to='/Games'><button className='btn-01 more'>مشاهده همه</button></Link>
            </div>
        </div>
        <div className='flex flex-wrap justify-center gap-4 mt-10'>
            {post.map(item => {
                return <Gametemp img={item.img} title={item.title}></Gametemp>
            })}
        </div>  
      </div>
    </div>
  )
}
