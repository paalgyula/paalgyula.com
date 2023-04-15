import { FC, ReactNode } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DrawerLayout from './components/DrawerLayout';
import FullScreenLoader from './components/FullScreenLoader';
import LoginScreen from './components/auth/LoginScreen';
import { useFirebase } from './hooks/useFirebase';
import CvModule from './modules/cv/CvModule';
import ProfileModule from './modules/profile/ProfileModule';
import TutorialModule from './modules/tutorial/TutorialModule';
import { ModuleProvider } from './providers/ModuleProvider';

export interface IAdminModule {
  Links: FC;
  Routes: ReactNode | null | ReactNode[];
}

const modules: IAdminModule[] = [TutorialModule, CvModule, ProfileModule];

const AppRouter = () => {
  const { authenticated } = useFirebase();

  if (authenticated === undefined) {
    return <FullScreenLoader />;
  }

  if (!authenticated) {
    return <LoginScreen />;
  }

  return (
    <BrowserRouter basename="/admin">
      <ModuleProvider modules={modules}>
        <Routes>
          <Route path="" Component={DrawerLayout}>
            {modules.map((m) => m.Routes)}
          </Route>
          <Route path="*">404 - Not found</Route>
        </Routes>
      </ModuleProvider>
    </BrowserRouter>
  );
};

export default AppRouter;
