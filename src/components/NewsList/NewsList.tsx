import {
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonCardTitle,
  IonCardSubtitle,
  IonButtons,
  IonButton,
  IonIcon,
  IonToast,
  IonAlert
} from '@ionic/react'
import { heart, bookmark } from 'ionicons/icons';
import { NewsItem } from '../../utils/types';
import { convertDate } from '../../utils/convertDate';
import './NewsList.css'
import { useState } from 'react';

interface NewsListProps {
  news: NewsItem[] | null; // Ожидаемый массив новостей
}

const NewsList: React.FC<NewsListProps> = ({news}) => {

    const [likedArticles, setLikedArticles] = useState<boolean[]>(
      () => news?.map(() => false) || []
    );
    const [savedArticles, setSavedArticles] = useState<boolean[]>(
        () => news?.map(() => false) || []
    );
    const [showToast, setShowToast] = useState<boolean>(false);
    const [showAlert, setShowAlert] = useState<boolean>(false);
    const [alertIndex, setAlertIndex] = useState<number | null>(null);

    const handleLikeButton = (index: number) => {
      setLikedArticles((prevState) =>
        prevState.map((liked, i) => (i === index ? !liked : liked))
      );
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 3000); 
    };

    const handleSaveButton = (index: number) => {
        setAlertIndex(index);
        setShowAlert(true);
    }

    return (
      <>
        <IonGrid className="grid-news">
          <IonRow>
            {news?.map((article: NewsItem, i) => (
              <IonCol size="12" sizeSm="6" sizeMd="4" className="flex" key={i}>
                <IonCard
                  className="custom"
                  routerLink={`/news-detail/${article.title}`}
                  routerDirection="forward"
                >
                  <div className="ion-card-inner">
                    <img
                      alt={article.title || ''}
                      src={
                        article.image ||
                        'https://ionicframework.com/docs/img/demos/card-media.png'
                      }
                      className="ion-card-image"
                    />
                    <IonCardHeader className="ion-no-padding">
                      <IonCardTitle>{article.title}</IonCardTitle>
                      <IonCardSubtitle>
                        {convertDate(article.publishedAt)}
                      </IonCardSubtitle>
                    </IonCardHeader>

                    <IonCardContent>{article.description}</IonCardContent>
                    <IonButtons className="ion-card-buttons">
                      <IonButton
                        shape="round"
                        color={likedArticles[i] ? 'danger' : 'primary'}
                        className="ion-card-like-button"
                        onClick={(e) => {
                          e.stopPropagation();
                          e.preventDefault();
                          handleLikeButton(i);
                        }}
                      >
                        <IonIcon slot="icon-only" icon={heart} />
                      </IonButton>
                      <IonButton
                        shape="round"
                        color={savedArticles[i] ? 'danger' : 'primary'}
                        className="ion-card-like-button"
                        onClick={(e) => {
                          e.stopPropagation();
                          e.preventDefault();
                          handleSaveButton(i);
                        }}
                      >
                        <IonIcon slot="icon-only" icon={bookmark} />
                      </IonButton>
                    </IonButtons>
                  </div>
                </IonCard>
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>
        <IonToast
          isOpen={showToast}
          message="Ваш голос учтен"
          duration={3000}
        />
        <IonAlert
          isOpen={showAlert}
          header={
            savedArticles[alertIndex ?? 0]
              ? 'Удалить из избранного?'
              : 'Добавить в избранное?'
          }
          buttons={[
            {
              text: 'Да',
              role: 'confirm',
              handler: () => {
                if (alertIndex !== null) {
                  setSavedArticles((prevState) =>
                    prevState.map((saved, i) =>
                      i === alertIndex ? !saved : saved
                    )
                  );
                }
                setShowAlert(false);
              },
            },
            {
              text: 'Нет',
              role: 'cancel',
              handler: () => {
                setShowAlert(false);
              },
            },
          ]}
        />
      </>
    );
}

export default NewsList;