import { ReactNode, useContext } from 'react';
import { IBreadcrumb, appContext } from '../providers/AppStateProvider';

type BreadcrumbProps = {
  breadcrumb?: IBreadcrumb[];
  setBreadcrumb: (breadcrumbs?: IBreadcrumb[]) => void;
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
