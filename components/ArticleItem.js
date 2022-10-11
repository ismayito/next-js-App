import React from 'react';
import styles from "../styles/ArticleList.module.css";
import Link from "next/link"

const ArticleItem = ({article}) => {
    //console.log(article)
  return (
    <div>
        <Link  href={`/article/${article.id}`}>
            <a className={styles.card}>
                <h3>{article.title}</h3>
                <p>{article.body}</p>
            </a>
        </Link>
    </div>
  )
}

export default ArticleItem