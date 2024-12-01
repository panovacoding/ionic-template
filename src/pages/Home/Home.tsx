import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Form from '../../components/Form/Form';
import './Home.css';
import Header from '../../components/Header/Header';

const Home: React.FC = () => {
  return (
    <IonPage>
      <Header title='Главная'/>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>

        <Form />

      </IonContent>
    </IonPage>
  );
};

export default Home;
