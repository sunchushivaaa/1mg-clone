import React from "react";
import "../Styles/UserSide/Covid.scss";
import { useNavigate } from "react-router-dom";
import Information from "./Information";

function Covid() {
  const navigate = useNavigate();
  const booking = () => {
    navigate("/consultdoctor");
  };
  return (
    <div id="covid" className="covid">
      <div className="description">
        <div className="des-1">
          <h1>Combating Coronavirus in India</h1>
          <h4>
            As we are staring at a potential rise of coronavirus in India,
            testing, tracing and treating is the ideal way of curbing this
            spread. Testing on time helps provide early treatment which, in
            turn, prevents the spread to your loved ones and others around you.
            <h1>--------------------------------------------------</h1>
          </h4>
          <h4>
            Experiencing COVID-like symptoms? To book a COVID-19 test at home,
            call on
          </h4>
          <h2 className="num">1800- 212- 2353</h2>
        </div>
        <div className="des-2">
          <img
            src="https://marketing-compaigns.s3.ap-south-1.amazonaws.com/emailer/Corona_landing_page/img-head.png"
            alt=""
          />
        </div>
      </div>
      <div className="description-2">
        <div className="d1">
          <h1>COVID-19 RT-PCR test</h1>
          <h2>Gold standard test to detect active coronavirus infection</h2>
          <button onClick={booking} className="book_now">
            BOOK NOW
          </button>
        </div>
        <div>
          <img
            width="100%"
            src="https://marketing-compaigns.s3.ap-south-1.amazonaws.com/emailer/Corona_landing_page/rtpcr.png"
            alt=""
          />
        </div>
      </div>
      <div className="description-2">
        <div className="d1">
          <h1>COVID-19 & latest treatment modalities</h1>
          <p>
            To prepare for the imminent threats of this virus, scientists and
            researchers are constantly developing newer treatment strategies.
            One such new treatment option includes monoclonal antibodies. Want
            to know more about these available treatments and how they work
            against COVID variants, including Delta and Omicron?
          </p>
          <button className="book_now">READ THE ARTICLE</button>
        </div>
        <div>
          <img
            width="100%"
            src="https://marketing-compaigns.s3.ap-south-1.amazonaws.com/emailer/Corona_landing_page/hand.png"
            alt=""
          />
        </div>
      </div>

      <div className="grid_main">
        <h1  style={{textAlign: "center", margin: "20px 0px"}} className="heading">COVID Essentials: Everything you need</h1>
        <div className="grid-view">
          <div>
            <img
              src="https://marketing-compaigns.s3.ap-south-1.amazonaws.com/emailer/Corona_landing_page/cold-cough.png"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://marketing-compaigns.s3.ap-south-1.amazonaws.com/emailer/Corona_landing_page/track-your-vitals.png"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://marketing-compaigns.s3.ap-south-1.amazonaws.com/emailer/Corona_landing_page/hand-wash.png"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://marketing-compaigns.s3.ap-south-1.amazonaws.com/emailer/Corona_landing_page/mask&face.png"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://marketing-compaigns.s3.ap-south-1.amazonaws.com/emailer/Corona_landing_page/immunity.png"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://marketing-compaigns.s3.ap-south-1.amazonaws.com/emailer/Corona_landing_page/disinfectants.png"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="description-2">
        <div className="d1">
          <h1>Think you may have COVID-19?</h1>
          <h2>
            Talk to a qualified doctor online for FREE & get expert guidance
          </h2>
          <button className="book_now">CALL NOW</button>
        </div>
        <div>
          <img
            width="80%"
            src="https://marketing-compaigns.s3.ap-south-1.amazonaws.com/emailer/Corona_landing_page/talk-now.png"
            alt=""
          />
        </div>
      </div>
      <div className="description-2">
        <div className="d1">
          <h1>Think you have fever, cold or cough?</h1>
          <h2>Talk to our experts online</h2>
          <button onClick={booking} className="book_now">
            CONSULT NOW
          </button>
        </div>
        <div>
          <img
            width="100%"
            src="https://marketing-compaigns.s3.ap-south-1.amazonaws.com/emailer/Corona_landing_page/consult-doc.png"
            alt=""
          />
        </div>
      </div>

      <div className="bookBooks">
        <div className="con_tainer">

        
        <div className="book_des">
          <h1>Prepare, don't panic</h1>
          <h3>
            Counter misinformation and keep yourself updated about all
            COVID-related developments with concise booklets and guides. These
            guides, compiled by the team of doctors at Tata 1mg, are based on
            analysis of data by trusted sources such as the WHO, Lancet,
            National Institute of Communicable Diseases, South Africa, MoHFW &
            discussions with medical experts.
          </h3>
          <select>
            <option value="">SELECT LANGUAGE</option>
            <option value="">HINDI</option>
            <option value="">ENGLISH</option>
          </select>
        </div>
        <div className="download_div_main">
          <div className="download_div">
          <div className="bg_img">
          <img
              src="https://marketing-compaigns.s3.ap-south-1.amazonaws.com/emailer/Corona_landing_page/Home_isolation_tips_by_Tata_1mg.png"
              alt=""
            />
          </div>
            <button>DOWNLOAD E-BOOK </button>
          </div>
          <div className="download_div">
            <img
              src="https://marketing-compaigns.s3.ap-south-1.amazonaws.com/emailer/Corona_landing_page/Home_isolation_tips_by_Tata_1mg.png"
              alt=""
            />
            <button>DOWNLOAD E-BOOK </button>
          </div>
          <div className="download_div">
            <img
              src="https://marketing-compaigns.s3.ap-south-1.amazonaws.com/emailer/Corona_landing_page/Home_isolation_tips_by_Tata_1mg.png"
              alt=""
            />
            <button>DOWNLOAD E-BOOK </button>
          </div>
        </div>
        </div>
      </div>
      <Information/>
    </div>
  );
}

export default Covid;
