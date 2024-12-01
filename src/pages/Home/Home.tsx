import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Form from '../../components/Form/Form';
import './Home.css';
import Header from '../../components/Header/Header';

const Home: React.FC = () => {
  return (
    <IonPage>
      <Header title="Главная" />
      <IonContent fullscreen>
        <div className="container">
          <div className="form-container">
            <Form />
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
