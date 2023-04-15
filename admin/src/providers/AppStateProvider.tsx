import { FC, PropsWithChildren, createContext, useState } from 'react';

/**
 * Breadcrumb interface
 */
export interface IBreadcrumb {
  title: string;
  link?: string;
}

type AppState = {
  toggleDrawer: () => void;
  drawerOpen: boolean;

  /**
   * Breadcrumb area
   */
  breadcrumb?: IBreadcrumb[];
  setBreadcrumb: (node?: IBreadcrumb[]) => void;
  setDocumentTitle: (string?: string) => void;
  documentTitle?: string;
};

export const appContext = createContext<AppState | null>(null);

const AppStateProvider: FC<PropsWithChildren> = ({ children }) => {
  const [breadcrumb, setBreadcrumb] = useState<IBreadcrumb[]>();
  const [open, setOpen] = useState(true);
  const [documentTitle, setDocumentTitle] = useState<string>();

  // sets the breadcrumb and removes document title from
  const setBreadcrumbInternal = (node?: IBreadcrumb[]) => {
    setBreadcrumb(node);
    setDocumentTitle(undefined);
  };

  return (
    <appContext.Provider
      value={{
        toggleDrawer: () => setOpen((open) => !open),
        setBreadcrumb: setBreadcrumbInternal,
        setDocumentTitle,
        drawerOpen: open,
        breadcrumb,
        documentTitle
      }}>
      {children}
    </appContext.Provider>
  );
};

export default AppStateProvider;
