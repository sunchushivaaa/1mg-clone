import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/UserSide/DoctorComponent3.scss";
import axios from "axios";
import { toast } from "react-hot-toast";


function DoctorComponent3() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [data, setData] = useState([]);
  const [popup, setPopup] = useState("none");
  const handleclick = () => {
    setPopup("block");
  };
  const closePopup = () => {
    setPopup("none");
  };
 
  // craete a data to the data base
  const handleSubmit = (e) => {
    e.preventDefault();
   
  };
  const submitChiththa = () => {
    const Form = {
      name,
      age,
      gender,
    };
    axios.post("https://dark-gray-hare-toga.cyclic.app//consult/add", Form).then((res) => {
      toast.success("User added Successfully")
      
    });

    // get the data from data base
  };
  axios.get("https://dark-gray-hare-toga.cyclic.app/consult").then((res) => {
    setData(res.data);
  });

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
        {data.map((item) => (
          <div className="maped">
            <div>
              <h4>NAME</h4>
              <p>{item.name}</p>
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
                // value={chiththa.patient}
                value={name}
                required
                // onChange={(e) => handlechange(e)}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                name="age"
                placeholder="Enter patient's age"
                // value={chiththa.age}
                value={age}
                required
                // onChange={(e) => handlechange(e)}
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
            <label className="gendertag">Gender</label>
            <select
              // value={chiththa.gender}
              name="gender"
              id=""
              // onChange={(e) => handlechange(e)}
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="Choose_option">Choose option</option>
              <option value="male">male</option>
              <option value="female">female</option>
            </select>
            <button onClick={submitChiththa} type="submit">
              Submit
            </button>
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
