import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getLocalStorage, setLocalStorage } from '../local-storage';
import { pokemonGenerations } from '../pokedex/utils';

type LocalStorageSettingsKeyValue = {
  [key in keyof LocalStorageSettings]: LocalStorageSettings[key];
};

const defaultState: Partial<SettingsStore> = {
  generations: pokemonGenerations
};

const initialState: SettingsStore = {
  hardMode: getLocalStorage('hardMode'),
  generations: getLocalStorage('generations') || defaultState.generations
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    // used to set settings that are initialized by local storage
    setLocalStorageSettings(
      state,
      action: PayloadAction<LocalStorageSettingsKeyValue>
    ) {
      const { payload } = action;
      const keys = Object.keys(payload) as (keyof LocalStorageSettings)[];
      keys.forEach((key) => {
        const value = payload[key];
        // update state
        // @ts-ignore - odd TS issue where it is trying to add a
        // & between the types over using an |.
        state[key] = value;

        // update localStorage
        setLocalStorage(key, value);
      });
    }
  }
});

export const { setLocalStorageSettings } = settingsSlice.actions;
export * from './selectors';
export default settingsSlice.reducer;
