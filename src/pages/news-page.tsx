import { FC, useEffect } from 'react'

import { useAppDispatch, useAppSelector } from '@/app/hooks'
import { getNews } from '@/services/news/news-slice.ts'

export const NewsPage: FC = () => {
  const dispatch = useAppDispatch()
  const data = useAppSelector(state => state.news)

  console.log(data)
  useEffect(() => {
    dispatch(getNews())
  }, [])

  return (
    <div style={{ position: 'absolute', left: '40%', top: '40%', fontSize: '100px' }}>
      News Page
    </div>
  )
}
