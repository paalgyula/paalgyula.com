import React, {
  FC,
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState
} from 'react';
import firebaseApp from './firebaseApp';
import { FirebaseApp } from 'firebase/app';
import { Unsubscribe, User, getAuth } from 'firebase/auth';

/**
 * Firebase context object
 */
type FirebaseContextHolder = {
  firebaseApp: FirebaseApp;
  user: User | null;
  authenticated: boolean | undefined;
};

const FirebaseContext = createContext<FirebaseContextHolder | null>(null);

var unsubscribe: Unsubscribe;

const FirebaseProvider: FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [authenticated, setAuthenticated] = useState<boolean | undefined>();

  useEffect(() => {
    const auth = getAuth(firebaseApp);

    // Store unsubscribe function
    unsubscribe = auth.onAuthStateChanged(setUser);

    // Unsubscribe when provider is out of scope
    return () => {
      if (unsubscribe) unsubscribe();
    };
  }, []);

  // Update authenticated flag
  useEffect(() => {
    setAuthenticated(Boolean(user));
    console.log(user);
  }, [user]);

  return (
    <FirebaseContext.Provider value={{ firebaseApp, user, authenticated }}>
      {children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseProvider;

export const useFirebase = (): FirebaseContextHolder => {
  const context = useContext(FirebaseContext);

  if (!context) {
    throw new Error('useFirebase must be wrapped with FirebaseContext');
  }

  return context;
};
