import { Component, ReactNode } from 'react';
import FirebaseProvider from '../providers/FirebaseProvider';

export default class FirebaseErrorBoundary extends Component<
  { children?: ReactNode },
  { eventId: string; hasError: boolean; error?: any }
> {
  constructor(props: Readonly<unknown>) {
    super(props);
    this.state = { eventId: '', hasError: false };
  }

  static getDerivedStateFromError(error: any) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error };
  }

  componentDidCatch(error: any, errorInfo: any) {
    this.setState({ ...this.state, error });
    console.warn(errorInfo);
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return <FirebaseProvider>{children}</FirebaseProvider>;
    }

    return children;
  }
}
