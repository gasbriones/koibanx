import { createTheme } from '@mui/material';
import createMixins from '@mui/material/styles/createMixins';

declare module '@mui/material/styles/createMixins' {
  interface Mixins {
    rem_calc: (arg: number) => void;
  }
}

const { breakpoints } = createTheme();

const mixins = createMixins(breakpoints, {
  rem_calc: (size: number) => `${size / 16}rem`,
});

const theme = createTheme({
  mixins,
});

export default theme;
