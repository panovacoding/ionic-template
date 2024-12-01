import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonRouterLink,
} from '@ionic/react';
import './RegisterSuccess.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonBackButton></IonBackButton>
          </IonButtons>
          <IonTitle>Вернуться на главную</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="success-container">
          <h1>Регистрация прошла успешно</h1>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
