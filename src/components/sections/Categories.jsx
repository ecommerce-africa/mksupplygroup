import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';
import Section from '../ui/Section';
import SectionHeader from '../ui/SectionHeader';
import CategoryCard from '../ui/CategoryCard';
import TextLink from '../ui/TextLink';
import { categories } from '../../data/products';

export default function Categories() {
  const { t } = useTranslation();
  const priceListLink = <TextLink href="#contact">{t('cta.priceListLink')}</TextLink>;

  return (
    <Section id="products">
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 3, md: 5 } }}>
        <SectionHeader eyebrow={t('categories.eyebrow')} title={t('categories.title')} action={priceListLink} />
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, minmax(0, 1fr))', lg: 'repeat(4, minmax(0, 1fr))' }, gap: { xs: 2, md: 2.5 } }}>
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              title={t(`categories.${category.id}.title`)}
              subtitle={t(`categories.${category.id}.subtitle`)}
              image={category.image}
              href={category.anchor}
              comingSoon={category.comingSoon}
              cta={t('categories.view')}
              watermark={t('categories.comingSoon')}
            />
          ))}
        </Box>
        <Box sx={{ display: { xs: 'block', md: 'none' } }}>{priceListLink}</Box>
      </Box>
    </Section>
  );
}