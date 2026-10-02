// Sends the "Become a customer" form to Netlify Forms.
// Netlify stores the submission and emails it to the addresses set under
// Site configuration → Forms → Form notifications.

const FORM_NAME = 'contact';

function encode(data) {
  return new URLSearchParams(data).toString();
}

export async function submitContactRequest(data) {
  const payload = {
    'form-name': FORM_NAME,
    'bot-field': '',
    company: data.company,
    kvk: data.kvk,
    email: data.email,
    phone: data.phone,
    buyerType: data.buyerType,
    message: data.message,
    consent: String(data.consent),
    language: data.language,
  };

  const response = await fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: encode(payload),
  });

  if (!response.ok) {
    throw new Error(`Form submit failed with status ${response.status}`);
  }

  return { ok: true };
}