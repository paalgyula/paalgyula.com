import React, { FC, PropsWithChildren, createContext, useContext } from 'react';
import firebaseApp from './firebaseApp';
import { FirebaseApp } from 'firebase/app';

/**
 * Firebase context object
 */
type FirebaseContextHolder = {
  firebaseApp: FirebaseApp;
};

const FirebaseContext = createContext<FirebaseContextHolder | null>(null);

const value: FirebaseContextHolder = {
  firebaseApp: firebaseApp
};

const FirebaseProvider: FC<PropsWithChildren> = ({ children }) => {
  return <FirebaseContext.Provider value={value}>{children}</FirebaseContext.Provider>;
};

export default FirebaseProvider;

export const useFirebase = (): FirebaseContextHolder => {
  const context = useContext(FirebaseContext);

  if (!context) {
    throw new Error('useFirebase must be wrapped with FirebaseContext');
  }

  return context;
};
