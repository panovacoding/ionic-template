import {
  IonText,
  IonGrid,
  IonRow,
  IonCol,
  IonItem,
  IonSelect,
  IonSelectOption,
  IonTextarea,
  IonButton,
} from '@ionic/react';

import './HelpForm.css'

const HelpForm: React.FC = () => {
  const handleHelpForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let data: Record<string, FormDataEntryValue> = {};
    const userData = new FormData(e.currentTarget);
    for (let [key, value] of userData) {
      data[key] = value;
    }

    console.log(data);
  };

  return (
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
                  name="subject"
                >
                  <IonSelectOption value="service">
                    Работа сервиса
                  </IonSelectOption>
                  <IonSelectOption value="account">
                    Личный кабинет
                  </IonSelectOption>
                  <IonSelectOption value="other">Другое</IonSelectOption>
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
                  name="question"
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
  );
};

export default HelpForm;
