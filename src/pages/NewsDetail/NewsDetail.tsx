import {
  IonPage,
  IonContent,
  IonSpinner,
} from '@ionic/react';

import Header from '../../components/Header/Header';
import Article from '../../components/Article/Article';
import { useParams } from 'react-router-dom';
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
                  <Article article={article} onIonButtonClick={handleBack} />
                )}
            </div>
        </IonContent>
      </IonPage>
    );
}

export default NewsDetail