import { useRecoilValue } from "recoil";
import Tippy from "@tippyjs/react";
import { socialDetailState } from "../../../../stores/overview/states";
import "tippy.js/dist/tippy.css";
import "./cardheader.css";

const CardHeader = () => {
  const socialDetail = useRecoilValue(socialDetailState);
  return (
    <>
      <div className="card_header">
        <div className="card_header_detail">
          <div className="card_header_title">Social media</div>
          <div className="card_header_last-seen">Last 28 days</div>
        </div>
        <div className="card_header_detail">
          <div className="card_header_data-source">
            Data source ({socialDetail.map((item) => item.datasource).length}):
          </div>
          {socialDetail
            .map((item) => item.datasource)
            .map((icon) => (
              <div className="card_header_detail">
                <Tippy content="Sparrow Charts">
                  <div className="card_header_fb">
                    <i className={`ri-${icon}-fill _${icon}`}></i>
                  </div>
                </Tippy>
              </div>
            ))}
          <button className="see-more_btn">See more</button>
        </div>
      </div>
    </>
  );
};

export default CardHeader;
