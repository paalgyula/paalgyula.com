import {
  Avatar,
  Divider,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Menu,
  MenuItem
} from '@mui/material';
import { MouseEvent, useState } from 'react';
import { useFirebase } from '../../hooks/useFirebase';

const ProfileMenu = () => {
  const { user, logout } = useFirebase();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  if (!user) return null;

  return (
    <>
      <IconButton onClick={handleClick}>
        <Avatar sx={{ height: 32, width: 32 }} src={user.photoURL ?? ''} />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button'
        }}>
        <ListItem title={user.displayName ?? ''}>
          <ListItemAvatar>
            <Avatar src={user.photoURL ?? ''} />
          </ListItemAvatar>
          <ListItemText primary={user.displayName} secondary={user.email} />
        </ListItem>
        {/* TODO: implement Profile and My accoount pages */}
        <MenuItem disabled onClick={handleClose}>
          Profile
        </MenuItem>
        <MenuItem disabled onClick={handleClose}>
          My account
        </MenuItem>
        <Divider />
        <MenuItem onClick={() => logout()}>Logout</MenuItem>
      </Menu>
    </>
  );
};

export default ProfileMenu;
