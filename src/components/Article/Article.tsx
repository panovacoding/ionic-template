import {
  IonButton,
  IonIcon,
} from '@ionic/react';
import { chevronBackOutline } from 'ionicons/icons';
import './Article.css'
import { NewsItem } from '../../utils/types';

interface ArticleProps {
    article: NewsItem | undefined;
    onIonButtonClick: () => void;
}


const Article : React.FC<ArticleProps> = ({article, onIonButtonClick}) => {
    return (
      <>
        <IonButton onClick={onIonButtonClick} fill="clear">
          <IonIcon icon={chevronBackOutline} slot="start"></IonIcon>
          Назад
        </IonButton>
        <article className="article">
          <h1 className="article__title">{article?.title}</h1>
          <img className="article__image" src={article?.image ?? ''} alt="" />
          <div className="article__content">{article?.content}</div>
        </article>
      </>
    );
}

export default Article;