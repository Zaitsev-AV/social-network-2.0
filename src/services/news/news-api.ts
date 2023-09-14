import axios from 'axios'

export const newsApi = {
  getNews: () => {
    return axios.get<NewsData>(
      'https://newsapi.org/v2/everything?domains=wsj.com&apiKey=228060d64bcf4e618545f2a1d63f7b21'
    )
  },
}
export type Source = {
  id: string
  name: string
}

export type Articles = {
  source: Source
  author: string
  title: string
  description: string
  url: string
  urlToImage: string
  publishedAt: string
  content: string
}

export type NewsData = {
  status: string
  totalResults: number
  articles: Articles[]
}
