import { useState, useEffect } from 'react';
import {
  IonPage,
  IonContent,
  IonText,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonCardTitle,
  IonCardSubtitle,
} from '@ionic/react';
import Header from '../../components/Header/Header';
import { fetchData } from './../../utils/data';
import { NewsItem } from '../../utils/types';
import './News.css';


const News: React.FC = () => {

const [news, setNews] = useState<NewsItem[]>([]);

  useEffect(() => {
    const fetchAndSetNews = async () => {
      const articles = await fetchData(); // Получаем массив новостей
      const filteresArticles = articles.filter((el) => el.content !== null)
      setNews(filteresArticles); // Сохраняем в состояние
    };

    fetchAndSetNews();
  }, []);

  return (
    <IonPage>
      <Header />
      <IonContent>
        <div className="container">
          <IonText>
            <h1>Новости</h1>
          </IonText>
          <IonGrid className="grid-news">
            <IonRow>
              {news.map(
                ({ title, publishedAt, content, urlToImage }: NewsItem) => (
                  <IonCol size="12" sizeSm="6" sizeMd="4" className="flex">
                    <IonCard routerLink="/news-detail">
                      <img
                        alt={title || ''}
                        src={
                          urlToImage ||
                          'https://ionicframework.com/docs/img/demos/card-media.png'
                        }
                        className="ion-card-image"
                      />
                      <IonCardHeader>
                        <IonCardTitle>{title}</IonCardTitle>
                        <IonCardSubtitle>{publishedAt}</IonCardSubtitle>
                      </IonCardHeader>

                      <IonCardContent>{content}</IonCardContent>
                    </IonCard>
                  </IonCol>
                )
              )}
            </IonRow>
          </IonGrid>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default News;
