import { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import Tippy from "@tippyjs/react";

import { SelectedClientState } from "../../../stores/client/state";
import { UserDetailsState } from "./../../../stores/user/states";
import UserProfile from "./userprofile/userprofile";
import "tippy.js/dist/tippy.css";
import "./sidemenubar.css";
import { SelectedClientListState } from "../../../stores/client/client-list";

const SideMenuBar = () => {
  const userprofile = useRecoilValue(UserDetailsState);
  const setclientdetail = useSetRecoilState(SelectedClientState);
  const clientlistdetail = useRecoilValue(SelectedClientListState);
  const [userProfile, setUserProfile] = useState(false);
  const history = useHistory();
  const location = useLocation();

  const setting = () => {
    history.push("/setting");
  };
console.log("===0==",setclientdetail);
  return (
    <div className="main_side_bar">
      <div className="main_side_bottom">
        {clientlistdetail.map((item) => (
          <Tippy content={`Workspace ${item?.name}`} placement="right">
            <img
              src={item?.logo}
              alt=""
              className="workspace_icon"
              onClick={() => setclientdetail(item)}
            />
          </Tippy>
        ))}
      </div>
      <div className="main_side_bottom">
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
       ${userprofile?.name}`}
          placement="right"
        >
          <img
            src={userprofile?.avatar}
            onClick={() => setUserProfile((prestate) => !prestate)}
            className="profile_btn"
            alt="user"
          />
        </Tippy>
      </div>
      {userProfile && <UserProfile />}
    </div>
  );
};
export default SideMenuBar;
