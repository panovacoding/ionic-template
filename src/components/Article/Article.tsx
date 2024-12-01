import './Article.css'
import { NewsItem } from '../../utils/types';

interface ArticleProps {
    article: NewsItem | undefined;
    onIonButtonClick: () => void;
}


const Article : React.FC<ArticleProps> = ({article, onIonButtonClick}) => {
    return (
      <>
        <article className="article">
          <h1 className="article__title">{article?.title}</h1>
          <img className="article__image" src={article?.image ?? ''} alt="" />
          <div className="article__content">{article?.content}</div>
        </article>
      </>
    );
}

export default Article;