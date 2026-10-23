import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { LangProvider } from './context/LangContext';
import AboutPage from './pages/AboutPage';
import ArticleTemplatePage from './pages/ArticleTemplatePage';
import HomePage from './pages/HomePage';
import ApplyPage from './pages/ApplyPage';
import JoinPage from './pages/JoinPage';
import NewsletterPage from './pages/NewsletterPage';
import NewsletterPreferencesPage from './pages/NewsletterPreferencesPage';
import NewsletterUnsubscribePage from './pages/NewsletterUnsubscribePage';
import SummitPage from './pages/SummitPage';
import WorkshopsPage from './pages/WorkshopsPage';
import EventsPage from './pages/EventsPage';
import AktualityPage from './pages/AktualityPage';
import NewsArticlePage from './pages/NewsArticlePage';
import NotFoundPage from './pages/NotFoundPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';

export default function App() {
  return (
    <LangProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="news" element={<AktualityPage />} />
            <Route path="news/:slug" element={<NewsArticlePage />} />
            {/* Články a výzkum se nyní píší v Aktualitách — staré cesty přesměrováváme */}
            <Route path="articles" element={<Navigate to="/news" replace />} />
            <Route path="research" element={<Navigate to="/news" replace />} />
            <Route path="join" element={<JoinPage />} />
            <Route path="apply" element={<ApplyPage />} />
            <Route path="newsletter" element={<NewsletterPage />} />
            <Route path="newsletter/preferences" element={<NewsletterPreferencesPage />} />
            <Route path="newsletter/unsubscribe" element={<NewsletterUnsubscribePage />} />
            <Route path="summit" element={<SummitPage />} />
            <Route path="workshops" element={<WorkshopsPage />} />
            <Route path="events" element={<EventsPage />} />
            <Route path="privacy" element={<PrivacyPolicyPage />} />
            <Route
              path="ochrana-osobnich-udaju"
              element={<Navigate to="/privacy" replace />}
            />
            {import.meta.env.DEV ? (
              <Route path="article-template" element={<ArticleTemplatePage />} />
            ) : null}
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LangProvider>
  );
}
