import Tippy from "@tippyjs/react";
import Facebook from "./../../../../Data Base/facebook.png";
import "tippy.js/dist/tippy.css";
import "./cardheader.css";

const CardHeader = () => {
  return (
    <>
      <div className="card_header">
        <div className="card_header_detail">
          <div className="card_header_title">Social media</div>
          <div className="card_header_last-seen">Last 28 days</div>
        </div>
        <div className="card_header_detail">
          <div className="card_header_data-source">Data source (2):</div>
          <div className="card_header_detail">
            <Tippy content="Techic Paper">
              <div className="card_header_fb">
                <img src={Facebook} alt="F" />
              </div>
            </Tippy>
            <Tippy content="Chakia Beautiful City">
              <div className="card_header_fb">
                <img src={Facebook} alt="F" />
              </div>
            </Tippy>
          </div>
          <button className="see-more_btn">See more</button>
        </div>
      </div>
    </>
  );
};

export default CardHeader;
