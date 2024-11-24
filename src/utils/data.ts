import { NewsItem } from './types';
export const fetchData = async (): Promise<NewsItem[]> => {
  try {
    const data = await fetch(
      'https://newsapi.org/v2/top-headlines?category=technology&apiKey=dcbb830e18cb463d9d48ae5c6638878e'
    );
    const res = await data.json();
    console.log(res.articles);
    return res.articles as NewsItem[];
  } catch (e) {
    console.log(e);
    return []
  }
};
