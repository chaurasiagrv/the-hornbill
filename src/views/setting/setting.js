import { useRecoilState } from "recoil";
import { UserDetailsState, UserState } from "../../stores/user/states";
import { APIS, API_HOST } from "../../assets/constants/api";
import SideMenuBar from "../overview/sidemenubar/sidemenubar";
import Currency from "./currency/currency";
import TimeZone from "./timezone/timezone";
import "./setting.css";
import { useCookies } from "react-cookie";

const Setting = () => {
  const [userDetail, setUserDetail] = useRecoilState(UserDetailsState);
  const [user, setUser] = useRecoilState(UserState);
  const [cookies] = useCookies();
  const getUserData = () => {
    console.log("--------");
    fetch(API_HOST + APIS.USER + userDetail.id, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${cookies.accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: user.name,
        email: user.email,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        setUserDetail(res);
        setUser({ name: `${res.name}`, email: `${res.email}` });
        console.log("=======", res);
      });
  };

  return (
    <div className="card_container">
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
                <input
                  type="file"
                  className="upload_profile_img_input_img profile_img"
                />
                <img src={userDetail.avatar} className="profile_img" alt="" />
                <input type="file" className="upload_profile_img_input" />
                <div className="upload_profile_img">Change Avatar</div>
              </div>
              <label className="profile_name">
                Name
                <input
                  className="profile_input"
                  type="text"
                  placeholder="Name"
                  onChange={(e) => setUser({ name: `${e.target.value}` })}
                  value={user.name}
                />
              </label>
              <label className="profile_name">
                Email
                <input
                  className="profile_input"
                  type="email"
                  placeholder="email"
                  onChange={(e) => setUser({ email: `${e.target.value}` })}
                  value={user.email}
                />
              </label>
              <div className="profile_name">Timezone</div>
              <TimeZone />
              <div className="profile_name">Default Currency</div>
              <Currency />
              <button
                className="update_profile_btn"
                onClick={() => getUserData()}
              >
                Update Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Setting;
