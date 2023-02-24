import React from 'react'
import "../Styles/UserSide/ShopHealth.scss"

function ShopHealth({img,name}) {
  return (
  
  <div id='Shop_by_health_concerns_main ' className='Shop_by_health_concerns_main'>

        <img  src={img} alt="" />
        <h5>{name}</h5>
   
  </div>
  )
}

export default ShopHealth