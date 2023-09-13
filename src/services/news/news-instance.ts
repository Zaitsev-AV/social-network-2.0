import axios from 'axios'

const API_KEY = '228060d64bcf4e618545f2a1d63f7b21'

export const newsInstance = axios.create({
  baseURL: `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=${API_KEY}`,
  withCredentials: true,
})
