import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/UserSide/DoctorComponent3.scss";
const initialState = [
  {
    name: "Abu osama",
    age: 26,
  },
  {
    name: "Abu osama",
    age: 26,
  },
  {
    name: "Abu osama",
    age: 26,
  },
  {
    name: "Abu osama",
    age: 26,
  },
];

function DoctorComponent3() {
  const [data, setData] = useState(initialState);

  const handleclick = () => {
    setData([...data, { name: "masai", age: 30 }]);
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
        {data.map((item) => (
          <div className="maped">
            <div>
              <h4>{item.name}</h4>
              <p>{item.age}</p>
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
       <Link to={"/symptoms"}> <button  className="proceed">Proceed</button> </Link>
      </div>
    </div>
  );
}

export default DoctorComponent3;
