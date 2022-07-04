import PropTypes from "prop-types";
import { useState } from "react";

// material-ui
// import { useTheme } from '@mui/material/styles';
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

// assets
import {
  EditOutlined,
  ProfileOutlined,
  LogoutOutlined,
  UserOutlined,
  WalletOutlined,
} from "@ant-design/icons";

import AuthServices from "../../services/AuthServices";
import { useDispatch } from "react-redux/es/exports";
import { useNavigate,useLocation } from "react-router-dom";

// ==============================|| HEADER PROFILE - PROFILE TAB ||============================== //

const ProfileTab = ({ handleClose }) => {
  // const theme = useTheme();

  const [selectedIndex, setSelectedIndex] = useState(0);
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <List component="nav">
      {/* <ListItemButton selected={selectedIndex === 0} onClick={(event) => handleListItemClick(event, 0)}>
                <ListItemIcon>
                    <EditOutlined />
                </ListItemIcon>
                <ListItemText primary="Edit Profile" />
            </ListItemButton> */}
      <ListItemButton
        selected={selectedIndex === 1}
        onClick={(event)=>{
          // console.log(location.pathname.split('/')[1])
          handleListItemClick(event, 1)
          handleClose(event);
          navigate("/"+location.pathname.split('/')[1]+'/account');
        }}
      >
        <ListItemIcon>
          <UserOutlined />
        </ListItemIcon>
        <ListItemText primary="View Profile" />
      </ListItemButton>
      <ListItemButton
        selected={selectedIndex === 2}
        onClick={async(event) => {
          await AuthServices.handleLogout(dispatch);
          handleClose(event);
          navigate('/');
        }}
      >
        <ListItemIcon>
          <LogoutOutlined />
        </ListItemIcon>
        <ListItemText primary="Logout" />
      </ListItemButton>
    </List>
  );
};

ProfileTab.propTypes = {
  handleClose: PropTypes.func,
};

export default ProfileTab;
