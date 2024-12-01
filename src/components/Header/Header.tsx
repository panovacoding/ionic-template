import {IonHeader, IonToolbar, IonTitle, IonButtons, IonButton} from '@ionic/react'
interface HeaderProps {
  title: string
}
const Header: React.FC<HeaderProps> = ({title}) => {
    return (
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>{title}</IonTitle>
        </IonToolbar>
      </IonHeader>
    );
}

export default Header;