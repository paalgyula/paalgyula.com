import {
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography
} from '@mui/material';
import { ITutorialListItem } from '@backend/interfaces/tutorial';

import ShowIcon from '@mui/icons-material/Visibility';
import { FC } from 'react';
import moment from 'moment';

// const rows = [
//   {
//     name: 'maci',
//     id: '1235',
//     link: 'sadsdf',
//     active: false,
//     author: 'nev3rkn0wn',
//     createdAt: new Date()
//   }
// ] satisfies ITutorialListItem[];

type Props = {
  tutorials: ITutorialListItem[];
};

const TutorialList: FC<Props> = ({ tutorials }) => {
  return (
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead sx={{ bgcolor: '#fafafa' }}>
        <TableRow>
          <TableCell sx={{ fontWeight: 'bold' }}>Name</TableCell>
          <TableCell sx={{ fontWeight: 'bold' }} align="right">
            Created
          </TableCell>
          <TableCell sx={{ fontWeight: 'bold' }} align="center">
            Author
          </TableCell>
          <TableCell sx={{ fontWeight: 'bold' }} align="right">
            Active
          </TableCell>
          <TableCell sx={{ fontWeight: 'bold' }} align="right">
            Actions
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {tutorials.map((row) => (
          <TableRow hover key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell component="th" scope="row">
              {row.name}
            </TableCell>
            <TableCell align="right">{moment(row.createdAt).format()}</TableCell>
            <TableCell align="right">{row.author}</TableCell>
            <TableCell align="right">
              {row.active ? 'Active' : <Typography color="GrayText">Inactive</Typography>}
            </TableCell>
            <TableCell align="right">
              <IconButton size="small">
                <ShowIcon fontSize="small" />
              </IconButton>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TutorialList;
