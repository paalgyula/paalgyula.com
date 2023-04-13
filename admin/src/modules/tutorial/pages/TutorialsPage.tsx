import { Box, Link } from '@mui/material';
import { FC, useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { useBreadcrumb } from '../../../hooks/useBreadcrumbs';

const BREADCRUMBS = [
  <Link underline="hover" key="1" color="inherit" href="/admin">
    Admin
  </Link>,
  <Link key="2" underline="hover" color="inherit" href="/admin/tutorials">
    Tutorials
  </Link>
];

const TutorialsPage: FC = () => {
  const { id } = useParams();

  const { setBreadcrumb } = useBreadcrumb();

  useEffect(() => {
    setBreadcrumb(BREADCRUMBS);

    return () => {
      setBreadcrumb();
    };
  }, [id]);

  return (
    <Box width="100%">
      <Outlet />
    </Box>
  );
};

export default TutorialsPage;
