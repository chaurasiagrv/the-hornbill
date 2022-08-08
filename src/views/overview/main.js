import { useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { useCookies } from "react-cookie";

import { SocialDetailState } from "./../../stores/overview/states";
import { API_HOST, APIS } from "../../assets/constants/api";
import { UserDetailsState } from "../../stores/user/states";
import { SelectedClientState } from "../../stores/client/state";
import SideMenuBar from "./sidemenubar/sidemenubar";
import Card from "./card/card";
import "./main.css";

const Main = () => {
  const [clientdetail, setclientdetail] = useRecoilState(SelectedClientState);
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
    getClientdata();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    getInsightsData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clientdetail]);

  const getClientdata = () => {
    fetch(API_HOST + APIS.CLIENT, {
      headers: {
        Authorization: `Bearer ${cookies.accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.data.length > 0) {
          setclientdetail(res.data[1]);
        }
      });
  };

  const getInsightsData = () => {
    console.log("getinsight===", clientdetail);

    if (clientdetail?.id) {
      fetch(API_HOST + APIS.OVERVIEW + clientdetail.id + APIS.OVERVIEW_DATE, {
        headers: {
          Authorization: `Bearer ${cookies.accessToken}`,
        },
      })
        .then((res) => res.json())
        .then((res) => {
          const setsocialdetail1 = res.data.filter(
            (item) =>
              item.datasource === "facebook" || item.datasource === "instagram"
          );
          setsocialdetail(setsocialdetail1);
        });
    }
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
