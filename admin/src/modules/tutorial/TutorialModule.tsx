import SchoolIcon from '@mui/icons-material/School';
import { Box } from '@mui/material';
import { FC } from 'react';
import { Route } from 'react-router-dom';
import { IAdminModule } from '../../AppRouter';
import Menu from '../../components/menu/Menu';
import TutorialEditor from './TutorialEditor';
import TutorialList from './TutorialList';
import TutorialsPage from './pages/TutorialsPage';

const Links: FC = () => {
  return (
    <Menu
      menu={[
        {
          title: 'Tutorials',
          link: '/tutorials',
          icon: SchoolIcon
        }
      ]}
    />
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
