import axios from 'axios'

export const newsApi = {
  getNews: () => {
    return axios.get(
      'https://newsapi.org/v2/everything?domains=wsj.com&apiKey=228060d64bcf4e618545f2a1d63f7b21'
    )
  },
}
