import { initializeApp } from 'firebase/app';
import { getFunctions } from 'firebase/functions';

const app = initializeApp({
    projectId: '### CLOUD FUNCTIONS PROJECT ID ###',
    apiKey: '### FIREBASE API KEY ###',
    authDomain: '### FIREBASE AUTH DOMAIN ###',
  });

export default app