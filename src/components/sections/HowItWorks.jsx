import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Section from '../ui/Section';
import SectionHeader from '../ui/SectionHeader';
import useIsDesktop from '../../hooks/useIsDesktop';

function stepNumber(index) {
  return `0${index + 1}`;
}

function stepBorderColor(index, total) {
  if (index === total - 1) {
    return 'brand.citrus400';
  }
  return 'brand.green900';
}

export default function HowItWorks() {
  const { t } = useTranslation();
  const isDesktop = useIsDesktop();
  const steps = t('how.steps', { returnObjects: true });

  function renderDesktopStep(step, index) {
    return (
      <Box key={step.title} sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, borderTop: '4px solid', borderColor: stepBorderColor(index, steps.length), pt: 3 }}>
        <Typography variant="h2" component="span" sx={{ fontSize: 44, lineHeight: '48px', color: 'brand.green600' }}>{stepNumber(index)}</Typography>
        <Typography variant="h3" sx={{ fontSize: 22, lineHeight: '28px' }}>{step.title}</Typography>
        <Typography sx={{ fontSize: 16, lineHeight: '24px', color: 'text.secondary' }}>{step.text}</Typography>
      </Box>
    );
  }

  function renderMobileStep(step, index) {
    return (
      <Box key={step.title} sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
        <Typography variant="h2" component="span" sx={{ fontSize: 28, lineHeight: '32px', color: 'brand.green600', width: 40, flexShrink: 0 }}>{stepNumber(index)}</Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
          <Typography variant="h3" sx={{ fontSize: 18, lineHeight: '24px' }}>{step.title}</Typography>
          <Typography sx={{ fontSize: 15, lineHeight: '22px', color: 'text.secondary' }}>{step.text}</Typography>
        </Box>
      </Box>
    );
  }

  function renderSteps() {
    if (isDesktop) {
      return <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 3 }}>{steps.map(renderDesktopStep)}</Box>;
    }
    return <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>{steps.map(renderMobileStep)}</Box>;
  }

  return (
    <Section id="how">
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 2.5, md: 5 } }}>
        <SectionHeader eyebrow={t('how.eyebrow')} title={t('how.title')} />
        {renderSteps()}
      </Box>
    </Section>
  );
}
