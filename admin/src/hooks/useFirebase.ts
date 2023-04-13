import { useContext } from 'react';
import {
  FirebaseContextHolder,
  firebaseContext
} from '../providers/FirebaseProvider';

export const useFirebase = (): FirebaseContextHolder => {
  const context = useContext(firebaseContext);

  if (!context) {
    throw new Error('useFirebase must be wrapped with FirebaseProvider');
  }

  return context!;
};
