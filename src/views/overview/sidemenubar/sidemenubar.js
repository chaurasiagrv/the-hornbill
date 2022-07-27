import { useCookies } from "react-cookie";
import { useRecoilValue } from "recoil";
import { useHistory } from "react-router-dom";
import { UserDetailsState } from "./../../../stores/user/states";
import "./sidemenubar.css";

const SideMenuBar = () => {
  const response = useRecoilValue(UserDetailsState);
  const [removeCookie] = useCookies(["token"]);
  const history = useHistory();

  const logout = () => {
    removeCookie("accessToken");
    history.push("/login");
  };
  return (
    <div className="main_side_bar">
      <button onClick={logout} className="profile_btn">
        <img src={response.avatar} className="profile_btn" />
      </button>
    </div>
  );
};
export default SideMenuBar;
