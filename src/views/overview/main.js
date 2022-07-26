import "./main.css";
import Facebook from "./../../Data Base/facebook.png";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import Status from "./status/status";

const Main = () => {
  return (
    <div className="card_content">
      <div className="main_side_bar"></div>
      <div className="main_overall">
        <div className="main_overview">Overview</div>
        <div className="card_overall">
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
          <div className="card_content">
            <div className="card_content_left">
              <div className="card_content">
                <div className="impression_icon">
                  <i class="ri-eye-fill eye_icon"></i>
                </div>
                <div>
                  <div className="graph_title">POST IMPRESSION</div>
                  <div className="card_content">
                    <div className="graph_number">4</div>
                    <div className="graph_percentage">-93%</div>
                  </div>
                </div>
              </div>
              <div className="bar_graph">
                {/* <Chart /> */}
              </div>
            </div>
            <div className="card_content_right">
              <Status />
              <div className="card_content_recent">
                <div className="card_content_recent-posts">Recent posts</div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Main;
