import { configureStore } from '@reduxjs/toolkit'
import HomePageCoins from './HomePageSlicer/HomePageSlice'
import UserSlice from './UserSlice/UserSlice'
import CategorySearchSlice from './CategorySearchSlice/CategorySearchSlice'


export const store = configureStore({
  reducer: {
    homecoins: HomePageCoins,
    userslice: UserSlice,
    categorysearch: CategorySearchSlice,
  },
})