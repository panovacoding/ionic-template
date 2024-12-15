import { useState } from 'react';
import {
  IonPage,
  IonContent,
  IonAccordion,
  IonAccordionGroup,
  IonItem,
  IonLabel,
  IonText,
  IonGrid,
  IonRow,
  IonCol,
  IonSelect,
  IonSelectOption,
  IonTextarea,
  IonButton
} from '@ionic/react';
import Header from '../../components/Header/Header'

import './Help.css'


const Help: React.FC = () => {
    const [openedAccordion, setOpenedAccordion] = useState<string | null>(null);

    const handleAccordionChange = (event: CustomEvent) => {
      setOpenedAccordion(event.detail.value); // Запоминаем значение открытого аккордеона
    };
    
    const handleHelpForm = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      let data: Record<string, FormDataEntryValue> = {};
      const userData = new FormData(e.currentTarget);
      for(let [key, value] of userData) {
        data[key] = value
      }

      console.log(data)
    };
    
    return (
      <IonPage>
        <Header title="Помощь" />
        <IonContent fullscreen>
          <div className="container">
            {/* <h1>Часто задаваемые вопросы</h1> */}
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                  iste quos soluta corrupti porro impedit blanditiis voluptas ab
                  ducimus neque quas ullam autem voluptatum animi ratione, fuga
                  reiciendis fugit molestiae!
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
                  necessitatibus odio sit, voluptas deserunt officiis in maiores
                  fuga similique beatae recusandae numquam at cumque sequi sed
                  ut dolorem neque iusto?
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
                  debitis, voluptatum non voluptas illo laboriosam accusamus
                  incidunt optio itaque nihil porro fugiat illum quae quibusdam
                  consequuntur vel cum inventore maiores.
                </div>
              </IonAccordion>
            </IonAccordionGroup>
            <div className="help-form-wrap">
              <h2>Не нашли ответа на свой вопрос?</h2>
              <IonText>
                Заполните форму ниже, специалисты техподдержки свяжутся с вами в
                ближайшее время
              </IonText>

              <form className="help-form" onSubmit={handleHelpForm}>
                <IonGrid className="ion-no-padding">
                  <IonRow>
                    <IonCol>
                      <IonItem className="ion-no-padding custom">
                        <IonSelect
                          aria-label="Fruit"
                          interface="popover"
                          label="Выберите тему вопроса"
                          labelPlacement="floating"
                          name='subject'
                        >
                          <IonSelectOption value="service">
                            Работа сервиса
                          </IonSelectOption>
                          <IonSelectOption value="account">
                            Личный кабинет
                          </IonSelectOption>
                          <IonSelectOption value="other">
                            Другое
                          </IonSelectOption>
                        </IonSelect>
                      </IonItem>
                    </IonCol>
                  </IonRow>
                  <IonRow>
                    <IonCol>
                      <IonItem className="custom">
                        <IonTextarea
                          label="Текст вопроса"
                          labelPlacement="floating"
                          placeholder="Подробно опишите вопрос, который вас интересует"
                          name='question'
                        />
                      </IonItem>
                    </IonCol>
                  </IonRow>
                  <IonRow className="ion-margin-top">
                    <IonCol className="ion-margin-top">
                      <IonButton type="submit">Отправить</IonButton>
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </form>
            </div>
          </div>
        </IonContent>
      </IonPage>
    );
}

export default Help;