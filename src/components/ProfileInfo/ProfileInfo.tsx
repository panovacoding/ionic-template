import {
  IonList,
  IonListHeader,
  IonItem,
  IonLabel,
  IonText,
} from '@ionic/react';
import './ProfileInfo.css'

const ProfileInfo: React.FC = () => {
    return (
      <div className="profile-info">
        <IonList className="ion-no-padding">
          <IonListHeader className="ion-no-padding profile-info__header">
            <h2>Мои данные</h2>
          </IonListHeader>
          <IonItem className="ion-no-padding">
            <IonLabel>Телефон:</IonLabel>
            <IonText>+7 999 000 00 00</IonText>
          </IonItem>
          <IonItem className="ion-no-padding">
            <IonLabel>Электронная почта</IonLabel>
            <IonText>email@mail.ru</IonText>
          </IonItem>
        </IonList>
      </div>
    );
}

export default ProfileInfo;