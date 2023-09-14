import { createSlice } from '@reduxjs/toolkit'

import { createAppAsyncThunk } from '@/app/utils/createAppAsyncThunk.ts'
import { newsApi, NewsData } from '@/services/news/news-api.ts'

const initialState: NewsData = {
  status: '',
  totalResults: 0,
  articles: [
    {
      source: {
        id: '',
        name: '',
      },
      author: '',
      title: '',
      description: '',
      url: '',
      urlToImage: '',
      publishedAt: '',
      content: '',
    },
  ],
}
const slice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getNews.fulfilled, (state, action) => {
      state.articles = action.payload.articles
      state.totalResults = action.payload.totalResults
      state.status = action.payload.status
    })
  },
})

export const getNews = createAppAsyncThunk<NewsData, void>('news/getNews', async (_, thunkAPI) => {
  const { rejectWithValue } = thunkAPI

  try {
    const res = await newsApi.getNews()

    if (res.data.status === 'ok') {
      return res.data
    }

    //todo добавить обработку если статус не 'ok'
    return res.data
  } catch (error) {
    return rejectWithValue(null)
  }
})

export const newsReducer = slice.reducer
