import {IonHeader, IonToolbar, IonButtons, IonButton} from '@ionic/react'
const Header: React.FC = () => {
    return (
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons>
            <IonButton routerLink="/home">Главная</IonButton>
            <IonButton routerLink="/news">Новости</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
    );
}

export default Header;