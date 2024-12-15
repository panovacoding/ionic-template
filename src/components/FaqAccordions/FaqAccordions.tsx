import { useState } from 'react';
import {
  IonAccordionGroup,
  IonAccordion,
  IonItem,
  IonLabel,
} from '@ionic/react';

import './FaqAccordions.css'

const FaqAccordions: React.FC = () => {
  const [openedAccordion, setOpenedAccordion] = useState<string | null>(null);

  const handleAccordionChange = (event: CustomEvent) => {
    setOpenedAccordion(event.detail.value); // Запоминаем значение открытого аккордеона
  };

  return (
    <IonAccordionGroup
      className="ion-margin-top custom"
      onIonChange={handleAccordionChange}
    >
      <IonAccordion
        value="1"
        className={
          openedAccordion === '1' ? 'open' : '' + 'ion-margin-vertical'
        }
      >
        <IonItem slot="header" color="light">
          <IonLabel color={openedAccordion === '1' ? 'primary' : ''}>
            Первый часто задаваемый вопрос
          </IonLabel>
        </IonItem>
        <div className="ion-padding" slot="content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi iste
          quos soluta corrupti porro impedit blanditiis voluptas ab ducimus
          neque quas ullam autem voluptatum animi ratione, fuga reiciendis fugit
          molestiae!
        </div>
      </IonAccordion>
      <IonAccordion
        value="2"
        className={
          openedAccordion === '2' ? 'open' : '' + 'ion-margin-vertical'
        }
      >
        <IonItem slot="header" color="light">
          <IonLabel color={openedAccordion === '2' ? 'primary' : ''}>
            Второй очень важный вопрос
          </IonLabel>
        </IonItem>
        <div className="ion-padding" slot="content">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo
          necessitatibus odio sit, voluptas deserunt officiis in maiores fuga
          similique beatae recusandae numquam at cumque sequi sed ut dolorem
          neque iusto?
        </div>
      </IonAccordion>
      <IonAccordion
        value="3"
        className={
          openedAccordion === '3' ? 'open' : '' + 'ion-margin-vertical custom'
        }
      >
        <IonItem slot="header" color="light">
          <IonLabel color={openedAccordion === '3' ? 'primary' : ''}>
            Еще один вопрос, который нам часто задают
          </IonLabel>
        </IonItem>
        <div className="ion-padding" slot="content">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos
          debitis, voluptatum non voluptas illo laboriosam accusamus incidunt
          optio itaque nihil porro fugiat illum quae quibusdam consequuntur vel
          cum inventore maiores.
        </div>
      </IonAccordion>
    </IonAccordionGroup>
  );
};

export default FaqAccordions;
