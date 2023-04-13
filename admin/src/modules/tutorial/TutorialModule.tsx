import { Box, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { Component, FC, ReactNode } from 'react';
import { Route, useNavigate } from 'react-router-dom';
import { IAdminModule } from '../../AppRouter';
import TutorialEditor from './TutorialEditor';
import TutorialList from './TutorialList';
import TutorialsPage from './pages/TutorialsPage';

const Links: FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <ListItem disablePadding onClick={() => navigate('/tutorials')}>
        <ListItemButton>
          {/* <ListItemIcon></ListItemIcon> */}
          <ListItemText primary="Tutorials" />
        </ListItemButton>
      </ListItem>
    </>
  );
};

export default {
  Links,
  Routes: (
    <Route path="tutorials" Component={TutorialsPage}>
      <Route path="" Component={TutorialList} />
      <Route path="new" Component={Box} />
      <Route path=":id" Component={TutorialEditor} />
    </Route>
  )
} satisfies IAdminModule;
