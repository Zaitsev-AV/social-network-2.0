import { FC, useEffect } from 'react'

import { useAppDispatch, useAppSelector } from '@/app/hooks'
import { NewsItem } from '@/components/news/news.tsx'
import { getNews } from '@/services/news/news-slice.ts'

export const NewsPage: FC = () => {
  const dispatch = useAppDispatch()
  const data = useAppSelector(state => state.news)

  console.log(data)
  useEffect(() => {
    dispatch(getNews())
  }, [])

  return (
    <div>
      {data.articles.map(item => {
        return <NewsItem key={item.url} item={item} />
      })}
    </div>
  )
}
