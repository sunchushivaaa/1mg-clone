import React from 'react'
import "../Styles/ShopHealth.css"

function ShopHealth({img,name}) {
  return (
  
  <div className='Shop_by_health_concerns_main'>

        <img  src={img} alt="" />
        <h5>{name}</h5>
   
  </div>
  )
}

export default ShopHealth