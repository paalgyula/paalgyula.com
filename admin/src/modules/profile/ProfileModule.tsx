import ProfileIcon from '@mui/icons-material/Person';
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { Route, useNavigate } from 'react-router-dom';
import ProfilePage from './ProfilePage';
import { FC } from 'react';
import { IAdminModule } from '@ua-admin/AppRouter';

const Links: FC = () => {
  const navigate = useNavigate();

  return (
    <ListItemButton onClick={() => navigate('/Profile')}>
      <ListItemIcon>
        <ProfileIcon />
      </ListItemIcon>
      <ListItemText primary="Profile"></ListItemText>
    </ListItemButton>
  );
};

export default {
  Routes: <Route path="Profile" Component={ProfilePage} />,
  Links: Links
} satisfies IAdminModule;
