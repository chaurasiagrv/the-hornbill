import "./status.css";

const Status = () => {
  return (
    <div className="card_content_status">
      <div className="card_content_status_detail">
        <div className="card_content_status_icon">
          <i class="ri-heart-fill status_icon"></i>
        </div>
        <div className="status_icon_title">Likes</div>
        <div className="status_icon_view">0</div>
        <div className="status_icon_percentage">-100%</div>
      </div>
      <div className="card_content_status_detail">
        <div className="card_content_status_icon">
          <i class="ri-message-2-fill status_icon"></i>
        </div>
        <div className="status_icon_title">Comments</div>
        <div className="status_icon_view">0</div>
        <div className="status_icon_percentage">-100%</div>
      </div>
      <div className="card_content_status_detail">
        <div className="card_content_status_icon">
          <i class="ri-mouse-fill status_icon"></i>
        </div>
        <div className="status_icon_title">Clicks</div>
        <div className="status_icon_view">0</div>
        <div className="status_icon_percentage">-100%</div>
      </div>
    </div>
  );
};
export default Status;
