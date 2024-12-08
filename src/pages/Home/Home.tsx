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
import { agreeModalContent, termsModalContent } from '../../utils/modalContents';

const Home: React.FC = () => {
  const modal = useRef<HTMLIonModalElement>(null);
  const page = useRef(undefined);

  const [modalTitle, setModalTitle] = useState<string>('');
  const [modalContent, setModalContent] = useState<string>('');

  const [presentingElement, setPresentingElement] = useState<
    HTMLElement | undefined
  >(undefined);

  useEffect(() => {
    setPresentingElement(page.current);
  }, []);

 const openModal = (title: string, content: string) => {
   setModalTitle(title);
   setModalContent(content);
   modal.current?.present();
 };

  const dismiss = () => {
    modal.current?.dismiss();
  };


  return (
    <IonPage ref={page}>
      <Header title="Главная" />
      <IonContent fullscreen>
        <div className="container">
          <div className="form-container">
            <Form
              onAgreeButtonClick={() =>
                openModal(agreeModalContent.title, agreeModalContent.content)
              }
              onTermsButtonClick={() =>
                openModal(termsModalContent.title, termsModalContent.content)
              }
            />
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
              <IonTitle className="black">{modalTitle}</IonTitle>
              <IonButtons slot="end">
                <IonButton onClick={() => dismiss()} className="button-round">
                  <IonIcon icon={closeOutline} />
                </IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding-horizontal"><p>{modalContent}</p></IonContent>
        </IonModal>
      </IonContent>
    </IonPage>
  );
};

export default Home;
