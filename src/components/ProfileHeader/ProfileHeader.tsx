import {
  IonItem,
  IonAvatar,
  IonLabel,
  IonButton,
  IonIcon,
  IonInput,
} from '@ionic/react';
import { useState, useRef, useEffect } from 'react';
import { createOutline, checkmark } from 'ionicons/icons';

const ProfileHeader: React.FC = () => {
  const [isEditingName, setIsEditingName] = useState<Boolean>(false);
  const [userName, setUserName] = useState<string>('Имя Фамилия');
  const [userNameInputValue, setUserNameInputValue] =
    useState<string>(userName);

  const updateUserName = (value: string) => {
    setUserName(value);
    setUserNameInputValue(value);
  };

  useEffect(() => {
    // Устанавливаем фокус, если режим редактирования активен
    if (isEditingName && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.setFocus();
      }, 0);
    }
  }, [isEditingName]);

  const inputRef = useRef<HTMLIonInputElement>(null);

  return (
    <IonItem className="ion-no-padding">
      <IonAvatar aria-hidden="true" slot="start">
        <img
          alt=""
          src="https://sh-mixnovskaya-r66.gosweb.gosuslugi.ru/netcat_files/20/304/avatar.png"
        />
      </IonAvatar>
      {isEditingName ? (
        <IonInput
          ref={inputRef}
          value={userNameInputValue}
          onIonChange={(e) => updateUserName(e.detail.value || '')}
        />
      ) : (
        <IonLabel>{userName}</IonLabel>
      )}
      <IonButton fill="clear" onClick={() => setIsEditingName(!isEditingName)}>
        <IonIcon
          icon={isEditingName ? checkmark : createOutline}
          slot="icon-only"
        ></IonIcon>
      </IonButton>
    </IonItem>
  );
};

export default ProfileHeader;
