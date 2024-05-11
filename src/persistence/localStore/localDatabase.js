export const StorageKey = {
  User: 'user-details',
};
export const saveUserDetails = (details) => {
  localStorage.setItem(StorageKey.User, details.toString());
};

export const getUserDetails = () => {
  return localStorage.getItem(StorageKey.User);
};
