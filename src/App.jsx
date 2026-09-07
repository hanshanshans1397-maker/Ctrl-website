import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { LangProvider } from './context/LangContext';
import AboutPage from './pages/AboutPage';
import ArticleTemplatePage from './pages/ArticleTemplatePage';
import HomePage from './pages/HomePage';
import ApplyPage from './pages/ApplyPage';
import JoinPage from './pages/JoinPage';
import SummitPage from './pages/SummitPage';
import WorkshopsPage from './pages/WorkshopsPage';
import AktualityPage from './pages/AktualityPage';
import NewsArticlePage from './pages/NewsArticlePage';

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
            <Route path="summit" element={<SummitPage />} />
            <Route path="workshops" element={<WorkshopsPage />} />
            {import.meta.env.DEV ? (
              <Route path="article-template" element={<ArticleTemplatePage />} />
            ) : null}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LangProvider>
  );
}
