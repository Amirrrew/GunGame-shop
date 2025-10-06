import React from "react";

export default function Welcome() {

  let TimeCalc = () => {

    return (
      <div className="timeCalc" id="timeCalc">
        <div className="flex gap-4">
          <i className="fa fa-arrow-right cursor-pointer" onClick={TimeCalcoff}></i>
          <div style={{marginTop: '-9px'}} className="text-xl">رزرو گیم سنتر<i className="fa fa-cash"></i></div>
        </div>
        <div className="text-center mt-10">
          <div>
            برای اطلاع از قیمت ها و رزرو تماس بگیرید
          </div>
          <div dir="ltr" className="text-4xl mt-10">
            0903 186 4813
          </div>
          <div className="mt-5">
            تلگرام:
          </div>
          <div className="text-4xl">
            Me_shad@
          </div>
          <div className="mt-10">
            مهندس رجب نژاد
          </div>
        </div>
      </div>
    )
  }

  let TimecalcOn = () => {
    document.getElementById('welcome').style.display = 'none'
    document.getElementById('timeCalc').style.display = 'block'
  }

  let TimeCalcoff = () => {
    document.getElementById('welcome').style.display = 'block'
    document.getElementById('timeCalc').style.display = 'none'
  }


  return (
    <div className="welcome">
      <div className="welcome-text" id="welcome">
        <div className="text-4xl" style={{fontWeight: '700'}}>
          مجموعه گان گیم
        </div>
        <div className="wel-text mt-3">
          گیم زدن ! چیزی که ما همیشه از بچگی عاشقش بودیم و هستیم و شاید خواهیم بود ! با فکر کردن به دنیای گیم همیشه خوش حال میشیم و مشتاق میشیم که بازی های مختلف رو امتحان کنیم ! خلاصه چیزیه که عاشقشیم !
        </div>
        <button className="btn-01 mt-2" onClick={TimecalcOn}>
          رزرو گیم سنتر
        </button>
        <div className="flex justify-center">
          <i className="fa fa-angle-down fa-2x welcome-arrow" style={{marginTop: '18%'}}></i>
        </div>
      </div>
      <TimeCalc></TimeCalc>
    </div>
  )
}
