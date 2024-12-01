
import React, { createContext, useContext, useState, useEffect } from 'react';
import { NewsItem } from './../utils/types';
import { fetchData } from './../utils/data'; // Импорт вашей функции для получения данных
import { dataStatic } from '../utils/dataStatic';

// Создаем контекст
export const NewsContext = createContext<{
  news: NewsItem[] | null;
  isLoading: boolean;
}>({
  news: null,
  isLoading: true,
});

// Хук для удобного использования контекста
export const useNews = () => {
  const context = useContext(NewsContext);
  if (!context) {
    throw new Error('useNews must be used within a NewsProvider');
  }
  return context;
};

// Провайдер
export const NewsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [news, setNews] = useState<NewsItem[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAndSetNews = async () => {
      try {
        // const articles = await fetchData();
        // const filteredArticles = articles.filter((el) => el.content !== null);
        // setNews(filteredArticles);
        setNews(dataStatic)
      } catch (error) {
        console.error('Error fetching news:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAndSetNews();
  }, []);

  return (
    <NewsContext.Provider value={{ news, isLoading }}>
      {children}
    </NewsContext.Provider>
  );
};
