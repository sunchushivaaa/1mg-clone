import React, { useEffect, useState } from 'react'
import {useSearchParams} from"react-router-dom";
import "../Styles/UserSide/sidebar.css"
const Sidebar = ({order}) => {
   const[searchParams,setSearchParams]=useSearchParams();
   const initialState=searchParams.getAll("category");
   const initialRating=searchParams.getAll("rating");
  const[rating,setRating]=useState(initialRating || []);
   const[category,setCategory]=useState(initialState||[]);
 
    const handleChange=(e)=>{
         const newCategory=[...category];
        const value=e.target.value;
         if(newCategory.includes(value)){
            newCategory.splice(newCategory.indexOf(value),1)
         }else{
            newCategory.push(value)
         }
         setCategory(newCategory)
   }

   const handleRating=(e)=>{
      const newRating=[...rating];
      let value=e.target.value;
      if(newRating.includes(value)){
        newRating.splice(newRating.indexOf(value),1)
      }else{
        newRating.push(value)
      }
      setRating(newRating)
    }
   useEffect(()=>{

      let params={
         category,
         rating,
      }
      order && (params.order=order);
      setSearchParams(params)
   },[category,order,rating])


  return (
    <div className='sidebar_main'>
         <div style={{borderBottom:"1px solid #F5EAEA"}}>
            <h2>Filters</h2>
         </div>
         <div style={{borderBottom:"1px solid #F5EAEA",marginTop:"20px",color:"red"}}>
           <p>Filter By Categories</p>
        </div>
        <div style={{marginTop:"10px"}}>
           <input type="checkbox"  style={{width:"20px",height:"20px"}} value="vitamins" onChange={handleChange} checked={category.includes("vitamins")}/>
           <label style={{marginLeft:"20px"}}>Vitamins & Minerals</label>
        </div>
        <div style={{marginTop:"5px"}}>
           <input type="checkbox"  style={{width:"20px",height:"20px"}} value="nutrition" onChange={handleChange} checked={category.includes("nutrition")}/>
           <label style={{marginLeft:"20px"}}>Nutritional Drinks</label>
        </div>
        <div style={{marginTop:"5px"}}>
           <input type="checkbox"  style={{width:"20px",height:"20px"}} value="personalCare" onChange={handleChange} checked={category.includes("personalCare")}/>
           <label style={{marginLeft:"20px"}}>Personal Care</label>
        </div>
        <div style={{marginTop:"5px"}}>
           <input type="checkbox"  style={{width:"20px",height:"20px"}} value="skinCare" onChange={handleChange} checked={category.includes("skinCare")}/>
           <label style={{marginLeft:"20px"}}>Skin Care</label>
        </div>
        <div style={{marginTop:"5px"}}>
           <input type="checkbox"  style={{width:"20px",height:"20px"}} value="ayurveda" onChange={handleChange} checked={category.includes("ayurveda")}/>
           <label style={{marginLeft:"20px"}}>Ayurveda</label>
        </div>
        <div style={{borderBottom:"1px solid #F5EAEA",marginTop:"20px",color:"red"}}>
           <p>Filter By Rating</p>
        </div>
        <div style={{marginTop:"10px"}}>
            <input  type="checkbox" style={{width:"20px",height:"20px"}} value="1" onChange={handleRating} checked={rating.includes("1")}/>
           <label style={{fontSize:"20px",marginLeft:"10px"}}>{"\u2605 \u2606 \u2606 \u2606 \u2606"}</label>
        </div>
        <div style={{marginTop:"10px"}}>
            <input  type="checkbox" style={{width:"20px",height:"20px"}}  value="2" onChange={handleRating} checked={rating.includes("2")}/>
            <label style={{fontSize:"20px",marginLeft:"10px"}}>{"\u2605 \u2605 \u2606 \u2606 \u2606"}</label>
         </div>
         <div style={{marginTop:"10px"}}>
             <input  type="checkbox" style={{width:"20px",height:"20px"}}  value="3" onChange={handleRating} checked={rating.includes("3")}/>
             <label style={{fontSize:"20px",marginLeft:"10px"}}>{"\u2605 \u2605 \u2605 \u2606 \u2606"}</label>
          </div>
           <div style={{marginTop:"10px"}}>
                <input  type="checkbox" style={{width:"20px",height:"20px"}}  value="4" onChange={handleRating} checked={rating.includes("4")}/>
                <label style={{fontSize:"20px",marginLeft:"10px"}}>{"\u2605 \u2605 \u2605 \u2605 \u2606"}</label>
           </div>
           <div style={{marginTop:"10px"}}>
                 <input  type="checkbox" style={{width:"20px",height:"20px"}}  value="5" onChange={handleRating} checked={rating.includes("5")}/>
                 <label style={{fontSize:"20px",marginLeft:"10px"}}>{"\u2605 \u2605 \u2605 \u2605 \u2605"}</label>
           </div>
    </div>
  )
}

export default Sidebar;


