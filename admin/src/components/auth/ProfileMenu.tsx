import { Avatar, Divider, IconButton, Menu, MenuItem } from '@mui/material';
import { MouseEvent, useState } from 'react';
import { useFirebase } from '../../FirebaseProvider';

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
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <Divider />
        <MenuItem onClick={() => logout()}>Logout</MenuItem>
      </Menu>
    </>
  );
};

export default ProfileMenu;
