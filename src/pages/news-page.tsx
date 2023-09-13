import { FC, useEffect } from 'react'

import { useAppDispatch } from '@/app/hooks'
import { getNews } from '@/services/news/news-slice.ts'

export const NewsPage: FC = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    const res = dispatch(getNews())

    console.log(res)
  }, [])

  return (
    <div style={{ position: 'absolute', left: '40%', top: '40%', fontSize: '100px' }}>
      News Page
    </div>
  )
}
