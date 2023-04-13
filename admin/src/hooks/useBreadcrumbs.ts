import { ReactNode, useContext } from 'react';
import { appContext } from '../providers/AppStateProvider';

type BreadcrumbProps = {
  breadcrumb?: ReactNode;
  setBreadcrumb: (node?: ReactNode) => void;
  setDocumentTitle: (string?: string) => void;
  documentTitle?: string;
};

export const useBreadcrumb = (): BreadcrumbProps => {
  const ctx = useContext(appContext);
  if (!ctx) {
    throw new Error('useBreadcrumb must be wrapped with AppStateProvider');
  }

  return ctx as BreadcrumbProps;
};
