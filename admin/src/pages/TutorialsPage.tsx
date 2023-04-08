import AddIcon from '@mui/icons-material/Add';
import { Box, Breadcrumbs, Button, Card, CardContent, Link, Typography } from '@mui/material';
import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NewTutorialDialog from '../components/tutorials/NewTutorialDialog';
import TutorialList from '../components/tutorials/TutorialList';
import { listTutorials } from '../firebase/tutorialService';
import { ITutorial, ITutorialListItem } from '@backend/interfaces/tutorial';

const BREADCRUMBS = [
  <Link underline="hover" key="1" color="inherit" href="/admin">
    Admin
  </Link>,
  <Link key="2" underline="hover" color="inherit" href="/admin/tutorials">
    Tutorials
  </Link>
];

const TutorialsPage: FC = () => {
  const [breadcrumbs, setBreadcrumbs] = useState(BREADCRUMBS);

  const { id } = useParams();

  const [dialogOpen, setDialogOpen] = useState(false);
  const [tutorials, setTutorials] = useState<ITutorialListItem[] | null>(null);

  useEffect(() => {
    if (id) {
      setBreadcrumbs([
        ...BREADCRUMBS,
        <Typography key="3" color="text.primary">
          Breadcrumb
        </Typography>
      ]);
    } else {
      setBreadcrumbs(BREADCRUMBS);
    }
  }, [id]);

  useEffect(() => {
    listTutorials().then(setTutorials);
  }, []);

  return (
    <Box width="100%">
      <Breadcrumbs separator="›" aria-label="breadcrumb">
        {breadcrumbs}
      </Breadcrumbs>

      <NewTutorialDialog open={dialogOpen} onClose={() => setDialogOpen(false)} />

      <Box sx={{ py: 2 }} />

      {/* <Box flex={1}> */}
      <Card elevation={2}>
        <Box p={2} display="flex" justifyContent="space-between" bgcolor="#fafafa">
          Tutorials
          <Button
            startIcon={<AddIcon />}
            variant="contained"
            disableElevation
            color="primary"
            size="small"
            onClick={() => setDialogOpen(true)}>
            New
          </Button>
        </Box>
        {/* <Divider /> */}

        <TutorialList tutorials={tutorials ?? []} />
      </Card>
      {/* </Box> */}
    </Box>
  );
};

export default TutorialsPage;
