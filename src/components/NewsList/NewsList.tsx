import {
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonCardTitle,
  IonCardSubtitle,
} from '@ionic/react'
import { NewsItem } from '../../utils/types';
import { convertDate } from '../../utils/convertDate';

interface NewsListProps {
  news: NewsItem[] | null; // Ожидаемый массив новостей
}

const NewsList: React.FC<NewsListProps> = ({news}) => {
    return (
        <IonGrid className="grid-news">
        <IonRow>
            {news?.map((article: NewsItem) => (
            <IonCol size="12" sizeSm="6" sizeMd="4" className="flex">
                <IonCard
                routerLink={`/news-detail/${article.title}`}
                routerDirection="forward"
                >
                <img
                    alt={article.title || ''}
                    src={
                    article.image ||
                    'https://ionicframework.com/docs/img/demos/card-media.png'
                    }
                    className="ion-card-image"
                />
                <IonCardHeader>
                    <IonCardTitle>{article.title}</IonCardTitle>
                    <IonCardSubtitle>
                    {convertDate(article.publishedAt)}
                    </IonCardSubtitle>
                </IonCardHeader>

                <IonCardContent>{article.description}</IonCardContent>
                </IonCard>
            </IonCol>
            ))}
        </IonRow>
        </IonGrid>
    )
}

export default NewsList;