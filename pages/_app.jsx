import '../styles/globals.css';

import { appWithTranslation } from 'next-i18next';
import '../src/i18n';

export const MyApp = ({ Component, pageProps }) => <Component {...pageProps} />;

export default appWithTranslation(MyApp);
// export default MyApp;
