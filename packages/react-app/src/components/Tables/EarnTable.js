import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('0x71212...121', 100, 6.0, 24, 4.0),
    createData('0x71212...121', 237, 9.0, 37, 4.3),
    createData('0x71212...121', 262, 16.0, 24, 6.0),
    createData('0x71212...121', 305, 3.7, 67, 4.3),
    createData('0x71212...121', 356, 16.0, 49, 3.9),
    createData('0x71212...121', 100, 6.0, 24, 4.0),
    createData('0x71212...121', 237, 9.0, 37, 4.3),
    createData('0x71212...121', 262, 16.0, 24, 6.0),
    createData('0x71212...121', 100, 6.0, 24, 4.0),
    createData('0x71212...121', 237, 9.0, 37, 4.3),
    createData('0x71212...121', 262, 16.0, 24, 6.0),
];

export default function EarnTable() {
  return (
    <TableContainer component={Paper} style={{maxWidth: 800}}>
      <Table sx={{ maxWidth: 800 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Pragmatic Learner</TableCell>
            <TableCell align="right">Earnings</TableCell>
            <TableCell align="right">Courses Complete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
