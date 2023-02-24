import React from 'react'
import { Link } from 'react-router-dom'
import "../Styles/UserSide/DoctorFinal.scss";

function DoctorFinal() {
  return (
    <div id="doctorfinal" className="doctorfinal">
    <div className="top_section">
      <div className="info_section">
        <h2>Select your speciality</h2>
        <p>
        Scroll and select the speciality of your choice
        </p>
      </div>
      <div>
        <img
          src="https://onemg.gumlet.io/marketing/3d0c445a-a194-4c83-851f-15507cadb4a0.png"
          alt=""
        />
      </div>
    </div>
    <div className="data_section">
        <div className="maped">
          <div>
          24x7 Doctor Assistance
          </div>
          
        </div>
        
          <div className="maped">
          Bone & Joint Specialist
          </div>
          <div className="maped">Chest Physician</div>
          <div className="maped">CoronaVirus - COVID related</div>
          <div className="maped">COVID-19_ICICI</div>
          <div className="maped">Diabetes Educator</div>
          <div className="maped">Eye Specialist</div>
          <div className="maped">GP Unit - V</div>
          <div className="maped">GP Unit - VI</div>
          <div className="maped">GP Unit VII</div>
          <div className="maped">Hematoma Consultant</div>
          <div className="maped">MD Physician</div>
          <div className="maped">Nephrologist</div>
          <div className="maped">Physiotherapist</div>
          <div className="maped">Quit Smoking</div>
          <div className="maped">Sexologist</div>
    </div>
    <div>
      <button  className="memberAdd">
      Looking for Alternative Treatment ?
      </button>
    </div>
  
    <div id="proceed">
    <Link to={"/symptoms"} >   <button  className="back">Back</button></Link>
     <Link to={"/"}> <button  className="proceed">Proceed</button> </Link>
    </div>
  </div>
  )
}

export default DoctorFinal