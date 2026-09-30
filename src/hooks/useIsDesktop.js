import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

// true from the "md" breakpoint (900px) up
export default function useIsDesktop() {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.up('md'), { noSsr: true });
}
