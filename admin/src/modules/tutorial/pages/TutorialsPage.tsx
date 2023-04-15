import { Box } from '@mui/material';
import { FC, useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { useBreadcrumb } from '../../../hooks/useBreadcrumbs';
import { IBreadcrumb } from '../../../providers/AppStateProvider';

export const BREADCRUMBS: IBreadcrumb[] = [
  { title: 'Tutorials', link: '/tutorials' }
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
