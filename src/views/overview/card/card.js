import { useRecoilValue } from "recoil";
import { SocialDetailState } from "../../../stores/overview/states";
import CardHeader from "./cardheader/cardheader";
import Status from "./status/status";
import Recent from "./recent/recent";
import Chart from "./chart/charts";
import "./card.css";

const Card = () => {
  const socialdetail = useRecoilValue(SocialDetailState);
  const socialMediaTotal = socialdetail.map(
    (item) => item.metrics.impressions.total
  );

  return (
    <div className="card_overall">
      <CardHeader />
      <div className="card_content">
        <div className="card_content_left">
          <div className="card_content">
            <div className="impression_icon">
              <i className="ri-eye-fill eye_icon"></i>
            </div>
            <div>
              <div className="graph_title">POST IMPRESSION</div>
              <div className="card_content">
                <div className="graph_number">
                  {socialMediaTotal.length > 0
                    ? socialMediaTotal.reduce((a, b) => a + b)
                    : ""}
                </div>
                <div className="graph_percentage">%</div>
              </div>
            </div>
          </div>
          <div className="bar_graph">
            <Chart />
          </div>
        </div>
        <div className="card_content_right">
          <Status />
          <div className="card_content_recent">
            <Recent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
