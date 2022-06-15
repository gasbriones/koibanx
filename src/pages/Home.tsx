import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import _ from 'lodash';
import { DataTable, Pagination, SearchBar } from '../components';
import Layout from '../layout/Layout';
import useData from '../providers/useData';
import { useSortTable, usePaginationTable } from '../hooks';
import { CommerceType } from '../types/types';

const useStyles = makeStyles((theme) => ({
  contactsContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    // @ts-ignore
    maxWidth: theme.mixins.rem_calc(1280),
  },
}));

function Home(): JSX.Element {
  const sortColumns = ['Comercio', 'CUIT'];
  const searchByColumns = ['ID', 'CUIT', 'Comercio'];
  const classes = useStyles();
  const { data, paginationData, fetchData } = useData();
  const [paginatedData, setPaginatedData] = useState<CommerceType[]>(data);

  const {
    currentPage, handlePaginate, pageSize, pages,
  } = usePaginationTable({
    commerces: data,
    setPaginatedData,
    paginationData,
  });

  const { orderBy, setOrderBy, columnNames } = useSortTable({
    commerces: data,
    setPaginatedData,
    pageSize,
    currentPage,
  });

  useEffect(() => {
    const paginated = _(data).slice(0).take(pageSize).value();
    setPaginatedData(paginated);
  }, [data, pageSize]);

  return (
    <Layout>
      <Box className={classes.contactsContainer}>
        <SearchBar fetchData={fetchData} searchByColumns={searchByColumns} />
        <DataTable
          orderBy={orderBy}
          setOrderBy={setOrderBy}
          commerces={paginatedData}
          columnNames={columnNames}
          sortColumns={sortColumns}
        />
        <Pagination pages={pages} currentPage={currentPage} handlePaginate={handlePaginate} />
      </Box>
    </Layout>
  );
}

export default Home;
