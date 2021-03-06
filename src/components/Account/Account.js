import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import React from "react";
import { useCookies } from "react-cookie";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { logoutUser } from "../../actions/user.action";
import "./Account.css";

const styleIcon = {
  color: "#9B9FA5",
  fontSize: 30,
};

let Account = (props) => {
  let { logoutUser } = props;
  let [cookies, , removeCookie] = useCookies(["userID"]);
  const onLogout = () => {
    removeCookie("userID");
    logoutUser();
  };
  return (
    <>
      {cookies.userID ? (
        <div className="Account">
          <div className="Account-avatar">
            <img
              src="https://yt3.ggpht.com/a/AATXAJzvnWH17ZIrmOWMo7PpoBBDz22z4FFOcrPyRA=s900-c-k-c0xffffffff-no-rj-mo"
              width={32}
              alt=""
            />
          </div>
          <div className="Account-info">
            <button onClick={onLogout}>Logout</button>
          </div>
        </div>
      ) : (
        <Redirect to="/login" />
      )}
    </>
  );
};

Account.defaultProps = {
  avatar: <PersonOutlineIcon style={styleIcon} />,
};

const mapDispatchToProp = {
  logoutUser: logoutUser,
};

Account = connect(null, mapDispatchToProp)(Account);
export default Account;
