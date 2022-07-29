import { useCookies } from "react-cookie";
import { useHistory } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { UserDetailsState } from "../../../../stores/user/states";
import "./userprofile.css";

const UserProfile = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);
  const response = useRecoilValue(UserDetailsState);
  const history = useHistory();
  const logout = () => {
    history.push("/login");
    removeCookie("accessToken");
  };

  return (
    <div className="user-profile_menu">
      <div className="user_profile_container">
        <img src={response.avatar} className="user_profile_img" />
        <div className="my_profile">
          <div className="user_profile_myprofile"> My Profile</div>
          <div className="user_profile_user">{response.name}</div>
        </div>
      </div>
      <div className="user_profile_details _upgrade">
        <i className="ri-arrow-up-line user_profile_details_icon"></i>Upgrade plan
      </div>
      <div className="user_profile_details _knowledge">
        <i className="ri-add-line user_profile_details_icon"></i>Invite new user
      </div>
      <div className="user_profile_details _knowledge" >
        <i className="ri-arrow-right-up-line user_profile_details_icon"></i>
        Knowledge base
      </div>
      <div className="user_profile_details _logout" onClick={logout}>
        <i className="ri-logout-box-r-line user_profile_details_icon"></i>
        Logout
      </div>
    </div>
  );
};
export default UserProfile;
