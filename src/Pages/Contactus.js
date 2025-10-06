import React from 'react'

export default function Contactus() {

  let Contemp = ({icon ,title ,text}) => {
    return (
      <div className='contact'>
        <div className='flex justify-center'>
          <div className='icon-box'>
            <img className='m-[42px] w-16 ' src={icon}></img>
          </div>
        </div>
        <div className='mt-[-25px]'>
          <div className='text-xl'>
            {title}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className='mt-48'>
      <div className='flex justify-center'>
        <div className='text-4xl'>
          ارتباط باما
        </div>
      </div>
      <div className='flex justify-center'>
        <div>
          <div className='p-2 mt-4'>
            <div className='text-xl bg-green-200 py-2 mt-2 rounded-xl px-3 text-green-600'>
              <i className='fa fa-info-circle mx-2 pt-1'></i> برای سفارش محصولات ، ارتباط باما ، مشاوره و یا پشتیبانی از یکی از راه های ارتباطی زیر استفاده کنید .
            </div>
          </div>
          <div style={{animation: 'Opening2 1s'}} className='flex justify-center gap-2 flex-wrap mt-20  relative'>
            <div className='contact'>
              <div className='flex justify-center'>
                <div className='icon-box'>
                <img className='m-[42px] w-16 ' src='../icons/telegram.png'></img>
              </div>
            </div>
            <div className='mt-[-25px]'>
              <div className='text-xl'>
                تلگرام
              </div>
              <div className='mt-5'>
                <a className='underline' href='https://t.me/gungamecenter'>
                  @gungamecenter
                </a>
                <div className='p-2 text-gray-400'>
                  جهت اطلاع از قیمت ها و اخبار به کانال تلگرام ما بپیوندید
                </div>
              </div>
            </div>
            </div>
            <div className='contact'>
              <div className='flex justify-center'>
                <div className='icon-box'>
                <img className='m-[42px] w-16 ' src='../icons/instagram.png'></img>
              </div>
            </div>
            <div className='mt-[-25px]'>
              <div className='text-xl'>
                اینستاگرام
              </div>
              <div className='mt-5'>
                <a className='underline' href='https://www.instagram.com/mehr_shaaad/'>
                  mehr_shaaad
                </a>
              </div>
            </div>
            </div>
            <div className='contact'>
              <div className='flex justify-center'>
                <div className='icon-box'>
                <img className='m-[42px] w-16 ' src='../icons/whatsapp.png'></img>
              </div>
            </div>
            <div className='mt-[-25px]'>
              <div className='text-xl'>
                واتساپ
              </div>
              <div className='mt-5'>
                <div dir='ltr'> 
                  0903 186 4813
                </div>
                <div className='mt-2' dir='ltr'> 
                  0911 530 7415
                </div>
              </div>
            </div>
            </div>
            <div className='contact'>
              <div className='flex justify-center'>
                <div className='icon-box'>
                <img className='m-[42px] w-16 ' src='../icons/phone.png'></img>
              </div>
            </div>
            <div className='mt-[-25px]'>
              <div className='text-xl'>
                شماره تماس
              </div>
              <div className='mt-5'>
                <div dir='ltr'> 
                  0903 186 4813
                </div>
                <div className='mt-2' dir='ltr'> 
                  0911 530 7415
                </div>
                <div className='mt-2' dir='ltr'>
                  0905 011 3945
                </div>
              </div>
            </div>
            </div>
            <div className='contact'>
              <div className='flex justify-center'>
                <div className='icon-box'>
                <img className='m-[42px] w-16 ' src='../icons/map.png'></img>
              </div>
            </div>
            <div className='mt-[-25px]'>
              <div className='text-xl'>
                نشانی
              </div>
              <div className='p-5'>
                مازندران - قائمشهر - خیابان جویبار - نبش خزر 9 - مجموعه گان گیم
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
