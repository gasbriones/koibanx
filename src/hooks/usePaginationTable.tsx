import React, {
  SetStateAction, useCallback, useState,
} from 'react';
import _ from 'lodash';
import { CommerceType, PaginationDataType } from '../types/types';

type Props = {
  commerces: CommerceType[];
  setPaginatedData: (data: SetStateAction<CommerceType[]>) => void;
  paginationData: PaginationDataType
};

export function usePaginationTable({ commerces, setPaginatedData, paginationData }: Props) {
  const [currentPage, setCurrentPage] = useState<number>(paginationData.page);

  const pageSize = paginationData.rowsPerPage;
  const pageCount = Math.ceil(commerces.length / pageSize);
  const pages = _.range(1, pageCount + 1);

  const handlePaginate = useCallback((page: number) => {
    if (commerces) {
      const startIndex = (page - 1) * pageSize;
      const paginatedData = _(commerces).slice(startIndex).take(pageSize).value();
      setPaginatedData(paginatedData);
      setCurrentPage(page);
    }
  }, [commerces, setPaginatedData, setCurrentPage]);

  return {
    currentPage,
    handlePaginate,
    pageSize,
    pages,
  };
}
