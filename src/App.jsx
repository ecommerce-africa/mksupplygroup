import { Navigate, Route, Routes } from 'react-router-dom';
import LanguageLayout from './components/layout/LanguageLayout';
import Home from './pages/Home';
import { getPreferredLanguage } from './i18n';

function RootRedirect() {
  return <Navigate to={`/${getPreferredLanguage()}`} replace />;
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<RootRedirect />} />
      <Route path="/:lang" element={<LanguageLayout />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="*" element={<RootRedirect />} />
    </Routes>
  );
}
