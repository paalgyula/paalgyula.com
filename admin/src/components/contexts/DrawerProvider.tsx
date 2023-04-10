import { FC, PropsWithChildren, ReactNode, createContext, useContext, useState } from 'react';

type DrawerProps = {
  toggleOpen: () => void;
  open: boolean;
  breadcrumb?: ReactNode;
  setBreadcrumb: (node?: ReactNode) => void;
  setDocumentTitle: (string?: string) => void;
  documentTitle?: string;
};

const DrawerContext = createContext<DrawerProps | null>(null);

const DrawerProvider: FC<PropsWithChildren> = ({ children }) => {
  const [breadcrumb, setBreadcrumb] = useState<ReactNode>();
  const [open, setOpen] = useState(true);
  const [documentTitle, setDocumentTitle] = useState<string>();

  // sets the breadcrumb and removes document title from
  const setBreadcrumbInternal = (node?: ReactNode) => {
    setBreadcrumb(node);
    setDocumentTitle(undefined);
  };

  return (
    <DrawerContext.Provider
      value={{
        toggleOpen: () => setOpen((open) => !open),
        setBreadcrumb: setBreadcrumbInternal,
        setDocumentTitle,
        open,
        breadcrumb,
        documentTitle
      }}>
      {children}
    </DrawerContext.Provider>
  );
};

export const useDrawer = (): DrawerProps => {
  const ctx = useContext(DrawerContext);
  if (!ctx) {
    throw new Error('useBreadcrumb must be wrapped with DrawerProvider');
  }

  return ctx;
};

export default DrawerProvider;
