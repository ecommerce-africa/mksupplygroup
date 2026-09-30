import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormHelperText from '@mui/material/FormHelperText';
import Link from '@mui/material/Link';
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select from '@mui/material/Select';
import FormField from './FormField';
import useIsDesktop from '../../hooks/useIsDesktop';
import { submitContactRequest } from '../../services/contact';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const BUYER_TYPES = ['retail', 'horeca', 'export'];

const defaultValues = {
  company: '',
  kvk: '',
  email: '',
  phone: '',
  buyerType: 'retail',
  message: '',
  consent: false,
};

export default function ContactForm() {
  const { t, i18n } = useTranslation();
  const isDesktop = useIsDesktop();
  const [status, setStatus] = useState('idle');
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ defaultValues });

  // register() gives a ref for the <input>; MUI needs it on inputRef
  function bind(name, rules) {
    const { ref, ...rest } = register(name, rules);
    return { inputRef: ref, ...rest };
  }

  function errorFor(name) {
    if (errors[name]) {
      return errors[name].message;
    }
    return '';
  }

  function describedBy(name) {
    if (errors[name]) {
      return `${name}-error`;
    }
    return undefined;
  }

  async function onSubmit(values) {
    setStatus('idle');
    try {
      await submitContactRequest({ ...values, language: i18n.language });
      setStatus('success');
      reset(defaultValues);
    } catch (err) {
      setStatus('error');
    }
  }

  function renderPair(first, second) {
    if (isDesktop) {
      return (
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 2 }}>
          {first}
          {second}
        </Box>
      );
    }
    return (
      <>
        {first}
        {second}
      </>
    );
  }

  function renderStatus() {
    if (status === 'success') {
      return <Alert severity="success">{t('contact.form.success')}</Alert>;
    }
    if (status === 'error') {
      return <Alert severity="error">{t('contact.form.error')}</Alert>;
    }
    return null;
  }

  function renderSubmitLabel() {
    if (isSubmitting) {
      return t('contact.form.sending');
    }
    return t('contact.form.submit');
  }

  function renderConsentError() {
    if (!errors.consent) {
      return null;
    }
    return <FormHelperText id="consent-error" error sx={{ mx: 0, mt: -1 }}>{errors.consent.message}</FormHelperText>;
  }

  const required = { value: true, message: t('contact.form.errors.required') };

  const companyField = (
    <FormField id="company" label={t('contact.form.company')} error={errorFor('company')}>
      <OutlinedInput id="company" autoComplete="organization" error={Boolean(errors.company)} inputProps={{ 'aria-describedby': describedBy('company') }} {...bind('company', { required })} />
    </FormField>
  );
  const kvkField = (
    <FormField id="kvk" label={t('contact.form.kvk')}>
      <OutlinedInput id="kvk" {...bind('kvk')} />
    </FormField>
  );
  const emailField = (
    <FormField id="email" label={t('contact.form.email')} error={errorFor('email')}>
      <OutlinedInput
        id="email"
        type="email"
        autoComplete="email"
        error={Boolean(errors.email)}
        inputProps={{ 'aria-describedby': describedBy('email') }}
        {...bind('email', { required, pattern: { value: EMAIL_PATTERN, message: t('contact.form.errors.email') } })}
      />
    </FormField>
  );
  const phoneField = (
    <FormField id="phone" label={t('contact.form.phone')}>
      <OutlinedInput id="phone" type="tel" autoComplete="tel" {...bind('phone')} />
    </FormField>
  );

  return (
    <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      {renderPair(companyField, kvkField)}
      {renderPair(emailField, phoneField)}

      <FormField id="buyerType" label={t('contact.form.buyerType')}>
        <Controller
          name="buyerType"
          control={control}
          render={({ field }) => (
            <Select id="buyerType" input={<OutlinedInput />} {...field}>
              {BUYER_TYPES.map((type) => (
                <MenuItem key={type} value={type}>{t(`contact.form.buyerOptions.${type}`)}</MenuItem>
              ))}
            </Select>
          )}
        />
      </FormField>

      <FormField id="message" label={t('contact.form.message')}>
        <OutlinedInput id="message" multiline minRows={3} {...bind('message')} />
      </FormField>

      <Controller
        name="consent"
        control={control}
        rules={{ validate: (value) => value || t('contact.form.errors.consent') }}
        render={({ field }) => (
          <Box component="label" sx={{ display: 'flex', gap: 1.5, alignItems: 'flex-start', fontSize: 14, lineHeight: '20px', cursor: 'pointer' }}>
            <Checkbox
              checked={field.value}
              onChange={(event) => field.onChange(event.target.checked)}
              onBlur={field.onBlur}
              inputRef={field.ref}
              inputProps={{ 'aria-describedby': describedBy('consent') }}
              sx={{ p: 0, color: 'brand.inputBorder', '&.Mui-checked': { color: 'brand.green900' } }}
            />
            <span>
              {t('contact.form.consentBefore')}{' '}
              <Link href="#privacy">{t('contact.form.consentLink')}</Link>.
            </span>
          </Box>
        )}
      />
      {renderConsentError()}

      {renderStatus()}

      <Button type="submit" variant="contained" color="primary" size="large" disabled={isSubmitting}>
        {renderSubmitLabel()}
      </Button>
    </Box>
  );
}
