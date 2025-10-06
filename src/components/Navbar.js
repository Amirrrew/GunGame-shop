import React from 'react'
import { NavLink } from 'react-router-dom'

let OpenDrp = () => {
  document.getElementById('navbar').style.height = '100%'
  document.getElementById('drp-btn').style.display = 'none'
  document.getElementById('drp-btn-close').style.display = 'block'
  document.getElementById('drp-dwn').style.display = 'flex'
  document.body.style.overflow = 'hidden'
}

let CloseDrp = () => {
  document.getElementById('drp-btn-close').style.display = 'none'
  document.getElementById('drp-btn').style.display = 'block'
  document.getElementById('navbar').style.height = '110px'
  document.getElementById('drp-dwn').style.display = 'none'
  document.body.style.overflow = 'scroll'
}

export default function Navbar() {


  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      document.getElementById("navbar").style.height = "52px";
      document.getElementById("navbar").style.margin = "10px";
      document.getElementById("navbar").style.borderRadius = "10px";
      document.getElementById("navbar").style.width = "98%";
      document.getElementById("logo").style.width = "50px";
      document.getElementById("nav").style.padding = "10px 20px";
      document.getElementById("social").style.margin = "0px";
      document.getElementById('drp-btn').style.width = '40px'
      document.getElementById('drp-btn').style.margin = '3px'
      document.getElementById('drp-btn').style.height = '40px'
    } else {
      document.getElementById("navbar").style.height = "110px";
      document.getElementById("navbar").style.margin = "0px";
      document.getElementById("navbar").style.borderRadius = "0px";
      document.getElementById("navbar").style.width = "100%";
      document.getElementById("logo").style.width = "100px";
      document.getElementById("nav").style.padding = "40px 20px";
      document.getElementById('drp-btn').style.width = '60px'
      document.getElementById("social").style.margin = "27px";
      document.getElementById('drp-btn').style.height = '60px'
      document.getElementById('drp-btn').style.margin = '35%'

    }
  }


  let NavTemp = ({title}) => {
    return (
      <li onClick={Scrollfix}>
        {title}
      </li>
    )
  }

  let Navtemp2 = ({title}) => {
    return (
      <button className='drpm-button' onClick={CloseDrp}>
        {title}
      </button>
    )
  }

  let SocialTab = () => {
    return (
      <div className='social-tab' id='social'>
        <div>
          <NavLink to='https://t.me/gungamecenter'><img className='nav-icons' src='../icons/telegram.png'></img></NavLink>
        </div>
        <div className='border'></div>
        <div>
          <NavLink to='https://www.instagram.com/mehr_shaaad/'><img className='nav-icons' src='../icons/instagram.png'></img></NavLink>
        </div>
      </div>
    )
  }

  let Scrollfix = () => {
    document.documentElement.scrollTop = 0;
}



  let Drpdown = () => {
    return (
      <div dir="ltr" className="flex justify-start">
        <div id="drp-dwn" className="drp-down">
          <ul className='drp-menu'>
            <NavLink onClick={Scrollfix} to='/'><Navtemp2 title={'خانه'}></Navtemp2></NavLink>
            <NavLink onClick={Scrollfix} to='/Products'><Navtemp2 title={'محصولات'}></Navtemp2></NavLink>
            <NavLink onClick={Scrollfix} to='/Services'><Navtemp2 title={'خدمات'}></Navtemp2></NavLink>
            <NavLink to='/Contact'><Navtemp2 title={'ارتباط باما'}></Navtemp2></NavLink>
            <li className='flex justify-center gap-3 mt-7'>
              <div>
                  <NavLink to='https://t.me/gungamecenter'><img className='nav-icons' src='../icons/telegram.png'></img></NavLink>
                </div>
                <div className='border'></div>
                <div>
                  <NavLink to='https://www.instagram.com/mehr_shaaad/'><img className='nav-icons' src='../icons/instagram.png'></img></NavLink>
              </div>
            </li>
          </ul>
        </div>
      </div>
    )
  }

  return (
    <div className='flex justify-center'>
      <div className='Navbar' id='navbar'>
        <div className='flex justify-between'>
          <div className='flex'>
            <div>
              <NavLink to='/'><img className='logo mx-5' id='logo' src='../images/logos/Gungame-logo.png'></img></NavLink>
            </div>
            <div>
              <ul className='navigation' id='nav'>
                <NavLink onClick={Scrollfix} to='/'><li><button id='white-nav'>صفحه اصلی</button></li></NavLink>
                <NavLink to='/Products'><NavTemp title={'محصولات'}></NavTemp></NavLink>
                <NavLink onClick={Scrollfix} to='/Services'><NavTemp title={'خدمات'}></NavTemp></NavLink>
                <NavLink to='/Contact'><NavTemp title={'ارتباط باما'}></NavTemp></NavLink>
              </ul>
            </div>
          </div>

          <div dir='ltr'>
            <SocialTab></SocialTab>
            <button onClick={OpenDrp} className='drp-btn' id='drp-btn' style={{width: '60px',height: '60px' ,margin: '35%' ,color: '#fff'}}><i className='fa fa-navicon'></i></button>
            <button onClick={CloseDrp} className='drp-btn' id='drp-btn-close' style={{width: '60px',height: '60px' ,margin: '35%' ,color: '#fff' ,display: 'none'}}><i className='fa fa-close'></i></button>
          </div>
        </div>
        <div>
          <Drpdown></Drpdown>
        </div>
      </div>      
    </div>
  )
}
