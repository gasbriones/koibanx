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
import {
  ASC, DESC, YES, NO,
} from '../../constants/constants';

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
                          direction={orderBy.columnName === name ? orderBy.direction : ASC}
                          onClick={() => setOrderBy(
                            (prevState) => (
                              { columnName: name, direction: prevState.direction === ASC ? DESC : ASC }
                            ),
                          )}
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
                {columnNames.map((name, index) => (
                  <TableCell key={index}>
                    {(() => {
                      const key = name as keyof typeof commerce;
                      if (key === 'Activo') {
                        return (commerce[key] ? YES : NO).toUpperCase();
                      }
                      return commerce[key];
                    })()}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
