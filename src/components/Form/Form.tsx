import { useState } from 'react';
import {
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonGrid,
  IonRow,
  IonCol,
  useIonRouter,
} from '@ionic/react';

import { validateEmail, validatePassword } from '../../utils/validation';
import './Form.css';

interface ContainerProps {}

type Validity = {
  [key: string]: boolean | null; // индексная сигнатура
};

type ErrorMessage = {
  [key: string]: string;
};

const Form: React.FC<ContainerProps> = () => {
  const router = useIonRouter();
  const [validity, setValidity] = useState<Validity>({
    name: null,
    email: null,
    password: null,
  });

  const [touched, setTouched] = useState<Validity>({
    name: null,
    email: null,
    password: null,
  });

  const [errorMessages, setErrorMessages] = useState<ErrorMessage>({
    name: '',
    email: '',
    password: '',
  });

  const handleErrorMessages = (input: string, message: string) => {
    setErrorMessages({
      ...errorMessages,
      [input]: message,
    });
  };

  const handleValidity = (
    input: string,
    isValid: null | boolean,
    message: string = ''
  ) => {
    setValidity({
      ...validity,
      [input]: isValid,
    });

    handleErrorMessages(input, message);
  };

  const handleTouched = (input: string, isTouched: null | boolean) =>
    setTouched({
      ...touched,
      [input]: isTouched,
    });

  const isEmptyInput = (input: HTMLInputElement): boolean => {
    return !input.value.trim();
  };

  const validate = (ev: Event, input: string) => {
    handleTouched(input, true); //добавляет класс для отображения ошибки

    const value = (ev.target as HTMLInputElement).value;

    if (value === '') {
      handleValidity(input, false, 'Обязательное поле');
      return;
    }
    handleValidity(input, true);

    switch (input) {
      case 'email':
        validateEmail(value) !== null
          ? handleValidity(input, true)
          : handleValidity(input, false, 'Некорректный email');
        break;

      case 'password':
        validatePassword(value) !== null
          ? handleValidity(input, true)
          : handleValidity(
              input,
              false,
              'Пароль должен содержать минимум 6 символов, включая цифры или спецсимволы'
            );
        break;

      default:
        break;
    }
  };

  const blurHandler = (e: Event) => {
    const input = e.target as HTMLInputElement;

    if (!input.value) {
      handleTouched(input.name, false);
      handleValidity(input.name, null);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const inputs = (e.target as HTMLFormElement).querySelectorAll('input');

    const newValidity = { ...validity };
    const newTouched = { ...touched };
    const newErrorMessages = { ...errorMessages };

    inputs.forEach((input) => {
      if (isEmptyInput(input)) {
        // Обновляем временные значения
        newValidity[input.name] = false;
        newTouched[input.name] = true;
        newErrorMessages[input.name] = 'Обязательное поле';
      }
    });

    // После завершения цикла обновляем состояние
    setValidity(newValidity);
    setTouched(newTouched);
    setErrorMessages(newErrorMessages);

    if (validity.name && validity.email && validity.password) {
      console.log('форма отпарвлена');
      router.push('/success', 'forward');
    }
  };

  return (
    <form name="register" className="form" onSubmit={handleSubmit} noValidate>
      <IonGrid>
        <IonRow>
          <IonCol>
            <h1>Регистрация</h1>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonItem className="custom">
              <IonInput
                className={`
                  custom 
                  ${validity.name && 'ion-valid'} 
                  ${validity.name === false && 'ion-invalid'} 
                  ${touched.name && 'ion-touched'}
                `}
                label="Имя"
                labelPlacement="floating"
                type="text"
                name="name"
                errorText={errorMessages.name}
                onIonInput={(event) => validate(event, 'name')}
                onIonBlur={(e) => blurHandler(e)}
              />
            </IonItem>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonItem className="custom">
              <IonInput
                className={`
                  custom ion-margin-top 
                  ${validity.email && 'ion-valid'} 
                  ${validity.email === false && 'ion-invalid'} 
                  ${validity.email === null && ''} 
                  ${touched.email && 'ion-touched'}
                `}
                label="Электронная почта"
                labelPlacement="floating"
                type="email"
                name="email"
                errorText={errorMessages.email}
                onIonInput={(event) => validate(event, 'email')}
                onIonBlur={(e) => blurHandler(e)}
                // required
              />
            </IonItem>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonItem className="custom">
              <IonInput
                className={`
                  custom ion-margin-top
                  ${validity.password && 'ion-valid'} 
                  ${validity.password === false && 'ion-invalid'} 
                  ${touched.password && 'ion-touched'}
                `}
                label="Пароль"
                labelPlacement="floating"
                type="password"
                name="password"
                errorText={errorMessages.password}
                onIonInput={(event) => validate(event, 'password')}
                onIonBlur={(e) => blurHandler(e)}
              />
            </IonItem>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonButton
              expand="block"
              type="submit"
              className="custom ion-margin-top"
            >
              Зарегистрироваться
            </IonButton>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol className="small">
            <IonLabel>
              Отправляя форму, вы принимаете{' '}
              <a>«Соглашение об обработке персональных данных»</a> и{' '}
              <a>«Условия сервиса»</a>
            </IonLabel>
          </IonCol>
        </IonRow>
      </IonGrid>
    </form>
  );
};

export default Form;
