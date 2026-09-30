import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Eyebrow from './Eyebrow';

export const sectionTitleSx = {
  fontSize: { xs: 30, md: 40 },
  lineHeight: { xs: '36px', md: '46px' },
};

function renderDescription(description) {
  if (!description) {
    return null;
  }
  return (
    <Typography sx={{ fontSize: { xs: 15, md: 16 }, lineHeight: { xs: '22px', md: '24px' }, color: 'text.secondary' }}>
      {description}
    </Typography>
  );
}

function renderAction(action) {
  if (!action) {
    return null;
  }
  return <Box sx={{ display: { xs: 'none', md: 'block' }, flexShrink: 0 }}>{action}</Box>;
}

// Eyebrow + title (+ optional description and a desktop-only action link on the right)
export default function SectionHeader({ eyebrow, title, description = '', action = null }) {
  return (
    <Stack direction="row" alignItems="flex-end" justifyContent="space-between" gap={3}>
      <Stack gap={{ xs: 1, md: 1.5 }}>
        <Eyebrow>{eyebrow}</Eyebrow>
        <Typography variant="h2" sx={sectionTitleSx}>
          {title}
        </Typography>
        {renderDescription(description)}
      </Stack>
      {renderAction(action)}
    </Stack>
  );
}

SectionHeader.propTypes = {
  eyebrow: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  action: PropTypes.node,
};

