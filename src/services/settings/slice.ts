import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getLocalStorage, setLocalStorage } from '../../services/local-storage';

type LocalStorageSettingsKeyValue = {[key in keyof LocalStorageSettings]: LocalStorageSettings[key]}

const initialState: SettingsStore = {
  hardMode: getLocalStorage('hardMode')
};


const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    // used to set settings that are initialized by local storage
    setLocalStorageSettings(state, action: PayloadAction<LocalStorageSettingsKeyValue>) {
      const { payload } = action;
      const keys = Object.keys(payload) as (keyof SettingsStore)[];
      keys.forEach((key) => {
        const value = payload[key];
        // update state
        state[key] = value;

        // update localStorage
        setLocalStorage(key, value);
      })
    }
  }
});

export const { setLocalStorageSettings } = settingsSlice.actions;
export * from './selectors';
export default settingsSlice.reducer;
