export const getAuthToken = () => localStorage.getItem('authToken');

export const isLoggedIn = () => {
  const token = getAuthToken();

  return !!token;
};

export const setAuthToken = (token) => {
  if (token) {
    localStorage.setItem('authToken', token);
  }
};

export const clearToken = () => {
  localStorage.removeItem('authToken');
};
