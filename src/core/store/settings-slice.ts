import { createSlice } from '@reduxjs/toolkit'

export interface SettingsState {
  isDarkTheme: boolean
}

const initialState: SettingsState = {
  isDarkTheme: false
}

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    changeTheme: (state) => {
      state.isDarkTheme = !state.isDarkTheme
    }
  }
})

export const { changeTheme } = settingsSlice.actions

export default settingsSlice.reducer
