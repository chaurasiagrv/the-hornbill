import { useRecoilValue } from "recoil";
import { UserDetailsState } from "../../stores/user/states";
import SideMenuBar from "../overview/sidemenubar/sidemenubar";
import Currency from "./currency/currency";
import TimeZone from "./timezone/timezone";
import "./setting.css";

const Setting = () => {
  const response = useRecoilValue(UserDetailsState);
  //   console.log("response------", response);
  return (
    <div className="card_content">
      <SideMenuBar />
      <div className="setting_overall">
        <div className="profile_card">
          <div className="profile_left">
            <h3>Profile Details</h3>
            <p className="profile_left_info">
              Change your avatar, name, or even your email to whatever you
              fancy.
            </p>
          </div>
          <div className="profile_right">
            <div className="profile_right_inner">
              <div className="profile_img_container">
                <img src={response.avatar} className="profile_img" />
                <div className="upload_profile_img">Change Avatar</div>
              </div>
              <label className="profile_name">
                Name
                <input
                  className="profile_input"
                  type="text"
                  placeholder="Name"
                  value={response.name}
                />
              </label>
              <label className="profile_name">
                Email
                <input
                  className="profile_input"
                  type="email"
                  placeholder="email"
                  value={response.email}
                />
              </label>
              <div className="profile_name">Timezone</div>
              <TimeZone />
              <div className="profile_name">Default Currency</div>
              <Currency />
              <button className="update_profile_btn">Update Profile</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Setting;
