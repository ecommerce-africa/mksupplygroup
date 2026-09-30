import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Icon } from '@iconify/react';
import Section from '../ui/Section';
import SectionHeader from '../ui/SectionHeader';
import TextLink from '../ui/TextLink';
import useIsDesktop from '../../hooks/useIsDesktop';

const icons = ['mk:store', 'mk:utensils', 'mk:globe'];

function IconTile({ icon, size }) {
  return (
    <Box sx={{ width: size, height: size, flexShrink: 0, borderRadius: '12px', bgcolor: 'brand.green900', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'brand.citrus400' }}>
      <Icon icon={icon} width={size / 2} />
    </Box>
  );
}

IconTile.propTypes = {
  icon: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
};

export default function Sectors() {
  const { t } = useTranslation();
  const isDesktop = useIsDesktop();
  const items = t('sectors.items', { returnObjects: true });

  function renderDesktopCard(item, index) {
    return (
      <Box key={item.title} sx={{ bgcolor: '#ffffff', borderRadius: '12px', p: 4, display: 'flex', flexDirection: 'column', gap: 2 }}>
        <IconTile icon={icons[index]} size={56} />
        <Typography variant="h3" sx={{ fontSize: 24, lineHeight: '30px' }}>{item.title}</Typography>
        <Typography sx={{ fontSize: 16, lineHeight: '24px', color: 'text.secondary' }}>{item.text}</Typography>
        <TextLink href="#contact" sx={{ mt: 'auto' }}>{item.link}</TextLink>
      </Box>
    );
  }

  function renderMobileCard(item, index) {
    return (
      <Box key={item.title} sx={{ bgcolor: '#ffffff', borderRadius: '12px', p: 2.5, display: 'flex', gap: 2 }}>
        <IconTile icon={icons[index]} size={44} />
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
          <Typography variant="h3" sx={{ fontSize: 18, lineHeight: '24px' }}>{item.title}</Typography>
          <Typography sx={{ fontSize: 15, lineHeight: '22px', color: 'text.secondary' }}>{item.short}</Typography>
        </Box>
      </Box>
    );
  }

  function renderCards() {
    if (isDesktop) {
      return (
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 3 }}>
          {items.map(renderDesktopCard)}
        </Box>
      );
    }
    return <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>{items.map(renderMobileCard)}</Box>;
  }

  return (
    <Section id="sectors" bgcolor="brand.surface200">
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 3, md: 5 } }}>
        <SectionHeader eyebrow={t('sectors.eyebrow')} title={t('sectors.title')} />
        {renderCards()}
      </Box>
    </Section>
  );
}
