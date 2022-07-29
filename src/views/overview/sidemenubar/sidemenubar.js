import { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useRecoilValue } from "recoil";
import Tippy from "@tippyjs/react";

import { UserDetailsState } from "./../../../stores/user/states";
import UserProfile from "./userprofile/userprofile";
import "tippy.js/dist/tippy.css";
import "./sidemenubar.css";

const SideMenuBar = () => {

  const response = useRecoilValue(UserDetailsState);
  const [userProfile, setUserProfile] = useState(false);

  const history = useHistory();
  const location = useLocation();

  const setting = () => {
    history.push("/setting");
  };

  return (
    <div className="main_side_bar">
      <Tippy content="Setting" placement="right">
        <i
          className="ri-settings-line setting_btn"
          onClick={setting}
          style={{
            color:
              location.pathname === "/setting"
                ? "var(--c-purple-dark)"
                : "var(--c-ink-light)",
          }}
        ></i>
      </Tippy>
      <Tippy
        content={`User profile
       ${response.name}`}
        placement="right"
      >
        <img
          src={response.avatar}
          onClick={() => setUserProfile((prestate) => !prestate)}
          className="profile_btn"
        />
      </Tippy>
      {userProfile && <UserProfile />}
    </div>
  );
};
export default SideMenuBar;
