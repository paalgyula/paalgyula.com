import {
  FC,
  PropsWithChildren,
  ReactNode,
  createContext,
  useState
} from 'react';

type AppState = {
  toggleDrawer: () => void;
  drawerOpen: boolean;

  /**
   * Breadcrumb area
   */
  breadcrumb?: ReactNode;
  setBreadcrumb: (node?: ReactNode) => void;
  setDocumentTitle: (string?: string) => void;
  documentTitle?: string;
};

export const appContext = createContext<AppState | null>(null);

const AppStateProvider: FC<PropsWithChildren> = ({ children }) => {
  const [breadcrumb, setBreadcrumb] = useState<ReactNode>();
  const [open, setOpen] = useState(true);
  const [documentTitle, setDocumentTitle] = useState<string>();

  // sets the breadcrumb and removes document title from
  const setBreadcrumbInternal = (node?: ReactNode) => {
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
