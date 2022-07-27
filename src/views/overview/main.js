import { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import { useCookies } from "react-cookie";
import { API_HOST, APIS } from "../../assets/constants/api";
import { UserDetailsState } from "../../stores/user/states";
import SideMenuBar from "./sidemenubar/sidemenubar";
import Card from "./card/card";
import "./main.css";

const Main = () => {
  const setuserdetail = useSetRecoilState(UserDetailsState);
  const [cookies] = useCookies();

  const getuserdata = () => {
    // API START
    fetch(API_HOST + APIS.USER, {
      headers: {
        Authorization: `Bearer ${cookies.accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setuserdetail(res.data[0]);
      });
  };
  //API END
  useEffect(() => {
    getuserdata();
  }, []);

  return (
    <div className="card_content">
      <SideMenuBar />
      <div className="main_overall">
        <div className="main_overview">Overview</div>
        <div className="card_overall">
          <Card />
        </div>
      </div>
    </div>
  );
};
export default Main;
