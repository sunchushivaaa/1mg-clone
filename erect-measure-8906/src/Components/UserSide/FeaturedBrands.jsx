import React from 'react'
import "../Styles/FeaturedBrands.css"

function FeaturedBrands({img,name}) {
  return (
    <div className='FeaturedBrands_main'>
    <div className='FeaturedBrands'>
      <img className='FeaturedBrands_img' src={img} alt="" />
      <h4>{name}</h4>
  </div>
</div>
  )
}

export default FeaturedBrands