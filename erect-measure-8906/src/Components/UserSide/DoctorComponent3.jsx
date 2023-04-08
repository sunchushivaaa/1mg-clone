import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/UserSide/DoctorComponent3.scss";
const initialState = {
  patient: "",
  age: "",
  gender: "Choose_option",
};

function DoctorComponent3() {
  const [chiththa, setcCiththa] = useState(initialState);
  const [popup, setPopup] = useState("none");
  const [form, setForm] = useState([{
    patient: "Abu Osama",
    age: "25",
    gender: "male",
  }]);

  const handleclick = () => {
    setPopup("block");
  };
  const closePopup = () => {
    setPopup("none");
  };
  const handlechange = (e) => {
    const { name, value } = e.target;
    setcCiththa((prev) => {
      return { ...prev, [name]: name === "age" ? value : value };
    });

  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const submitChiththa = () => {
    // setForm([...form, chiththa]);
    // setcCiththa(initialState);
    // closePopup();
    if(chiththa.patient.trim().length>0 && chiththa.age.trim().length>0 && chiththa.patient!=="Choose_option"  ){
 setForm([...form, chiththa]);
    setcCiththa(initialState);
    closePopup();
    }else{
      alert("Please fill all required fields")
    }
  };

  return (
    <div id="doctorform" className="doctorform">
      <div className="top_section">
        <div className="info_section">
          <h2>Who are you consulting for ?</h2>
          <p>
            Select person you want to consult for and your preferred mode of
            consultation
          </p>
        </div>
        <div>
          <img
            src="https://onemg.gumlet.io/marketing/41db3546-84e8-4317-9a8f-dd24f17973f9.png"
            alt=""
          />
        </div>
      </div>
      <div className="data_section">
        {form.map((item) => (
          <div className="maped">
            <div>
              <h4>NAME</h4>
              <p>{item.patient}</p>
              <h4>AGE</h4>
              <p>{item.age}</p>
              <h4>GENDER</h4>
              <p>{item.gender}</p>
            </div>
          </div>
        ))}
      </div>
      <div>
        <button onClick={handleclick} className="memberAdd">
          + Add New Member
        </button>
      </div>
      <div className="contact_section">
        <label>Patient phone number</label>
        <input type="text" name="" id="" placeholder="7070835551" />
      </div>
      <div className="Chat_section">
        <p>What is your preferred mode of consultation?</p>
        <button className="chat_button">Video</button>
        <button className="chat_button">Audio</button>
        <button className="chat_button">Chat</button>
      </div>
      <div id="proceed">
        <Link to={"/symptoms"}>
          <button className="proceed">Proceed</button>
        </Link>
      </div>
      <div style={{ display: popup }} className="Dc-popup">
        <div className="whitePopup">
          <h3>Add patient</h3>
          <form
            onSubmit={(e) => {
              handleSubmit(e);
              // setcCiththa(initialState)
            }}
          >
            <div>
              <input
                type="text"
                placeholder="Enter patient's name"
                name="patient"
                value={chiththa.patient}
                required
                onChange={(e) => handlechange(e)}
              />
            </div>
            <div>
              <input
                type="text"
                name="age"
                placeholder="Enter patient's age"
                value={chiththa.age}
                required
                onChange={(e) => handlechange(e)}
              />
            </div>
            <label className="gendertag">Gender</label>
            <select
              value={chiththa.gender}
              name="gender"
              id=""
              onChange={(e) => handlechange(e)}
            >
              <option value="Choose_option">Choose option</option>
              <option value="male">male</option>
              <option value="female">female</option>
            </select>
            <button onClick={submitChiththa} type="submit" >Submit</button>
            <button className="closeForm" onClick={closePopup}>
              Cancel
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default DoctorComponent3;
