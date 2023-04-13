import { ListItem, ListItemButton, ListItemText } from '@mui/material';
import { Route, useNavigate } from 'react-router-dom';
import { IAdminModule } from '../../AppRouter';
import { Experiences } from './Experiences';

const Links = () => {
  const navigate = useNavigate();

  return (
    <>
      <ListItem disablePadding onClick={() => navigate('/cv')}>
        <ListItemButton>
          {/* <ListItemIcon></ListItemIcon> */}
          <ListItemText primary="CV" secondary="CV data admin" />
        </ListItemButton>
      </ListItem>
    </>
  );
};

export default {
  Links,
  Routes: <Route path="cv" Component={Experiences}></Route>
} satisfies IAdminModule;
