import { createTheme } from '@mui/material/styles';

// Design tokens from the MK Supply Group design system
export const tokens = {
  green900: '#0f3d2e',
  green600: '#1f7a4d',
  citrus400: '#ffc629',
  citrus100: '#fff3cc',
  surface100: '#fbfaf6',
  surface200: '#f1efe6',
  surfaceMuted: '#f7f6f1',
  ink: '#14201b',
  muted: '#55615b',
  line: '#dcd9cc',
  inputBorder: '#8a948e',
  danger: '#b3261e',
  footerText: '#d7e3dc',
  footerLine: '#2c5a49',
};

export const fonts = {
  display: '"Archivo", "Arial Narrow", system-ui, sans-serif',
  body: '"Inter", system-ui, -apple-system, "Segoe UI", sans-serif',
};

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: tokens.green900, light: tokens.green600, contrastText: '#ffffff' },
    secondary: { main: tokens.citrus400, light: tokens.citrus100, contrastText: tokens.ink },
    success: { main: tokens.green600 },
    error: { main: tokens.danger },
    text: { primary: tokens.ink, secondary: tokens.muted },
    background: { default: tokens.surface100, paper: '#ffffff' },
    divider: tokens.line,
    brand: tokens,
  },
  shape: { borderRadius: 12 },
  typography: {
    fontFamily: fonts.body,
    h1: { fontFamily: fonts.display, fontWeight: 800, letterSpacing: '-0.02em' },
    h2: { fontFamily: fonts.display, fontWeight: 800, letterSpacing: '-0.01em' },
    h3: { fontFamily: fonts.display, fontWeight: 700 },
    h4: { fontFamily: fonts.display, fontWeight: 700 },
    overline: { fontSize: '0.75rem', lineHeight: 1.33, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'none' },
    button: { fontWeight: 600, textTransform: 'none', fontSize: '1rem' },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: { scrollBehavior: 'smooth' },
        body: { backgroundColor: tokens.surface100 },
        a: { color: tokens.green600 },
        'a:hover': { color: tokens.green900 },
        'h1, h2, h3, h4, p, dl, dd': { margin: 0 },
      },
    },
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: { borderRadius: 12, minHeight: 48, paddingInline: 24, whiteSpace: 'nowrap' },
        sizeLarge: { minHeight: 56, paddingInline: 28, fontSize: '1.0625rem' },
        outlined: { borderWidth: 2, borderColor: 'currentColor', '&:hover': { borderWidth: 2, borderColor: 'currentColor' } },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          backgroundColor: '#ffffff',
          '& .MuiOutlinedInput-notchedOutline': { borderColor: tokens.inputBorder },
        },
        input: { paddingTop: 12, paddingBottom: 12 },
      },
    },
  },
});

export default theme;
