import { Logo_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("login");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={Logo_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className="login-btn"
            onClick={() => {
              loginBtn === "login"
                ? setLoginBtn("logout")
                : setLoginBtn("login");
            }}
          >
            {loginBtn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
