import { FC } from 'react'

import { NewsArticles } from '@/services/news/news-api.ts'

type NewsItemPropsType = {
  item: NewsArticles
}

export const NewsItem: FC<NewsItemPropsType> = props => {
  const { item } = props

  return (
    <div>
      <h1>{item.title}</h1>
      <p>{item.description}</p>
    </div>
  )
}
