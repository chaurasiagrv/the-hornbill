import { useRecoilValue } from "recoil";
import { socialDetailState } from "../../../../stores/overview/states";
import "./status.css";

const Status = () => {
  const socialDetail = useRecoilValue(socialDetailState);
  const socialClickTotal = socialDetail.map(
    (item) => item.metrics.clicks?.total ?? 0
  );
  const socialLikeTotal = socialDetail.map(
    (item) => item.metrics.likes?.total ?? 0
  );
  const socialCommentTotal = socialDetail.map(
    (item) => item.metrics.comments?.total ?? 0
  );
  return (
    <div className="card_content_status">
      <div className="card_content_status_detail">
        <div className="card_content_status_icon">
          <i className="ri-heart-fill status_icon"></i>
        </div>
        <div className="status_icon_title">Likes</div>
        <div className="status_icon_view"> {socialLikeTotal.length > 0
            ? socialLikeTotal.reduce((a, b) => a + b)
            : ""}</div>
        <div className="status_icon_percentage">-100%</div>
      </div>
      <div className="card_content_status_detail">
        <div className="card_content_status_icon">
          <i className="ri-message-2-fill status_icon"></i>
        </div>
        <div className="status_icon_title">Comments</div>
        <div className="status_icon_view">  {socialCommentTotal.length > 0
            ? socialCommentTotal.reduce((a, b) => a + b)
            : ""}</div>
        <div className="status_icon_percentage">-100%</div>
      </div>
      <div className="card_content_status_detail">
        <div className="card_content_status_icon">
          <i className="ri-mouse-fill status_icon"></i>
        </div>
        <div className="status_icon_title">Clicks</div>
        <div className="status_icon_view">
          {socialClickTotal.length > 0
            ? socialClickTotal.reduce((a, b) => a + b)
            : ""}
        </div>
        <div className="status_icon_percentage">-100%</div>
      </div>
    </div>
  );
};
export default Status;
