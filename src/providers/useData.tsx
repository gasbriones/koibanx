import React, {
  createContext, useCallback, useContext, useMemo, useState,
} from 'react';
import { mockData } from '../moks/MOCK_DATA';
import { CommerceType, PaginationDataType } from '../types/types';

const BASE_URL = 'https://api.koibanx.com/stores';

type Props = {
  children: React.ReactNode
};

type ContextProps = {
  data: CommerceType[];
  paginationData: PaginationDataType;
  fetchData: (criteria: string) => void;
};

const DataContext = createContext<ContextProps>({
  data: [],
  paginationData: {
    page: 1,
    pages: 1,
    total: 1,
    rowsPerPage: 1,
  },
  fetchData: () => undefined,
});

export const DataProvider: React.FC <Props> = ({ children }) => {
  const [data, setData] = useState<CommerceType[]>(mockData.data);
  const paginationData: PaginationDataType = {
    page: mockData.page,
    pages: mockData.pages,
    rowsPerPage: mockData.rowsPerPage,
    total: mockData.total,
  };

  const fetchData = useCallback((criteria: string) => {
    const url = criteria ? `${BASE_URL}/q=${criteria}` : BASE_URL;
    console.log(url);

    // hipotético set del data traído desde un servicio
    // setData(responseData);
  }, []);

  const providerValues = useMemo(
    () => ({
      data, paginationData, fetchData,
    }),
    [data, paginationData, fetchData],
  );

  return (
    <DataContext.Provider
      value={providerValues}
    >
      {children}
    </DataContext.Provider>
  );
};

const useData = () => useContext(DataContext);
export default useData;
