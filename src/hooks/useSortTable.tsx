import React, {
  SetStateAction, useEffect, useMemo, useState,
} from 'react';
import _ from 'lodash';
import { CommerceType, OrderByType } from '../types/types';
import { ASC } from '../constants/constants';

type Props = {
  commerces: CommerceType[];
  setPaginatedData: (data: SetStateAction<CommerceType[]>) => void;
  pageSize: number,
  currentPage: number
};

export function useSortTable({
  commerces, setPaginatedData, pageSize, currentPage,
}: Props) {
  const [orderBy, setOrderBy] = useState<OrderByType>({ columnName: '', direction: ASC });

  const columnNames = useMemo(() => {
    if (commerces) return Object.keys(commerces[0]);
    return [];
  }, [commerces]);

  useEffect(() => {
    if (commerces) {
      const sortedData = [...commerces].sort((a: CommerceType, b: CommerceType) => {
        const first = a[orderBy?.columnName as keyof typeof a];
        const second = b[orderBy?.columnName as keyof typeof b];

        if (typeof first === 'number' && typeof second === 'number') {
          return orderBy.direction === ASC ? first - second : second - first;
        }

        if (typeof first === 'string' && typeof second === 'string') {
          const sortStringAsc = first?.toUpperCase() < second?.toUpperCase() ? -1 : 1;
          const sortStringDesc = first?.toUpperCase() > second?.toUpperCase() ? -1 : 1;

          return orderBy.direction === ASC ? sortStringAsc : sortStringDesc;
        }
        return 0;
      });

      const startIndex = (currentPage - 1) * pageSize;
      const paginatedData = _(sortedData).slice(startIndex).take(pageSize).value();

      setPaginatedData(paginatedData);
    }
  }, [orderBy, commerces, setPaginatedData, currentPage, pageSize]);

  return {
    orderBy,
    setOrderBy,
    columnNames,
  };
}
