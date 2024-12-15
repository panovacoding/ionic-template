import {IonPage, IonContent} from '@ionic/react';
import Header from '../../components/Header/Header';
import { useState, useRef, useEffect } from 'react';
import ProfileHeader from '../../components/ProfileHeader/ProfileHeader';
import ProfileInfo from '../../components/ProfileInfo/ProfileInfo';

const Profile: React.FC = () => {
  return (
    <IonPage>
      <Header title="Личный кабинет" />
      <IonContent>
        <div className="container">
          <ProfileHeader/>
          <ProfileInfo />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Profile;
