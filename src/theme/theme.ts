import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#050A14',
      paper: 'rgba(5, 10, 20, 0.6)',
    },
    primary: {
      main: '#00F5FF', // Electric Cyan
      contrastText: '#050A14',
    },
    secondary: {
      main: '#7B2FFF', // Neon Violet
      contrastText: '#E8F4FD',
    },
    text: {
      primary: '#E8F4FD', // Icy White
      secondary: '#3A4A5C', // Muted
    },
  },
  typography: {
    fontFamily: '"Sora", "Inter", "Helvetica", "Arial", sans-serif',
    h1: { fontFamily: '"Orbitron", sans-serif' },
    h2: { fontFamily: '"Orbitron", sans-serif' },
    h3: { fontFamily: '"Orbitron", sans-serif' },
    h4: { fontFamily: '"Orbitron", sans-serif' },
    h5: { fontFamily: '"Orbitron", sans-serif' },
    h6: { fontFamily: '"Orbitron", sans-serif' },
    button: { fontFamily: '"Orbitron", sans-serif', textTransform: 'uppercase' },
    overline: { fontFamily: '"JetBrains Mono", monospace' },
    subtitle1: { fontFamily: '"JetBrains Mono", monospace' },
    subtitle2: { fontFamily: '"JetBrains Mono", monospace' },
    body1: { fontFamily: '"Sora", sans-serif' },
    body2: { fontFamily: '"Sora", sans-serif' },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#050A14',
          scrollbarWidth: 'thin',
          scrollbarColor: '#00F5FF #050A14',
        },
        '::-webkit-scrollbar': {
          width: '8px',
        },
        '::-webkit-scrollbar-track': {
          background: '#050A14',
        },
        '::-webkit-scrollbar-thumb': {
          backgroundColor: '#00F5FF',
          borderRadius: '4px',
        },
      },
    },
  },
});

export default theme;
