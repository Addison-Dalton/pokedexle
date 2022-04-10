export const setLocalStorage = (key: keyof LocalStorageOptions, value: LocalStorageOptions[typeof key]) => {
    localStorage.setItem(key, JSON.stringify(value));
};

export const getLocalStorage = (key: keyof LocalStorageOptions) => {
  const localStorageValue = localStorage.getItem(key);
  if (!localStorageValue) return undefined;
  return JSON.parse(localStorageValue) as LocalStorageOptions[typeof key];
};

export const resetLocaStorage = () => {
  localStorage.clear();
}
