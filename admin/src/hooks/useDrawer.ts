import { useContext } from 'react';
import { appContext } from '../providers/AppStateProvider';

type DrawerProps = {
  toggleDrawer: () => void;
  isOpen: boolean;
};

export const useDrawer = (): DrawerProps => {
  const ctx = useContext(appContext);
  if (!ctx) {
    throw new Error('useBreadcrumb must be wrapped with AppStateProvider');
  }

  return {
    toggleDrawer: ctx.toggleDrawer,
    isOpen: ctx.drawerOpen
  };
};
