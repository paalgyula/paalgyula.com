import React, {
  FC,
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState
} from 'react';
import firebaseApp from '../firebaseApp';
import { FirebaseApp } from 'firebase/app';
import { GoogleAuthProvider, Unsubscribe, User, getAuth, signInWithPopup } from 'firebase/auth';

/**
 * Firebase context object
 */
type FirebaseContextHolder = {
  firebaseApp: FirebaseApp;
  user: User | null;
  authenticated: boolean | undefined;
  loginWithGoogle: () => Promise<void>;
  logout: () => Promise<void>;
};

const FirebaseContext = createContext<FirebaseContextHolder | null>(null);

var unsubscribe: Unsubscribe;

const FirebaseProvider: FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [authenticated, setAuthenticated] = useState<boolean | undefined>();

  const auth = getAuth(firebaseApp);

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

  /**
   * Handles google login button click and initiates authentication with firebase's google provider.
   */
  const loginWithGoogle = async () => {
    const googleProvider = new GoogleAuthProvider();
    await signInWithPopup(auth, googleProvider);
  };

  const logout = () => auth.signOut();

  return (
    <FirebaseContext.Provider value={{ firebaseApp, user, authenticated, loginWithGoogle, logout }}>
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
