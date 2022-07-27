import CardHeader from "./cardheader/cardheader";
import Status from "./status/status";
import Recent from "./recent/recent";
import Chart from "./chart/charts";
import "./card.css";

const Card = () => {
  return (
    <>
      <CardHeader />
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
            <Chart />
          </div>
        </div>
        <div className="card_content_right">
          <Status />
          <div className="card_content_recent">
            <div className="card_content_recent-posts">
              <Recent />{" "}
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
