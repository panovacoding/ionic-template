import {
  IonPage,
  IonContent,
  IonText,
  IonSpinner,
} from '@ionic/react';
import Header from '../../components/Header/Header';
import { useNews } from '../../config/NewsContext';
import './News.css';
import NewsList from '../../components/NewsList/NewsList';

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
            <NewsList news={news}/>
          )}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default News;
