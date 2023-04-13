import { FirebaseApp } from 'firebase/app';
import {
  GoogleAuthProvider,
  Unsubscribe,
  User,
  getAuth,
  signInWithPopup
} from 'firebase/auth';
import {
  FC,
  PropsWithChildren,
  createContext,
  useEffect,
  useState
} from 'react';
import firebaseApp from '../firebaseApp';

/**
 * Firebase context object
 */
export type FirebaseContextHolder = {
  firebaseApp: FirebaseApp;
  user: User | null;
  authenticated: boolean | undefined;
  loginWithGoogle: () => Promise<void>;
  logout: () => Promise<void>;
};

export const firebaseContext = createContext<FirebaseContextHolder | null>(
  null
);

let unsubscribe: Unsubscribe;

const FirebaseProvider: FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [authenticated, setAuthenticated] = useState<boolean | undefined>();

  const auth = getAuth(firebaseApp);

  useEffect(() => {
    const auth = getAuth(firebaseApp);

    // Set the current user if it's exists already
    setUser(auth.currentUser);

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
    <firebaseContext.Provider
      value={{ firebaseApp, user, authenticated, loginWithGoogle, logout }}>
      {children}
    </firebaseContext.Provider>
  );
};

export default FirebaseProvider;
