import { Navigate, useParams } from 'react-router-dom';
import { NewsArticle } from '../components/sections/NewsArticle';
import { getNewsBySlug } from '../data/news';
import { useCustomPageMeta } from '../hooks/usePageMeta';

export default function NewsArticlePage() {
  const { slug } = useParams();
  const article = getNewsBySlug(slug);

  useCustomPageMeta(article?.meta);

  if (!article) {
    return <Navigate to="/news" replace />;
  }

  return <NewsArticle article={article} />;
}
