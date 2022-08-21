import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useRecoilState } from "recoil";
import { useCookies } from "react-cookie";

import { APIS, API_HOST } from "../../assets/constants/api";
import { UserDetailsState } from "../../stores/user/states";
import HornBillIcon from "./hornbill.png";
import "./login.css";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setisError] = useState(false);
  const [userDetail, setUserDetail] = useRecoilState(UserDetailsState);
  const [isDisable, setIsDisable] = useState(false);
  const [cookies, setCookie] = useCookies(["token"]);
  const history = useHistory();

  const goMain = () => {
    setIsDisable(true);
    
    // API CALL START
    const payload = { email, password, strategy: "local", token: "", id: "" };
    fetch(API_HOST + APIS.AUTHENTICATION, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.accessToken) {
          setCookie("accessToken", res.accessToken);
          history.push("/main");
          // setUserDetail(res);
          setIsDisable(false);
        } else {
          setisError(true);
          setIsDisable(false);
        }
      })
      .catch((err) => {
        setisError(true);
        setIsDisable(false);
      });
    // API CALL END
  };

  return (
    <div>
      <div className="Login_background">
        <div className="Login_container_left" />
        <div className="Login_container_right" />
      </div>
      <div className="Login_card">
        <div className="Login_card_container_main">
          <div className="Login_card_container">
            <div className="Login_background">
              <div>
                <img src={HornBillIcon} className="hornbill_logo" alt="bird" />
              </div>
              <div className="main_title">
                <h2>The HornBill</h2>
              </div>
            </div>
            <div className="Login_wlcm">Welcome Back</div>
            {isError && <div className="Login_invalid">Invalid User</div>}
            <button className="google_btn">Sign in with Google</button>
            <div className="email_input">
              <label>
                Email
                <input
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </label>
            </div>
            <div className="email_input">
              <label>
                Password
                <input
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
              </label>
            </div>
            {userDetail.user?.name && (
              <div>Hi!! {userDetail.user.name} weclome to The HrnBill</div>
            )}
            <button
              onClick={goMain}
              className="btn_login"
              disabled={!email.length || !password.length || isDisable}
              style={{
                backgroundColor:
                  !email.length || !password.length || isDisable
                    ? "grey"
                    : "#866cff",
              }}
            >
              {isDisable && (
                <iframe
                  src="https://giphy.com/embed/L05HgB2h6qICDs5Sms"
                  width="40"
                  height="40"
                  frameBorder="0"
                  className="giphy-embed"
                  title="loader"
                ></iframe>
              )}
              {!isDisable && <p>Log In with email</p>}
            </button>
            <div className="Login_sign">
              Don't have account yet?
              <a href="##">Sign up</a>
            </div>
            <a href="##">Forget Password</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
