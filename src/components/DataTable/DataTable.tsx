import React, { SetStateAction } from 'react';
import { Box } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Paper from '@mui/material/Paper';
import { CommerceType, OrderByType } from '../../types/types';

type Props = {
  commerces: CommerceType[];
  columnNames: string[];
  sortColumns?: string[];
  orderBy: OrderByType;
  setOrderBy: (data: SetStateAction<OrderByType>) => void;
};

export const DataTable: React.FC<Props> = function ({
  commerces,
  columnNames,
  sortColumns,
  orderBy,
  setOrderBy,
}) {
  return (
    <Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: '100%' }} aria-label="data table">
          <TableHead>
            <TableRow>
              {columnNames.map((name) => (
                <TableCell key={name}>
                  {
                      sortColumns && sortColumns.includes(name) ? (
                        <TableSortLabel
                          active={orderBy.columnName === name}
                          direction={orderBy.columnName === name ? orderBy.direction : 'asc'}
                          onClick={() => setOrderBy((prevState) => ({ columnName: name, direction: prevState.direction === 'asc' ? 'desc' : 'asc' }))}
                        >
                          {name}
                        </TableSortLabel>
                      ) : name
                    }
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {commerces && commerces.map((commerce) => (
              <TableRow
                key={commerce.ID}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {commerce.ID}
                </TableCell>
                <TableCell align="left">{commerce.Comercio}</TableCell>
                <TableCell align="left">{commerce.CUIT}</TableCell>
                <TableCell align="center">{commerce['Concepto 1']}</TableCell>
                <TableCell align="center">{commerce['Concepto 2']}</TableCell>
                <TableCell align="center">{commerce['Concepto 3']}</TableCell>
                <TableCell align="center">{commerce['Concepto 4']}</TableCell>
                <TableCell align="center">{commerce['Concepto 5']}</TableCell>
                <TableCell align="center">{commerce['Concepto 6']}</TableCell>
                <TableCell align="center">{commerce['Balance actual']}</TableCell>
                <TableCell align="center">{commerce.Activo ? 'Si' : 'No'}</TableCell>
                <TableCell align="right">{commerce['Ultima venta']}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
