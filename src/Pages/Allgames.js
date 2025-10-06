import React from 'react';
import { useState } from 'react';

export default function Allgames() {

    let Gametemp = ({id ,img ,title}) => {
        return (
            <div className='game-temp'>
                <img src={img}></img>
                <div className='game-text text-white'>
                    {title}
                </div>
            </div>
        )
    }


    let allgameslist = [
      {id: 0,title: 'EA Sports FC24' ,img: '../images/game-covers/fc24.webp'},
      {id: 1,title: 'eFootball PES 2021' ,img: '../images/game-covers/pes24.jpg'},
      {id: 2,title: 'Call Of Duty Black Ops 3' ,img: '../images/game-covers/Black_Ops_3.jpg'},
      {id: 3,title: 'Grand Theft Auto V' ,img: '../images/game-covers/gtav.jpg'},
      {id: 4,title: 'Mortal Kombat 11' ,img: '../images/game-covers/mk11.png'},
      {id: 5,title: 'Crash team racing Nitro-Fuled' ,img: '../images/game-covers/ctr.png'},
      {id: 6,title: 'PES 2018' ,img: '../images/game-covers/pes18.jpg'},
      {id: 7,title: 'PES 2016' ,img: '../images/game-covers/pes16.jpg'},
      {id: 8,title: 'Need For Speed Heat' ,img: '../images/game-covers/nfs heat.png'},
      {id: 9,title: 'Takken 7' ,img: '../images/game-covers/takken7.jpg'},
      {id: 10,title: 'The last of us Remastered' ,img: '../images/game-covers/tlou1.webp'},
      {id: 11,title: 'The last of us Part II' ,img: '../images/game-covers/tlou2.avif'},
      {id: 12,title: 'Rayman Legends' ,img: '../images/game-covers/rayman.jpg'},
      {id: 12,title: 'Red Dead Redemption II' ,img: '../images/game-covers/rdr2.jpg'},
      {id: 12,title: 'Uncharted 4: A Theifs End' ,img: '../images/game-covers/uncharted4.jpg'},
      {id: 12,title: 'Minecraft' ,img: '../images/game-covers/minecraft.jpg'},
      {id: 12,title: 'Cyberpunk 2077' ,img: '../images/game-covers/Cyberpunk2077.jpg'},
      {id: 12,title: 'Bloodborne' ,img: '../images/game-covers/bloodborne.jpg'},
      {id: 12,title: 'Call of Duty: Black Ops 6' ,img: '../images/game-covers/bo6.png'},
      {id: 12,title: 'Need For Speed Unbound' ,img: '../images/game-covers/nfs unbound.png'},
    ]

    let [post ,setPost] = useState(allgameslist);

  return (
    <div className='flex justify-center mt-48'>
      <div>
        <div className='flex justify-center'>
          <div className='text-4xl'>
            همه بازی های گیم سنتر
          </div>
        </div>
        <div className='flex justify-center mt-5'>
          <div style={{width: '90%' ,animation: 'Opening2 1s'}} className='relative flex justify-center gap-2 mt-10 flex-wrap'>
            {post.map(item => {
              return <Gametemp title={item.title} img={item.img}></Gametemp>
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
