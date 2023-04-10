import { useState } from 'react';

interface LoaderProps<T> {
  isLoading: boolean;
  load: (prom: Promise<T>) => Promise<T>;
  data: T | null;
}

export function useLoader<T>(): LoaderProps<T> {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<T | null>(null);

  const load = (prom: Promise<T>) =>
    prom
      .then((data) => {
        setData(data);
        return data;
      })
      .then((data) => {
        setLoading(false);
        return data;
      });

  return {
    data,
    isLoading,
    load
  };
}
