import React from 'react'
import "../Styles/UserSide/ShopHealth.scss"
import { useNavigate } from 'react-router-dom'

function ShopHealth({img,name}) {

  const navigate=useNavigate()
  const moveto=()=>{
    navigate("/medicines")
     }
  return (
  
  <div onClick={moveto} id='Shop_by_health_concerns_main ' className='Shop_by_health_concerns_main'>

        <img  src={img} alt="" />
        <h5>{name}</h5>
   
  </div>
  )
}

export default ShopHealth