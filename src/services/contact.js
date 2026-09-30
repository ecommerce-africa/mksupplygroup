// Sends the "Become a customer" form.
// For now this only simulates a request. When the backend is ready:
//   1. npm i axios react-hot-toast
//   2. Replace the body below with:
//        import axios from 'axios';
//        const api = axios.create({ baseURL: import.meta.env.VITE_API_URL });
//        return api.post('/contact', data);
export async function submitContactRequest(data) {
  await new Promise((resolve) => {
    setTimeout(resolve, 800);
  });
  if (import.meta.env.DEV) {
    console.info('[contact] request', data);
  }
  return { ok: true };
}
