import {
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
} from '@ionic/react';

import './Form.css';

interface ContainerProps {}

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <div id="container">
      <form action="" name="register" className="form">
        <IonGrid>
          <IonRow>
            <IonCol>
              <h1>Регистрация</h1>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem className="custom">
                {/* <IonLabel position='fixed'>Имя</IonLabel> */}
                <IonInput
                    className="custom"
                    label='Имя'
                    labelPlacement='stacked'
                    type="text"
                    name="name"
                    errorText=""
                    fill="outline"
                    required
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
                  required
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
                  required
                />
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="auto">
              <IonButton type="submit" className="custom ion-margin-top">
                Зарегистрироваться
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </form>
    </div>
  );
};

export default ExploreContainer;
