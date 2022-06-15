import React, {
  useEffect, useMemo, useState,
} from 'react';
import { Box } from '@mui/material';
import TextField, {} from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { ACTIVE, ALL } from '../../constants/constants';

type Props = {
  fetchData: (criteria: string) => void;
  searchByColumns: string[];
};

export const SearchBar: React.FC<Props> = function ({
  fetchData,
  searchByColumns,
}) {
  const [status, setStatus] = useState<string>('-1');
  const [searchCriteria, setSearchCriteria] = useState<string>('');

  const handleSelectChange = (event: { target: { value: React.SetStateAction<string> } }) => {
    setStatus(event.target.value);
  };

  const handleInputChange = (event: { target: { value: React.SetStateAction<string> } }) => {
    setSearchCriteria(event.target.value);
  };

  const queryFactory = useMemo(() => {
    const arr: any = [];
    searchByColumns.map((row) => arr.push(`{"${row}":{"$regex":".${searchCriteria}*"}}`));

    switch (true) {
      case searchCriteria !== '' && status === ALL: {
        return `{"$or":${arr}`;
      }
      case searchCriteria !== '' && status !== ALL: {
        return `{"$and":[{'Activo':'${status === ACTIVE}'},{"$or":${arr}]}`;
      }
      case searchCriteria === '' && status !== ALL: {
        return `{"Activo":${status === ACTIVE}}`;
      }
      default: {
        return '';
      }
    }
  }, [searchByColumns, searchCriteria, status]);

  useEffect(() => {
    const q = queryFactory;
    fetchData(q);
  }, [status, fetchData, queryFactory]);

  return (
    <Box
      display="grid"
      gridTemplateColumns="2fr 1fr"
      gap="1rem"
      width="100%"
      mb={3}
    >
      <Box
        component="form"
        width="100%"
        noValidate
        autoComplete="off"
      >
        <TextField fullWidth label="Buscar" variant="outlined" value={searchCriteria} onChange={handleInputChange} />
      </Box>
      <Box width="100%">
        <FormControl fullWidth>
          <InputLabel>Estado</InputLabel>
          <Select
            value={status}
            label="Estado"
            onChange={handleSelectChange}
            defaultValue={status}
          >
            <MenuItem value="-1">Todos</MenuItem>
            <MenuItem value="1">Activos</MenuItem>
            <MenuItem value="0">Inactivos</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
};
