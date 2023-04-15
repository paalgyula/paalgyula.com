import { FC, PropsWithChildren, createContext } from 'react';
import { IAdminModule } from '../AppRouter';

export const moduleContext = createContext<IAdminModule[] | null>(null);

export const ModuleProvider: FC<
  PropsWithChildren<{ modules: IAdminModule[] }>
> = ({ modules, children }) => (
  <moduleContext.Provider value={modules}>{children}</moduleContext.Provider>
);
