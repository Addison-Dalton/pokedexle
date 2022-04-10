import { createSelector } from '@reduxjs/toolkit';
import { PokedexleStore } from '../../rootReducer';

const getSettings = (state: PokedexleStore) => state.settings;

export const getAllSettings = createSelector(
  [getSettings],
  (settings) => settings
);

export const getSetting = createSelector(
  [
    getSettings,
    (_, settingKey: keyof SettingsStore) => settingKey
  ],
  (settings, settingKey) => {
    return settings[settingKey];
  }
);
