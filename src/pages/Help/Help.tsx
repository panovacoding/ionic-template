import { IonPage, IonContent } from '@ionic/react';
import Header from '../../components/Header/Header'
import FaqAccordions from '../../components/FaqAccordions/FaqAccordions';
import HelpForm from '../../components/HelpForm/HelpForm';

const Help: React.FC = () => {
    
    return (
      <IonPage>
        <Header title="Помощь" />
        <IonContent fullscreen>
          <div className="container">
            <FaqAccordions />
            <HelpForm />
          </div>
        </IonContent>
      </IonPage>
    );
}

export default Help;