import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonCheckbox,
  IonButton,
  IonGrid,
  IonRow,
  IonCol,
  useIonRouter,
} from '@ionic/react';

import './ExploreContainer.css';

interface ContainerProps {}

const ExploreContainer: React.FC<ContainerProps> = () => {
  const router = useIonRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push('/success', 'forward');
  };

  return (
    <form name="register" className="form" onSubmit={handleSubmit}>
      <IonGrid>
        <IonRow>
          <IonCol>
            <h1>Регистрация</h1>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonItem className="custom">
              <IonInput
                className="custom"
                label="Имя"
                labelPlacement="floating"
                type="text"
                name="name"
                errorText=""
                // required
              />
            </IonItem>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonItem className="custom">
              <IonInput
                className="custom ion-margin-top"
                label="Электронная почта"
                labelPlacement="floating"
                type="email"
                name="email"
                // required
              />
            </IonItem>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonItem className="custom">
              <IonInput
                className="custom ion-margin-top"
                label="Пароль"
                labelPlacement="floating"
                type="password"
                name="password"
                // required
              />
            </IonItem>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonButton
              expand="block"
              type="submit"
              className="custom ion-margin-top"
            >
              Зарегистрироваться
            </IonButton>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol className="small">
            <IonLabel>
              Отправляя форму, вы принимаете{' '}
              <a>«Соглашение об обработке персональных данных»</a> и{' '}
              <a>«Условия сервиса»</a>
            </IonLabel>
          </IonCol>
        </IonRow>
      </IonGrid>
    </form>
  );
};

export default ExploreContainer;