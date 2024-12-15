import { useNews } from '../../config/NewsContext';
import {
  IonPage,
  IonContent,
  IonSpinner,
} from '@ionic/react';
import Header from '../../components/Header/Header';
import NewsList from '../../components/NewsList/NewsList';

const News: React.FC = () => {
  const { news, isLoading } = useNews();

  return (
    <IonPage>
      <Header title='Новости' />
      <IonContent>
        <div className="container">
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
