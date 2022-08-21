import { useRecoilValue } from "recoil";
import { socialDetailState } from "../../../stores/overview/states";
import CardHeader from "./cardheader/cardheader";
import Status from "./status/status";
import Recent from "./recent/recent";
import Chart from "./chart/charts";
import "./card.css";
import Spinner from "./../../../components/loader/loader";
import { LoaderState } from "../../../stores/loader/loader";

const Card = () => {
  const isLoader = useRecoilValue(LoaderState);
  const socialDetail = useRecoilValue(socialDetailState);
  const socialMediaTotal = socialDetail.map(
    (item) => item.metrics.impressions?.total ?? 0
  );
  if (socialDetail.length) {
    return (
      <div className="card_overall">
        {isLoader ? (
          <Spinner />
        ) : (
          <>
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
          </>
        )}
      </div>
    );
  } else {
    return (
      <div className="card_overall">
        {isLoader ? (
          <Spinner />
        ) : (
          <div className="on_error_card">
            You need to connect a data source to start seeing data.
          </div>
        )}
      </div>
    );
  }
};

export default Card;
