import { createSlice } from '@reduxjs/toolkit'

import { createAppAsyncThunk } from '@/app/utils/createAppAsyncThunk.ts'
import { newsApi } from '@/services/news/news-api.ts'

export const slice = createSlice({
  name: 'posts',
  initialState: {},
  reducers: {},
})

export const getNews = createAppAsyncThunk<any, void>('news/getNews', async () => {
  return await newsApi.getNews().then(res => res.data)
})

export const newsReducer = slice.reducer
