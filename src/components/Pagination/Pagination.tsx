import React from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  navContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  pageList: {
    display: 'flex',
    justifyContent: 'center',
    listStyle: 'none',
  },
  pageNumber: {
    // @ts-ignore
    border: `${theme.mixins.rem_calc(1)} solid black`,
    // @ts-ignore
    padding: `${theme.mixins.rem_calc(3)} ${theme.mixins.rem_calc(10)}`,
    display: 'flex',
  },
  active: {
    color: 'red',
  },
}));

type Props = {
  pages?: number[],
  currentPage?: number;
  handlePaginate: (page: number) => void;
};

export const Pagination: React.FC<Props> = function ({
  pages,
  currentPage,
  handlePaginate,
}) {
  const classes = useStyles();

  return (
    <nav className={classes.navContainer}>
      <ul className={classes.pageList}>
        {pages && pages.map((page) => (
          <li key={page}>
            <button
              type="button"
              onClick={() => handlePaginate(page)}
              className={`${classes.pageNumber} ${(page === currentPage && classes.active)}`}
            >
              {page}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
