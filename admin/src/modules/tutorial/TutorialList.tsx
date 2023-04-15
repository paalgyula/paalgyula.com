import {
  Box,
  Button,
  Card,
  Divider,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography
} from '@mui/material';

import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import ShowIcon from '@mui/icons-material/Visibility';
import moment from 'moment';
import { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NewTutorialDialog from './NewTutorialDialog';
import { ITutorialListItem } from '../../firebase/tutorial';
import { useLoader } from '../../hooks/useLoader';
import { fetchTutorialList } from '../../firebase/tutorialService';
import FullScreenLoader from '../../components/FullScreenLoader';

const TutorialList: FC = () => {
  const { data, isLoading, load } = useLoader<ITutorialListItem[]>();
  const [dialogOpen, setDialogOpen] = useState(false);

  const navigate = useNavigate();

  const handleDialogClose = (created?: boolean) => {
    if (created) {
      load(fetchTutorialList());
    }
    setDialogOpen(false);
  };

  useEffect(() => {
    load(fetchTutorialList());
  }, []);

  return (
    <Card elevation={2}>
      <NewTutorialDialog open={dialogOpen} onClose={handleDialogClose} />

      <Box
        p={2}
        display="flex"
        justifyContent="space-between"
        bgcolor="#fafafa">
        <Typography variant="h5">Tutorials</Typography>
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

      {isLoading ? (
        <Box p={3} bgcolor="#fafafa">
          <FullScreenLoader />
        </Box>
      ) : (
        <>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead sx={{ bgcolor: '#fafafa' }}>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">Created</TableCell>
                <TableCell align="center">Author</TableCell>
                <TableCell align="right">Active</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data!.map((row) => (
                <TableRow
                  hover
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">
                    {moment(row.createdAt).fromNow()}
                  </TableCell>
                  <TableCell align="right">{row.author}</TableCell>
                  <TableCell align="right">
                    {row.active ? (
                      'Active'
                    ) : (
                      <Typography color="GrayText">Inactive</Typography>
                    )}
                  </TableCell>
                  <TableCell align="right">
                    <IconButton
                      onClick={() => navigate(`/tutorials/${row.id}`)}
                      size="small">
                      <EditIcon fontSize="small" />
                    </IconButton>
                    <IconButton size="small">
                      <ShowIcon fontSize="small" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Divider />
          <TablePagination
            page={0}
            component="div"
            onPageChange={() => {
              console.log('Pagination not implemented');
            }}
            rowsPerPage={10}
            count={data?.length ?? 0}
          />
        </>
      )}
    </Card>
  );
};

export default TutorialList;
