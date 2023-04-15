import { createContext, useContext } from 'react';

const notificationContext = createContext(null);

export const useNotifications = () => {
  const ctx = useContext(notificationContext);

  return ctx;
};
