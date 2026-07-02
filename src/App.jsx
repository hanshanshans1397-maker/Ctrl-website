import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { LangProvider } from './context/LangContext';
import AboutPage from './pages/AboutPage';
import ArticleTemplatePage from './pages/ArticleTemplatePage';
import ArticlesPage from './pages/ArticlesPage';
import HomePage from './pages/HomePage';
import ApplyPage from './pages/ApplyPage';
import JoinPage from './pages/JoinPage';
import ResearchPage from './pages/ResearchPage';
import SummitPage from './pages/SummitPage';
import WorkshopsPage from './pages/WorkshopsPage';
import AktualityPage from './pages/AktualityPage';

export default function App() {
  return (
    <LangProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="articles" element={<ArticlesPage />} />
            <Route path="aktuality" element={<AktualityPage />} />
            <Route path="research" element={<ResearchPage />} />
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
