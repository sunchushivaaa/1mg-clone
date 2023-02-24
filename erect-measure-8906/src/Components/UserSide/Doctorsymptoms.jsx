import React from 'react'
import "../Styles/UserSide/DoctorSymptoms.scss";
import {Link} from "react-router-dom"

function Doctorsymptoms() {
  return (
    <div id="symptoms" className="symptoms">
      <div className="top_section">
        <div className="info_section">
          <h2>Tell us your symptoms</h2>
          <p>
            Select person you want to consult for and your preferred mode of
            consultation
          </p>
        </div>
        <div>
          <img
            src="https://onemg.gumlet.io/marketing/7190b602-9a6f-41f7-9f79-b2ce7e9f6b71.png"
            alt=""
          />
        </div>
      </div>
    
      <div className="search_section">
        <input type="text" name="" id="" placeholder="search for symptoms you are struggling with" />
      </div>
      <div className="most_searched">
        <p>Most Searched</p>
        <button className="chat_button">Covid</button>
        <button className="chat_button">Cough</button>
        <button className="chat_button">Headache</button>
        <button className="chat_button">Stomach Pain</button>
        <button className="chat_button">Loose Motions</button>
        <button className="chat_button">Premature Ejaculation</button>
        <button className="chat_button">Unprotected Sex</button>
        <button className="chat_button">Missed Period</button>
        <button className="chat_button">Heavy Menstrual Bleeding</button>
        <button className="chat_button">Hairfall</button>
        <button className="chat_button">Acne/Pimples</button>
        <button className="chat_button">Dark Patches on Skin</button>
      </div>
      <div id="proceed">
    <Link to={"/abcd"} >   <button  className="back">Back</button></Link>
       <button  className="proceed">Skip to specialities</button>
       <Link to={"/doctor_final"}>
        <button  className="proceed">Proceed</button> 
       </Link>
      </div>
    </div>
  )
}

export default Doctorsymptoms