import { useRef, useState, useEffect } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonModal,
  IonButtons,
  IonButton,
  IonIcon,
} from '@ionic/react';
import Form from '../../components/Form/Form';
import './Home.css';
import Header from '../../components/Header/Header';
import { closeOutline } from 'ionicons/icons';

const Home: React.FC = () => {
  const modal = useRef<HTMLIonModalElement>(null);
  const page = useRef(undefined);

  const [presentingElement, setPresentingElement] = useState<
    HTMLElement | undefined
  >(undefined);

  useEffect(() => {
    setPresentingElement(page.current);
  }, []);

  const dismiss = () => {
    modal.current?.dismiss();
  };

  return (
    <IonPage ref={page}>
      <Header title="Главная" />
      <IonContent fullscreen>
        <div className="container">
          <div className="form-container">
            <Form />
          </div>
        </div>
        <IonModal
          ref={modal}
          trigger="open-agree-modal"
          canDismiss={true}
          presentingElement={presentingElement}
          className="custom-modal"
        >
          <IonHeader className="no-shadow border-bottom">
            <IonToolbar>
              <IonTitle className="black">Пользовательское соглашение</IonTitle>
              <IonButtons slot="end">
                <IonButton onClick={() => dismiss()} className="button-round">
                  <IonIcon icon={closeOutline} />
                </IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            <p className="ion-padding-horizontal">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam
              maiores totam similique atque id culpa hic illum quaerat beatae
              tempora quae nostrum sunt, impedit fugiat dicta tenetur, deserunt
              error ipsam!
            </p>
            <p className="ion-padding-horizontal">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam
              maiores totam similique atque id culpa hic illum quaerat beatae
              tempora quae nostrum sunt, impedit fugiat dicta tenetur, deserunt
              error ipsam!
            </p>
            <p className="ion-padding-horizontal">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam
              maiores totam similique atque id culpa hic illum quaerat beatae
              tempora quae nostrum sunt, impedit fugiat dicta tenetur, deserunt
              error ipsam!
            </p>
            <p className="ion-padding-horizontal">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam
              maiores totam similique atque id culpa hic illum quaerat beatae
              tempora quae nostrum sunt, impedit fugiat dicta tenetur, deserunt
              error ipsam!
            </p>
            <p className="ion-padding-horizontal">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam
              maiores totam similique atque id culpa hic illum quaerat beatae
              tempora quae nostrum sunt, impedit fugiat dicta tenetur, deserunt
              error ipsam!
            </p>
          </IonContent>
        </IonModal>
      </IonContent>
    </IonPage>
  );
};

export default Home;
