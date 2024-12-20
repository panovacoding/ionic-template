import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonRouterOutlet,
  setupIonicReact,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
  IonBadge
} from '@ionic/react';
import { homeOutline, newspaperOutline, informationCircleOutline, personCircleOutline } from 'ionicons/icons';
import { IonReactRouter } from '@ionic/react-router';
import { NewsContext } from './config/NewsContext';
import { NewsProvider } from './config/NewsContext';
import Home from './pages/Home/Home';
import RegisterSuccess from './pages/RegisterSuccess/RegisterSuccess'
import News from './pages/News/News'
import Help from './pages/Help/Help';
import Profile from './pages/Profile/Profile';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';
import NewsDetail from './pages/NewsDetail/NewsDetail';

setupIonicReact();

const App: React.FC = () => (
  <NewsProvider>
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Redirect exact from="/" to="/home" />
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/success">
              <RegisterSuccess />
            </Route>
            <Route exact path="/news">
              <News />
            </Route>
            <Route exact path="/news-detail/:title">
              <NewsDetail />
            </Route>
            <Route exact path="/help">
              <Help />
            </Route>
            <Route exact path="/profile">
              <Profile />
            </Route>
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="home" href="/home">
              <IonIcon icon={homeOutline} />
              <IonLabel>Главная</IonLabel>
            </IonTabButton>

            <IonTabButton tab="news" href="/news">
              <IonIcon icon={newspaperOutline} />
              <IonLabel>Новости</IonLabel>
            </IonTabButton>

            <IonTabButton tab="help" href="/help">
              <IonIcon icon={informationCircleOutline} />
              <IonLabel>Помощь</IonLabel>
            </IonTabButton>

            <IonTabButton tab="profile" href="/profile">
              <IonIcon icon={personCircleOutline} />
              <IonLabel>Профиль</IonLabel>
              <IonBadge color="danger">2</IonBadge>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  </NewsProvider>
);

export default App;
