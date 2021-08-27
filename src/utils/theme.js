import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  spacing: 4,
  palette: {
    primary: {
      main: '#E8590C',
    },
    secondary: {
      main: '#DE1B1B',
    },
    background:{
      orange50: '#F76707',
      orange70: '#D9480F',
      orange90: '#E8590C',
      state70:'#376281',
      state60:'#487A9D',
      state50:'#5C94BC',
      grey100:'#212121',
      grey90:'#424242',
      grey80:'#616161',
      grey70:'#757575',
      grey60:'#9E9E9E',
      grey50:'#BDBDBD',
      grey40:'#E0E0E0',
      grey30:'#EEEEEE',
      grey20:'#F5F5F5',
      grey10:'#FAFAFA',
      grey0:'#FFFFFF',
      yellow80:'#F59F00',
      lime80:'#74B816',
      red60:'#DE1B1B'
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 700,
      lg: 1024,
      xl: 1366,
    },
  },
});

export default theme;
