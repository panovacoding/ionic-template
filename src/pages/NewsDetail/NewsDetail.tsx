import {
  IonPage,
  IonContent,
  IonSpinner,
  IonButton,
  IonIcon,
} from '@ionic/react';

import {chevronBackOutline} from 'ionicons/icons';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header/Header';
import { useNews } from '../../config/NewsContext';
import { useHistory } from 'react-router-dom';
import './NewsDetail.css'



const NewsDetail : React.FC = () => {
    const { title } = useParams<{ title: string }>();
    const { news, isLoading } = useNews();
    const article = news?.find((item) => item.title === title);

    const history = useHistory();

    const handleBack = () => {
      history.goBack(); // Возвращает пользователя на предыдущую страницу
    };

    return (
      <IonPage>
        <Header />
        <IonContent>
            <div className="article-container">
                {isLoading ? (
                    <IonSpinner />
                ) : (
                    <>
                    <IonButton onClick={handleBack} fill='clear'>
                        <IonIcon icon={chevronBackOutline} slot='start'></IonIcon>
                        Назад
                    </IonButton>
                    <article className="article">
                        <h1 className="article__title">{article?.title}</h1>
                        <img
                        className="article__image"
                        src={article?.urlToImage ?? ''}
                        alt=""
                        />
                        <div className="article__content">{article?.content}</div>
                    </article>
                    </>
                )}
            </div>
        </IonContent>
      </IonPage>
    );
}

export default NewsDetail