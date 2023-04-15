import { Box } from '@mui/material';
import { FC, useEffect } from 'react';
import { Outlet, Route, useParams } from 'react-router-dom';
import { IAdminModule } from '../../AppRouter';
import { useBreadcrumb } from '../../hooks/useBreadcrumbs';
import { Experiences } from './Experiences';
import Menu from './Menu';

export const BREADCRUMBS = [{ title: 'Curriculum Vitae', link: '/cv' }];

const Layout: FC = () => {
  useParams();
  const { setBreadcrumb } = useBreadcrumb();

  useEffect(() => {
    setBreadcrumb(BREADCRUMBS);

    return () => {
      setBreadcrumb();
    };
  }, []);

  return <Outlet />;
};

export default {
  Links: Menu,
  Routes: (
    <Route path="cv" Component={Layout}>
      <Route path="experiences" Component={Experiences} />
      <Route path="skills" />
      <Route path="*" element={<Box>404 - Page not found</Box>}></Route>
    </Route>
  )
} satisfies IAdminModule;
