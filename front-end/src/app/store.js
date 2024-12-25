import { configureStore } from '@reduxjs/toolkit'
import HomePageCoins from './HomePageSlicer/HomePageSlice'
import UserSlice from './UserSlice/UserSlice'


export const store = configureStore({
  reducer: {
    homecoins: HomePageCoins,
    userslice: UserSlice,
  },
})