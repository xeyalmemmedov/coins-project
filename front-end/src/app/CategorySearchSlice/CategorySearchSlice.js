import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const CategorySearchSlice = createSlice({
  name: 'categorysearch',
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.value = [...action.payload]
    }
  },
})

export const { setCategory } = CategorySearchSlice.actions

export default CategorySearchSlice.reducer

