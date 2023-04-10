import { Box, Link } from '@mui/material';
import { FC, useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { useDrawer } from '../components/contexts/DrawerProvider';

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
  const [dialogOpen, setDialogOpen] = useState(false);

  const { setBreadcrumb } = useDrawer();

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
