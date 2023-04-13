import { useContext } from 'react';
import { ModuleProvider, moduleContext } from '../providers/ModuleProvider';
import { IAdminModule } from '../AppRouter';

export const useModules = (): IAdminModule[] => {
  const ctx = useContext(moduleContext);

  if (!ctx) {
    throw new Error('useModules must be wrapped with ModuleProvider');
  }

  return ctx;
};
