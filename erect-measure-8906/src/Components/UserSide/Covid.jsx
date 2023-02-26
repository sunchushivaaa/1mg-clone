import React from "react";
import "../Styles/UserSide/Covid.scss";

function Covid() {
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
          <button className="book_now">BOOK NOW</button>
        </div>
        <div>
          <img
            src="https://marketing-compaigns.s3.ap-south-1.amazonaws.com/emailer/Corona_landing_page/rtpcr.png"
            alt=""
          />
        </div>
      </div>

      <div>
        <h1>COVID Essentials: Everything you need</h1>
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
    </div>
  );
}

export default Covid;
