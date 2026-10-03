import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';
import Section from '../ui/Section';
import SectionHeader from '../ui/SectionHeader';
import ProductCard from '../ui/ProductCard';
import ProductRow from '../ui/ProductRow';
import TextLink from '../ui/TextLink';
import useIsDesktop from '../../hooks/useIsDesktop';

// One product line (e.g. juices, water, specialty): cards on desktop, compact rows on mobile
export default function ProductSection({ line }) {
  const { t } = useTranslation();
  const isDesktop = useIsDesktop();
  const key = `products.${line.id}`;

  // Items can have their own name (e.g. a flavour); otherwise the line name is used
  function itemName(item) {
    if (item.nameKey) {
      return t(`${key}.items.${item.nameKey}`);
    }
    return t(`${key}.name`);
  }

  // Optional "Contains: …" detail, shown instead of the barcode
  function itemFeature(item) {
    if (item.featureKey) {
      return t(`${key}.features.${item.featureKey}`);
    }
    return '';
  }

  function renderItems() {
    if (isDesktop) {
      return (
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 3 }}>
          {line.items.map((item) => (
            <ProductCard
              key={item.id}
              name={itemName(item)}
              category={t(`${key}.category`)}
              size={item.size}
              ean={item.ean}
              feature={itemFeature(item)}
              image={item.image}
              wellColor={line.wellColor}
            />
          ))}
        </Box>
      );
    }
    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {line.items.map((item) => (
          <ProductRow
            key={item.id}
            name={itemName(item)}
            size={item.size}
            ean={item.ean}
            feature={itemFeature(item)}
            image={item.image}
            wellColor={line.wellColor}
          />
        ))}
      </Box>
    );
  }

  return (
    <Section id={line.id} py={0}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 2, md: 5 }, pb: { xs: 6, md: 12 } }}>
        <SectionHeader
          eyebrow={t('products.eyebrow')}
          title={t(`${key}.title`)}
          description={t(`${key}.description`)}
          action={<TextLink href="#contact">{t(`${key}.ask`)}</TextLink>}
        />
        {renderItems()}
      </Box>
    </Section>
  );
}

ProductSection.propTypes = {
  line: PropTypes.shape({
    id: PropTypes.string.isRequired,
    wellColor: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        size: PropTypes.string.isRequired,
        ean: PropTypes.string,
        image: PropTypes.string.isRequired,
        nameKey: PropTypes.string,
        featureKey: PropTypes.string,
      })
    ).isRequired,
  }).isRequired,
};