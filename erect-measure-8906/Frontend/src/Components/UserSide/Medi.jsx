import React, { useState } from 'react'
import "../Styles/UserSide/medi.scss";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Medi() {
    const [medi, setMedi] = useState([]);
    const navigate=useNavigate()
    const movingtoward=()=>{
navigate("/medicines")
    }

  axios
    .get("https://dark-gray-hare-toga.cyclic.app/medi")
    .then((res) =>  setMedi(res.data));

  return (
    <div onClick={movingtoward} className='medi' id='medi'>
        {medi.map((item)=>(
            <div className='main_medi'>
    <div className='image_size'>
<img src={item.img} alt="" />
    </div>
    <div>
    <h3>{item.name}</h3>
    </div>
    <div>
       
        <p>{item.description}</p>

    </div>
</div>
        ))}

    </div>
  )
}

export default Medi