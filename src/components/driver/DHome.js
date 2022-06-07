import * as React from 'react';
import {Box,AppBar,IconButton} from '@mui/material';
import {NotificationsIcon, AccountCircle} from '@mui/icons-material';

const DHome = () => {
    return(
        <Box>
            <AppBar>
                <IconButton
                    size="large"
                    aria-label="show 17 new notifications"
                    color="inherit"
                >
                <Badge badgeContent={17} color="error">
                    <NotificationsIcon />
                </Badge>
                </IconButton>
                <IconButton
                    size="large"
                    edge="end"
                    aria-label="account of current user"
                    aria-controls={menuId}
                    aria-haspopup="true"
                    onClick={handleProfileMenuOpen}
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton> 
            </AppBar>
        </Box>
    );
};

export default DHome;