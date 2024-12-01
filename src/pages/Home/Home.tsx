import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Form from '../../components/Form/Form';
import './Home.css';
import Header from '../../components/Header/Header';

const Home: React.FC = () => {
  return (
    <IonPage>
      <Header title='Главная'/>
      <IonContent fullscreen>
        <Form />
      </IonContent>
    </IonPage>
  );
};

export default Home;
