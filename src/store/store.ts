import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    news: () => {},
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
