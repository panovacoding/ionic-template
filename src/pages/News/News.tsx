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
  IonSpinner,
} from '@ionic/react';
import Header from '../../components/Header/Header';
import { fetchData } from './../../utils/data';
import { NewsItem } from '../../utils/types';
import { useNews } from '../../config/NewsContext';
import { convertDate } from '../../utils/convertDate';
import './News.css';

const News: React.FC = () => {
  const { news, isLoading } = useNews();

  return (
    <IonPage>
      <Header />
      <IonContent>
        <div className="container">
          <IonText>
            <h1>Новости</h1>
          </IonText>
          {isLoading ? (
            <IonSpinner />
          ) : (
            <IonGrid className="grid-news">
              <IonRow>
                {news?.map((article: NewsItem) => (
                  <IonCol size="12" sizeSm="6" sizeMd="4" className="flex">
                    <IonCard
                      routerLink={`/news-detail/${article.title}`}
                      routerDirection="forward"
                    >
                      <img
                        alt={article.title || ''}
                        src={
                          article.urlToImage ||
                          'https://ionicframework.com/docs/img/demos/card-media.png'
                        }
                        className="ion-card-image"
                      />
                      <IonCardHeader>
                        <IonCardTitle>{article.title}</IonCardTitle>
                        <IonCardSubtitle>
                          {convertDate(article.publishedAt)}
                        </IonCardSubtitle>
                      </IonCardHeader>

                      <IonCardContent>{article.content}</IonCardContent>
                    </IonCard>
                  </IonCol>
                ))}
              </IonRow>
            </IonGrid>
          )}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default News;
