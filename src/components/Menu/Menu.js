import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import PublicOutlinedIcon from "@material-ui/icons/PublicOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import React, { useState } from "react";
import Account from "../Account/Account";
import AddRoom from "../AddRoom/AddRoom";
import "./Menu.css";


const styleIcon = {
  color: "#9B9FA5",
  fontSize: 30,
};

const Menu = (props) => {
  let [addRoom, setAddRoom] = useState(false);
  let { socket } = props;
  return (
    <div className="Menu">
      <div className="Menu-account">
        <Account />
      </div>
      <div className="Menu-search">
        <SearchOutlinedIcon style={styleIcon} />
      </div>
      <div className="Menu-public">
        <PublicOutlinedIcon style={styleIcon} />
      </div>

      <div className="Menu-create">
        <AddCircleOutlineOutlinedIcon
          style={styleIcon}
          onClick={() => setAddRoom(!addRoom)}
        />
        {addRoom && <AddRoom setAddRoom={setAddRoom} socket={socket} />}
      </div>
      <div className="Menu-more">
        <MoreVertIcon style={styleIcon} />
      </div>
    </div>
  );
};

export default Menu;
