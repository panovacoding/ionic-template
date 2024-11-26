import { NewsItem } from './types';
export const fetchData = async (): Promise<NewsItem[]> => {
  const API_KEY = '31db824ff7d86fab91725683fc07155c';
  try {
    const data = await fetch(
      // 'https://newsapi.org/v2/top-headlines?category=technology&apiKey=dcbb830e18cb463d9d48ae5c6638878e'
      `https://gnews.io/api/v4/top-headlines?category=technology&apikey=${API_KEY}`
    );
    const res = await data.json();
    console.log(res.articles);
    return res.articles as NewsItem[];
  } catch (e) {
    console.log(e);
    return []
  }
};
