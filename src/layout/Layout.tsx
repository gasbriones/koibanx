import * as React from 'react';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    // @ts-ignore
    padding: theme.mixins.rem_calc(50),
  },
}));

type Props = {
  children: JSX.Element
};

export default function Layout({ children }: Props) {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      {children}
    </Box>
  );
}
