import React from 'react';
import styles from "../styles/ArticleList.module.css"
import ArticleItem from './ArticleItem';

const Article = ({articles}) => {
    console.log(articles)
  return (
    <div  className={styles.grid}>
        
        {articles.map(article =>(
            <ArticleItem article={article} key={article.id}></ArticleItem>
        ))}

    </div>
  )
}

export default Article