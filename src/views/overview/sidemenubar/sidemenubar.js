import { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { useCookies } from "react-cookie";
import Tippy from "@tippyjs/react";

import { UserDetailsState } from "./../../../stores/user/states";
import UserProfile from "./userprofile/userprofile";
import { SelectedClientListState } from "../../../stores/client/client-list";
import { APIS, API_HOST } from "../../../assets/constants/api";
import { socialDetailState } from "../../../stores/overview/states";
import { SOCIALS } from "../main";
import "tippy.js/dist/tippy.css";
import "./sidemenubar.css";
import { LoaderState } from "../../../stores/loader/loader";

const SideMenuBar = () => {
  const userprofile = useRecoilValue(UserDetailsState);
  const clientListDetail = useRecoilValue(SelectedClientListState);
  const setSocialDetail = useSetRecoilState(socialDetailState);
  const setIsLoader = useSetRecoilState(LoaderState);
  const [userProfile, setUserProfile] = useState(false);
  const history = useHistory();
  const location = useLocation();
  const [cookies] = useCookies();

  const setting = () => {
    history.push("/setting");
  };
  const getInsightsData = (item) => {
    history.push("/main");
    
    setIsLoader(true);
    if (item?.id) {
      fetch(API_HOST + APIS.OVERVIEW + item.id + APIS.OVERVIEW_DATE, {
        headers: {
          Authorization: `Bearer ${cookies.accessToken}`,
        },
      })
        .then((res) => res.json())
        .then((res) => {
          const setSocialDetail1 = res.data.filter((item) =>
            SOCIALS.includes(item.datasource)
          );
          setSocialDetail(setSocialDetail1);
          setIsLoader(false);
        });
    }
  };

  return (
    <div className="main_side_bar">
      <div className="main_side_bottom">
        {clientListDetail.map((item, index) => (
          <Tippy content={`Workspace ${item?.name}`} placement="right">
            <div onClick={() => getInsightsData(item)} key={index}>
              <img src={item?.logo} alt="" className="workspace_icon" />
            </div>
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
          <div onClick={() => setUserProfile((prestate) => !prestate)}>
            <img src={userprofile?.avatar} className="profile_btn" alt="user" />
          </div>
        </Tippy>
      </div>
      {userProfile && <UserProfile />}
    </div>
  );
};
export default SideMenuBar;
