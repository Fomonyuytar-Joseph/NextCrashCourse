import React from 'react'
import styles from '../styles/Article.module.css'

function ArticleList({articles}) {
  return (
    <div className={styles.grid} > 
      {articles.map((article) => (
        <h3>{article.title}</h3>
      ))}
    </div>
  )
}

export default ArticleList