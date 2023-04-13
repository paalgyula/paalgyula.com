import { Box, Card, CardHeader, Link } from '@mui/material';
import { FC, ReactNode, useEffect } from 'react';
import { useBreadcrumb } from '../../hooks/useBreadcrumbs';

const breadcrumb: ReactNode[] = [
  <Link underline="hover" key="1" color="inherit" href="/">
    Admin
  </Link>,
  <Link key="2" underline="hover" color="inherit" href="/tutorials">
    Tutorials
  </Link>
];

const ProfilePage: FC = () => {
  // const { user } = useFirebase();
  const { setBreadcrumb } = useBreadcrumb();

  useEffect(() => {
    setBreadcrumb(breadcrumb);
    return () => {
      setBreadcrumb();
    };
  });

  return (
    <Box p={2}>
      <Card>
        <CardHeader title="Profile page"></CardHeader>
      </Card>
    </Box>
  );
};

export default ProfilePage;
