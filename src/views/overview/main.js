import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { useCookies } from "react-cookie";

import { SocialDetailState } from "./../../stores/overview/states";
import { API_HOST, APIS } from "../../assets/constants/api";
import { UserDetailsState } from "../../stores/user/states";
import SideMenuBar from "./sidemenubar/sidemenubar";
import Card from "./card/card";
import "./main.css";

const Main = () => {
  const setsocialdetail = useSetRecoilState(SocialDetailState);
  const setuserdetail = useSetRecoilState(UserDetailsState);
  const [cookies] = useCookies();

  const getuserdata = () => {
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
  useEffect(() => {
    getuserdata();
    getInsightsData();
  }, []);

  const getInsightsData = () => {
    fetch(
      API_HOST +
        APIS.OVERVIEW +
        "665" +
        "&startDate=2022-06-30&endDate=2022-07-28&includeDefault=true",
      {
        headers: {
          Authorization: `Bearer ${cookies.accessToken}`,
        },
      }
    )
      .then((res) => res.json())
      .then((res) => {
        const setsocialdetail1 = res.data.filter(
          (item) =>
            item.datasource === "facebook" || item.datasource === "instagram"
        );
        setsocialdetail(setsocialdetail1);
        console.log("setsocialdetail1=====", setsocialdetail1);
        console.log(
          "----------",
          setsocialdetail1
            .map((item) => item.metrics.clicks.total)
            .reduce((a, b) => a + b)
        );
      });
  };

  return (
    <div className="card_content">
      <SideMenuBar />
      <div className="main_overall">
        <div className="main_overview">Overview</div>
        <Card />
      </div>
    </div>
  );
};
export default Main;
