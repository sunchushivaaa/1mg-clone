import React from 'react'
import "../Styles/ShopHealth.css"

function ShopHealth({img,name}) {
  return (
  
  <div className='Shop_by_health_concerns_main'>
      <div className='Shop_by_health_concerns'>
        <img className='ava' src={img} alt="" />
        <h4>{name}</h4>
    </div>
  </div>
  )
}

export default ShopHealth