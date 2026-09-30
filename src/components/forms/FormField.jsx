import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import FormHelperText from '@mui/material/FormHelperText';

function renderError(id, error) {
  if (!error) {
    return null;
  }
  return <FormHelperText id={`${id}-error`} error sx={{ mx: 0 }}>{error}</FormHelperText>;
}

// Label above the input, as in the design
export default function FormField({ id, label, error = '', children }) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '6px', minWidth: 0 }}>
      <Box component="label" htmlFor={id} sx={{ fontSize: 14, fontWeight: 600 }}>{label}</Box>
      {children}
      {renderError(id, error)}
    </Box>
  );
}

FormField.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  error: PropTypes.string,
  children: PropTypes.node.isRequired,
};
