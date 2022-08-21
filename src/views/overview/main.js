import { useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { useCookies } from "react-cookie";

import { SelectedClientListState } from "../../stores/client/client-list";
import { socialDetailState } from "./../../stores/overview/states";
import { API_HOST, APIS } from "../../assets/constants/api";
import { UserDetailsState, UserState } from "../../stores/user/states";
import { SelectedClientState } from "../../stores/client/state";
import { LoaderState } from "../../stores/loader/loader";
import SideMenuBar from "./sidemenubar/sidemenubar";
import Card from "./card/card";
import "./main.css";

export const SOCIALS = [
  "facebook",
  "instagram",
  "twitter",
  "youtube",
  "linkedin",
];
const Main = () => {
  const [clientDetail, setClientDetail] = useRecoilState(SelectedClientState);
  const setUser = useSetRecoilState(UserState);
  const setClientListDetail = useSetRecoilState(SelectedClientListState);
  const setSocialDetail = useSetRecoilState(socialDetailState);
  const setUserDetail = useSetRecoilState(UserDetailsState);
  const setIsLoader = useSetRecoilState(LoaderState);
  const [cookies] = useCookies();

  const getUserData = () => {
    fetch(API_HOST + APIS.USER, {
      headers: {
        Authorization: `Bearer ${cookies.accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setUserDetail(res.data[0]);
        setUser({ name: `${res.data[0].name}`, email: `${res.data[0].email}` });
      });
  };
  useEffect(() => {
    getUserData();
    getClientData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    getInsightsData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clientDetail]);

  const getClientData = () => {
    fetch(API_HOST + APIS.CLIENT, {
      headers: {
        Authorization: `Bearer ${cookies.accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.data.length > 0) {
          setClientDetail(res.data[0]);
          setClientListDetail(res.data);
        }
      });
  };

  const getInsightsData = () => {
    if (clientDetail?.id) {
      fetch(API_HOST + APIS.OVERVIEW + clientDetail.id + APIS.OVERVIEW_DATE, {
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
    <div className="card_container">
      <SideMenuBar />
      <div className="main_overall">
        <div className="main_overview">Overview</div>
        <Card />
      </div>
    </div>
  );
};
export default Main;
