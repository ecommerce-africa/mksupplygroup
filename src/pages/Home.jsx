import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Hero from '../components/sections/Hero';
import Stats from '../components/sections/Stats';
import Categories from '../components/sections/Categories';
import ProductSection from '../components/sections/ProductSection';
import Sectors from '../components/sections/Sectors';
import HowItWorks from '../components/sections/HowItWorks';
import About from '../components/sections/About';
import Contact from '../components/sections/Contact';
import { productLines } from '../data/products';
import { company } from '../data/company';
import { SUPPORTED_LANGUAGES } from '../i18n';

export default function Home() {
  const { lang } = useParams();
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <html lang={lang} />
        <title>{t('meta.title')}</title>
        <meta name="description" content={t('meta.description')} />
        <link rel="canonical" href={`${company.siteUrl}/${lang}`} />
        {SUPPORTED_LANGUAGES.map((code) => (
          <link key={code} rel="alternate" hrefLang={code} href={`${company.siteUrl}/${code}`} />
        ))}
        <link rel="alternate" hrefLang="x-default" href={`${company.siteUrl}/en`} />
        <meta property="og:title" content={t('meta.title')} />
        <meta property="og:description" content={t('meta.description')} />
        <meta property="og:type" content="website" />
      </Helmet>
      <Hero />
      <Stats />
      <Categories />
      {productLines.map((line) => (
        <ProductSection key={line.id} line={line} />
      ))}
      <Sectors />
      <HowItWorks />
      <About />
      <Contact />
    </>
  );
}
